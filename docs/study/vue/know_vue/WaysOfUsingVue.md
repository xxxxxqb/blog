---
title: 使用vue的多種方式
descript: 使用vue的多種方式
lastUpdated: true
---

#  使用vue的多種方式

## Web 相關

### 獨立腳本
Vue 可以作為獨立的腳本文件使用，無需構建步驟！

將 Vue 想象成 jQuery 的一個更加宣告式的替代。

Vue 也提供了另一個適用於此類無構建步驟場景的替代版 [`petite-vue`](https://github.com/vuejs/petite-vue)，主要為漸進式增強已有的 HTML 作了特別的優化。功能更加精簡，十分輕量。

### 嵌入 Web Component
用 Vue 來構建標準的 Web Component，這些 Web Component 可以嵌入到任何 HTML 頁面中，無論它們是如何被渲染的。

使用 Vue生成的 Web Component 可以嵌入到舊版本的應用、靜態 HTML，甚至用其他框架構建的應用中。

### 單頁面應用 (SPA)

一些应用在前端需要具有丰富的交互性和并不简单的有状态逻辑。

构建这类应用的最佳方法是使用这样一种架构：Vue 不仅控制整个页面，还可以处理数据更新和导航，而无需重新加载页面。

这种类型的应用通常称为单页面应用 (Single-Page application，SPA)。

Vue 提供了核心功能庫和綜合性的工具鏈支持，為現代 SPA 提供了極佳的開發體驗，包括以下內容：

- 客戶端路由

- 極其快速的構建工具
- IDE（集成開發環境） 支持
- 瀏覽器開發工具
- TypeScript 集成
- 測試工具
- PWA

### 全栈 / SSR

純客戶端的 SPA 在首屏加載和 SEO 方面有顯著的問題。這是因為瀏覽器會收到一個巨大的 HTML 空頁面，必須等到 JavaScript 加載完畢再渲染。

Vue 為服務端將一個 Vue 應用渲染成 HTML 字符串提供了第一優先級支持的 API。這使得服務器能夠分發渲染好的 HTML，允許用戶在 JavaScript 下載時看到頁面內容。Vue 之後會在客戶端對應用進行「激活 (hydrate)」使其重獲可交互性。這被稱為服務端渲染 (SSR)，它極大地改善了 Web 應用在核心指標上的性能表現，如最大內容繪製 (LCP)。

也有一些針對此類場景、基於 Vue 構建的框架，比如 NuxtJS，允許你使用 Vue 和 JavaScript 開發一個全棧應用。

## Web 之外

尽管 Vue 主要是为构建 Web 应用而设计的，但它绝不仅仅局限于浏览器。还可以：

- 配合 [`Electron`](https://www.electronjs.org/) 或 [`Tauri`](https://tauri.studio/en/) 构建桌面应用
- 配合 [`Ionic Vue`](https://ionicframework.com/docs/vue/overview) 构建移动端应用
- 使用 [`Quasar`](https://quasar.dev/) 用同一套代码同时开发桌面端和移动端应用
- 使用 Vue 的自定义渲染 API 来构建不同目标的渲染器，比如 WebGL 甚至是终端命令行！