const routes = [
    {
        path: '/',
        title: 'About',
        name: 'About',
        hidden: false,
        component: () => import(/* webpackChunkName: "baseLayout" */ 'layouts/base'),
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: "home" */ 'pages/home'),
                children: [
                    { path: '/git' },
                    { path: '/projects' }
                ]
            }
        ]
    },
    {
        path: 'resume',
        title: 'Resume',
        name: 'Resume',
        hidden: false,
        component: () => import(/* webpackChunkName: "baseLayout" */ 'layouts/base'),
        children: [
            { path: '', component: () => import(/* webpackChunkName: "resume" */ 'pages/resume') }
        ]
    },
    {
        path: 'contact',
        title: 'Contact',
        name: 'Contact',
        hidden: false,
        component: () => import(/* webpackChunkName: "baseLayout" */ 'layouts/base'),
        children: [
            { path: '', component: () => import(/* webpackChunkName: "contact" */ 'pages/contact') }
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
