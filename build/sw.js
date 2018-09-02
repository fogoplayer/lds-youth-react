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
    "revision": "70b21558457c02f54c2c39ab73273312"
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
    "revision": "5935f39eb830478f3e5528d2fbfc1fca"
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
    "revision": "dd138eabc94998e0992a0d88d20322cb"
  },
  {
    "url": "static/css/main.5bbc4d0d.css",
    "revision": "070df8a7547ab6f2777d0cd088792a5a"
  },
  {
    "url": "static/js/0.a7f54cb3.chunk.js",
    "revision": "5ab0aa6858898e3d76b080fbb99d3d1f"
  },
  {
    "url": "static/js/1.df473281.chunk.js",
    "revision": "1e2fae30c493a5863166c8dfcd4ab0f2"
  },
  {
    "url": "static/js/10.e0e14237.chunk.js",
    "revision": "715edb14998a5c9a3064d917f1b3ccd7"
  },
  {
    "url": "static/js/11.f8a1bdc9.chunk.js",
    "revision": "5a6f5f9eeb526955ab70d47a3749c79c"
  },
  {
    "url": "static/js/12.6ab747ff.chunk.js",
    "revision": "8af1f880e21596044b7f605fbf01fcf5"
  },
  {
    "url": "static/js/13.17b2433e.chunk.js",
    "revision": "9c286ac42919be1c95e2c0f62a9355d7"
  },
  {
    "url": "static/js/14.81fe2848.chunk.js",
    "revision": "232814198028d640cf8df400b960cd2b"
  },
  {
    "url": "static/js/15.aa27827b.chunk.js",
    "revision": "bec10c3e76a1ed091dcd4c008d106e12"
  },
  {
    "url": "static/js/16.cd953bcb.chunk.js",
    "revision": "429640cd65691e0b274980683eff1144"
  },
  {
    "url": "static/js/17.e6dca3fb.chunk.js",
    "revision": "6763849f0b7eef6904be90f7df74572c"
  },
  {
    "url": "static/js/18.7cbe7d41.chunk.js",
    "revision": "04f3cea5e862022e9cdcdeed4e5065e5"
  },
  {
    "url": "static/js/19.c3b257cc.chunk.js",
    "revision": "a04ce0ac83447f5e627255915bb7bd12"
  },
  {
    "url": "static/js/2.3c3508af.chunk.js",
    "revision": "64aa504941e1f59ad1bf7e766242b58e"
  },
  {
    "url": "static/js/20.648f267a.chunk.js",
    "revision": "4003aa02f6b31a94b5d1ce2ad1791576"
  },
  {
    "url": "static/js/21.6b8608e1.chunk.js",
    "revision": "c31d177189b32b49bd88d2699f2cb646"
  },
  {
    "url": "static/js/22.7cda63e3.chunk.js",
    "revision": "e2624c55269ce6f52d8f66075d35e69a"
  },
  {
    "url": "static/js/23.05225f67.chunk.js",
    "revision": "c4fb205282f0b3d581dd8461748159f2"
  },
  {
    "url": "static/js/24.4e30444a.chunk.js",
    "revision": "0f5d53494a44eae113b44a492e4c87c0"
  },
  {
    "url": "static/js/25.a0036726.chunk.js",
    "revision": "43e7648cd4fe699f1f3a37e3e5ead52b"
  },
  {
    "url": "static/js/26.433739c3.chunk.js",
    "revision": "70fdb4354b1098bf08242617c2e8991a"
  },
  {
    "url": "static/js/27.1ee360ca.chunk.js",
    "revision": "e98d838b98f4e55dfb97b344e4949028"
  },
  {
    "url": "static/js/28.5e236d7c.chunk.js",
    "revision": "96f3b415e8837fea62207e046a117f93"
  },
  {
    "url": "static/js/29.5123c171.chunk.js",
    "revision": "b4c889609d5a0fc369d6b753ac2b9710"
  },
  {
    "url": "static/js/3.906e8781.chunk.js",
    "revision": "3584c3a0d5b649895764d34926f6b66d"
  },
  {
    "url": "static/js/30.4b08077e.chunk.js",
    "revision": "28ca13c175c667a555a744e6660345e7"
  },
  {
    "url": "static/js/31.b6412ff5.chunk.js",
    "revision": "46a07f8a84c1633643b904183896312b"
  },
  {
    "url": "static/js/32.970e660f.chunk.js",
    "revision": "63a2f694e63f21cc19d766e253a6b1a6"
  },
  {
    "url": "static/js/33.9d5c7789.chunk.js",
    "revision": "33759af4cff692dde24455b4e13a5b71"
  },
  {
    "url": "static/js/34.5646a195.chunk.js",
    "revision": "2b9e58a36d3dba518d7761c92e20c8db"
  },
  {
    "url": "static/js/35.ff52cebf.chunk.js",
    "revision": "9450219a3f1016d31534c8485d17340a"
  },
  {
    "url": "static/js/36.6533b9b5.chunk.js",
    "revision": "6c05928615261bef93b36002c11a15c4"
  },
  {
    "url": "static/js/37.97deff63.chunk.js",
    "revision": "4754fa4bb0f3aeecaba8bb8b36f62b7e"
  },
  {
    "url": "static/js/38.f4154cb4.chunk.js",
    "revision": "ec2128b1bd3dc078100297c2747e51b2"
  },
  {
    "url": "static/js/39.1df604e6.chunk.js",
    "revision": "ce0fb91b90d53af994ce6b7b83f5d911"
  },
  {
    "url": "static/js/4.4977ef5a.chunk.js",
    "revision": "94e6e75454b1931b1265766d6efc46ca"
  },
  {
    "url": "static/js/40.4c86aeb2.chunk.js",
    "revision": "a15d05425b8a094ef917aa1c0fa48a59"
  },
  {
    "url": "static/js/41.81412408.chunk.js",
    "revision": "27e3cadc4ed9017ceb516bd686b1ca2a"
  },
  {
    "url": "static/js/42.be6a26ac.chunk.js",
    "revision": "98f1cccc42e8156f0f1dcb363fd5fb6b"
  },
  {
    "url": "static/js/43.15faa2c5.chunk.js",
    "revision": "298a362e3fcdc2a3285b7b7cdcf3ceaf"
  },
  {
    "url": "static/js/44.16e69a4c.chunk.js",
    "revision": "d86c2bd35585a02495c5339a31474ac2"
  },
  {
    "url": "static/js/45.147b5567.chunk.js",
    "revision": "06cd7f457c18d4c127372e9bc1950f91"
  },
  {
    "url": "static/js/46.e6b65166.chunk.js",
    "revision": "9ecc01391130d0f828becb7755534784"
  },
  {
    "url": "static/js/47.74b1a6b2.chunk.js",
    "revision": "e878dfe754b5af0f922bb4fe50b8b9a2"
  },
  {
    "url": "static/js/48.734b030f.chunk.js",
    "revision": "b22cde48269b04b6b59f0a8eac3bc73e"
  },
  {
    "url": "static/js/49.6e642ed2.chunk.js",
    "revision": "c7cb9c71bfc989dbfbb8874a7a71430a"
  },
  {
    "url": "static/js/5.64673aaf.chunk.js",
    "revision": "49e0be585c2a9d5632708e0c66058f63"
  },
  {
    "url": "static/js/50.1ff91357.chunk.js",
    "revision": "99be7961ebe2d8dac4070f3eaaece9ad"
  },
  {
    "url": "static/js/51.d935cf14.chunk.js",
    "revision": "935c04148d70421b1d192ec1df07ae6f"
  },
  {
    "url": "static/js/52.8496f76a.chunk.js",
    "revision": "e2c262b8c0c7913b21907777feac1925"
  },
  {
    "url": "static/js/53.0cc29cf9.chunk.js",
    "revision": "c5a561e2af67aa2c343be91a1031528f"
  },
  {
    "url": "static/js/54.54ffa0d2.chunk.js",
    "revision": "6afe647d705c7a103dabd02ff043df03"
  },
  {
    "url": "static/js/55.54703152.chunk.js",
    "revision": "028b5bb92b07095a2b243c45255a08ad"
  },
  {
    "url": "static/js/56.6dfbe600.chunk.js",
    "revision": "4f1af73720bf50192d9be4fbd06a72c2"
  },
  {
    "url": "static/js/57.7b4564ad.chunk.js",
    "revision": "f04f56f1d1278f4e83dd018ed3651218"
  },
  {
    "url": "static/js/58.98f06246.chunk.js",
    "revision": "a885631d130e514c05c2e01e07d09af1"
  },
  {
    "url": "static/js/59.292904f0.chunk.js",
    "revision": "69af7323078a73fc1d02807497396ad2"
  },
  {
    "url": "static/js/6.651a2d05.chunk.js",
    "revision": "29b93551f3a296b74b874020cc183f29"
  },
  {
    "url": "static/js/60.3543a0fa.chunk.js",
    "revision": "039579eaba88844564c57ace7ac2e812"
  },
  {
    "url": "static/js/61.82ef01db.chunk.js",
    "revision": "2afa3d6009001db09814ea550f4c69a0"
  },
  {
    "url": "static/js/62.6c04d2ee.chunk.js",
    "revision": "9a33250f7f8a9056e8f5c5a9e11bd164"
  },
  {
    "url": "static/js/63.928ccae0.chunk.js",
    "revision": "9d0056ad7fc81f357d387fc1b466943d"
  },
  {
    "url": "static/js/64.1eae6e3a.chunk.js",
    "revision": "886059289cb35929cfc88967932208cd"
  },
  {
    "url": "static/js/65.552ab240.chunk.js",
    "revision": "b20da0dd08925a43338c35b578ddecac"
  },
  {
    "url": "static/js/66.d91b1c5e.chunk.js",
    "revision": "ef2091520dcecb6be21e47e57ecc64fa"
  },
  {
    "url": "static/js/7.bbd946bc.chunk.js",
    "revision": "b0d6627c8c02c639b2b7137fe5b4f7a9"
  },
  {
    "url": "static/js/8.3c00b0e5.chunk.js",
    "revision": "0673c428a2724c230cbf1711d0bcc085"
  },
  {
    "url": "static/js/9.35d3090c.chunk.js",
    "revision": "f3451e884a72dd05ca2c4da17a140b7c"
  },
  {
    "url": "static/js/main.bc0b12d8.js",
    "revision": "b7c7be287c6dfef5db95f6d83c613a4e"
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
