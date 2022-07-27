---
title: Provide & Inject
descript: Provide&Inject
lastUpdated: true
---

# Prop 逐级透传

通常情況下，當我們需要從父組件向子組件傳遞數據時，會使用`prop`.

想象一下這樣的結構：有一些多層級嵌套的組件，形成了一顆巨大的組件樹，而某個深層的子組件需要一個較遠的祖先組件中的部分內容。在這種情況下，如果僅使用 props 則必須將其沿著組件鏈逐級傳遞下去，這會非常麻煩。

### Provide (供给)

要为组件后代供给数据，需要使用到 `provide` 选项：

##### 選項式api

``` js
export default {
  data() {
    return {
      message: 'hello!'
    }
  },
  provide() {
    // 使用函数的形式，可以访问到 `this`
    return {
      message: this.message // 不響應
    }
  }
}
```

##### 組合式api

``` vue
<script setup>
import { provide, ref } from 'vue'
const msg = ref('hello')
provide(/* 注入名 */ 'message', /* 值 */ msg)
</script>
```



對於 provide 對象上的每一個屬性，後代組件會用其 key 為註入名查找期望註入的值，屬性的值就是要供給的數據。

### Inject (注入)

要註入祖先組件供給的數據，需使用 `inject `選項：

##### 選項式api

```js
export default {
  inject: ['message'],
  created() {
    console.log(this.message) // injected value 
  }
}
```

##### 組合式api

```js
<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>
```

