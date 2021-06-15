// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          { text: 'Vue', link: '/pages/802a1ca6f7b71c59/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: 'dart学习笔记', link: '/pages/855d03/' },
          { text: '《JavaScript高级程序设计》笔记', link: '/note/js/' },
          { text: '《ES6 教程》笔记', link: '/note/es6/' },
          { text: '《Vue》笔记', link: '/note/vue/' },
          {
            text: '《TypeScript 从零实现 axios》',
            link: '/note/typescript-axios/',
          },
          {
            text: '《Git》学习笔记',
            link: '/note/git/',
          },
          {
            text: '《TypeScript》笔记',
            link: '/pages/51afd6/',
          },
        ],
      },
    ],
  },
  {
    text: 'Golang',
    link: '/go/',
    items: [
      { text: 'Go基础', link: '/pages/f0cf24/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: 'Linux', link: '/pages/8f1b22/' },
      // { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      // { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      // { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
