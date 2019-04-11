export default [
  {
    path: "/demo/demoOne",
    name: "demoOne",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/demoOne.vue"));
      });
    }
  },
  {
    path: "/demo/demoTwo",
    name: "demoTwo",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/demoTwo.vue"));
      });
    }
  },
  {
    path: "/demo/demoThree/:id",
    name: "demoThree",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/demoThree.vue"));
      });
    }
  },
  {
    path: "/demo/demoTask",
    name: "demoTask",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/demoTask.vue"));
      });
    }
  },
  {
    path: "/demo/crudDemo",
    name: "crudDemo",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/crudDemo.vue"));
      });
    }
  },
  {
    path: "/demo/pagedCrudDemo",
    name: "pagedCrudDemo",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/pagedCrudDemo.vue"));
      });
    }
  }
];
