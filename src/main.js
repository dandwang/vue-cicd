import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import api from './plugins/api'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.globalProperties.$axios = api

app.mount('#app')
