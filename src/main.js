import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faFilm)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
