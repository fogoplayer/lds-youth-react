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
    "revision": "3428c1d7a52ff710094180dc9c6e6085"
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
    "revision": "bb72e98d5743affcd619b0b70ea40176"
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
    "revision": "50fad41e01a0cc5022650d02345f2dbc"
  },
  {
    "url": "static/css/main.2f44de79.css",
    "revision": "e5fb9085fd55f2c5f7d2ca9298c5975c"
  },
  {
    "url": "static/js/0.fda79525.chunk.js",
    "revision": "2adf7ff357ac89c9d194a24aa23eedf3"
  },
  {
    "url": "static/js/1.1ab3b596.chunk.js",
    "revision": "dfb626d5eae0cc116a5d94de8608dbe9"
  },
  {
    "url": "static/js/10.a5fa352d.chunk.js",
    "revision": "ce76ceb8d9f26cc2e7a71b287161994a"
  },
  {
    "url": "static/js/11.437e2bfe.chunk.js",
    "revision": "26a4da6d76f407fb4b72af7e5224badf"
  },
  {
    "url": "static/js/12.f4949b0b.chunk.js",
    "revision": "3d4e8447685218ff1e1921f7ebd549a1"
  },
  {
    "url": "static/js/13.610e4103.chunk.js",
    "revision": "d071f01054a334b97ea5988b81c35c7d"
  },
  {
    "url": "static/js/14.7ff3ec4e.chunk.js",
    "revision": "d33e91bdc978461bd00aeaf19194c684"
  },
  {
    "url": "static/js/15.ab986a59.chunk.js",
    "revision": "e987560ee7e39049115d9c065e4f2241"
  },
  {
    "url": "static/js/16.b0e18cba.chunk.js",
    "revision": "fd22868a615af095135266617b08b951"
  },
  {
    "url": "static/js/17.6734a783.chunk.js",
    "revision": "ddf532a6f695984ae747e3df761de6d9"
  },
  {
    "url": "static/js/18.bb7b7c35.chunk.js",
    "revision": "10a858381da5363bbf05b347210d4c9d"
  },
  {
    "url": "static/js/19.ecfd2e5b.chunk.js",
    "revision": "498f4138350769189bbdb117cc74ba7c"
  },
  {
    "url": "static/js/2.25ff6d80.chunk.js",
    "revision": "ebe26a28c219f8808cb16f8b492ab86a"
  },
  {
    "url": "static/js/20.45d1c637.chunk.js",
    "revision": "c9e0998aea8b6c277d8d3e262cd7f45c"
  },
  {
    "url": "static/js/21.6f9bc583.chunk.js",
    "revision": "0b58ecf927d2a07d0f9328f2bd39a4cd"
  },
  {
    "url": "static/js/22.acb275db.chunk.js",
    "revision": "e2eaa8d2998ae2216297c4474b572d7b"
  },
  {
    "url": "static/js/23.365c619d.chunk.js",
    "revision": "94dec1a31071a0668fedae2bc8c64cbd"
  },
  {
    "url": "static/js/24.7c27302d.chunk.js",
    "revision": "6912d96e37aa5bb04e640e035da87294"
  },
  {
    "url": "static/js/25.cbe618c0.chunk.js",
    "revision": "6ad14d458057b46b5f99dda2569ca87f"
  },
  {
    "url": "static/js/26.f6626b02.chunk.js",
    "revision": "c2d74cd3295bf27a78b6a26deadef8db"
  },
  {
    "url": "static/js/27.974178d1.chunk.js",
    "revision": "88b95968f0aecc759df493320a11233c"
  },
  {
    "url": "static/js/28.71920b08.chunk.js",
    "revision": "cafeb69a6eb70919ebe157d8050bd099"
  },
  {
    "url": "static/js/29.8bb89d3d.chunk.js",
    "revision": "d93f3b5fc7cb46ce844dcae13a0ba1d0"
  },
  {
    "url": "static/js/3.85513792.chunk.js",
    "revision": "afa0fb54054a98cf37fb027d0fe37b5a"
  },
  {
    "url": "static/js/30.74b63c28.chunk.js",
    "revision": "f6862505ad03ce42a03843d2cdb62aff"
  },
  {
    "url": "static/js/31.1dcce7ab.chunk.js",
    "revision": "f3030c8b10bd4a41af680637b97b4f02"
  },
  {
    "url": "static/js/32.722d7f73.chunk.js",
    "revision": "7603fe71d943acbfeb14825c98293c05"
  },
  {
    "url": "static/js/33.778b407a.chunk.js",
    "revision": "3c2fedd8d0f5e3ddde8cf0bf73ae2276"
  },
  {
    "url": "static/js/34.d49827f8.chunk.js",
    "revision": "73e2094e7fd48a3529a9f94f49f5629c"
  },
  {
    "url": "static/js/35.c7d63a7d.chunk.js",
    "revision": "1decaf6dc9e199d8a20a05521a9aa1ed"
  },
  {
    "url": "static/js/36.3d142ba8.chunk.js",
    "revision": "7ff06138b6fed27088daa9fe0c162947"
  },
  {
    "url": "static/js/37.07964753.chunk.js",
    "revision": "c42c940d8f72059ca85b84df05f3d6fe"
  },
  {
    "url": "static/js/38.a95e3554.chunk.js",
    "revision": "c6fd78394c30b9e2df7331e29985af77"
  },
  {
    "url": "static/js/39.940d41b3.chunk.js",
    "revision": "ca3c920549ac36525625a1a0a2b60680"
  },
  {
    "url": "static/js/4.0d83b125.chunk.js",
    "revision": "34ceaffec838bcf669a8f379fa90783e"
  },
  {
    "url": "static/js/40.f01adde5.chunk.js",
    "revision": "451fafb4c3a1a036dbcca4e0142bb8c2"
  },
  {
    "url": "static/js/41.ee3a6409.chunk.js",
    "revision": "aeae669e4c8340c14a8fe9161a2545c7"
  },
  {
    "url": "static/js/42.924685a0.chunk.js",
    "revision": "3862b7ae0eefba0689c090881cd2b96b"
  },
  {
    "url": "static/js/43.f23ee9eb.chunk.js",
    "revision": "0f61f382fb43d5435b3b01adae814a46"
  },
  {
    "url": "static/js/44.40a874f3.chunk.js",
    "revision": "2e6aad3bee2538b023fbf2b045723b8f"
  },
  {
    "url": "static/js/45.7dc0566c.chunk.js",
    "revision": "d56a1dae55b4bfdeb5effaea4f43c0de"
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
    "url": "static/js/5.3aef1501.chunk.js",
    "revision": "cad4cc0cceea64d6805da3a578bc1533"
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
    "url": "static/js/53.b46888a2.chunk.js",
    "revision": "8b37ab010ca80ca1cd9f85876975d8ea"
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
    "url": "static/js/6.b219f029.chunk.js",
    "revision": "d60a46db110b329a89123e1d27350601"
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
    "url": "static/js/7.c30623d3.chunk.js",
    "revision": "ec02ced05bf1e565a0beb68030e392b1"
  },
  {
    "url": "static/js/8.39b3a50c.chunk.js",
    "revision": "59705f9130a05c4aec8a377f95ed37ce"
  },
  {
    "url": "static/js/9.12c13b76.chunk.js",
    "revision": "2a09dc7c22329b81df605cf19bc64515"
  },
  {
    "url": "static/js/main.dbf65f6a.js",
    "revision": "d6ecea2fba17d4881eee52922dc4ef2e"
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
