---
title: 模板語法
descript: 模板語法
lastUpdated: true
---

# 模板語法

Vue 使用一種基於 HTML 的模板語法，使我們能夠聲明式地將其組件實例的數據綁定到呈現的 DOM 上。所有的 Vue 模板都是語法上合法的 HTML，可以被符合規範的瀏覽器和 HTML 解析器解析。

### 文本插值

最基本的數據綁定形式是文本插值，它使用的是「Mustache」語法 (即雙大括號`{{ }}`)：

```vue
<span>Message: {{ msg }}</span>
```

可在「Mustache」中使用js表達式，（没有显式包含在列表中的全局对象（此組件Vue的property）将不能在模板内表达式中访问，例如：`window`, 如想使用，需先定義在Vue property中）：

```vue
<span>Message: {{ msg.replae('this', 'that') }}</span>

<span>Message: {{ num + 1 }}</span>

<span>Message: {{ flag ? 'yes' ? 'no' }}</span>
```

也可調用函數：

```vue
<span>Message: {{ formatStr(msg) }}</span>
```

### 原始 HTML

將數據插值為純文本，而不是 HTML。若想插入 HTML，需要使用 `v-html` 指令：

```vue
<p v-html="htmlcontent" />
```

v-html 中也可使用js 表達式：

```vue
<p v-html="1 + 1" />

<p v-html="flag ? 'a' : 'b'" />

<p v-html="htmlcontent.replae('this', 'that')" />
```

可調用函數：

```vue
<p v-html="formatStr(htmlcontent)" />
```



### Attribute 綁定

 為`HTML attributes` 綁定數據應該使用 `v-bind` 指令： v-bind(指令): 屬性名 = “值”

```vue
<p v-bind:id="id"></p>
```

簡寫：
```vue
<p :id="id"></p>
```

綁定多個值：

```vue
<template>
  <p :="p_attr">綁定多個屬性</p>
</template>

<script>
export default {
  data () {
    return {
      p_attr: {
        id: 'id',
        class: 'class',
        style: 'background: pink'
      }
    }
  }
}
</script>
```

Attribute也可以使用js表達式和函數，格式同`v-html`和`Mustache`。

屬性名可以傳 Vue property，但需要加`[ ]`， 但不能使用js表達式和函數:



```vue
<template>
  <p :[attrName]="attrValue">綁定屬性名</p>
</template>

<script>
export default {
  data () {
    return {
      attrName: 'id',
      attrValue: 'content_body'
    }
  }
}
</script>
```

### 其它

#### `v-text`

``` vue
<span v-text="msg"></span>
<!-- 等同于 -->
<span>{{msg}}</span>
```

#### `v-once`

僅渲染元素和組件一次，並跳過之後的更新

``` vue
<span v-once>This will never change: {{msg}}</span>
```

#### `v-pre`

所有Vue 模板語法都會被保留並按原樣渲染

``` vue
<span v-pre>{{ this will not be compiled }}</span>
```

