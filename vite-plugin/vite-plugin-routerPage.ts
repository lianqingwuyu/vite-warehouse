import routerPages from 'vite-plugin-pages';

// 案例文件夹格式
// src/pages/users/[id].vue -> /users/:id (/users/one)
// src/pages/[user]/settings.vue -> /:user/settings (/one/settings)
// 可在页面追加
// <route>
// {
//   name: "name-override",
//   meta: {
//     requiresAuth: false
//   }
// }
// < /route>
export default () => {
  return routerPages({
    dirs: [
      { dir: 'src/views', baseRoute: '' },
    ],
    exclude: ['error/*.vue'],
    extensions: ['vue'],
  })
}
