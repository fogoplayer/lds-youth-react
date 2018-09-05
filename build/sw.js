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
    "revision": "a86fb36c7dd551b3d52859ce9b669945"
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
    "revision": "1a3b490230406aeb1afea03a90760f12"
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
    "revision": "d74fdfb920e05911ff1a1c0cfaa25156"
  },
  {
    "url": "static/css/main.2f44de79.css",
    "revision": "e5fb9085fd55f2c5f7d2ca9298c5975c"
  },
  {
    "url": "static/js/0.dfc4724d.chunk.js",
    "revision": "1c809afe6f85e025d33f9c51eb031375"
  },
  {
    "url": "static/js/1.5d1c82e2.chunk.js",
    "revision": "45bc3ae0830e71525a2d8a7c6fff3eb0"
  },
  {
    "url": "static/js/10.d3787cfa.chunk.js",
    "revision": "b6fcedf8a8a83d91f799f41429591373"
  },
  {
    "url": "static/js/11.8d994c7d.chunk.js",
    "revision": "a24bfddc823e500c75f0a1406400d99a"
  },
  {
    "url": "static/js/12.f4949b0b.chunk.js",
    "revision": "3d4e8447685218ff1e1921f7ebd549a1"
  },
  {
    "url": "static/js/13.8b62afd3.chunk.js",
    "revision": "83d42640862218343530bb26788dfddd"
  },
  {
    "url": "static/js/14.bcaf7527.chunk.js",
    "revision": "338b00129c702ded734ce34f91b6a63f"
  },
  {
    "url": "static/js/15.e6623841.chunk.js",
    "revision": "d13c9af8365bd8d102a4e8ceda5f7bc0"
  },
  {
    "url": "static/js/16.9e6a7db9.chunk.js",
    "revision": "2bc270ff0aa24d018fe92c00edfaedb2"
  },
  {
    "url": "static/js/17.7b96b7e8.chunk.js",
    "revision": "e9cff2081d2da1679f375485fa3f7abf"
  },
  {
    "url": "static/js/18.7fe215bb.chunk.js",
    "revision": "5a868c68944569aabd7046ccafa18891"
  },
  {
    "url": "static/js/19.032bdc30.chunk.js",
    "revision": "1cdd794fc380bf18e8b2ef55ef0446d4"
  },
  {
    "url": "static/js/2.a79e710a.chunk.js",
    "revision": "88df9671742f5b064faed818de4f0460"
  },
  {
    "url": "static/js/20.ae2b1707.chunk.js",
    "revision": "0d0fd6198352f1c8e691afe9e28d8ada"
  },
  {
    "url": "static/js/21.a0d2c897.chunk.js",
    "revision": "4b2b20c93100d3670c061d1ae62d5ba2"
  },
  {
    "url": "static/js/22.64aa9e6f.chunk.js",
    "revision": "d7d3dd06ca26ef1a97a6558250fd8ac2"
  },
  {
    "url": "static/js/23.fc5d41e5.chunk.js",
    "revision": "b7369d48e07f1e515ca58b5b0028a04c"
  },
  {
    "url": "static/js/24.e4607601.chunk.js",
    "revision": "0326df6701730570501b947547a30d24"
  },
  {
    "url": "static/js/25.7d8e777b.chunk.js",
    "revision": "da78bb53ea8cc728cbc2667d2bbb2d8a"
  },
  {
    "url": "static/js/26.5388b15a.chunk.js",
    "revision": "b5914444a1e34b3c2366af7b52482a5b"
  },
  {
    "url": "static/js/27.8a6ba301.chunk.js",
    "revision": "6aacd2bda49b31486c05efe868211bd9"
  },
  {
    "url": "static/js/28.ed6ffa54.chunk.js",
    "revision": "0bd2aae6a6e2fa6f794470672a1a45d7"
  },
  {
    "url": "static/js/29.33d3ad4a.chunk.js",
    "revision": "475f30a2271bd763f3cd020831797c04"
  },
  {
    "url": "static/js/3.77f1376b.chunk.js",
    "revision": "39ac416225fe4da653283da72a6a7ad9"
  },
  {
    "url": "static/js/30.0a803b2a.chunk.js",
    "revision": "306e51da7dfa8612015a7c3a74d5a937"
  },
  {
    "url": "static/js/31.647d7573.chunk.js",
    "revision": "f2450b0a77e156e5a8a7b6eb86e54d51"
  },
  {
    "url": "static/js/32.f215e7df.chunk.js",
    "revision": "25ebdb4c848592d379f64ab84c4f8ac2"
  },
  {
    "url": "static/js/33.5e5e1502.chunk.js",
    "revision": "3896e7eb637a14bb28e696c3bf8aa3f4"
  },
  {
    "url": "static/js/34.cdb19137.chunk.js",
    "revision": "bbe791ad25ce1c0f2f7d67f081991666"
  },
  {
    "url": "static/js/35.d972fd60.chunk.js",
    "revision": "5dfdb7708a0dddcb5a9aa46e271ec63a"
  },
  {
    "url": "static/js/36.81db1b71.chunk.js",
    "revision": "dac5897d8fe290b7edc3ebce0df7c5d8"
  },
  {
    "url": "static/js/37.d53fc77b.chunk.js",
    "revision": "97be4247cf3ab1d9167dcae4831ff993"
  },
  {
    "url": "static/js/38.1a76ce9a.chunk.js",
    "revision": "e8fc77d76ea03ea6126bfa384b88519a"
  },
  {
    "url": "static/js/39.e5af03f6.chunk.js",
    "revision": "7b2ad8fc92c5aee0f22d6c3ff30960c2"
  },
  {
    "url": "static/js/4.2ff7cae2.chunk.js",
    "revision": "4e150d2cacdd2570f493ccbc374259bd"
  },
  {
    "url": "static/js/40.534ba30c.chunk.js",
    "revision": "5e10342fcaaeb3c6b249e5d53a0ff43d"
  },
  {
    "url": "static/js/41.f79a45e3.chunk.js",
    "revision": "b11163b477929af85bafc05d773bb14f"
  },
  {
    "url": "static/js/42.1fdffc8d.chunk.js",
    "revision": "0fa3ab92724711361d7775d89e7aa15d"
  },
  {
    "url": "static/js/43.5210695c.chunk.js",
    "revision": "fb0dc80ed9d227c996a07cf2b50a7f03"
  },
  {
    "url": "static/js/44.c8d0a99a.chunk.js",
    "revision": "f6eb574a0799e2bc55f985a81686c330"
  },
  {
    "url": "static/js/45.de11b0f9.chunk.js",
    "revision": "036a5d0df0a45c858bd8dcfafd4c8b27"
  },
  {
    "url": "static/js/46.ce28a742.chunk.js",
    "revision": "d5e6fc9303cf6189d71861c06c98b509"
  },
  {
    "url": "static/js/47.a41ee90f.chunk.js",
    "revision": "49691930ac2b8b754f5b79ab6edd150e"
  },
  {
    "url": "static/js/48.0d374a40.chunk.js",
    "revision": "298867eda29af7db8df1ef187534e0c2"
  },
  {
    "url": "static/js/49.3f0d7557.chunk.js",
    "revision": "c033dc526227a6043384889d3e9c1b64"
  },
  {
    "url": "static/js/5.10dadb77.chunk.js",
    "revision": "f9b65b8ca9afddfe29857431f06cecd9"
  },
  {
    "url": "static/js/50.a8c91f37.chunk.js",
    "revision": "e55cab197505d5733ed79a5790123ed6"
  },
  {
    "url": "static/js/51.94e1d691.chunk.js",
    "revision": "56dd9a9c932854588007acd75e8a9c00"
  },
  {
    "url": "static/js/52.474527cd.chunk.js",
    "revision": "cfb385bddd3d2ac4fefe1e682047f8af"
  },
  {
    "url": "static/js/53.20cead9b.chunk.js",
    "revision": "f329ba44befd3c3c7f8f898382123f88"
  },
  {
    "url": "static/js/54.befb85c7.chunk.js",
    "revision": "0f322e5ee9059dce59cc5ce25e4faf22"
  },
  {
    "url": "static/js/55.5b60e829.chunk.js",
    "revision": "7c69e226f1a8cf400753d06d93345196"
  },
  {
    "url": "static/js/56.27fec20b.chunk.js",
    "revision": "3006af73eec4534c3d2f0d9ade60bf34"
  },
  {
    "url": "static/js/57.9b34a8bc.chunk.js",
    "revision": "0d3456fba2d2339a87b7a8e5c95fa3e7"
  },
  {
    "url": "static/js/58.73733662.chunk.js",
    "revision": "554ff44810e38071486daa3e18022d20"
  },
  {
    "url": "static/js/59.2a341667.chunk.js",
    "revision": "b7ae37785b03aa1eb1114310b9d4b7c8"
  },
  {
    "url": "static/js/6.d302ff0f.chunk.js",
    "revision": "d48fa43132082dbecd914f801cdaa7bb"
  },
  {
    "url": "static/js/60.4334ac5b.chunk.js",
    "revision": "b0f0382c69dbb6677ae225da67a99456"
  },
  {
    "url": "static/js/61.ae2e1123.chunk.js",
    "revision": "98d11aad27497d6897a4318c81ce760b"
  },
  {
    "url": "static/js/62.dacb224f.chunk.js",
    "revision": "91ab28dd8d8159c2334b171836bcd546"
  },
  {
    "url": "static/js/63.3302266f.chunk.js",
    "revision": "ebc710733bf87bddbc3624b04e215bd4"
  },
  {
    "url": "static/js/64.eb3aab68.chunk.js",
    "revision": "904958d34e3fc0510736b667746d6465"
  },
  {
    "url": "static/js/65.909eb572.chunk.js",
    "revision": "f87496dca0c2ab4ba1585ad66376e48e"
  },
  {
    "url": "static/js/66.a265a166.chunk.js",
    "revision": "054b71034755ff6d63f6ba9013d21936"
  },
  {
    "url": "static/js/7.167c2112.chunk.js",
    "revision": "4c446e24c5a096f02ce24d6b7ea0fde8"
  },
  {
    "url": "static/js/8.31758110.chunk.js",
    "revision": "c59b8039cf9da749cce1ae06d1483caa"
  },
  {
    "url": "static/js/9.b3e1dd4a.chunk.js",
    "revision": "1e065a7b528c60c506506632ddc84912"
  },
  {
    "url": "static/js/main.07f57abd.js",
    "revision": "6419fe7de5062552d29cb38f57a19910"
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
