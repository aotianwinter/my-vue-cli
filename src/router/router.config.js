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
      isRoot: true
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
        meta: { title: '测试页B' },
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
