---
title: 插槽
descript: 插槽
lastUpdated: true
---

# slot

組件能夠接收任意類型的 JavaScript 值作為 props，但組件要如何接收模板內容呢？

為子組件傳遞一些模板片段，讓子組件在它們的組件中渲染這些片段。

這個時候我們可以使用到`slot`：

``` vue
// 子組件
<template>
<div>
    <slot>this is default slot</slot>
</div>
</template>
```

``` vue
// 父組件  
<SlotComponent>
    this is slot
  </SlotComponent>
```

`<slot> `元素是一個插槽的插口，標示了父元素提供的插槽內容將在哪裏被渲染

- 插槽內容可以是任意合法的模板內容,可以傳入多個元素，甚至是組件。
- 插槽內容可以訪問到父組件的數據作用域，因為插槽內容本身是在父組件模板中定義的
- 插槽內容無法訪問子組件的數據，

### 插槽命名

有時在一個組件中需要包含多個插槽的插口， 像這像：

``` vue
<div class="container">
  <header>
    <!-- 标题内容放这里 -->
  </header>
  <main>
    <!-- 主要内容放这里 -->
  </main>
  <footer>
    <!-- 底部内容放这里 -->
  </footer>
</div>
```

`<slot>` 元素可以有一個特殊的 attribute name，用來給各個插槽分配唯一的 ID，以確定每一處要渲染的內容.

沒有提供 `name` 的 `<slot>` 插口會隱式地命名為「default」。

```vue
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

要為具名插槽傳入內容, 需要使用一個含 v-slot 指令的 `<template> `元素，並將目標插槽的名字傳給該指令：

``` vue
<BaseLayout>
  <template v-slot:header> // 簡寫為 <template #header>
    <!-- header 插槽的内容放这里 -->
  </template>
    <template v-slot:footer>
    <!-- footer 插槽的内容放这里 -->
  </template>
    <template>
    <!-- main 插槽的内容放这里 -->
  </template>
</BaseLayout>
```

