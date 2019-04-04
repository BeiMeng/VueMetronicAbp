export default [
  {
    path: "/",
    name: "helloWorld",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/HelloWorld.vue"));
      });
    }
  },
  {
    path: "/demo",
    name: "demo",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/demo.vue"));
      });
    }
  },
  {
    path: "/demo2",
    name: "demo2",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/demo2.vue"));
      });
    }
  },
  {
    path: "/demo3/:id",
    name: "demo3",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/demo3.vue"));
      });
    }
  },
  {
    path: "/demoTask",
    name: "demoTask",
    component: resolve => {
      require.ensure([], () => {
        resolve(require("@/view/app/demo/demoTask.vue"));
      });
    }
  }
];
