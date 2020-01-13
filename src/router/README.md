# 路由说明
> 该项目中路由自动生成侧边栏和面包屑。

说明：
- title必须设置 才会生成侧边栏，且对应菜单名称
- iconClass为图标类名（只对根菜单生效）
- isRoot为true时 会生成根菜单且无子菜单
- hidden为true时 不会显示在侧边栏（不设置默认显示）

Tip:
- 当前路由生成侧边栏及面包屑仅支持两层（即外层路由嵌套内层children）

`栗子：`
```js
export const asyncRouterMap = [
  {
    path: '/',
    redirect: '/welcome'
  },
  // 欢迎页
  {
    path: '/welcome',
    redirect: '/welcome/',
    meta: {
      title: '欢迎页',
      iconClass: 'el-icon-s-opportunity',
      isRoot: true  // 设置isRoot为true 侧边栏会显示为根菜单
      hidden: false // 设置hidden为true 侧边栏不会显示
    },
    component: () => import('@views/Home.vue'),
    children: [
      {
        path: '/welcome/',
        name: 'welcome',
        component: () => import('@views/Welcome/Welcome.vue')
      }
    ]
  },
  // 测试页面
  {
    path: '/test',
    redirect: '/test/a',
    meta: {
      title: '一级菜单',
      iconClass: 'el-icon-menu'
    },
    component: () => import('@views/Home.vue'),
    children: [
      {
        path: '/test/a',
        name: 'a',
        meta: { title: '测试页A' },
        component: () => import('@views/Welcome/Welcome.vue')
      },
      {
        path: '/test/b',
        name: 'b',
        meta: { title: '测试页B', hidden: true }, // 隐藏该子菜单
        component: () => import('@views/Welcome/Welcome.vue')
      }
    ]
  },
  // 匹配不到，展示404
  {
    path: '/*',
    component: () => import('@comp/Exception/Exception')
  }
]
```