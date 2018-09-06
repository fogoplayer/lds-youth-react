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
    "revision": "aaf5b215c8df81cdc6f10f46f1a1de1b"
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
    "revision": "02edfd28f3d09c203d6d51f453ad51e0"
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
    "revision": "1a1cbb6603dc06acf420c425cdde543b"
  },
  {
    "url": "static/css/main.2f44de79.css",
    "revision": "e5fb9085fd55f2c5f7d2ca9298c5975c"
  },
  {
    "url": "static/js/0.20b96a88.chunk.js",
    "revision": "d05f685e0f6e38da32665db7beece9d8"
  },
  {
    "url": "static/js/1.c70ccbe3.chunk.js",
    "revision": "d9f151916cb842ac08d56cab9ad8e567"
  },
  {
    "url": "static/js/10.caa3a020.chunk.js",
    "revision": "829ee07d2f5164254af19c43d214cd4a"
  },
  {
    "url": "static/js/11.a9405f68.chunk.js",
    "revision": "9abd93f42e555a54167fa003a6164d97"
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
    "url": "static/js/14.1db6a792.chunk.js",
    "revision": "b565476888b38bb238b43954b599b917"
  },
  {
    "url": "static/js/15.764cf4df.chunk.js",
    "revision": "a8cca67b47754c4f12833b05e9a19e50"
  },
  {
    "url": "static/js/16.0555578f.chunk.js",
    "revision": "ae0cac0aaa96c687048d7ad7fec8da63"
  },
  {
    "url": "static/js/17.7685457b.chunk.js",
    "revision": "704639e4e475894f8a04e06224e16d38"
  },
  {
    "url": "static/js/18.89a1ff0f.chunk.js",
    "revision": "3b72d1e030a580fc1a764fb0eba4b3be"
  },
  {
    "url": "static/js/19.f6d29148.chunk.js",
    "revision": "9ec326da6525761034ec41fe01d8dc90"
  },
  {
    "url": "static/js/2.08e5ac01.chunk.js",
    "revision": "4df70c3bae3753d18abaf01419444b3e"
  },
  {
    "url": "static/js/20.d935fe14.chunk.js",
    "revision": "931105dc1ad5f57fd3c4ce4a260d602f"
  },
  {
    "url": "static/js/21.3cddd5e7.chunk.js",
    "revision": "331e82518d66c9ea28d4864779acf6c2"
  },
  {
    "url": "static/js/22.51b8cd06.chunk.js",
    "revision": "316cb0fe8ae2db6a7c2b694f2109a752"
  },
  {
    "url": "static/js/23.7605a3d0.chunk.js",
    "revision": "61acbff304fce2d6780817d68d1507ca"
  },
  {
    "url": "static/js/24.1c7cdd28.chunk.js",
    "revision": "75b1143d3f58626b7a03e5113be170f7"
  },
  {
    "url": "static/js/25.074956ff.chunk.js",
    "revision": "e768f9ba18404420fd3ec5b753e2d50f"
  },
  {
    "url": "static/js/26.0fe2e3aa.chunk.js",
    "revision": "34b31e3b15ff1e9581ff76f9c52fc06f"
  },
  {
    "url": "static/js/27.df566859.chunk.js",
    "revision": "d308d88951c971f310debf671d418fc7"
  },
  {
    "url": "static/js/28.d508dc3c.chunk.js",
    "revision": "ee587daf2efa33f81255e97a780ce5a4"
  },
  {
    "url": "static/js/29.35e5e5c9.chunk.js",
    "revision": "e61b8be62ed623cd533c4d42b7617bd5"
  },
  {
    "url": "static/js/3.4ad8aaf2.chunk.js",
    "revision": "f9ea4db5ca0b61d8a58ccbacecbb040c"
  },
  {
    "url": "static/js/30.4aca4edb.chunk.js",
    "revision": "c0a8c95ce9d1e3d0e5db2c9e5481f31f"
  },
  {
    "url": "static/js/31.80f7fe8b.chunk.js",
    "revision": "c2ce756313d190cd79cd14547f4f18fc"
  },
  {
    "url": "static/js/32.ac36d0a9.chunk.js",
    "revision": "63aebcc2d3ac52bea11f91e3bfefda4b"
  },
  {
    "url": "static/js/33.c292bd11.chunk.js",
    "revision": "da0cbe53091c16e44737bd34156f867b"
  },
  {
    "url": "static/js/34.a1c11d44.chunk.js",
    "revision": "4ef8a8f66103518b02a7944b040a7935"
  },
  {
    "url": "static/js/35.7c5ac06c.chunk.js",
    "revision": "f3ad78e384079ec03df142a124df49ae"
  },
  {
    "url": "static/js/36.5555c505.chunk.js",
    "revision": "4c5e76fd8d7412c023b5274b2529d8b2"
  },
  {
    "url": "static/js/37.b67752f6.chunk.js",
    "revision": "493c39b8523b0bee170f7bd153edc4b8"
  },
  {
    "url": "static/js/38.f5dfa91a.chunk.js",
    "revision": "62d17d546bea738cac7278b3a98d587e"
  },
  {
    "url": "static/js/39.747ec8dd.chunk.js",
    "revision": "426398e78f285f73258e192632ec7ea4"
  },
  {
    "url": "static/js/4.4c49f607.chunk.js",
    "revision": "67e6d789f0c55fd19d31240379da4b88"
  },
  {
    "url": "static/js/40.03c7cbc0.chunk.js",
    "revision": "a69b9b5f932625eea2368260592cbc09"
  },
  {
    "url": "static/js/41.e3a7e67f.chunk.js",
    "revision": "63e919fcd435b144f194a24a87518e55"
  },
  {
    "url": "static/js/42.c7a56b6e.chunk.js",
    "revision": "8cbac7dbab0ce523115bbaf944a91103"
  },
  {
    "url": "static/js/43.70ce7de2.chunk.js",
    "revision": "d6787a073e72370dbcc2a65e1e4d6ff3"
  },
  {
    "url": "static/js/44.7165f883.chunk.js",
    "revision": "8dd600520b5e30576f7f95a0f59a0009"
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
    "url": "static/js/5.c2e9a878.chunk.js",
    "revision": "20ccf39f2fd8debb030d175c6e0dcb44"
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
    "url": "static/js/6.82b2eb53.chunk.js",
    "revision": "ba88cc9b25e5f93bfac3cf6d74332be0"
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
    "url": "static/js/7.de73635f.chunk.js",
    "revision": "4a83043df5f352065da0fa4e3103b410"
  },
  {
    "url": "static/js/8.d0f2ee00.chunk.js",
    "revision": "7ae0c644f2e6f1087f18ea1922d71454"
  },
  {
    "url": "static/js/9.ad1769b2.chunk.js",
    "revision": "a975420002985e347a4a1aff89bc64b5"
  },
  {
    "url": "static/js/main.9a421496.js",
    "revision": "249569b2b587b149f6522b259107fe08"
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
