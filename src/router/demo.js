export default [
  // {
  //   path: "/app/demo/demoOne",
  //   name: "demoOne",
  //   component: resolve => {
  //     require.ensure([], () => {
  //       resolve(require("@/view/app/demo/demoOne.vue"));
  //     });
  //   }
  // },
  // {
  //   path: "/app/demo/demoTwo",
  //   name: "demoTwo",
  //   component: resolve => {
  //     require.ensure([], () => {
  //       resolve(require("@/view/app/demo/demoTwo.vue"));
  //     });
  //   }
  // },
  // {
  //   path: "/app/demo/demoThree/:id",
  //   name: "demoThree",
  //   component: resolve => {
  //     require.ensure([], () => {
  //       resolve(require("@/view/app/demo/demoThree.vue"));
  //     });
  //   }
  // },
  {
    path: "/app/demo/demoTask",
    name: "demoTasks",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/demoTask.vue"));
      });
    }
  },
  {
    path: "/app/demo/crudDemo",
    name: "crudDemo",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/crudDemo.vue"));
      });
    }
  },
  // {
  //   path: "/app/demo/pagedCrudDemo",
  //   name: "pagedCrudDemo",
  //   component: resolve => {
  //     require.ensure([], () => {
  //       resolve(require("@/view/app/demo/pagedCrudDemo.vue"));
  //     });
  //   }
  // }
];
