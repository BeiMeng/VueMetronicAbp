export default [  
    {
        path: '/app/zero/users',
        name: 'users',
        component: resolve => {
            require.ensure([],
                () => {
                    resolve(require('@/view/app/zero/users.vue'))
                })
        },
    },
    {
        path: '/app/zero/roles',
        name: 'roles',
        component: resolve => {
            require.ensure([],
                () => {
                    resolve(require('@/view/app/zero/roles.vue'))
                })
        },
    },
    {
        path: '/app/zero/menusTree',
        name: 'menusTree',
        component: resolve => {
            require.ensure([],
                () => {
                    resolve(require('@/view/app/zero/menusTree.vue'))
                })
        },
    }
]