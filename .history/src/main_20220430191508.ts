import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局样式
// import './styles/index.scss'

// ElementPlus
import elementPlus from './plugins/element-plus'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(elementPlus)

app.mount('#app')
