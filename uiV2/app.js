const routes=[
    {path:'/home',component:home},
    {path:'/car',component:car},
    {path:'/cartype',component:cartype}
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
  })
  const app = Vue.createApp({})
  app.use(router)
  app.mount('#app')