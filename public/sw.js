if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const c=e=>i(e,r),o={module:{uri:r},exports:t,require:c};s[r]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/auth-decoration.9095535c.png",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next//static/media/auth-image.ce67964d.jpg",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next//static/media/golden-21-flower.6ac65d06.png",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next//static/media/user-28-02.33ce4883.jpg",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next//static/media/user-28-03.bf823e19.jpg",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next//static/media/user-avatar-32.355e011d.png",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/server/middleware-chunks/949.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/server/middleware-runtime.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/server/pages/admin/_middleware.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/server/pages/agent/_middleware.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/server/pages/api/admin/_middleware.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/server/pages/api/agent/_middleware.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/server/pages/api/auth/get_status/_middleware.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/3PJwR4bsEMaIBTEj4TeHi/_buildManifest.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/3PJwR4bsEMaIBTEj4TeHi/_middlewareManifest.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/3PJwR4bsEMaIBTEj4TeHi/_ssgManifest.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/198-49a33cb4e05b4063.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/205.7f1d93a4722c7db4.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/280-15532130511c076f.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/283-d817ef57aa9ae99e.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/29107295-a2d0c8e72019a3ed.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/346-def0a66729728ac8.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/36bcf0ca-a74fb9b9f9185f7e.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/67-38e6dcd84f19e7d8.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/768-34299345db7a6501.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/890-29ba7774b4924fdd.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/945-a15fe222bd612506.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/main-a1935d2e4fcfff50.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/_app-11ce9b0750ad2615.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin-18f927a13ef55952.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/admin-users-ea9474da5c952f40.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/agents-8679f017b99dc870.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/threeDManagement-3b0c662003863e85.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/threeDManagement/commission-settings-4e3eb5b6f80cd231.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/threeDManagement/limitation-settings-f54cffd1e7064c3c.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/threeDManagement/section-settings-bdf23da8d90d677b.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/transactions-bc33346c774e5475.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/twoDManagement-ded29413a377c084.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/twoDManagement/commission-settings-7b80963e3f50be27.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/twoDManagement/keywords-settings-96838e52d9f44984.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/twoDManagement/limitation-settings-b917c87af6893004.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/admin/twoDManagement/section-settings-38f57edb588e74b3.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/agent/2d-49aa6f72d41b7b73.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/agent/2d/leger-55d216af90187c09.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/agent/2d/limitations-89db5229e953d517.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/agent/3d-43d8dc7932c84e49.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/agent/3d/leger-6407be876fd5b10d.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/agent/3d/limitations-90db1f953f421010.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/auth/login-64c5f6d886076554.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/auth/signin-16da3fe3a35bfaa1.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/index-011355ba4f591164.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/live-2c6fde7d5a09aeaa.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/pages/result-60a78b2a82ac0271.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/chunks/webpack-0150d138c7557e7d.js",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/css/646e0562935ed477.css",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/media/Monoton-Regular.5c0bb770.woff2",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/media/Poppins-Regular.7cc4c0ef.woff2",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/media/Pyidaungsu.2b624af3.woff2",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/media/Pyidaungsu.b205bc56.woff",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/media/SEGA.83f9bbdc.woff2",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/_next/static/media/spinner.ee199c2d.png",revision:"3PJwR4bsEMaIBTEj4TeHi"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/icon-x128.png",revision:"efadd6e1116ea2ea8f7cb93ae8044954"},{url:"/icons/icon-x192.png",revision:"0a9a142c49299143cc29822525b4f24d"},{url:"/icons/icon-x384.png",revision:"c3adb7bf0778e446c0b8960d2b95d7f5"},{url:"/icons/icon-x48.png",revision:"6aea3867465bb51a53390d4717d0fce7"},{url:"/icons/icon-x512.png",revision:"d96d403935dd97a5d9cf8f177a764d38"},{url:"/icons/icon-x72.png",revision:"6a3d6c6a6db539632ba3280d3691b228"},{url:"/icons/icon-x96.png",revision:"b6482d3a6f22a448f6abbfefb57a861b"},{url:"/icons/splashscreens/ipad_splash.png",revision:"bfea232c2e016628795d44274903dc1c"},{url:"/icons/splashscreens/ipadpro1_splash.png",revision:"269b3ff6f415d05677495ef8bf9aa04c"},{url:"/icons/splashscreens/ipadpro2_splash.png",revision:"26d477c18438851f0fa2b8c7a34f8886"},{url:"/icons/splashscreens/ipadpro3_splash.png",revision:"aa00412d3c081910353ae5b5cd1af273"},{url:"/icons/splashscreens/iphone5_splash.png",revision:"a28b58f9a4127a7d55d01bfc7ebf0621"},{url:"/icons/splashscreens/iphone6_splash.png",revision:"363026cd032268257ca55930ea412e3c"},{url:"/icons/splashscreens/iphoneplus_splash.png",revision:"88818b035362e35c2f58b27a8b819cd1"},{url:"/icons/splashscreens/iphonex_splash.png",revision:"7c10a1c3e56e2d4d6b4dfa6f55d6c157"},{url:"/icons/splashscreens/iphonexr_splash.png",revision:"f9dd589459818ce7170c73beb03ddb7e"},{url:"/icons/splashscreens/iphonexsmax_splash.png",revision:"52de2e1ca8e1756c6cb1212f099820df"},{url:"/images/2d.jpg",revision:"284de8bb1e81ec36f4749cd3448f7d55"},{url:"/images/3d.jpg",revision:"489fbe4258ba175d53f5ebf7c39dc7ee"},{url:"/images/adminUsers/golden-21-flower.png",revision:"0912ee3b01c3a10c394cbbcd4d961fe0"},{url:"/images/adminUsers/user-28-01.jpg",revision:"35f50872c0207286ead1ddfdb105e7db"},{url:"/images/adminUsers/user-28-02.jpg",revision:"9a988557406866837c8ba27309b5d4af"},{url:"/images/adminUsers/user-28-03.jpg",revision:"4a0e92f78bd892e6349321d136f0c70e"},{url:"/images/adminUsers/user-28-04.jpg",revision:"efafe3055dadfe154438a67be438bd9f"},{url:"/images/adminUsers/user-28-05.jpg",revision:"75dd522c9d5833c27700974ac1bcacda"},{url:"/images/adminUsers/user-28-06.jpg",revision:"67aa71b2ec60373a3f65d42ea27780c5"},{url:"/images/adminUsers/user-28-07.jpg",revision:"cf997026c85fc4b2ae38831f1a2879a9"},{url:"/images/adminUsers/user-28-08.jpg",revision:"3bf0dc16ff0c7b126b454dcb68d6af28"},{url:"/images/adminUsers/user-28-09.jpg",revision:"1ffe28083478f4c56708adbbb66e550b"},{url:"/images/adminUsers/user-28-10.jpg",revision:"61f0c7d80cdbdf9f687c644c2a681114"},{url:"/images/adminUsers/user-28-11.jpg",revision:"5effe9267de425f0c08792233f19774d"},{url:"/images/adminUsers/user-28-12.jpg",revision:"b8f1cfb7d102ec5ba395456197ce0b62"},{url:"/images/home/01.png",revision:"d0529a9fe4e06590fb0a3c72dd420101"},{url:"/images/home/2d-ori.png",revision:"15c7a8e8bd6b8483956874f242911328"},{url:"/images/home/2d.png",revision:"65f313db5153d61b1f0d68073848f608"},{url:"/images/home/bg.jpg",revision:"70523e706aacbe0eea47885461e3abeb"},{url:"/images/home/bg.png",revision:"386d9121818dd8624e5dec47123523da"},{url:"/images/home/bg2.png",revision:"386d9121818dd8624e5dec47123523da"},{url:"/images/home/big_win.png",revision:"d0529a9fe4e06590fb0a3c72dd420101"},{url:"/images/home/logo.png",revision:"03b021081ccabee902afa581c2790ba1"},{url:"/images/login/auth-decoration.png",revision:"431e5b528ba41cfddb512c2f4b0015b5"},{url:"/images/login/auth-image.jpg",revision:"3d25cff8d1c21ab2711e75f0902ebd18"},{url:"/images/spinner.png",revision:"a45d03827609f7ae27d75af09a280387"},{url:"/images/user-avatar-32.png",revision:"ab3f9f27afc6ffa0679d82b5ad8ff2ca"},{url:"/manifest.json",revision:"d87cccb973d4c9948f75c32e010ee0c9"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
