// import "./bootstrap";
import '~/app.scss'
import * as bootstrap from 'bootstrap'
import App from './App.svelte'

window.bootstrap = bootstrap

const app = new App({
  target: document.getElementById('app'),
})
