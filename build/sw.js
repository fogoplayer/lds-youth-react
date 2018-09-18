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
    "revision": "bebc73d2dd71fb24b0ef32c1a3788a88"
  },
  {
    "url": "images/duty-to-god.jpg",
    "revision": "aa0d59e54116c6914fa7ce4defe75d3b"
  },
  {
    "url": "images/logo.png",
    "revision": "4df9d7fff4f73e861b0048687d9906c8"
  },
  {
    "url": "images/logo.svg",
    "revision": "282ed8dc8fbe85fd228923bb8ff01a77"
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
    "revision": "61a612023e5e6f261c334183cbf4aa3d"
  },
  {
    "url": "manifest.json",
    "revision": "9743564251993b285ae204efd47dc732"
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
    "revision": "8ea45abcb90524b73d457b8c1a5d444d"
  },
  {
    "url": "static/css/main.e5c92b2d.css",
    "revision": "fe5d755ef684c2621e3326919cc4798d"
  },
  {
    "url": "static/js/0.05e5a65f.chunk.js",
    "revision": "828566309ae4afbb6181051aa797e12b"
  },
  {
    "url": "static/js/1.7c2aa85f.chunk.js",
    "revision": "e97f3b7b9e4d99ed866aefc1d37be0f9"
  },
  {
    "url": "static/js/10.655788e1.chunk.js",
    "revision": "dc095bca7a2b68d8b844b02850a44fb7"
  },
  {
    "url": "static/js/11.884f213c.chunk.js",
    "revision": "242e09ff9e77c2a7a9fab368799458ef"
  },
  {
    "url": "static/js/12.ec179d95.chunk.js",
    "revision": "09f1793ee6a7d7755dee0c69a686c7da"
  },
  {
    "url": "static/js/13.ab532530.chunk.js",
    "revision": "88a90f65856a7c9c6d9d754f42548396"
  },
  {
    "url": "static/js/14.23695691.chunk.js",
    "revision": "3c15e2e70c8e7e2272724a0c3555ef82"
  },
  {
    "url": "static/js/15.e52f1c66.chunk.js",
    "revision": "9cb049773d79950fa33231bafec20b35"
  },
  {
    "url": "static/js/16.75f969f9.chunk.js",
    "revision": "e6d00cbb0da4cf1a5df332f7477063ff"
  },
  {
    "url": "static/js/17.53b6a523.chunk.js",
    "revision": "17d5dfe78dce4481aecfded8ede93521"
  },
  {
    "url": "static/js/18.ba07b390.chunk.js",
    "revision": "ea12dbe7133b3cf51397aa8a6c9f4619"
  },
  {
    "url": "static/js/19.fbf9a042.chunk.js",
    "revision": "3115a93448eace6d4a2a8ba227e05c7f"
  },
  {
    "url": "static/js/2.5fa76359.chunk.js",
    "revision": "72f1f709268888ceaae6e86a63ffac1c"
  },
  {
    "url": "static/js/20.392daa22.chunk.js",
    "revision": "c84ef3695376492dd93200eb02e38808"
  },
  {
    "url": "static/js/21.548ddc54.chunk.js",
    "revision": "57c01da9427c72358124a441adaf7f3c"
  },
  {
    "url": "static/js/22.9fad1549.chunk.js",
    "revision": "627905a51874490b7ea7b50b854ad5b0"
  },
  {
    "url": "static/js/23.9e3e4118.chunk.js",
    "revision": "941348ef08a53f8adb1ee0114866b01e"
  },
  {
    "url": "static/js/24.533150dd.chunk.js",
    "revision": "125a3241a612d03a6f107431ddd39149"
  },
  {
    "url": "static/js/25.dfeffb3f.chunk.js",
    "revision": "4c620cbbc4f5c13fd1325a7dc5941f82"
  },
  {
    "url": "static/js/26.a39e87da.chunk.js",
    "revision": "4d17c24ef2cef6e56ea49cbcd78e571e"
  },
  {
    "url": "static/js/27.f67629ef.chunk.js",
    "revision": "a8f28b066cf1f014d3a41c495b00e6de"
  },
  {
    "url": "static/js/28.8e95dc8e.chunk.js",
    "revision": "b87c3869bd37f87156edc04751dcb725"
  },
  {
    "url": "static/js/29.604eb840.chunk.js",
    "revision": "8c773ca5e70c4c5cb83a766f1989037b"
  },
  {
    "url": "static/js/3.0cb6931c.chunk.js",
    "revision": "da2fc0c2496e6a694589b0c14d2a2571"
  },
  {
    "url": "static/js/30.93096137.chunk.js",
    "revision": "d2c58b43e21749b1389c3e71e581d7b0"
  },
  {
    "url": "static/js/31.790204ee.chunk.js",
    "revision": "eb3c1cdef52d2b7b89b50f4398443b76"
  },
  {
    "url": "static/js/32.7294be25.chunk.js",
    "revision": "1c2f92053bc3e6e78eb80ce6df45ee1d"
  },
  {
    "url": "static/js/33.dd150149.chunk.js",
    "revision": "82b4358aba2aa37e9241583afc852f96"
  },
  {
    "url": "static/js/34.757fae78.chunk.js",
    "revision": "3f3a1dc022cf45f05263c79d4b9c55df"
  },
  {
    "url": "static/js/35.49ecc513.chunk.js",
    "revision": "887cbaad684d4b28182889d9b54a3b73"
  },
  {
    "url": "static/js/36.ba4102de.chunk.js",
    "revision": "70d75aa861a2f232e11b5a8372e53811"
  },
  {
    "url": "static/js/37.7ffc0d20.chunk.js",
    "revision": "f9155308cc26005fd68dc11cc2dbb6b7"
  },
  {
    "url": "static/js/38.d1769690.chunk.js",
    "revision": "c19846e6cb71bfd9570a0b1fed9d1891"
  },
  {
    "url": "static/js/39.df068ccb.chunk.js",
    "revision": "f9d3ba654419dd2818d75823afa798c2"
  },
  {
    "url": "static/js/4.7e86b6fe.chunk.js",
    "revision": "c4606de58afc1c1e887d549990a7b74b"
  },
  {
    "url": "static/js/40.3f1b325c.chunk.js",
    "revision": "a426c3826111c5d1bbdea082ca764a5c"
  },
  {
    "url": "static/js/41.8d6037d8.chunk.js",
    "revision": "83aa9d9663659a13551a6e677995fe55"
  },
  {
    "url": "static/js/42.2026218d.chunk.js",
    "revision": "0d0b29c0ac9e6cbe8d4ecb400fb1b69f"
  },
  {
    "url": "static/js/43.e8fa79ea.chunk.js",
    "revision": "544ceb9a93a8b7e320e5b0fa2888a9ce"
  },
  {
    "url": "static/js/44.81fcd690.chunk.js",
    "revision": "ffad0bfd2006b88125a125d9e519377a"
  },
  {
    "url": "static/js/45.24d464b9.chunk.js",
    "revision": "ecd233318b4356a1f24556a365435efc"
  },
  {
    "url": "static/js/46.d8094bad.chunk.js",
    "revision": "42ac1c1eef83e3999b30fc594bfe3099"
  },
  {
    "url": "static/js/47.404ee8ad.chunk.js",
    "revision": "4a6a32679b2ab2d0eea19904b448c5c6"
  },
  {
    "url": "static/js/48.c985996b.chunk.js",
    "revision": "da3416dfcd6a2b78bcd824426307078d"
  },
  {
    "url": "static/js/49.8effc2af.chunk.js",
    "revision": "73f8cef8078b10633db82e925c1a2c06"
  },
  {
    "url": "static/js/5.c25727c0.chunk.js",
    "revision": "0aaa81f8608836276acc4127ea09e2be"
  },
  {
    "url": "static/js/50.57f0b604.chunk.js",
    "revision": "6093837a98a5b20f988b07ccd150700c"
  },
  {
    "url": "static/js/51.44181c1e.chunk.js",
    "revision": "a58527d9b943cb0643ad344206f7768e"
  },
  {
    "url": "static/js/52.73522d72.chunk.js",
    "revision": "fae55edd7315532f78770730d53c6b86"
  },
  {
    "url": "static/js/53.21de5866.chunk.js",
    "revision": "bdb5638cdcf1da4923c6d4613bfdc72c"
  },
  {
    "url": "static/js/54.75d79085.chunk.js",
    "revision": "56fa215bb05f39048ae44b1c7d84be64"
  },
  {
    "url": "static/js/55.95847a97.chunk.js",
    "revision": "82ebbbd48aa2da5cbab18fb4687c0a73"
  },
  {
    "url": "static/js/56.ce9097b8.chunk.js",
    "revision": "c5f75f04c12c3eabb0aa01547530e554"
  },
  {
    "url": "static/js/57.634d8819.chunk.js",
    "revision": "dbed8162822f15b87bfe176b3c611b63"
  },
  {
    "url": "static/js/58.dbfbde3b.chunk.js",
    "revision": "593cc829bb489d66106989e70299f3fd"
  },
  {
    "url": "static/js/59.1e165e16.chunk.js",
    "revision": "0cb6a8b2306b5fb01539cbd0b9adee1f"
  },
  {
    "url": "static/js/6.a28e9f18.chunk.js",
    "revision": "bc2ea3e9d2a9c6fe2a3b57ac7d372fe9"
  },
  {
    "url": "static/js/60.b9182e10.chunk.js",
    "revision": "3478cdd1f92d3d8101addcad1efc233a"
  },
  {
    "url": "static/js/61.c9c9a9bc.chunk.js",
    "revision": "e739dfea308d16c87e97aa65f05e96c4"
  },
  {
    "url": "static/js/62.05f6f099.chunk.js",
    "revision": "8fee5b76889a4bbd5b5440ad26f713a0"
  },
  {
    "url": "static/js/63.5d2efa8b.chunk.js",
    "revision": "6bd4e1cd788ca4ce6ace47c0b5506bea"
  },
  {
    "url": "static/js/64.d548eb61.chunk.js",
    "revision": "10103b223c19c1b91501bc0ca930265d"
  },
  {
    "url": "static/js/65.018060bb.chunk.js",
    "revision": "0e7f15aa2f36fbc283484effc71f7742"
  },
  {
    "url": "static/js/66.8174baa0.chunk.js",
    "revision": "8a51c96548e0b21b47f09f5001dc25e9"
  },
  {
    "url": "static/js/67.b52f15ff.chunk.js",
    "revision": "b1315fae7d1ba8eefa26a8292ab74d52"
  },
  {
    "url": "static/js/7.4e40952e.chunk.js",
    "revision": "88b5789a8ccb77a3ef5bb2f13e162112"
  },
  {
    "url": "static/js/8.bd6cc9dc.chunk.js",
    "revision": "3ea9c771a099d40e693acc62613768a5"
  },
  {
    "url": "static/js/9.6ef123ea.chunk.js",
    "revision": "b205abc51d0a3749239cd5a30cfd0013"
  },
  {
    "url": "static/js/main.d2070a61.js",
    "revision": "097fd4ac9325718cc20673fee3e9c949"
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
