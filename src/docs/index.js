import { h } from 'vue'

// TODO:: 同步收集md文件， -> 后面修改为动态手动配置加载
const requireContext = require.context('.', true, /\.md$/)

const mdModules = {}
const routes = []
const pathCollection = []

requireContext.keys().forEach((key) => {
  const module = requireContext(key)
  const routePath = getPath(key)

  const pathArr = routePath.substring(1).split('/')
  const arr = pathArr.reduce((pre, curr, idx) => {
    const parent = pre[idx]
    const item = {
      title: curr,
      ptitle: parent.title
    }
    if(idx === pathArr.length - 1) {
      item.routeName = routePath
    }

    pre.push(item)

    return pre
  }, [{title: '$$root'}])

  
  pathCollection.push(...arr)

  mdModules[routePath] = module

  routes.push({
    path: routePath,
    name: routePath,
    component: module.default
  })
})

console.log(pathCollection)

function getPath(path) {
  return path.replace(/^\.(.*)\.md$/, (_, $1) => $1)
}

/** 生成 Nav 树结构 */
function buildNavnode(array) {
  const cacheMap = Object.create(null)
  cacheMap['$$root'] = {
    title: '$$root',
    children: []
  }

  for(const item of array) {
    const { title, ptitle } = item

    if(!cacheMap[ptitle]) {
      const node = {
        title: ptitle,
        children: []
      }
      cacheMap[ptitle] = node
    }

    if(!cacheMap[title]) {
      const cNode = {
        title,
        children: []
      }
      if (item.routeName) {
        cNode.routeName = item.routeName
      }
      cacheMap[title] = cNode
      cacheMap[ptitle].children.push(cNode)
    }
  }

  return cacheMap['$$root']
}

const treeNode = buildNavnode(pathCollection)
console.log(treeNode)
export {
  mdModules,
  routes,
  treeNode
}

