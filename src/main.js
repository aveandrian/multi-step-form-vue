import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faCheck } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faCheck)

createApp(App).mount('#app')
