// 引入createApp函数用户创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'
// 引入路由器
import router from './router'

createApp(App).use(router).mount('#app')