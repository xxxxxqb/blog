---
title: 生命周期
descript: 生命周期
lastUpdated: true
---

# 生命周期

每個 Vue 組件實例在創建時都需要經歷一系列的初始化步驟，在此過程中，它也會運行稱為生命周期鉤子的函數。


## 生命周期圖示

![](./images/lifecycle.16e4c08e.png)

### 注册周期鈎子

在實例生命周期的不同階段調用不同的鈎子

選項式api

``` vue
<script>
export default {
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMounte')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUnmount () {
    console.log('unmounted')
    console.log('beforeUnmount')
  },
  unmounted () {
    console.log('unmounted')
    alert('unmounted')
  }
}
</script>
```

組合式API

在組合式api中沒有 `beforeCreate` 和 `created`。

``` vue
<script setup>
import refTemplate from './components/basic/refTemplate'
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

</script>
```

