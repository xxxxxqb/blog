---
title: 表單綁定
descript: 表單綁定
lastUpdated: true
---
<script setup>
  import { ref } from "vue";
  const checkedNames = ref(['Jack'])
   const isCheck = ref(true)
   const pick = ref('')
   const text = ref('')
</script>

# 表單綁定

如何實現input輸入與數據的雙向綁定？

1. 首先數據賦值給input的value屬性

   ``` vue
   <template>
   	<!-- input輸入時，text確沒有變化 -->
       <input type="text" :value="text">
   </template>
   
   <script>
   export default {
     data () {
       return {
         text: '' // 當text的值有改變時，input的值會同步
       }
     }
   }
   </script>
   ```

2. 如何在input輸入輸入時，同步更新text？

   ``` vue
   <template>
       <input type="text" :value="text" @input="syncText($event)"> // 綁定一個input事件，在input時，input輸入值賦值給text
   	<input id="text_input" type="text" :value="text"  @input="(event) => { text = event.target.value }" />
   </template>
   
   <script>
   export default {
     data () {
       return {
         text: ''
       }
     },
     methods: {
         syncText (event) {
             this.text = event.target.value
         }
     }
   }
   </script>
   ```

### v-model

`v-model`指令幫忙簡化了以上流程，它可以用於針對各種類型的輸入，會根據所使用元素不同擴展到不同的Dom屬性和事件.

`v-model` 會忽略任何表單上的初始的 `value`、`checked` 或 `selected` attribute。

它將始終將當前綁定的 JavaScript 狀態視為數據的正確來源。你應該在 JavaScript 中聲明該初始值，使用`data` 選項或者ref 。

##### 文本輸入

```vue
<input type="text" v-model="text" />
```

##### 多行文本輸入

``` vue
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

##### 複選框

###### 單一複選框綁定的是布爾值
<div>
  <input type="checkbox" id="check" v-model="isCheck">
	<label for="check">check</label>
</div>

``` vue
<template>
	<input type="checkbox" id="check" v-model="isCheck">
	<label for="check">isCheck</label>
</template>
<script>
    export default {
        data() {
            return {
              isCheck: true
            }
        }
    }
</script>
```

```vue
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no" />
```

true-value 和 false-value 是 Vue 特有的 attributes 且僅會在 v-model 存在時工作。

這裏 toggle 屬性的值會在選中時被設為 'yes'，取消選擇時設為 'no'。

也可以通過 v-bind 將其綁定為其他動態值

###### 將多個複選框綁定同一個數組

**備註: `v-model` 和`reative([])` 一起使用，數據響應會失效**

<p>checkedNames: {{ checkedNames }}</p>
<div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
</div>

``` vue
<template>
    <div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
    </div>
</template>
<script>
    export default {
        data() {
            checkedNames: []
        }
    }
</script>
```

##### 單選按鈕

<div>
  <p>pick: {{ pick }}</p>
  <input type="radio" v-model="pick" value="pear" />
  <label for="pear">pear</label>
  <input type="radio" v-model="pick" value="apple" />
  <label for="apple">apple</label>
</div>

```vue
<input type="radio" v-model="pick" value="pear" />
<input type="radio" v-model="pick" value="apple" />
```

##### 選擇框

`v-model`支持非字符串類型的值綁定

``` vue
<select v-model="selected">
  <option :value="{ number: 123 }">123</option>
</select>
```

### 修飾符

`.lazy` : 改為在每次 `change` 事件後更新數據。

<p>text: {{ text }}</p>
<input v-model.lazy="text" type="text" />

`.number` : 將輸入字符轉換為數字

<p>text: {{ text }}</p>
<input v-model.number="text" type="text" />

`.trim`： 自動去除輸入內容中兩端的空格

<p>text: {{ text }}</p>
<input v-model.trim="text" type="text" />