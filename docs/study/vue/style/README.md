---
title: Vue的編寫風格
descript: Vue的編寫風格
lastUpdated: true
---

# Vue的編寫風格
Vue 的組件可以按兩種不同的風格書寫：**選項式 API** 和 **組合式 API**。

### 選項式 API

使用選項式 API，我們可以用包含多個選項的對象來描述組件的邏輯，例如 data、methods 和 mounted, 選項所定義的屬性都會暴露在函數內部的 this 上，它會指向當前的組件實例。（個人感覺这是面向對象）



```vue
<template>
  <span>{{ count }}</span>
  <button @click="increment">+1</button>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>

```



### 組合式 API

通過組合式 API，我們可以使用導入的 API 函數來描述組件邏輯。

在單文件組件中，組合式 API 通常會與 *\<script setup\>* 搭配使用。這個 *setup attribute* 是一個*標識*，告訴 Vue 需要在編譯時進行轉換，來減少使用組合式 API 時的樣板代碼。（個人感覺這是面向過程）

```vue
<template>
  <span>{{ count }}</span>
  <button @click="increment">+1</button>
</template>

<script setup lang="ts">

  import { ref } from 'vue'

  const count = ref(0)

  function increment(){
    count.value++
  }

</script>
```

