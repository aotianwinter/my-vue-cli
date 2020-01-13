// 根据路由信息生成侧边栏
function sideMenuGenerate (routeList) {
  try {
    let sideMenuList = []
    // 循环生成一级菜单
    for (let routeItem of routeList) {
      if (routeItem.meta && routeItem.meta.title) { // meta下存在title 则填充为一级菜单
        let menu = {}
        if (routeItem.meta.isRoot || !routeItem.children) { // 开启根路由或不存在子路由时
          menu.isRoot = true
          menu.hidden = routeItem.meta.hidden // 是否显示
        } else {
          if (routeItem.children) { // 存在children 则存在二级菜单
            menu.group = []
            for (let item of routeItem.children) {
              let menuItem = {}
              if (item.meta.subMenuTitle) { // 存在折叠子菜单
                // console.log(item)
              }
              if (!item.meta.groupTitle && !item.meta.subMenuTitle) { // 普通菜单
                menuItem.index = item.path // 设置index
                menuItem.title = item.meta.title // 设置title
                menuItem.hidden = item.meta.hidden // 是否显示
              }
              menu.group.push(menuItem)
            }
          }
          // console.log(routeItem)
        }
        menu.index = routeItem.path // 设置一级菜单index
        menu.title = routeItem.meta.title // 设置一级菜单标题
        menu.iconClass = routeItem.meta.iconClass // 设置一级菜单图标类
        sideMenuList.push(menu)
      }
    }
    console.log(sideMenuList)
    return sideMenuList
  } catch (e) {
    console.error('侧边栏生成失败!请检查全局路由信息!', e)
  }
}

export { sideMenuGenerate }
