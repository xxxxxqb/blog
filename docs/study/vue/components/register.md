---
title: 註冊組件
descript: 註冊組件
lastUpdated: true
---
# 註冊組件

## 組件基礎
組件允許我們將 UI 劃分為**獨立的**、**可重用的**部分來思考。組件在應用程序中常常被組織成層層嵌套的樹狀結構

![](./images/components.7fbb3771.png)

### 定義一個組件

當使用構建步驟時，一般會將 Vue 組件定義在一個單獨的 .vue 文件中，這被叫做單文件組件 (簡稱 SFC)：

``` vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  // 顯式聲明組件展示時的名稱。
  // 俄如沒有，組件名稱使用用文件名
  // 選項式api中的 api
  name: 'RegisterComponent'
}
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

組合式api

``` vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

也可以使用一个 `.js` 文件里导出一個組件，不常用

### 組件註冊

一個 Vue 組件需要被「註冊」使得 Vue 在渲染模板時能找到其實現。有兩種方式來註冊組件：全局註冊和局部註冊。

#### 全局註冊

使用 `app.component() `方法，讓組件在當前 Vue 應用（`main.js`）中全局可用。

``` js
import { createApp } from 'vue'
import App from './App.vue'
import RegisterComponent from './components/components/RegisterComponent.vue'
const app = createApp(App)
// 
app.component(
  // 注册的名字
  'MyComponent',
  // 组件的实现
  {
    /* ... */
  }
)

app.component('RegisterComponent', RegisterComponent)

app.mount('#app')
```

方法可以被鏈式調用：

``` js
app.component('customerComponentA', customerComponentA)
	.component('customerComponentB', customerComponentB)
```

全局註冊的組件可以在此應用的任意組件的模板中使用：

``` vue
<template>
  <RegisterComponent />
</template>

<script>
export default {

}
</script>
```

#### 局部註冊

##### 選項式api

局部註冊需要使用 `components `選項：

```vue
<script>
import RegisterComponent from './components/components/RegisterComponent.vue'

export default {
  components: {
    // RegisterComponent: RegisterComponent
    RegisterComponent
  }
}
</script>

<template>
  	<!-- 以下寫法都可以 -->
  	<RegisterComponent></RegisterComponent>
  	<RegisterComponent />
	<register-component></register-component>
	<register-component />
</template>
```

組合式api

使用了 `<script setup>`，導入的組件可以在本地使用而無需註冊：

```vue
<script setup>
import RegisterComponent from './components/components/RegisterComponent.vue'
</script>

<template>
  <RegisterComponent />
</template>
```

如果不在` <script setup> `中，也需要使用 components 選項

```vue
<script>
import RegisterComponent from './components/components/RegisterComponent.vue'

export default {
  components: {
    ComponentA
  },
  setup() {
    // ...
  }
}
</script>

<template>
  <RegisterComponent />
</template>
```

### 组件名格式

使用 PascalCase (首字母大寫)作為組件名的註冊格式
