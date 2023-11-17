import glob from 'fast-glob'
import ora from 'ora'
import sharp from 'sharp'

type Options = {
  /**
   * Current working directory, default to `process.cwd()`
   */
  cwd?: string
  /**
   * Glob pattern to match files, default to `**\/*.{jpg,jpeg,png,gif,webp}`
   */
  pattern?: string
  /**
   * Sizes to generate, default to `[640, 720, 1280, 1600]`
   */
  sizes?: number[]
  /**
   * Quality of generated images, default to `75`
   */
  quality?: number
}

export const image = async (options: Options) => {
  const spinner = ora('optimizing images').start()

  const pattern = options.pattern ?? '**/*.{jpg,jpeg,png,gif,webp}'
  const cwd = options.cwd ?? process.cwd()
  const sizes = options.sizes ?? [640, 720, 1280, 1600]
  const quality = options.quality ?? 75

  const files = await glob(pattern, { cwd, absolute: true })

  const tasks = files.map(async file => {
    const image = sharp(file)
    const { width, height } = await image.metadata()
    if (width == null || height == null) return
    const aspectRatio = width / height
    await Promise.all(
      sizes.map(size =>
        image
          .resize({
            width: size,
            height: Math.round(size / aspectRatio),
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality })
          .toFile(file.replace(/\.[a-z]+$/i, `.${size}.webp`))
      )
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
