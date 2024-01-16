import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import {App} from 'vue'

// @ts-ignore
const routes: RouteRecordRaw[] = [
    {
        path:'/',
        component:()=>import('../views/ceshi.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export const initRouter = (app: App<Element>) => {
    app.use(router)
}

