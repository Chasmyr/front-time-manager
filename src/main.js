import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import store from './store'
import router from './router'

crgit eateApp(App).use(router).use(store).mount('#app')
