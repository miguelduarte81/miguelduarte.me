// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import PrismicVue from 'prismic-vue'
import linkResolver from '~/prismic/link-resolver'
import htmlSerializer from '~/prismic/html-serializer'

import DefaultLayout from '~/layouts/Default.vue'
import SimpleLayout from '~/layouts/Simple.vue'
import '~/styles/styles.less'

export default function (Vue, { 
  router, head, isClient 
}) 

{
  Vue.component('Layout', DefaultLayout)
  Vue.component('Simple', SimpleLayout)

  Vue.use(ElementUI, { locale })

  Vue.use(PrismicVue, {
    linkResolver,
    htmlSerializer
  })

  /* 
  ** HEAD 
  */
  head.link.push({
    name: 'viewport',
    content: 'width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;'
  })

  // Vimeo
  head.script.push({
    src: 'https://player.vimeo.com/api/player.js',
    body: true
  })

  // Meta Tags
  head.meta.push({
    name: 'description',
    content: 'Miguel Duarte is a multidisciplinary designer specialised in branding, website and application design and development. Based in Guildford, Surrey, UK.'
  }, {
    name: 'keywords',
    content: 'strategy,branding,identity,logo,logotype,logomark,communication,digital,graphic,design,development,html,css,ux,ui,website,product,application,ecommerce,social,media,campaigns,javascript,shopify,vue,vuejs'
  }, {
    name: 'author',
    content: 'Miguel Duarte'
  })

  // Fonts
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com'
  }, {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700&family=Open+Sans:wght@400;700&display=swap'
  }, {
    rel: 'stylesheet',
    href: 'https://pro.fontawesome.com/releases/v5.11.2/css/brands.css',
    integrity: 'sha384-dd+UlUKIkNDLBFy2GZJRdMODxfdUjx/PanzxBbsXaRBkyjHzUeDX3mj6q53uL825',
    crossorigin: 'anonymous'
  })

  // Social Meta Tags
  // Facebook
  head.meta.push({
    property: 'og:title',
    content: 'Miguel Duarte'
  }, {
    property: 'og:description',
    content: 'Miguel Duarte is a multidisciplinary designer specialised in branding, website and application design and development. Based in Guildford, Surrey, UK.'
  }, {
    property: 'og:type',
    content: 'website'
  }, {
    property: 'og:image',
    content: 'https://miguelduarte.me/images/Cover.jpg'
  }, {
    property: 'og:url',
    content: 'https://miguelduarte.me'
  })
  // Twitter
  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image'
  }, {
    name: 'twitter:title',
    content: 'Miguel Duarte'
  }, {
    name: 'twitter:description',
    content: 'Miguel Duarte is a multidisciplinary designer specialised in branding, website and application design and development. Based in Guildford, Surrey, UK.'
  }, {
    name: 'twitter:image',
    content: 'https://miguelduarte.me/images/Cover.jpg'
  }, {
    name: 'twitter:handle',
    content: 'miguelduarte81'
  }, {
    name: 'twitter:creator',
    content: 'miguelduarte81'
  }, {
    itemprop: 'name',
    content: 'Miguel Duarte'
  }, {
    itemprop: 'description',
    content: 'Miguel Duarte is a multidisciplinary designer specialised in branding, website and application design and development. Based in Guildford, Surrey, UK.'
  })
}
