import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: '/',
        redirect: '/resume'
    },
    {
        path: '/home',
        component: () => import("~/views/Main.vue"),
        children: [
            {
                path: '/resume',
                component: () => import("~/views/Resume.vue")
            },
            {
                path: '/resumeList',
                component: () => import("~/views/resumeList.vue")
            },
            {
                path: '/xss',
                component: () => import("~/views/XSS.vue")
            },
            {
                path: '/about',
                component: () => import("~/views/About.vue")
            }
        ]
    },

]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
