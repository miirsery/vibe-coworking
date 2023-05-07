import { createApp } from 'vue'
import BaseIcon from '@/components/atoms/Base/BaseIcon/BaseIcon.vue'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'

import { vMaska } from 'maska'

import '@/styles/index.scss'

const app = createApp(App)

app.component('BaseIcon', BaseIcon)

app.directive('maska', vMaska)

app.use(router)

app.mount('#app')
