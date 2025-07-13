import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CV of Yoshiyuki Sugiyama",
  description: "Yoshiyuki Sugiyama resume",
  base: '/resume/',
  head: [
    // ogp
    ['meta', { property: 'og:title', content: 'CV of Yoshiyuki Sugiyama' }],
    ['meta', { property: 'og:description', content: 'software developer Yoshiyuki Sugiyama resume' }],
    ['meta', { property: 'og:url	', content: 'https://sugiyan97.github.io/resume' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [],
    outline: {
      level: [2, 3]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sugiyan97/resume' }
    ],
    editLink: {
      pattern: 'https://github.com/sugiyan97/resume/edit/main/docs/:path'
    }
  },
  lastUpdated: true,
})
