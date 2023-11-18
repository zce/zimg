import { access } from 'fs/promises'
import glob from 'fast-glob'
import ora from 'ora'
import sharp from 'sharp'

export interface ZImgOptions {
  /**
   * Current working directory, default to `process.cwd()`
   */
  cwd?: string
  /**
   * Glob pattern to match files, default to `**\/*.{jpg,jpeg,png,gif}`
   */
  pattern?: string
  /**
   * Filename of generated images, default to `[name].[size].webp`
   */
  filename?: string
  /**
   * Sizes to generate, default to `[640, 720, 1280, 1600]`
   */
  sizes?: number[]
  /**
   * Quality of generated images, default to `75`
   */
  quality?: number
  /**
   * Skip optimized images, default to `true`
   */
  skipOptimized?: boolean
}

export const zimg = async (options: ZImgOptions = {}) => {
  const spinner = ora('optimizing images').start()

  const cwd = options.cwd ?? process.cwd()
  const pattern = options.pattern ?? '**/*.{jpg,jpeg,png,gif}'
  const filename = options.filename ?? '[name].[size].webp'
  const sizes = options.sizes ?? [640, 720, 1280, 1600]
  const quality = options.quality ?? 75
  const skipOptimized = options.skipOptimized ?? true

  const exists = async (path: string) => {
    try {
      await access(path)
      return true
    } catch {
      return false
    }
  }

  const getFilename = (file: string, size: number) => {
    const name = file.replace(/\.[a-z]+$/i, '')
    return filename.replace(/\[name\]/g, name).replace(/\[size\]/g, size.toString())
  }

  const files = await glob(pattern, { cwd, absolute: true })

  const tasks = files.map(async file => {
    const image = sharp(file)
    const { width, height } = await image.metadata()
    if (width == null || height == null) return
    const aspectRatio = width / height
    await Promise.all(
      sizes.map(async size => {
        const target = getFilename(file, size)
        if (skipOptimized && (await exists(target))) return
        return image
          .resize({
            width: size,
            height: Math.round(size / aspectRatio),
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality })
          .toFile(target)
      })
    )
  })
  try {
    await Promise.all(tasks)
    spinner.succeed(`optimized ${files.length} images`)
  } catch (err: any) {
    spinner.fail(`failed to optimize images: ${err.message}`)
    console.log(err)
  }
}
