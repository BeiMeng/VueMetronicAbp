import Mock from "mockjs";

//模拟延时
// Mock.setup({
//   timeout: '350-600'
// })

function getMenus() {
  let menus = [
    {
      id: 1,
      displayName: "首页",
      name: "helloWorld", //路由定义的name,缓存路由页面查找使用
      icon: "icon-diamond",
      path: "/", //对应路由路径
      showTab: true, //是否初始化显示到tab页标签上
      default: false, //是否是初始化默认显示页
      notClose: true, //是否在tab页标签上显示可关闭按钮
      isHome: true //是否首页,不进入header页签
    },
    {
      id: 2,
      displayName: "商品管理",
      name: "aaa2",
      icon: "icon-diamond",
      path: null,
      default: false,
      children: [
        {
          id: 21,
          displayName: "订单管理",
          name: "demo3",
          icon: "icon-diamond",
          path: "/demo3/2",
          default: false //后端子菜单设置了默认项,同时将父菜单也设置为默认项
        },
        {
          id: 22,
          displayName: "地址管理",
          name: "aaa4",
          icon: "icon-diamond",
          path: "/auth/role",
          default: false
        }
      ]
    },
    {
      id: 3,
      displayName: "权限管理",
      name: "aaa5",
      icon: "icon-diamond",
      path: null,
      default: false,
      children: [
        {
          id: 31,
          displayName: "用户管理",
          name: "sys1",
          icon: "icon-diamond",
          path: "/sys1",
          default: false
        },
        {
          id: 32,
          displayName: "角色管理",
          name: "sys2",
          icon: "icon-diamond",
          path: "/sys2",
          default: false
        }
      ]
    },
    {
      id: 4,
      displayName: "测试管理",
      name: "aaa8",
      icon: "icon-diamond",
      path: null,
      default: true,
      group: true, //只有顶级菜单项才可以设置分组选项
      children: [
        {
          id: 41,
          displayName: "日志管理",
          name: "aaa9",
          icon: "icon-diamond",
          path: null,
          default: false,
          children: [
            {
              id: 411,
              displayName: "商品管理2",
              name: "aaa10",
              icon: "icon-diamond",
              path: null,
              default: false,
              children: [
                {
                  id: 4111,
                  displayName: "订单管理3",
                  name: "demo2",
                  icon: "icon-diamond",
                  path: "/demo2",
                  default: false
                },
                {
                  id: 4112,
                  displayName: "地址管理3",
                  name: "aaa12",
                  icon: "icon-diamond",
                  path: null,
                  path: "/",
                  default: false
                }
              ]
            },
            {
              id: 412,
              displayName: "权限管理2",
              name: "aaa13",
              icon: "icon-diamond",
              path: null,
              default: false,
              children: [
                {
                  id: 4121,
                  displayName: "用户管理2",
                  name: "aaa14",
                  icon: "icon-diamond",
                  path: "/auth/role",
                  default: false
                },
                {
                  id: 4122,
                  displayName: "角色管理2",
                  name: "aaa15",
                  icon: "icon-diamond",
                  path: "/auth/role",
                  default: false
                }
              ]
            }
          ]
        },
        {
          id: 42,
          displayName: "信息管理",
          name: "demo",
          icon: "icon-diamond",
          path: "/demo",
          default: false
        },
        {
          id: 43,
          displayName: "测试任务",
          name: "demoTask",
          icon: "icon-diamond",
          path: "/demoTask",
          default: false
        },
        {
          id: 44,
          displayName: "crud组件示例",
          name: "crudDemo",
          icon: "icon-diamond",
          path: "/crudDemo",
          default: false
        },
        {
          id: 45,
          displayName: "crud组件分页示例",
          name: "pagedCrudDemo",
          icon: "icon-diamond",
          path: "/pagedCrudDemo",
          default: false
        }
      ]
    },
    {
      id: 5,
      displayName: "系统配置",
      name: "aaa17",
      icon: "icon-diamond",
      path: null,
      default: false,
      group: true,
      children: [
        {
          id: 51,
          displayName: "商品管理1",
          name: "aaa18",
          icon: "icon-diamond",
          path: null,
          default: false,
          children: [
            {
              displayName: "订单管理1",
              name: "aaa19",
              icon: "icon-diamond",
              path: "/auth/user",
              default: false
            },
            {
              displayName: "地址管理1",
              name: "aaa20",
              icon: "icon-diamond",
              path: "/auth/role",
              default: false
            }
          ]
        },
        {
          id: 52,
          displayName: "菜单管理",
          name: "menusManage",
          icon: "icon-diamond",
          path: "/menusManage",
          default: false
        },
        {
          id: 53,
          displayName: "权限管理2",
          name: "aaa21",
          icon: "icon-diamond",
          path: null,
          default: false,
          children: [
            {
              id: 531,
              displayName: "用户管理2",
              name: "aaa22",
              icon: "icon-diamond",
              path: "/auth/user",
              default: false
            },
            {
              id: 532,
              displayName: "角色管理2",
              name: "aaa23",
              icon: "icon-diamond",
              path: "/auth/role",
              default: false
            }
          ]
        }
      ]
    }
  ];
  return { mock: menus };
}

Mock.mock(/\/auth\/menus/, "get", getMenus);

export default Mock;
