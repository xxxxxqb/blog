---
title: 列表渲染
descript: 列表渲染
lastUpdated: true
---



# 列表渲染

### v-for

##### 遍歷Array

`v-for` 指令基於一個數組來渲染一個列表。

`v-for` 指令需要一種特殊的語法形式 `item in items`，其中 `items` 是源數據的數組，而 `item` 是叠代項的**別名**

```vue
<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      items: ['apple', 'pear', 'banana']
    }
  }
}
</script>
```

在 `v-for` 塊中可以完整地訪問父作用域內的 property。`v-for` 也支持使用可選的第二個參數表示當前項的位置索引。

##### 遍歷Object

也可以使用 `v-for` 來遍歷一個對象的所有屬性

```vue
<template>
  <div>
    <p v-for="value of lists" :key="value">{{ value }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: {
        name: 'arvin',
        age: 27,
        sex: '男'
      }
    }
  }
}
</script>
```

也可以提供第二個參數表示屬性名 (例如 key), 第三個參數表示位置索引：

```vue
<template>
  <div>
    <p v-for="(value, key, index) of lists" :key="value">{{ `${index} - ${key}: ${value}` }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: {
        name: 'arvin',
        age: 27,
        sex: '男'
      }
    }
  }
}
</script>
```

##### 在 `v-for` 裏使用值範圍

可以直接傳給 `v-for` 一個整數值。在這種用例中，會將該模板基於 `1...n` 的取值範圍重復多次。

```
<span v-for="n in 10">{{ n }}</span>
```

註意此處 `n` 的初值是從 `1` 開始而非 `0`。

### v-key

`key` 這個特殊的 attribute 主要作為 Vue 的虛擬 DOM 算法提示，在比較新舊節點列表時用於識別 vnode。

在沒有 key 的情況下，Vue 將使用一種最小化元素移動的算法，並盡可能地就地更新/復用相同類型的元素。如果傳了 key，則將根據 key 的變化順序來重新排列元素，並且將始終移除/銷毀 key 已經不存在的元素。

同一個父元素下的子元素必須具有**唯一的 key**。重復的 key 將會導致渲染異常。

### `v-for` 与 `v-if`

同時使用 `v-if` 和 `v-for` 是**不推薦的**，因為這樣二者的優先級不明顯。

當它們同時存在於一個節點上時，`v-if` 比 `v-for` 的優先級更高。這意味著 `v-if` 的條件將無法訪問到 `v-for` 作用域內定義的變量別名：

```vue
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>price</th>
        <th>color</th>
      </tr>
    </thead>
    <tbody>
        <tr v-if="product.price > 100" v-for="(product, index) in products_list" :key="product.name"> // product.price undefined
          <td>{{ index+1 }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.color }}</td>
        </tr>
    </tbody>
  </table>
```

在外新包裝一層 `<template>` 再在其上使用 `v-for` 可以解決這個問題 (這也更加明顯易讀)：

```vue
<template>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>price</th>
        <th>color</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(product, index) in products_list" :key="product.name">
        <tr v-if="product.price > 100">
          <td>{{ index+1 }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.color }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      products_list: [
        {
          name: 'Movue123',
          price: 122,
          color: '紅'
        },
        {
          name: 'Movue50',
          price: 50,
          color: '黑'
        },
        {
          name: 'Movue80',
          price: 80,
          color: '藍'
        },
        {
          name: 'Movue140',
          price: 140,
          color: '綠'
        }
      ]
    }
  }
}
</script>

```

