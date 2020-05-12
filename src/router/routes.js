const routes = [
    {
        path: '/',
        title: 'Main',
        hidden: false,
        component: () => import(/* webpackChunkName: "baseLayout" */ 'layouts/base'),
        children: [
            {
                path: '',
                name: 'Main',
                component: () => import(/* webpackChunkName: "home" */ 'pages/home'),
                children: [
                    { path: '/skills', title: 'Skills' },
                    { path: '/git', title: 'Repos' },
                    { path: '/projects', title: 'Projects' },
                    { path: '/contact', title: 'Contact' }
                ]
            }
        ]
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        tile: '404',
        name: '404',
        hidden: true,
        component: () => import('pages/404')
    })
}

export default routes
