import tailwindcss from '@tailwindcss/vite'
import { getBlogPosts } from './app/utils/blog'
import { site } from './app/utils/site'

const blogRoutes = getBlogPosts().map(post => `/blog/${post.slug}`)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vueuse/motion/nuxt', '@nuxt/icon', '@nuxtjs/sitemap'],
  runtimeConfig: {
    public: {
      web3formsKey: ''
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  icon: {
    serverBundle: {
      collections: ['material-symbols']
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@500&display=swap'
        }
      ]
    }
  },
  // Every route is prerendered to static HTML (with full blog content) on
  // both `nuxt build` and `nuxt generate`.
  routeRules: {
    '/**': { prerender: true }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', ...blogRoutes],
      failOnError: true
    }
  },
  site: {
    url: site.url,
    name: site.name,
    trailingSlash: false
  },
  sitemap: {
    urls: () => getBlogPosts().map(post => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.date
    }))
  }
})
