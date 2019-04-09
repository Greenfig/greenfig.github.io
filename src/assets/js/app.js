require('bootstrap')
require('bootstrap/dist/css/bootstrap.css')
require('../scss/styles.scss')

const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')