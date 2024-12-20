// 创建一个路由器, 并暴露出去

// 1. 引入createRouter
import {createRouter, createWebHistory} from 'vue-router'

// 2. 创建路由器
const routes = [
    {
        path:'/home',
        name:"Home",
        component: () => import('@/pages/Home.vue')
    },
    {
        path:'/news',
        name:"xinwen",
        component: () => import('@/pages/News.vue'),
        children:[
            {
                path:'detail',  // params方式: detail/:id/:title?/:content; 如果是对象传参方式 无法传对象和数组类型的数据, 并且标签上:to只能使用name不能使用path; 加?配置参数的必要性
                component: () => import('@/pages/Detail.vue'),
                // 第一种写法: 将路由收到的所有params参数作为props传给参数; 在子组件使用defineProps(["id", "title"])
                // props: true

                // 第二种写法: 函数写法 可以自己决定将什么作为props给路由组件
                props(route){
                    console.log(route)
                    return route.query
                }

                // 第三种写法: 对象写法
                /** props:{
                    a: 100,
                    b: 200,
                    c: 300
                } **/
            }
        ]
    },
    {
        path:'/about',
        name:'About',
        component: () =>  import('@/pages/About.vue')
    },
    // 路由重定向
    {
        path: '/',
        redirect: '/home'
    },
    {
        path:'/other',
        name: 'Other',
        component: () => import('@/pages/Other.vue')
    }
]
/**
 * history模式
 * vue2: mode:'history'
 * vue3: history:createWebHistory()
 * react: <BrowserRouter>
 * history模式, 不带#, 但是需要服务端处理路径问题, 否则刷新会404(nginx.conf增加 try_files $uri $uri/ /inex.html); hash模式带#且在SEO优化方面相对较差,. 但是兼容性好不需要后端额外处理
 */
const router = createRouter({
    history: createWebHistory(),  // 路由器的工作模式
    routes
})

export default router

