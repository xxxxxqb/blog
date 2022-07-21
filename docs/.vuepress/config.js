const { defaultTheme } = require('vuepress')
const { palettePlugin } = require('@vuepress/plugin-palette')
module.exports = {
    lang: 'zh-CN',
    title: '笔记',
    description: '学习之路与问题总结',  
    base: '/blog',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '笔记',
        description: '学习之路与问题总结'
      },
      '/en/': {
        lang: 'en-US',
        title: 'Note',
        description: 'study'
      }
    },
    theme:defaultTheme({
      repo: 'https://github.com/xxxxxqb/blog',
      repoLabel: 'github',
      docsRepo: 'https://github.com/xxxxxqb/blog',
      docsBranch: 'master',
      docsDir:'docs',

      locales:{
        '/':{
          selectLanguageText: '选择语言',
          selectLanguageName: '简体中文',
          editLinkText: '编辑此页',
          lastUpdatedText: '最后更新',
          contributors: false,
          home: '/',
          navbar: [
            {
              text: '首页',
              link: '/'
            },
            {
              text: '笔记',
              link: '/note/'
            },
            {
              text: '学习',
              children: [
                {
                  text: 'vue',
                  link: '/study/vue/know_vue/README.md'
                }
              ]
            }
          ],
          sidebar:{
            '/study/vue/': [
              {
                text: '認識vue',
                children: [
                  {
                    text: '什麼是vue',
                    link: '/study/vue/know_vue/README.md'
                  },
                  {
                    text: 'vue的工作原理',
                    link: '/study/vue/know_vue/WorkingPrinciple.md'
                  },
                  {
                    text: 'vue的工作機制',
                    link: '/study/vue/know_vue/WorkingMechanism.md'
                  }
                ]
              },
              {
                text: '安裝',
                link: '/study/vue/install/README.md'
              },
              {
                text: '編寫風格',
                link: '/study/vue/style/README.md'
              }
              ,
              {
                text: '基礎',
                children:[
                  {
                    text: '創建一個 Vue 應用',
                    link: '/study/vue/basic/README.md'
                  },
                  {
                    text: '模板語法',
                    link: '/study/vue/basic/template_syntax.md'
                  }
                  ,
                  {
                    text: '聲明響應式狀態',
                    link: '/study/vue/basic/reactivity_fundamentals.md'
                  },
                  {
                    text: '列表渲染',
                    link: '/study/vue/basic/list_rendering.md'
                  },
                  {
                    text: '事件處理',
                    link: '/study/vue/basic/event.md'
                  }
                  ,
                  {
                    text: '表單綁定',
                    link: '/study/vue/basic/form.md'
                  }
                ]
              }
            ]
          },
        },
        '/en/': {
          selectLanguageText: 'Language',
          selectLanguageName: 'English',
          editLinkText: 'Edit this page',
          lastUpdatedText: 'Last Updated',
          contributors: false,
          home: '/en/',
          navbar: [
            {
              text: '首页',
              link: '/'
            },
            {
              text: '笔记',
              link: '/en/note/'
            },
            {
              text: '学习',
              children: [
                {
                  text: 'vue',
                  link: '/en/study/vue/'
                }
              ]
            }
          ]
        }
      }
    }),
    plugins: [
      palettePlugin({
        userStyleFile: '.vuepress/styles/custom.css'
      }),
      "import", {
        "libraryName": "vue-canvas-effect",
        "libraryDirectory": "src/components"
      }
    ],
  }