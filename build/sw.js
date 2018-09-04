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
    "revision": "d3ff5137778dc69cd546aa7d3986cad3"
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
    "revision": "a7c7698d0e32cfd140cefc315f7f7c1a"
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
    "revision": "6887ae9404683c709416b259f3a9a8eb"
  },
  {
    "url": "static/css/main.2f44de79.css",
    "revision": "e5fb9085fd55f2c5f7d2ca9298c5975c"
  },
  {
    "url": "static/js/0.2ff26462.chunk.js",
    "revision": "abb328a4c4b2df2095a51c79768ccee6"
  },
  {
    "url": "static/js/1.830f5dfe.chunk.js",
    "revision": "c7132b613b076e6145aee16ffcf0fe8e"
  },
  {
    "url": "static/js/10.82c038d8.chunk.js",
    "revision": "8a3a9707424ef966883074bd2518065a"
  },
  {
    "url": "static/js/11.2f356aee.chunk.js",
    "revision": "5b0fdecaed975de62ca2c5df7f55e067"
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
    "url": "static/js/14.0aecd448.chunk.js",
    "revision": "cb7048fae97809ea25b7d47e254a980d"
  },
  {
    "url": "static/js/15.8c5a76c4.chunk.js",
    "revision": "164703069560e83c830f928506797d5b"
  },
  {
    "url": "static/js/16.c741cead.chunk.js",
    "revision": "3b61419df4fa6bf8135152969d106078"
  },
  {
    "url": "static/js/17.0078f3e3.chunk.js",
    "revision": "c84bd46c4f66234fb59ea04fb5631200"
  },
  {
    "url": "static/js/18.4d2588d3.chunk.js",
    "revision": "aa23dd581817dbf7d1300dd55ee2e2c3"
  },
  {
    "url": "static/js/19.b285891f.chunk.js",
    "revision": "ae11630b16c498b9d3c606891aa44f67"
  },
  {
    "url": "static/js/2.45f896d2.chunk.js",
    "revision": "d0502956180e055e3578495613e18b81"
  },
  {
    "url": "static/js/20.e80c1f1f.chunk.js",
    "revision": "df5c16e37af1749d0c28ae30620a3770"
  },
  {
    "url": "static/js/21.5f903c67.chunk.js",
    "revision": "58bfa549b6823b6e1a1b04b5cd92bc85"
  },
  {
    "url": "static/js/22.bfa8393a.chunk.js",
    "revision": "68736efe1fb8d7852d4460783a7c4c3d"
  },
  {
    "url": "static/js/23.74e9b86d.chunk.js",
    "revision": "8c1cf9405466e5256bc6a21566294730"
  },
  {
    "url": "static/js/24.63cce2ee.chunk.js",
    "revision": "3ba0dede1a2579cc4c4c7522e41f3c21"
  },
  {
    "url": "static/js/25.57e79648.chunk.js",
    "revision": "92a770bce66c133b4b6c61f903172121"
  },
  {
    "url": "static/js/26.d67c9732.chunk.js",
    "revision": "0f691c116c8590fd16218ba73732f10c"
  },
  {
    "url": "static/js/27.68db43f7.chunk.js",
    "revision": "ed30b384463bd8532e1a390cf98d9e6d"
  },
  {
    "url": "static/js/28.091f51fc.chunk.js",
    "revision": "f111682b33f3d15426399a84b6da2352"
  },
  {
    "url": "static/js/29.e3ed1217.chunk.js",
    "revision": "dbd60967d24ca25767b8744741cf6836"
  },
  {
    "url": "static/js/3.d4907fdb.chunk.js",
    "revision": "558f2ddaaa82267d67e88805cde75469"
  },
  {
    "url": "static/js/30.788cd136.chunk.js",
    "revision": "8f7b618fdbbecad1df52bcb3d3d6447f"
  },
  {
    "url": "static/js/31.fb2e1037.chunk.js",
    "revision": "b6aade3ccfdcffa1aec5f1375852ca00"
  },
  {
    "url": "static/js/32.db23cd25.chunk.js",
    "revision": "8a6fa8a5953167b9172d85240ae698de"
  },
  {
    "url": "static/js/33.043a90fc.chunk.js",
    "revision": "2d3d9c9caab48493bba71528938560e2"
  },
  {
    "url": "static/js/34.e28e4127.chunk.js",
    "revision": "082db913d322fb0042f89d8c61f4dc4b"
  },
  {
    "url": "static/js/35.cb384d5a.chunk.js",
    "revision": "b8479cf8a8e4ec696bfba0f2355b8c70"
  },
  {
    "url": "static/js/36.de3cf9a0.chunk.js",
    "revision": "5b1eb87c70d3fae6162021a567b7e8b8"
  },
  {
    "url": "static/js/37.77369c91.chunk.js",
    "revision": "aefa37eb80b4e7c0461c9b5a8856f12f"
  },
  {
    "url": "static/js/38.78892f19.chunk.js",
    "revision": "f02883a551170f2ad637fa842d8bb977"
  },
  {
    "url": "static/js/39.9aa050fc.chunk.js",
    "revision": "b4157bd83ae0fc81ba54025eaf70c684"
  },
  {
    "url": "static/js/4.7ec239c1.chunk.js",
    "revision": "5b0d06223edb94917d829dbc8e1fdc52"
  },
  {
    "url": "static/js/40.011366e7.chunk.js",
    "revision": "358ec298b6b333828e53d4d8583bf97d"
  },
  {
    "url": "static/js/41.4be3962e.chunk.js",
    "revision": "b45d72e0f062e5f164c545b27fdaa2d0"
  },
  {
    "url": "static/js/42.86e5264b.chunk.js",
    "revision": "a8d7a01991c1e4b612c9a718e8960778"
  },
  {
    "url": "static/js/43.600dff2c.chunk.js",
    "revision": "cc19fb6fa82af63e3514085b32979d9e"
  },
  {
    "url": "static/js/44.619bf251.chunk.js",
    "revision": "7becdcc73ad3bc6b2186f9282e02f2da"
  },
  {
    "url": "static/js/45.bd49870f.chunk.js",
    "revision": "949157d31f36625547e2b80dad35139e"
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
    "url": "static/js/5.e13a1174.chunk.js",
    "revision": "6128f8d39685c85c5fcc621ecc6a2f83"
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
    "url": "static/js/6.e89c25c2.chunk.js",
    "revision": "4a9e65a8d433abf42a5cf95411d78fae"
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
    "url": "static/js/7.3b5c07a9.chunk.js",
    "revision": "de4b633ca7ba5dffa3ca48ad64eb1f93"
  },
  {
    "url": "static/js/8.829cde1b.chunk.js",
    "revision": "3a6746c367362fdf0777be97bd61faf3"
  },
  {
    "url": "static/js/9.f12f08e2.chunk.js",
    "revision": "5a73358c982a5d4a34be299506d251a7"
  },
  {
    "url": "static/js/main.f7966531.js",
    "revision": "4f1d3a784205bc6d824539d1e096cbfa"
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
