const path = require('path')

const dir = {
  prod: {
    assetsSubDirectory: 'static'
  },
  dev: {
    assetsSubDirectory: 'assets'
  }
}
const assetsSubDirectory = 'static'
const assetsPublicPath = '/dist/'

exports.assetsPath = function (_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? dir.prod.assetsSubDirectory
      : dir.dev.assetsSubDirectory

  console.log( path.posix.join(assetsSubDirectory, _path))
  return path.posix.join(assetsSubDirectory, _path)
}