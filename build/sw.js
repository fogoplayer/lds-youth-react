/*global workbox*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  // workbox.routing.registerRoute(
  //   /(.*)materialize\.min\.(?:js|css)/,
  //   workbox.strategies.cacheFirst({
  //     cacheName: 'materialize-cache'
  //   })
  // );
  workbox.precaching.precacheAndRoute([
    "/materialize.min.js",
    "/materialize.min.css"
  ]);
  workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "2fc354441c4347fcd17319875808e3da"
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
    "revision": "6a6c1bca1a84778c551d0b19d62980d2"
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
    "revision": "472171f683a0ee76f531540beda20237"
  },
  {
    "url": "static/css/main.42d04f98.css",
    "revision": "a8e025ee06f76ecbefacc3f4014949aa"
  },
  {
    "url": "static/js/0.42fbe887.chunk.js",
    "revision": "fe45bf5c6882e429d502dad40aae15e1"
  },
  {
    "url": "static/js/1.55e9d00f.chunk.js",
    "revision": "686472da6e05da9f847631bb0a856024"
  },
  {
    "url": "static/js/10.67cd6c58.chunk.js",
    "revision": "8212ee6f911a1857912279c1dc24ec6e"
  },
  {
    "url": "static/js/11.b6f7a227.chunk.js",
    "revision": "3abd1d6999fac2b30cfee409418f24c7"
  },
  {
    "url": "static/js/12.a7d650bf.chunk.js",
    "revision": "89c8b319e0885b34187418553889fe39"
  },
  {
    "url": "static/js/13.49eacfd7.chunk.js",
    "revision": "679def2633ec0b75a3c63ce06d99890b"
  },
  {
    "url": "static/js/14.500d38be.chunk.js",
    "revision": "852ac260a12016115cf4f638891e2823"
  },
  {
    "url": "static/js/15.5fde3722.chunk.js",
    "revision": "58efa224d77c855d6f7469d3d5ab2914"
  },
  {
    "url": "static/js/16.020032f2.chunk.js",
    "revision": "7253786b887f4d5d6ee724f339d07f3d"
  },
  {
    "url": "static/js/17.7a5428fc.chunk.js",
    "revision": "4396029b36b23df8b065f3fa5b188224"
  },
  {
    "url": "static/js/18.df856b10.chunk.js",
    "revision": "7964745df78b4c54fb501ba610db1afc"
  },
  {
    "url": "static/js/19.99c703a9.chunk.js",
    "revision": "8d985b531550edc934fad176bce86dda"
  },
  {
    "url": "static/js/2.b9fb7a9a.chunk.js",
    "revision": "e19ece64abaaff56d447f9fe2c62c198"
  },
  {
    "url": "static/js/20.67a8321f.chunk.js",
    "revision": "85c513a6024861f9951e2e22cfbaf0ea"
  },
  {
    "url": "static/js/21.676b790c.chunk.js",
    "revision": "a03371f2d097db6ad3ceb6467fa6d29f"
  },
  {
    "url": "static/js/22.e6643ad2.chunk.js",
    "revision": "5cecd31aee04de1f0150cd27b620c36b"
  },
  {
    "url": "static/js/23.aa3914bc.chunk.js",
    "revision": "f59160e165229e18d5d375c39a0ca486"
  },
  {
    "url": "static/js/24.68c9ef08.chunk.js",
    "revision": "24c31e8dccfad9fc419e4dca355997f9"
  },
  {
    "url": "static/js/25.25edc093.chunk.js",
    "revision": "e48fee192eef7c4db5a4cee3a9ea430c"
  },
  {
    "url": "static/js/26.40678b1c.chunk.js",
    "revision": "bdc85a52b59da85dc0727415cd610973"
  },
  {
    "url": "static/js/27.c0967299.chunk.js",
    "revision": "fb21e3b0230d0826e12800271f1fed73"
  },
  {
    "url": "static/js/28.b7340a4b.chunk.js",
    "revision": "947fea35f60075808dac584cfd39836e"
  },
  {
    "url": "static/js/29.bea167d3.chunk.js",
    "revision": "61acf9a7aa85f71d25c630636553cf15"
  },
  {
    "url": "static/js/3.272606a1.chunk.js",
    "revision": "c09adeba3cf2ca93abf734b838d4e2a9"
  },
  {
    "url": "static/js/30.28624d01.chunk.js",
    "revision": "e38b5d96145d20597c494e27b3f6d075"
  },
  {
    "url": "static/js/31.4701af9e.chunk.js",
    "revision": "16ce6a1703079302f59c0830e4d0a6ff"
  },
  {
    "url": "static/js/32.8b47636b.chunk.js",
    "revision": "e7f71dfa94192399062abb61993ddc68"
  },
  {
    "url": "static/js/33.662f700e.chunk.js",
    "revision": "7706c3c1fb101d3ad7901eb444d46c69"
  },
  {
    "url": "static/js/34.b7ee5a2f.chunk.js",
    "revision": "c419508400e30ec68daaaee8c516aba7"
  },
  {
    "url": "static/js/35.d7b61c28.chunk.js",
    "revision": "122d891f00cf0bcd2ebdfd2002c8ae5c"
  },
  {
    "url": "static/js/36.532f673d.chunk.js",
    "revision": "830d63ed225f3b7dd57e1996d7950257"
  },
  {
    "url": "static/js/37.6b553b0a.chunk.js",
    "revision": "178aae413ef8bf9612160d4221b5e075"
  },
  {
    "url": "static/js/38.212fd81c.chunk.js",
    "revision": "3a7ff6e58488488beac9ee10c4e6407b"
  },
  {
    "url": "static/js/39.7cf42b8c.chunk.js",
    "revision": "020d3500e80a878b615628f2461d07ac"
  },
  {
    "url": "static/js/4.5f6ec5a0.chunk.js",
    "revision": "7170d4de7fec270c5090fb63e7178183"
  },
  {
    "url": "static/js/40.9dd723ca.chunk.js",
    "revision": "3279c7dc4ea1adc6bf5e3f65ec3439ab"
  },
  {
    "url": "static/js/41.ce87406d.chunk.js",
    "revision": "0efc9e943204082108562b52ebc3174f"
  },
  {
    "url": "static/js/42.0cdcfd20.chunk.js",
    "revision": "91793d33d91a4fad7af060ca9cf9639a"
  },
  {
    "url": "static/js/43.feb4747d.chunk.js",
    "revision": "8b6d94600bb6c7ce6a855ba90239668d"
  },
  {
    "url": "static/js/44.15bb3296.chunk.js",
    "revision": "3015079b492b5f9df9f9e1ade55c1790"
  },
  {
    "url": "static/js/45.57c3c85b.chunk.js",
    "revision": "745f080b87c9008cd822bec83068f92a"
  },
  {
    "url": "static/js/46.d94f1607.chunk.js",
    "revision": "3a30820d9d24c5bdad430023fe155737"
  },
  {
    "url": "static/js/47.88b6045c.chunk.js",
    "revision": "8d3a3791144a6cc5130ba371011a13f8"
  },
  {
    "url": "static/js/48.8a2bc17a.chunk.js",
    "revision": "16ebb243c4a02ac42318e1906e0daf12"
  },
  {
    "url": "static/js/49.05c3f4f9.chunk.js",
    "revision": "e64378e3034549e3de1bdd95e0febb0a"
  },
  {
    "url": "static/js/5.db2273fa.chunk.js",
    "revision": "42770c6ad0dbd810c2b5b2bc23b2388f"
  },
  {
    "url": "static/js/50.fc657d34.chunk.js",
    "revision": "5e5aae616605f52b86ad51b48920916b"
  },
  {
    "url": "static/js/51.18130bea.chunk.js",
    "revision": "db4f195c0870abc076454cd160b66e0e"
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
    "url": "static/js/6.1f75d4a3.chunk.js",
    "revision": "808b0bdf7922eeb4c7cdb798e4afe912"
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
    "url": "static/js/7.87cfb075.chunk.js",
    "revision": "cff3ac5bffeb2b6a58885c4a26504011"
  },
  {
    "url": "static/js/8.286ff4fd.chunk.js",
    "revision": "dd620dd648261d68096ecca6e34d675b"
  },
  {
    "url": "static/js/9.a7103de9.chunk.js",
    "revision": "5e1c759ef1923a6228248817b096d830"
  },
  {
    "url": "static/js/main.14a45cfc.js",
    "revision": "41db96fa33625982ccd2fa491f2938d7"
  }
]);
}
else {
  console.log(`Boo! Workbox didn't load 😬`);
}
