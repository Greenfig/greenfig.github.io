const del = require('del')

del([
  'dist'
], { cwd: process.cwd() })