import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router/Index'
import store from './store';
// import 'ant-design-vue/es/style.css'

const app = createApp(App)
app.use(router)
app.use(Antd)
app.use(store)
app.mount('#app')