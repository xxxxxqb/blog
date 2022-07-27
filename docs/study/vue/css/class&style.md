---
title: class 和 style 綁定
descript: class 和 style 綁定
lastUpdated: true
---
# class 和 style 綁定
因為 class 和 style 都是 attribute，我們可以和其他 attribute 一樣使用 v-bind 把一個動態的字符串賦值給它們。
然而通過字符串拼接生成這些值是麻煩且易出錯的。因此，Vue 專門為 class 和 style 的 v-bind 用法提供了特殊的功能增強。
除了字符串外，表達式的結果還可以是對象或數組。

## 綁定 HTML class
#### 綁定對象
``` vue
<div :class="{ active: isActive }"></div>
```
上面的語法表示 active 是否存在取決於數據屬性 isActive 的真假值。

可以在對象中寫多個字段來操作多個 class。此外，:class 指令也可以和一般的 class attribute 共存:
``` vue
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>
```
綁定的對象也不一定寫成內聯的形式：
``` vue
<template>
    <div :class="classObject"></div>
</template>
<script>
export default{
    data(){
        return {
            classObject:{
                active: true,
                'text-danger': false
            }
        }
    }
}
</script>
```
也可以綁定一個返回對象的計算屬性

#### 绑定数组
``` vue
<div :class="[activeClass, errorClass]"></div>
```
在數組中按條件觸發某個 class，你可以使用三元表達式
``` vue
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```
## 綁定內聯樣式
#### 綁定對象
`:style `支持綁定 `JavaScript` 對象值，對應的是` HTML `元素的 `style `屬性：
``` vue
<template>
    <div :class="styleObject"></div>
</template>
<script>
export default{
    data(){
        return {
            styleObject:{
                color: 'red',
                fontSize: '13px'
            }
        }
    }
}
</script>
```
同樣的，如果樣式對象需要更復雜的邏輯，也可以使用返回樣式對象的計算屬性。
#### 自動前綴
當在 `:style `中使用了需要瀏覽器`特殊前綴的 CSS 屬性`時，Vue 會自動為他們加上相應的前綴。
Vue 是在運行時檢查該屬性是否支持在當前瀏覽器中使用。如果瀏覽器不支持某個屬性，那麽將測試加上各個瀏覽器特殊前綴，以找到哪一個是被支持的。