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
                  link: '/study/vue/'
                }
              ]
            }
          ],
          sidebar:{
            '/study/vue/': [
              {
                text: 'vue',
                children: [
                  {
                    text: '认识vue',
                    link: '/study/vue/README.md'
                  },
                  {
                    text: '认识vue2',
                    link: '/study/vue/README.md'
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
    ],
  }