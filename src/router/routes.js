const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "baseLayout" */ 'layouts/base'),
        children: [{ path: '', component: () => import(/* webpackChunkName: "home" */ 'pages/home') }]
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () => import('pages/404')
    })
}

export default routes
