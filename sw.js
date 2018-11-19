/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2018/11/18/adding-service-worker-jekyll-github-page.html",
    "revision": "6a234364ab54a64abb293e8e6dc51575"
  },
  {
    "url": "2018/11/18/content-is-not-sized-correctly-for-the-viewport.html",
    "revision": "b8296e61e61b180e1b4f7606c332d27a"
  },
  {
    "url": "2018/11/18/getting-started-with-asts.html",
    "revision": "9a7f7ec5aee1b59c98179f4eee0c4051"
  },
  {
    "url": "css/style.css",
    "revision": "5a5ff92978aed905a5cfcd43acdd3ed1"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "c11b060a3fc097bb5dfa397801696181"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "4106c0929ea4e86af8b4c32b3c5cb005"
  },
  {
    "url": "favicon-96x96.png",
    "revision": "258c7595bce80a8c608e51ae227d84eb"
  },
  {
    "url": "favicon.ico",
    "revision": "b4edcd8aecd2b771aec9a39cb032f740"
  },
  {
    "url": "google115b0b3efae5b385.html",
    "revision": "4be3d71ff251a338c77a1e0d2e263e53"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "406286c197ab21ec8bfc84bef3bbfd92"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "05d0ef9821328286268e681a4edb649d"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "5319ce81e0070ed214e0904053d91a43"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "6738ac38beff3020bc1478994b6b1dd1"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "2bd87bce217800ce8611c965b4e16c5c"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "068ef79122e182e250ea12d541204655"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "efe5da2908f53b6704e8e31a5691c6c0"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "d992f5f38ea810ae6d062138b3070909"
  },
  {
    "url": "index.html",
    "revision": "54cf7a14101607c4f1b9db5efe641368"
  },
  {
    "url": "manifest.json",
    "revision": "cf78eefd76455d552c13a40594d9476c"
  },
  {
    "url": "sitemap.xml",
    "revision": "91c876357aaeaf4a2b5238cdbe821c7e"
  },
  {
    "url": "workbox-config.js",
    "revision": "18d6f31327ba86278382838fd05d04e2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
