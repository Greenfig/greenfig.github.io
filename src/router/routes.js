const routes = [
    {
        path: '',
        title: 'Main',
        hidden: false,
        component: () => import(/* webpackChunkName: "baseLayout" */ 'layouts/base'),
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: "home" */ 'pages/home'),
                children: [
                    { path: '/', hash: '', title: 'Home' },
                    { path: '/', hash: '#skills', title: 'Skills' },
                    { path: '/', hash: '#projects', title: 'Projects' },
                    { path: '/', hash: '#repos', title: 'Repos' },
                    { path: '', hash: '#contact', title: 'Contact' }
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
