---
title: 路由懶加載
descript: 路由懶加載
lastUpdated: true
---

## 路由懶加載
當打包應用時，JavaScript 會非常大，影響頁面加載。如果將不同路徑的組件分割成不同的代碼塊，然後當路由被訪問的時候才加載組件，就會這樣高效。

Vue Router 支持開箱即用的動態導入，這意味著你可以用動態導入而不是靜態導入：

``` JavaScript
// 將
// import UserDetails from './views/UserDetails'
// 替換成
const User = () => import('./views/User')

const router = createRouter({
  // ...
  routes: [{ path: '/users/:id', component: User }],
})
```

### 把偶像打成塊

#### 使用 webpack
所有的所有塊都需要我們想把每個組塊都在同一個相似（chunk）中。使用一個特殊的註釋語法來塊名稱（Webpack > 2.4）：

``` js
const UserDetails = () => import(/* webpackChunkName: "group-user" */ './UserDetails.vue')
const UserDashboard = () => import(/* webpackChunkName: "group-user" */ './UserDashboard.vue')
const UserProfileEdit = () => import(/* webpackChunkName: "group-user" */ './UserProfileEdit.vue')
```

webpack 將一個任意模塊與不同的名稱組合到相同的異步塊中。

#### 使用 Vite
在Vite中，你可以rollupOptions在下定義分塊：

``` JavaScript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          'group-user': [
            './src/UserDetails',
            './src/UserDashboard',
            './src/UserProfileEdit',
          ],
        },
    },
  },
})
```