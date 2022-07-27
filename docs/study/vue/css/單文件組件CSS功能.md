---
title: 單文件組件CSS功能
descript: 單文件組件CSS功能
lastUpdated: true
---
# 單文件組件CSS功能

### CSS 作用域

當 `<style> `標簽帶有 `scoped` attribute 的時候，它的 CSS 只會應用到當前組件的元素上。
使用 scoped 後，父組件的樣式將不會滲透到子組件中>
不過，子組件的根節點會同時被父組件的作用域樣式和子組件的作用域樣式影響。

``` vue
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

##### 深度選擇器

處於`scoped`樣式中的選擇器如果想要做更「深度」的選擇，也即：影響到子組件，可以使用 `:deep()` 這個偽類：
``` vue
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>
```

##### 插槽選擇器

默認情況下，作用域樣式不會影響到 `<slot/>` 渲染出來的內容，因為它們被認為是父組件所持有並傳遞進來的。使用 `:slotted` 偽類以明確地將插槽內容作為選擇器的目標：
``` vue
<style scoped>
:slotted(div) {
  color: red;
}
</style>
```
##### 全局選擇器
如果想讓其中一個樣式規則應用到全局，可以使用 :global 偽類來實現：
``` vue
<style scoped>
:global(.red) {
  color: red;
}
</style>
```

##### 混合使用局部與全局樣式

``` vue
<style>
/* 全局样式 */
</style>

<style scoped>
/* 局部样式 */
</style>
```
### CSS Modules
一個 `<style module>` 標簽會被編譯為 `CSS Modules` 並且將生成的 `CSS class` 作為 `$style` 對象暴露給組件：
``` vue
<template>
  <p :class="$style.red">This should be red</p>
</template>
<script>
export defalut{
    mounted () {
        console.log(this.$style)
    }
}
</script>

<style module>
.red {
  color: red;
}
</style>
```

##### 自定義註入名稱
可以通過給 module attribute 一個值來自定義註入 class 對象的 property 鍵
``` vue
<template>
  <p :class="classes.red">red</p>
</template>

<script>
export defalut{
    mounted () {
        console.log(this.classes)
    }
}
</script>

<style module="classes">
.red {
  color: red;
}
</style>
```

##### 組合式 API 中使用

可以通過 useCssModule API 在 setup() 和 `<script setup>` 中訪問註入的 `class`
``` JavaScript
import { useCssModule, onMounted } from 'vue'

// 在 setup() 作用域中...
// 默認情況下, 返回 <style module> 的 class 
const defaluCssModule = useCssModule()

// 具名情況下, 返回 <style module="classes"> 的 class 
const classesCssModule = useCssModule('classes')

onMounted(() => {
    console/log(defaluCssModule)
    console.log(classesCssModule)
})

```

### `CSS` 中的 `v-bind()`

單文件組件的 `<style> `標簽支持使用 `v-bind` CSS 函數將 CSS 的值鏈接到動態的組件狀態：
``` vue
<template>
  <div class="text">hello</div>
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
</script>

<style>
.text {
  color: v-bind(color);
}
</style>
```

這個語法同樣也適用於 `<script setup>`，且支持 `JavaScript` 表達式 (需要用引號包裹起來)：
``` vue
<script setup>
const theme = {
  color: 'red'
}
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
p {
  color: v-bind('theme.color');
}
</style>
```