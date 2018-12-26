export default [{ 
    path: '/sys1',
    name: 'sys1',
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('@/view/app/sys/sys1.vue'))
            })
    },
},{ 
    path: '/sys2',
    name: 'sys2',
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('@/view/app/sys/sys2.vue'))
            })
    },
},{ 
    path: '/menusManage',
    name: 'menusManage',
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('@/view/app/sys/menusManage.vue'))
            })
    },
}]