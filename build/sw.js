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
    "revision": "c81887953e651b705d9a66715f20108a"
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
    "revision": "52d9a0e2b4ee1c6da999f8461ff9b9fa"
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
    "revision": "537ef82eb562bd34fa313e017c4cef41"
  },
  {
    "url": "static/css/main.e5c92b2d.css",
    "revision": "fe5d755ef684c2621e3326919cc4798d"
  },
  {
    "url": "static/js/0.c7656359.chunk.js",
    "revision": "5ecf87fd5853f300eebe46f783ec7a2d"
  },
  {
    "url": "static/js/1.ab57f18d.chunk.js",
    "revision": "cea2e87f52133915c3757f1ef9a9d0db"
  },
  {
    "url": "static/js/10.6cfab984.chunk.js",
    "revision": "c1e425fe1ed58aaaa114650af107978f"
  },
  {
    "url": "static/js/11.9191a688.chunk.js",
    "revision": "2a7c5637addaa0a85dc2db3499e3852d"
  },
  {
    "url": "static/js/12.a31076f6.chunk.js",
    "revision": "12dbc618d9cdcfe66a0f6007b359dc33"
  },
  {
    "url": "static/js/13.2c8fb904.chunk.js",
    "revision": "586467f01cb95a644a7cb1cbed361f58"
  },
  {
    "url": "static/js/14.abdc734e.chunk.js",
    "revision": "fdbfd63a80c5a9a43fb191b46741a1d1"
  },
  {
    "url": "static/js/15.62dc37c4.chunk.js",
    "revision": "b20d34b0a5759d39c233e3818599afc7"
  },
  {
    "url": "static/js/16.5a3ab939.chunk.js",
    "revision": "07f8aca9c42b2267fd8886a1039854c3"
  },
  {
    "url": "static/js/17.dc384091.chunk.js",
    "revision": "c03cda01662262faa062c5cbf917de04"
  },
  {
    "url": "static/js/18.693e929a.chunk.js",
    "revision": "c1b67af8bac07c6c0684740de6fa1bd5"
  },
  {
    "url": "static/js/19.1f5ebee4.chunk.js",
    "revision": "2bc0dc3fb3e5333fd6b676af014f5a39"
  },
  {
    "url": "static/js/2.fcfde505.chunk.js",
    "revision": "05defb46d82fe17a904887aeface8fb7"
  },
  {
    "url": "static/js/20.7966203a.chunk.js",
    "revision": "526da936703678cf138f607905aeb869"
  },
  {
    "url": "static/js/21.cd14a0e2.chunk.js",
    "revision": "9e5d32abc5605444d49dd24ed48c13f1"
  },
  {
    "url": "static/js/22.1e87cc3e.chunk.js",
    "revision": "1111b5d79dfe3b7e0158fa6c03f2e0d0"
  },
  {
    "url": "static/js/23.8f7d31b9.chunk.js",
    "revision": "d1dc1f546b49458bcfb7607762c72149"
  },
  {
    "url": "static/js/24.e694f583.chunk.js",
    "revision": "f9fc361d12cb95aff7ff8a115868f535"
  },
  {
    "url": "static/js/25.57db9271.chunk.js",
    "revision": "b71ce128863ffb6defc0eb41fa4122ff"
  },
  {
    "url": "static/js/26.3f27a3c0.chunk.js",
    "revision": "eb24d1a9227ef80308446033d466c40a"
  },
  {
    "url": "static/js/27.90d3bb1b.chunk.js",
    "revision": "e3252c4609de3afca08d063cb84718db"
  },
  {
    "url": "static/js/28.51807062.chunk.js",
    "revision": "c0e3874361c8c2cd31e24ea6ca23484f"
  },
  {
    "url": "static/js/29.0ae48616.chunk.js",
    "revision": "f093ccc63637d242d1cad97dfcce52f4"
  },
  {
    "url": "static/js/3.a323a285.chunk.js",
    "revision": "1d318228219dfb3068a8f78730beb5dc"
  },
  {
    "url": "static/js/30.fd019bc2.chunk.js",
    "revision": "5ded8bda2aadb130bc11c285ae99f14c"
  },
  {
    "url": "static/js/31.838796ed.chunk.js",
    "revision": "11394ee5d3438c3d9523c5b574dbe4dd"
  },
  {
    "url": "static/js/32.2279a6aa.chunk.js",
    "revision": "d20d561c6b07f3581989a02af9e04157"
  },
  {
    "url": "static/js/33.329a20e4.chunk.js",
    "revision": "377796ec3faf1307a13f03ad2afe637a"
  },
  {
    "url": "static/js/34.467ada4e.chunk.js",
    "revision": "f4aaa729ca4c8f02aa03ab4a543d0bcd"
  },
  {
    "url": "static/js/35.8b330a7e.chunk.js",
    "revision": "b28920ea345c138e7ba47aeb6fd1d22c"
  },
  {
    "url": "static/js/36.f9792464.chunk.js",
    "revision": "7e9a95d1f351ecc53513a701b8b381df"
  },
  {
    "url": "static/js/37.881d9351.chunk.js",
    "revision": "c248961c51dd144150084bbdbd23e033"
  },
  {
    "url": "static/js/38.45037eb3.chunk.js",
    "revision": "bc921ad0a3516e3ab6c16892b948e5e9"
  },
  {
    "url": "static/js/39.0277bc83.chunk.js",
    "revision": "5dbb0008511d34a3f8e4c71c4bc5bac0"
  },
  {
    "url": "static/js/4.e44c6057.chunk.js",
    "revision": "26bc3866f85226d5af0d0cc456e59fff"
  },
  {
    "url": "static/js/40.c5d79823.chunk.js",
    "revision": "8f545cbc180bcf2973801027acd07f9f"
  },
  {
    "url": "static/js/41.b619e89f.chunk.js",
    "revision": "82a6930c79291d30e6e78a9294e5887a"
  },
  {
    "url": "static/js/42.10d0bd77.chunk.js",
    "revision": "ac8105f6b0e2bb9b4613015fb896a9ce"
  },
  {
    "url": "static/js/43.b047c03a.chunk.js",
    "revision": "d30874ad2ab3740a35d755ac3e17228a"
  },
  {
    "url": "static/js/44.08369b31.chunk.js",
    "revision": "42f86301d5562f45ca106256f30b6dc7"
  },
  {
    "url": "static/js/45.ddccffe3.chunk.js",
    "revision": "10605f3a581b011096db5f8aa89e6a37"
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
    "url": "static/js/5.bcf2cb71.chunk.js",
    "revision": "843d1d65df41f5696a74b86b4975b40e"
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
    "url": "static/js/6.b1e776c5.chunk.js",
    "revision": "f59a4108d2e148500313bdd7e2f80121"
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
    "url": "static/js/7.cc564b3d.chunk.js",
    "revision": "2c597e083b08532dd3f8754ea780da7b"
  },
  {
    "url": "static/js/8.4f95ae9b.chunk.js",
    "revision": "6fd5badb3510cc2c39233963ac56eed0"
  },
  {
    "url": "static/js/9.781d32a4.chunk.js",
    "revision": "4bcb2a101f8a284f7ddf02053489d1e0"
  },
  {
    "url": "static/js/main.23f1fc92.js",
    "revision": "9964556701405907eaa5648fd3f7a6fc"
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
