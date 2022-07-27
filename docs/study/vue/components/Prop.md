---
title: Props
descript: Props
lastUpdated: true
---

# Props

向組件傳遞數據(父傳子)

## Prop 声明

Props 是一種特別的 attributes，需要在在組件上聲明註冊。命名一般使用 camelCase 形式。

#### 選項式api

使用 `props` 選項：

``` vue
<!-- RegisterComponent.vue -->
<script>
export default {
  // 聲明pops
  props: ['title', 'description']
}
</script>

<template>
  <h4>{{ title }}</h4>
  <p>{{ description }}</p>
</template>
```

#### 組合式api

使用 `defineProps` 宏：

``` vue
<!-- RegisterComponent.vue -->
<script setup>
defineProps(['title', 'description'])
</script>

<template>
  <h4>{{ title }}</h4>
  <p>{{ description }}</p>
</template>
```



當一個 prop 被註冊後，可以像以自定義 attribute 的形式傳遞數據給它，可以傳遞任何類型的值。

``` vue
<template>
  <!-- 以自定義 attribute 的形式傳遞數據給 RegisterComponent -->
  <RegisterComponent titile="title" :description="description" />
</template>
<script>
import RegisterComponent from './components/components/RegisterComponent.vue'

export default {
  components: {
    // RegisterComponent: RegisterComponent
    RegisterComponent
  },
  data () {
      return {
          description: 'this is a description'
      }
  }
}
</script>
```

## Prop校驗

``` js
export default {
  props: {
    // 基礎類型檢查
    //（給出 `null` 和 `undefined` 值則會跳過任何類型檢查）
    propA: Number,
    // 多種可能的類型
    propB: [String, Number],
    // 必傳，且為 String 類型
    propC: {
      type: String,
      required: true
    },
    // Number 類型的默認值
    propD: {
      type: Number,
      default: 100
    },
    // 對象類型的默認值
    propE: {
      type: Object,
      // 對象或者數組應當用工廠函數返回。
      // 工廠函數會收到組件所接收的原始 props
      // 作為參數
      default(rawProps) {
        return { message: 'hello' }
      }
    },
    // 自定義類型校驗函數
    propF: {
      validator(value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    // 函數類型的默認值
    propG: {
      type: Function,
      // 不像對象或數組的默認，這不是一個工廠函數。這會是一個用來作為默認值的函數
      default() {
        return 'Default function'
      }
    }
  }
}
```

補充：

- 所有 `prop` 默認都是可選的，除非聲明了 `required: true`。

- 除 `Boolean `外的未傳遞的可選 `prop` 將會有一個默認值 `undefined`。

- `Boolean `類型的未傳遞 `prop` 將被轉換為 `false`, 應該為它設置一個 `default` 值來確保行為符合預期。
- 如果聲明了 `default `值，那麽在 `prop` 的值被解析為 `undefined` 時，無論 `prop` 是未被傳遞還是顯式指明的 `undefined`，都會改為 default 值。

## 单向数据流

所有的 prop 都遵循著單向綁定原則，prop 因父組件的更新而變化，自然地將新的狀態向下流往子組件，而不會逆向傳遞。這避免了子組件意外修改了父組件的狀態。
