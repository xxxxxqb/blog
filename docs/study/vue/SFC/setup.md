---
title: <script setup>
descript: <script setup>
lastUpdated: true
---

# `<script setup>`

`<script setup>` 是在單文件組件 (SFC) 中使用組合式 API 的編譯時語法糖。當同時使用 SFC 與組合式 API 時則推薦該語法。相比於普通的 `<script> `語法，它具有更多優勢：

- 更少的樣板內容，更簡潔的代碼。
- 能夠使用純 Typescript 聲明 prop 和拋出事件。
- 更好的運行時性能 (其模板會被編譯成同一作用域的渲染函數，沒有任何的中間代理)。
- 更好的 IDE 類型推斷性能 (減少語言服務器從代碼中抽離類型的工作)

### 基本语法

要使用這個語法，需要將 `setup` attribute 添加到 `<script> `代碼塊上：

``` vue
<script setup>
console.log('hello script setup')
</script>
```

裏面的代碼會被編譯成組件` setup() `函數的內容。這意味著與普通的` <script> `只在組件被首次引入的時候執行一次不同，`<script setup>` 中的代碼會在每次組件實例被創建的時候執行。

###### 顶层的绑定会被暴露给模板

當使用 `<script setup>` 的時候，任何在 `<script setup>` 聲明的頂層的綁定 (包括變量，函數聲明，以及 import 引入的內容) 都能在模板中直接使用

``` vue
<script setup>
// 变量
const msg = 'Hello!'

// 函数
function log() {
  console.log(msg)
}
</script>

<template>
  <button @click="log">{{ msg }}</button>
</template>
```

