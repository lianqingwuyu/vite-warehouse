import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {initRouter} from "./router"
//解决因为它的自动导入导致的eslint报错
import 'vue-global-api'
// 全局样式
import 'uno.css'
import Loading from "./components/loading"

const app = createApp(App)
initRouter(app)
app.use(Loading)
app.mount('#app')
