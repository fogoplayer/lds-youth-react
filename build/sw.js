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
    "revision": "7eadb7e9e7738fc186bf696e66b5f3d6"
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
    "revision": "6e2b3125ab4c8c97b0f886795a6848ac"
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
    "revision": "b8a801ea4e8c31802c6eebdaf4fed44c"
  },
  {
    "url": "static/css/main.e5c92b2d.css",
    "revision": "fe5d755ef684c2621e3326919cc4798d"
  },
  {
    "url": "static/js/0.f0ab971b.chunk.js",
    "revision": "2beddab441bd960100e0625fe9df7f9a"
  },
  {
    "url": "static/js/1.8d8be976.chunk.js",
    "revision": "6d413022ab5c528e2b4c1b333e193c2c"
  },
  {
    "url": "static/js/10.ccbdedeb.chunk.js",
    "revision": "a69cb41bfcca33b92588501e156a55b4"
  },
  {
    "url": "static/js/11.04261cd6.chunk.js",
    "revision": "5a7e57e5aad6d656d5c112b3d9dbad9e"
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
    "url": "static/js/14.1ee8b9b3.chunk.js",
    "revision": "b459cdd6cc3319e1119582bb8ced0737"
  },
  {
    "url": "static/js/15.f86b5ab3.chunk.js",
    "revision": "e97a757d90bede9fa98dd6aa46e40566"
  },
  {
    "url": "static/js/16.b4d634dc.chunk.js",
    "revision": "bc68824a1a1032061c2d3dc91d338188"
  },
  {
    "url": "static/js/17.202f09f3.chunk.js",
    "revision": "885369896e4ff16648e3169249b437c4"
  },
  {
    "url": "static/js/18.72e34251.chunk.js",
    "revision": "18196ac7d107a6da510f528591f55eb3"
  },
  {
    "url": "static/js/19.27194a23.chunk.js",
    "revision": "94549dc1223350048a9f9fd2eb67baaf"
  },
  {
    "url": "static/js/2.7f7af57b.chunk.js",
    "revision": "d2f0b4c2f2897c211fe335ca6a3cf655"
  },
  {
    "url": "static/js/20.d491f26e.chunk.js",
    "revision": "8e5c604867a49ec2b1f197cb59ab9c24"
  },
  {
    "url": "static/js/21.3a572bcd.chunk.js",
    "revision": "1a90a15de361def793bd06e2b9fdb05b"
  },
  {
    "url": "static/js/22.aaa92233.chunk.js",
    "revision": "1777f678dab9215c264ab409968042a9"
  },
  {
    "url": "static/js/23.66f8174f.chunk.js",
    "revision": "a4eaa690d421a615aa6e0613997d2aa2"
  },
  {
    "url": "static/js/24.8785abb4.chunk.js",
    "revision": "e533d25da9ad090a30054eb0f0eaaa07"
  },
  {
    "url": "static/js/25.6798f2a4.chunk.js",
    "revision": "85181d8e23ba5ddde2580c24f8bb2ca4"
  },
  {
    "url": "static/js/26.375d356d.chunk.js",
    "revision": "21bfdf11c2cd5ec3e1c0c99e231c0fe0"
  },
  {
    "url": "static/js/27.a2942831.chunk.js",
    "revision": "23818f5b1d76bca742419d0cf3d63354"
  },
  {
    "url": "static/js/28.d0f20399.chunk.js",
    "revision": "006b1e773e654774e14fa0b4c391e8cc"
  },
  {
    "url": "static/js/29.415afa6a.chunk.js",
    "revision": "aa04f26cf853bc824f24b0de10fa981b"
  },
  {
    "url": "static/js/3.2400bab2.chunk.js",
    "revision": "8599cddd1f052bdebb090a3f91f0d5e7"
  },
  {
    "url": "static/js/30.3c8b648a.chunk.js",
    "revision": "0af845b3403627031ccbbbdeb5b8199b"
  },
  {
    "url": "static/js/31.b93006b5.chunk.js",
    "revision": "0cb4b441f24769cb17699923bea65542"
  },
  {
    "url": "static/js/32.33350cb1.chunk.js",
    "revision": "3f406761c7d3eda49bec0c4082bfb12c"
  },
  {
    "url": "static/js/33.c1f45e22.chunk.js",
    "revision": "3dae346577ef976efba31d2b99ad2b71"
  },
  {
    "url": "static/js/34.f69c35a3.chunk.js",
    "revision": "83bc80a98f517edc2e91f816463899fd"
  },
  {
    "url": "static/js/35.c7ffd835.chunk.js",
    "revision": "ddbd617d6b2b8c9a2db7662edc186f12"
  },
  {
    "url": "static/js/36.0318076c.chunk.js",
    "revision": "a0f952701439ec8441ee1fdd0ddf48bd"
  },
  {
    "url": "static/js/37.16970893.chunk.js",
    "revision": "39c13548d2bc78e60e1e3caaaac81ede"
  },
  {
    "url": "static/js/38.3a01ab5b.chunk.js",
    "revision": "3caca2003d6aac47da45e52b7dc626a7"
  },
  {
    "url": "static/js/39.2e404f47.chunk.js",
    "revision": "534d03ac76c9c45439906fa33fe11535"
  },
  {
    "url": "static/js/4.344c0f52.chunk.js",
    "revision": "20c41dba89937865efc80ca498f4179c"
  },
  {
    "url": "static/js/40.11eb3c72.chunk.js",
    "revision": "6220fe3a5b2c2d748a0191ee821d530e"
  },
  {
    "url": "static/js/41.0c446a7c.chunk.js",
    "revision": "c3381287a4bc3ba5a13bb470b7718f69"
  },
  {
    "url": "static/js/42.990bb304.chunk.js",
    "revision": "d32246290d2b51ea6c1660e7f54ca3ed"
  },
  {
    "url": "static/js/43.5c52b231.chunk.js",
    "revision": "b66e77b32239e4524d8228a6296fbcbc"
  },
  {
    "url": "static/js/44.afcfa6c8.chunk.js",
    "revision": "431522462af38a5aee48f45a464aabf6"
  },
  {
    "url": "static/js/45.07c8252a.chunk.js",
    "revision": "8005b13606099063a1c717f77d914503"
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
    "url": "static/js/5.9d05b693.chunk.js",
    "revision": "60d9af6c3cb6c9922cf5043aa26bbc3c"
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
    "url": "static/js/6.f6f728b5.chunk.js",
    "revision": "839b71b421c725add87d8db645d6b23b"
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
    "url": "static/js/7.1f63d3a1.chunk.js",
    "revision": "354a4c1f0dcee4b3290f5b168a992f48"
  },
  {
    "url": "static/js/8.b3222ebd.chunk.js",
    "revision": "fc1c829193d7d56a04fa2bee79f8727a"
  },
  {
    "url": "static/js/9.e16680eb.chunk.js",
    "revision": "6566922d82cebd999730ec2056e51e1e"
  },
  {
    "url": "static/js/main.8c4b5944.js",
    "revision": "a04e06e71817232150c09be788c69fc5"
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
