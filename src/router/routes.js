const routes = [
    {
        path: '/',
        title: 'About',
        hidden: false,
        component: () => import(/* webpackChunkName: "baseLayout" */ 'layouts/base'),
        children: [
            {
                path: '',
                name: 'About',
                component: () => import(/* webpackChunkName: "home" */ 'pages/home'),
                children: [
                    { path: '/git', title: 'Repos' },
                    { path: '/projects', title: 'Projects' }
                ]
            }
        ]
    },
    {
        path: '/resume',
        title: 'Resume',
        hidden: false,
        component: () => import(/* webpackChunkName: "baseLayout" */ 'layouts/base'),
        children: [
            { path: '', name: 'Resume', component: () => import(/* webpackChunkName: "resume" */ 'pages/resume') }
        ]
    },
    {
        path: '/contact',
        title: 'Contact',
        hidden: false,
        component: () => import(/* webpackChunkName: "baseLayout" */ 'layouts/base'),
        children: [
            { path: '', name: 'Contact', component: () => import(/* webpackChunkName: "contact" */ 'pages/contact') }
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
