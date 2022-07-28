---
title: SFC 語法定義
descript: SFC 語法定義
lastUpdated: true
---

# SFC 語法定義

一個 Vue 單文件組件 (SFC)，通常使用 `*.vue` 作為文件擴展名，它是一種使用了類似 HTML 語法的自定義文件格式，用於定義 Vue 組件。一個 Vue 單文件組件在語法上是兼容 HTML 的。

每一個 *.vue 文件都由三種頂層語塊構成：`<template>`、`<script>` 和 `<style>，`以及一些其他的自定義塊：

``` vue
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>

<custom1>
  This could be e.g. documentation for the component.
</custom1>
```

### 相應語言塊
##### `<template>`
- 每個 `*.vue `文件最多可以包含一個頂層 `<template> `塊。

- 語塊包裹的內容將會被提取、傳遞給 `@vue/compiler-dom`，預編譯為 JavaScript 渲染函數，並附在導出的組件上作為其 `render` 選項。


##### `<script>`

- 每個 `*.vue` 文件最多可以包含一個 `<script>` 塊。(使用 `<script setup>` 的情況除外)

- 這個腳本代碼塊將作為 ES 模塊執行。

- 默認導出應該是 `Vue` 的組件選項對象，可以是一個對象字面量或是 `defineComponent` 函數的返回值。


##### `<script setup>`

- 每個 `*.vue` 文件最多可以包含一個 `<script setup>`。(不包括一般的 `<script>`)

- 這個腳本塊將被預處理為組件的 setup() 函數，這意味著它將為每一個組件實例都執行。`<script setup>` 中的頂層綁定都將自動暴露給模板。


##### `<style>`
- 每個 `*.vue` 文件可以包含多個 `<style>` 標簽。

- 一個 `<style>` 標簽可以使用 `scoped` 或 `module attribute` 來幫助封裝當前組件的樣式。使用了不同封裝模式的多個 `<style>` 標簽可以被混合入同一個組件

### 预处理器

代碼塊可以使用 `lang` 這個 attribute 來聲明預處理器語言

``` vue
<script lang="ts">
  // use TypeScript
</script>

<style lang="scss">
  $primary-color: #333;
  body {
    color: $primary-color;
  }
</style>
```

 ### Src 导入

使用 src 這個 attribute 來導入一個外部文件：

``` vue
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

