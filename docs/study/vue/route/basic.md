---
title: Router 介紹
descript: Router 介紹
lastUpdated: true
---

Vue Router 是 [Vue.js](http://v3.vuejs.org/) 的官方路由。它與 Vue.js 核心深度集成，讓用 Vue.js 構建單頁應用變得輕而易舉。功能包括：

- 嵌套路由映射
- 動態路由選擇
- 模組化、基於元件的路由配置
- 路由參數、查詢、萬用字元
- 展示由 Vue.js 的過渡系統提供的過渡效果
- 細緻的導航控制
- 自動啟動 CSS 類的連結
- HTML5 history 模式或 hash 模式
- 可定制的滾動行為
- URL 的正確編碼

 ## 安裝

##### CDN

``` html
<script src="https://unpkg.com/vue-router@4"></script>
```

##### npm

``` sh
npm install vue-router@4
```

##### yarn

``` shell
yarn add vue-router@4
```

## 簡單使用

定義 route

``` js
import { createRouter, createWebHistory } from 'vue-router'
// 1. 定義路由組件.
// 也可以從其他檔導入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定義一些路由
// 每個路由都需要映射到一個元件。
// 我們後面再討論嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. 創建路由實例並傳遞 `routes` 配置
// 你可以在這裡輸入更多的配置，但我們在這裡
// 暫時保持簡單
const router = createRouter({
  // 4. 內部提供了 history 模式的實現。為了簡單起見，我們在這裡使用 hash 模式。
  // createWebHashHistory(),它在內部傳遞的實際 URL 之前使用了一個雜湊字元（#）。由於這部分 URL 從未被發送到伺服器，所以它不需要在伺服器層面上進行任何特殊處理
  // 创建 HTML5 模式，當使用這種歷史模式時，URL 會看起來很 "正常"
  history: createWebHashHistory(),
  routes, // `routes: routes` 的縮寫
})

// 5. 創建並掛載根實例
const app = Vue.createApp({})
//確保 _use_ 路由實例使
//整個應用支援路由。
app.use(router)

app.mount('#app')

// 現在，應用已經啟動了！
```

使用：

``` vue
<template>
 <div>
     <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
	</p>
	<router-view></router-view>
  </div>
</template>
```

##### `router-link`

請注意，我們沒有使用常規的 `a` 標籤，而是使用一個自訂群組件 `router-link` 來創建連結。這使得 Vue Router 可以在不重新載入頁面的情況下更改 URL，處理 URL 的生成以及編碼。

##### `router-view`

`router-view` 將顯示與 url 對應的元件。可以把它放在任何地方，以適應佈局