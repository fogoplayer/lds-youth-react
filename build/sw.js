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
    "revision": "19ff6ddea260efc9dbdf278af02ca4fe"
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
    "revision": "cd45196f1701a8fd333c09b5a53af17a"
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
    "revision": "e4074d4534bd207717e6c3e8a8872272"
  },
  {
    "url": "static/css/main.e5c92b2d.css",
    "revision": "fe5d755ef684c2621e3326919cc4798d"
  },
  {
    "url": "static/js/0.6ea747df.chunk.js",
    "revision": "e1900dad2b97f6b4b2b7b1a0078b1765"
  },
  {
    "url": "static/js/1.eca75110.chunk.js",
    "revision": "46eff88ef96b9b7bccd2b9f5d1fe2017"
  },
  {
    "url": "static/js/10.a7866518.chunk.js",
    "revision": "ba96ec743cad2644acd5591a81b3b241"
  },
  {
    "url": "static/js/11.182f476d.chunk.js",
    "revision": "5685f39dba4ab300c6a6284d730ea884"
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
    "url": "static/js/14.0724b100.chunk.js",
    "revision": "75dbb29133279eb8bcd4c574da43b7e6"
  },
  {
    "url": "static/js/15.9290aad3.chunk.js",
    "revision": "990b3f7277c9211ac047fbefb914d76e"
  },
  {
    "url": "static/js/16.8a4b99d0.chunk.js",
    "revision": "7aecd912b031ecab64fefdb9053d3470"
  },
  {
    "url": "static/js/17.27a2f077.chunk.js",
    "revision": "2e882383f99032ba994c26d0a68309f3"
  },
  {
    "url": "static/js/18.571b88cc.chunk.js",
    "revision": "49b5a8bc7482b295a948b95b875b55b0"
  },
  {
    "url": "static/js/19.14d8f18a.chunk.js",
    "revision": "20d59f1121265f6a9b23c47728bfe25c"
  },
  {
    "url": "static/js/2.428ede73.chunk.js",
    "revision": "63b8d1d8c79e80937c843cdfeb61b9f3"
  },
  {
    "url": "static/js/20.6f8ef329.chunk.js",
    "revision": "1f17ac524f90394bb17b4bb1ee373c34"
  },
  {
    "url": "static/js/21.0fda0325.chunk.js",
    "revision": "b6b48084d893c73e46f0e390c8f52d1e"
  },
  {
    "url": "static/js/22.23d1a8d6.chunk.js",
    "revision": "c82a9574cce574d359bb958008f17192"
  },
  {
    "url": "static/js/23.f75eb480.chunk.js",
    "revision": "7d9cc63c2cd051b92761b502a943dbc4"
  },
  {
    "url": "static/js/24.ad682edc.chunk.js",
    "revision": "042d801010481a03f76003b810ed0f48"
  },
  {
    "url": "static/js/25.c5c3a4ad.chunk.js",
    "revision": "4d2e2d78244282f3580108c0bfc54017"
  },
  {
    "url": "static/js/26.0af1b7ae.chunk.js",
    "revision": "bd05ca7e7777446dee47105219974673"
  },
  {
    "url": "static/js/27.a692183e.chunk.js",
    "revision": "e9a32c4ff6f304c5be5875edf61170a8"
  },
  {
    "url": "static/js/28.2dca154e.chunk.js",
    "revision": "96c42b10e94463c5eb54c0eb5dcb4438"
  },
  {
    "url": "static/js/29.cc8a259f.chunk.js",
    "revision": "a309f95ed92459e6b8df7c1f830af778"
  },
  {
    "url": "static/js/3.cd1fb966.chunk.js",
    "revision": "a5f27b3ec587d36f7dcbd8c39d1b5cba"
  },
  {
    "url": "static/js/30.b0af9e77.chunk.js",
    "revision": "e019698f2a9194585b00a23cf0bcaac8"
  },
  {
    "url": "static/js/31.6550b509.chunk.js",
    "revision": "fab134b30797e86f2df408e893e1e803"
  },
  {
    "url": "static/js/32.7b61c253.chunk.js",
    "revision": "9bc4532f83c5df00948c6229bd4f4724"
  },
  {
    "url": "static/js/33.d3b0399c.chunk.js",
    "revision": "a5e59aa324ff2239ecacdd9c91da74bd"
  },
  {
    "url": "static/js/34.4d238268.chunk.js",
    "revision": "41122f38dfc4713a61fd57434325ec2e"
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
    "url": "static/js/4.cef28f11.chunk.js",
    "revision": "96aeaeb8a1d09c4beb0555c0ef74822a"
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
    "url": "static/js/5.59498c83.chunk.js",
    "revision": "ee4f70cc79567153765d9ac1d991e65f"
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
    "url": "static/js/6.37fe7f26.chunk.js",
    "revision": "e0ecc6c8fa58cd01ab71ed1075a58321"
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
    "url": "static/js/7.3b5bc205.chunk.js",
    "revision": "7193a30eef50b932f7f26c5c4b98c791"
  },
  {
    "url": "static/js/8.452a1641.chunk.js",
    "revision": "370d27fc3075a651f6029996d9311e89"
  },
  {
    "url": "static/js/9.e60c3733.chunk.js",
    "revision": "b8c6b66d12acc179f24aff3a69108a46"
  },
  {
    "url": "static/js/main.c44040d7.js",
    "revision": "14a707642083cf909b1196139030fd92"
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
