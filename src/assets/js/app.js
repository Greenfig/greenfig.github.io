import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/styles.scss'


const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')