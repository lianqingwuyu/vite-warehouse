import type { App } from "vue" ;
import { createVNode , render } from "vue";
import Loading from "./index.vue" ;

export default {
    install(app: App) {
        const Vnode = createVNode(Loading)
        render(Vnode,document.body)
        app.config.globalProperties.$loading = Vnode.component?.exposed
    }
}