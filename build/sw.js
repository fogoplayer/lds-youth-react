/*global workbox*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    }),
  );

  //Cache materialize
  workbox.precaching.precacheAndRoute([
    "/materialize.min.js",
    "/materialize.min.css"
  ]);

  //Inject manifest
  workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "94f0ad95b8b41e8dd3665fbe17086547"
  },
  {
    "url": "images/duty-to-god.jpg",
    "revision": "aa0d59e54116c6914fa7ce4defe75d3b"
  },
  {
    "url": "images/personal-progress.jpg",
    "revision": "0555fa40cc86bbaa38ab410e61fc320f"
  },
  {
    "url": "images/torch.png",
    "revision": "edce470648d2d766137dae070107e88f"
  },
  {
    "url": "index.html",
    "revision": "686b17a73a8e86c180f346e5c42fdb52"
  },
  {
    "url": "manifest.json",
    "revision": "f5b15e7bf480ce891909c83bfa02ca5a"
  },
  {
    "url": "materialize.min.css",
    "revision": "92b1c999ee8f5d5f74a8827bcf8e0d6e"
  },
  {
    "url": "materialize.min.js",
    "revision": "1adbb8318f43c2e92436bce42a9b4876"
  },
  {
    "url": "service-worker.js",
    "revision": "0e11d20b30cd77dd991c74ae660c88dd"
  },
  {
    "url": "static/css/main.e5c92b2d.css",
    "revision": "fe5d755ef684c2621e3326919cc4798d"
  },
  {
    "url": "static/js/0.21646bf1.chunk.js",
    "revision": "899fbe86cff93d5d957520696cc0d3fb"
  },
  {
    "url": "static/js/1.b059810c.chunk.js",
    "revision": "5a8c60460763dbdfe08201f5ead1b08f"
  },
  {
    "url": "static/js/10.ccb19afa.chunk.js",
    "revision": "d19b6d5ad4a928a1cae5b6d41cc22eff"
  },
  {
    "url": "static/js/11.f83b8d66.chunk.js",
    "revision": "3afcdc5879951b0553a94035d05bda08"
  },
  {
    "url": "static/js/12.fa5cf959.chunk.js",
    "revision": "90f99ee5cfb20a9788474d9d69a1aa53"
  },
  {
    "url": "static/js/13.2c8fb904.chunk.js",
    "revision": "586467f01cb95a644a7cb1cbed361f58"
  },
  {
    "url": "static/js/14.48b95312.chunk.js",
    "revision": "9b65a0c563e8c286498745f8a2026c23"
  },
  {
    "url": "static/js/15.78dcd1db.chunk.js",
    "revision": "e49090724aba0a16c12795c57712eff6"
  },
  {
    "url": "static/js/16.8120cedc.chunk.js",
    "revision": "d7aa6231044805d0d30667699d95c09e"
  },
  {
    "url": "static/js/17.17f29a01.chunk.js",
    "revision": "b4d02988d617165fb88f0b315fd3610d"
  },
  {
    "url": "static/js/18.ebfa268c.chunk.js",
    "revision": "b96f84e7d11d83a0ec400182b48da079"
  },
  {
    "url": "static/js/19.88d042a4.chunk.js",
    "revision": "cbc56694a7a5a148b4206539ea0ebd68"
  },
  {
    "url": "static/js/2.a7a1f830.chunk.js",
    "revision": "19f1f7ac7f130c57d8085f0dbea17267"
  },
  {
    "url": "static/js/20.9c8732b3.chunk.js",
    "revision": "8c699acaa497a8b2430c6dfe6665d7a7"
  },
  {
    "url": "static/js/21.e093dd7e.chunk.js",
    "revision": "7e0b01876eb93f273735b18e4e8bf7bc"
  },
  {
    "url": "static/js/22.94b988ef.chunk.js",
    "revision": "18ac16f334c9eaa9a739ae6c55d16ce3"
  },
  {
    "url": "static/js/23.c6bbef5a.chunk.js",
    "revision": "3ac0c13ccd6e63316f1cb0d0b3eb4d76"
  },
  {
    "url": "static/js/24.6dc99e24.chunk.js",
    "revision": "91aa06a9de7cc9e04d8275d7bbe0a338"
  },
  {
    "url": "static/js/25.3d66c104.chunk.js",
    "revision": "8011a357fba05252c66ff733b6d6711a"
  },
  {
    "url": "static/js/26.878f321e.chunk.js",
    "revision": "a4fad6560b0d4400ced88378840ea41d"
  },
  {
    "url": "static/js/27.1f2e214f.chunk.js",
    "revision": "7f87add0589c62aba08e57b29a84b13b"
  },
  {
    "url": "static/js/28.5d676e38.chunk.js",
    "revision": "a8fa64bc9aae39d5a25417f1d185acb0"
  },
  {
    "url": "static/js/29.bdfe986c.chunk.js",
    "revision": "7f5bd52c9bc26fcf2d2ed217a630b8da"
  },
  {
    "url": "static/js/3.e8011a36.chunk.js",
    "revision": "576f4ebab6d54a9720a9f1f327e1c773"
  },
  {
    "url": "static/js/30.d75b5677.chunk.js",
    "revision": "ad966d0ed77e395a1724e8b76212580a"
  },
  {
    "url": "static/js/31.223b5d1d.chunk.js",
    "revision": "3ca896fedecc619f8457f5a2f5e44bae"
  },
  {
    "url": "static/js/32.06fb7eb0.chunk.js",
    "revision": "67558dcde7de9f63cb10882c97c5bed9"
  },
  {
    "url": "static/js/33.76bfa2c9.chunk.js",
    "revision": "5213b9f8156456ae5f084abf52df7e17"
  },
  {
    "url": "static/js/34.d95761f8.chunk.js",
    "revision": "64d6ab85a443376a3be73a1874e02d20"
  },
  {
    "url": "static/js/35.1ed66159.chunk.js",
    "revision": "60c78fcbf25a0c93026858ca599f67e1"
  },
  {
    "url": "static/js/36.0b757a76.chunk.js",
    "revision": "5180ec937d829724214f5de7669c0394"
  },
  {
    "url": "static/js/37.11bb30e0.chunk.js",
    "revision": "09be7f8e640645b18d2fb7e5834c8123"
  },
  {
    "url": "static/js/38.77a1b1bd.chunk.js",
    "revision": "f4fd60c80a9ab062256ec75b71179bd3"
  },
  {
    "url": "static/js/39.f9cc6418.chunk.js",
    "revision": "ac9e09c795ed492881272edad7ac91b2"
  },
  {
    "url": "static/js/4.0ae78ecb.chunk.js",
    "revision": "4f02760a804d8e28d04e8563d84f420b"
  },
  {
    "url": "static/js/40.095cc2ea.chunk.js",
    "revision": "69b02decba35a5522713e4c471c5b17d"
  },
  {
    "url": "static/js/41.5c95a43c.chunk.js",
    "revision": "968571b57d0a225d9f5d0218264b47d2"
  },
  {
    "url": "static/js/42.91183fbe.chunk.js",
    "revision": "9bc2d75c75bddb516f3b5792b499d755"
  },
  {
    "url": "static/js/43.2908b0b5.chunk.js",
    "revision": "a713fe8542f311539560569facb43d5a"
  },
  {
    "url": "static/js/44.a8d57ea1.chunk.js",
    "revision": "d32e9f73ab6e532e8e3b3d70f4741cfb"
  },
  {
    "url": "static/js/45.babdfbec.chunk.js",
    "revision": "b50909a2edcdcdb65893b5d2525fdf81"
  },
  {
    "url": "static/js/46.c054ab22.chunk.js",
    "revision": "451da3b6818aac47460660aa31b63bb4"
  },
  {
    "url": "static/js/47.b82e6fd7.chunk.js",
    "revision": "40b2069191686696b299506047c8c0ae"
  },
  {
    "url": "static/js/48.921fb52b.chunk.js",
    "revision": "df6aa09d42da4fd914bfdead364aa161"
  },
  {
    "url": "static/js/49.263a4dc0.chunk.js",
    "revision": "9cc70270c3b5fd89e0ac5598f1c72fc1"
  },
  {
    "url": "static/js/5.7947b49b.chunk.js",
    "revision": "9d0489b44a67320b247f1cd8618f1faa"
  },
  {
    "url": "static/js/50.5cf45f73.chunk.js",
    "revision": "ee57277c394d41d601de2bdb0a98846d"
  },
  {
    "url": "static/js/51.dcb298e1.chunk.js",
    "revision": "22d6035b2fcc9de52df7928948dbd1b7"
  },
  {
    "url": "static/js/52.2ff674de.chunk.js",
    "revision": "9c3da793a70b9e535ab1f66e26a17225"
  },
  {
    "url": "static/js/53.888fa8f8.chunk.js",
    "revision": "32ddb4f8449ffe41fd6a40d43e9cc10b"
  },
  {
    "url": "static/js/54.58086286.chunk.js",
    "revision": "9ee88b45ebd55792da87fecff987f97c"
  },
  {
    "url": "static/js/55.a32093b8.chunk.js",
    "revision": "aba436e7b5e501f26f56bfd066e7aa7c"
  },
  {
    "url": "static/js/56.cd2bfd1d.chunk.js",
    "revision": "a5b01af91d0e3bce10f52ed649308d25"
  },
  {
    "url": "static/js/57.26f3fe20.chunk.js",
    "revision": "bd04af8a7590c373f983e4917e7330ef"
  },
  {
    "url": "static/js/58.c61c45d3.chunk.js",
    "revision": "ca2d3895dfd4530201561af8eae9cbc1"
  },
  {
    "url": "static/js/59.130fea08.chunk.js",
    "revision": "410210eacf2dc4f5f67ca6af94dfa4bb"
  },
  {
    "url": "static/js/6.a43483de.chunk.js",
    "revision": "dfa4ac43dc8f1f75033a18412bb43b46"
  },
  {
    "url": "static/js/60.905b6001.chunk.js",
    "revision": "f6f485cc4b8bb984a270595bfa541668"
  },
  {
    "url": "static/js/61.ec804bff.chunk.js",
    "revision": "59c8ef2df7ceb1e7097ed76996e9aa6e"
  },
  {
    "url": "static/js/62.5e970143.chunk.js",
    "revision": "490629544d123b20d471453f71bd9ccc"
  },
  {
    "url": "static/js/63.b0f93945.chunk.js",
    "revision": "05d908f556d759f1b7aa2b1601e9a7e5"
  },
  {
    "url": "static/js/64.bffe513d.chunk.js",
    "revision": "36b4d5b56f6dc0a5a262f6802c4c0e03"
  },
  {
    "url": "static/js/65.3216c067.chunk.js",
    "revision": "a8c33fb7c7e64925d498870c2c8e23c0"
  },
  {
    "url": "static/js/66.e072847b.chunk.js",
    "revision": "7acbeb5aeab527d0e2c28c8a91aa5090"
  },
  {
    "url": "static/js/7.0c750454.chunk.js",
    "revision": "9fe82d414027759f4bace79388a14c04"
  },
  {
    "url": "static/js/8.675f994c.chunk.js",
    "revision": "998ead14309c5f61f786cac2289470d0"
  },
  {
    "url": "static/js/9.5f97cc6e.chunk.js",
    "revision": "d99a0a4963635e6e88b519cf87e46397"
  },
  {
    "url": "static/js/main.2f1ecb5a.js",
    "revision": "708b81e470ed291de8259c511e6a95f3"
  },
  {
    "url": "static/media/MaterialIcons-Regular.012cf6a1.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "static/media/MaterialIcons-Regular.570eb838.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "static/media/MaterialIcons-Regular.a37b0c01.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "static/media/MaterialIcons-Regular.e79bfd88.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  }
]);
}
else {
  console.log(`Boo! Workbox didn't load 😬`);
}
