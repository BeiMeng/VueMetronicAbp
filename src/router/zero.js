export default [
    {
        path: '/zero',
        name: 'dashboard',
        component: resolve => {
            require.ensure([],
                () => {
                    resolve(require('@/view/app/zero/dashboard.vue'))
                })
        },
    },    
    {
        path: '/zero/users',
        name: 'users',
        component: resolve => {
            require.ensure([],
                () => {
                    resolve(require('@/view/app/zero/users.vue'))
                })
        },
    },
    {
        path: '/zero/roles',
        name: 'roles',
        component: resolve => {
            require.ensure([],
                () => {
                    resolve(require('@/view/app/zero/roles.vue'))
                })
        },
    },
    {
        path: '/zero/menusTree',
        name: 'menusTree',
        component: resolve => {
            require.ensure([],
                () => {
                    resolve(require('@/view/app/zero/menusTree.vue'))
                })
        },
    }
]