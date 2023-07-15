import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFilm, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
library.add(faFilm, faCircleInfo)

//pinia
import { createPinia } from 'pinia'
const pina = createPinia()

createApp(App)
.use(router)
.use(pina)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
