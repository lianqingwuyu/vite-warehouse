import {defineConfig} from 'vite'
// import {filterFields, URL} from 'node:url'
import vue from '@vitejs/plugin-vue'

// 原子和属性css写法
import UnoCSS from 'unocss/vite'
// 自动导入路由 需要可以用
import routerPagePlugin from './vite-plugin/vite-plugin-routerPage'
// Vite 的自动导入函数
import autoImportPlugin from './vite-plugin/vite-plugin-auto-import'
// Vite 的按需组件自动导入
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver, AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import Layouts from 'vite-plugin-vue-layouts';
//通过监听文件修改，自动重启 vite 服务
import ViteRestart from 'vite-plugin-restart'
//jsx 写法
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config
export default defineConfig({
    plugins: [
        vue(),
        Layouts(),
        vueJsx(),
        routerPagePlugin(),
        UnoCSS(),
        autoImportPlugin(),
        Components({
            dts: 'vite-plugin/components.ts',
            dirs: ['src/components', 'src/layout'],
            resolvers: [ElementPlusResolver(), AntDesignVueResolver({importStyle: false, resolveIcons: true})],
        }),
        ViteRestart({
            restart: [
                'vite.config.js',
            ]
        })
    ],
    resolve: {
        // alias: {
        //     '@':filterFields(new URL('./src',import.meta.url))
        // }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/bem.scss";`
            }
        }
    }
})
