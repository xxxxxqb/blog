---
title: 創建一個 Vue 應用
descript: 創建一個 Vue 應用
lastUpdated: true
---
# 創建一個 Vue 應用

```js
 // main.ts
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
```

每個 Vue 應用都是通過 **createApp** 函數創建一個新的 **應用實例**。傳入 createApp 的對象是一個組件，這個組件被定義為根組件，其他組件將作為其子組件。

```
App (root component)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
   ├─ TodoClearButton
   └─ TodoStatistics
```

应用实例必须在调用了 `.mount()` 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串。

`createApp` API 允许多个 Vue 应用共存于同一个页面上，而且每个应用都拥有自己的用于配置和全局资源的作用域。

```js
import { createApp } from 'vue'
import App from './App.vue'
import AppTwo from './AppTwo.vue'

const app = createApp(App)

app.mount('#app')

createApp(AppTwo).mount('#app2')
```

