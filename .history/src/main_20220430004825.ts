import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

// 全局样式
import './styles/index.scss'

// ElementPlus
import { ElementPlus } from 'element-plus';

const app = createApp(App)

app.use(router)
app.use(store, key)
app.mount('#app')
