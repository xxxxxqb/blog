---
title: Route
descript: Route
lastUpdated: true
---

## 帶參數的動態路由匹配

很多時候，我們需要將給定匹配模式的路由映射到同一個元件。例如，我們可能有一個 `User` 元件，它應該對所有用戶進行渲染，但用戶 ID 不同。在 Vue Router 中，我們可以在路徑中使用一個動態欄位來實現，我們稱之為 *路徑參數*

``` js
const User = {
  template: '<div>User</div>',
}

const routes = [
  // 动态字段以冒号开始
  { path: '/users/:id', component: User },
]
```

*路徑參數* 用冒號 `:` 表示。當一個路由被匹配時，它的 `params` 的值將在每個元件中以 `this.$route.params` 的形式暴露出來。因此，我們可以通過更新 `User` 的範本來呈現當前的使用者 ID：

可以在括弧中為參數指定一個自訂的正則：

``` js
const routes = [
  // 动态字段以冒号开始
  { path: '/users/:id(\\d+)', component: User },
]
```

## **捕獲所有路由或** **404 Not found** **路由**

 ``` js
 const routes = [
   // 將匹配所有內容並將其放在 `$route.params.pathMatch` 下
   { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
   // 將匹配以 `/user-` 開頭的所有內容，並將其放在 `$route.params.afterUser` 下
   { path: '/user-:afterUser(.*)', component: UserGeneric },
 ]
 ```



## 嵌套路由

 一個簡單的嵌套路由

``` js
const routes = [
  ...nav,
  {
    path: '/user',
    children: [
      {
        path: 'info',
        component: () => import(/* webpackChunkName: "User.info" */ '../views/User/info.vue')
      }
    ]
  }
]
```

## 命名路由

除了 path 之外，你還可以為任何路由提供 `name`。這有以下優點：

- 沒有硬編碼的 URL
- params 的自動編碼/解碼。
- 防止你在 url 中出現打字錯誤。
- 繞過路徑排序（如顯示一個）

 ``` js
 const routes = [
   {
     path: '/user/:username',
     name: 'user',
     component: User,
   },
 ]
 ```

要連結到一個命名的路由，可以向 `router-link` 元件的 `to` 屬性傳遞一個物件：`

``` vue
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
```

## 命名視圖

 可以在介面中擁有多個單獨命名的視圖，而不是只有一個單獨的出口。如果 `router-view` 沒有設置名字，那麼默認為 `default`。

``` js
import Home from '../views/Home.vue'
import helper from '../views/helper.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      helper
    },
  }
]
```

``` vue
<router-view />
<router-view name="helper" />
```

## 重定向

 重定向也是通過 `routes` 配置來完成，下面例子是從 `/home` 重定向到 `/`

``` js
const routes = [{ path: '/home', redirect: '/' }]
```

重定向的目標也可以是一個命名的路由

``` js 
const routes = [{ path: '/home', redirect: { name: 'homepage' } }]
```

## 别名

重定向是指當用戶訪問 `/home` 時，URL 會被 `/` 替換，然後匹配成 `/`

將 `/` 別名為 `/home`，意味著當用戶訪問 `/home` 時，URL 仍然是 `/home`，但會被匹配為用戶正在訪問`/`。

```js
const routes = [{ path: '/', component: Homepage, alias: '/home' }]
```

## `meta`

`meta`屬性可以將任意資訊附加到路由，並且它可以在路由位址和導航守衛上都被訪問到。

``` js
const routes = [{ path: '/home', meta: { requiresAuth: true } }]
```

