'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bf565fbc372d5a8359b63a2878bb2740",
"assets/AssetManifest.bin.json": "3ef69d1e80c683b358527b9fc0d43b31",
"assets/AssetManifest.json": "d4508e7062f603431681f7666e0244a8",
"assets/assets/icons/bote.svg": "4b8586bfea60246e086c3b3355a1cada",
"assets/assets/icons/box.svg": "17db1f385e4bf3f95bc00a35c5ac2db2",
"assets/assets/icons/client_icon1.svg": "f6edbe84fe0478d125eceb0b310d32ee",
"assets/assets/icons/client_icon2.svg": "e3cbcc4c75a7be48021b3e6d4bc89cab",
"assets/assets/icons/client_icon3.svg": "0826e4388b63bb055dea1753c871c3de",
"assets/assets/icons/client_icon4.svg": "425d5c734db361a53c59523fcef00f8b",
"assets/assets/icons/client_icon5.svg": "8c26395a9878466db4723a57a17ed594",
"assets/assets/icons/client_icon6.svg": "0c84817210f1aef9d04808f858bee147",
"assets/assets/icons/clock.svg": "4b290173eaed9abb497ba8132846643b",
"assets/assets/icons/email.svg": "4302ce2b2d995c31bce588d7b013d9fc",
"assets/assets/icons/facebook.svg": "3f43e20626d086584bb3b74559a3146b",
"assets/assets/icons/flag.svg": "d702e9c9d6ac9d55793312c070adabe8",
"assets/assets/icons/flesh_left.svg": "ec7760a38d6076364adbc3131ef73666",
"assets/assets/icons/flight.svg": "24e5f24d5e6f6da91f418f0c719c0729",
"assets/assets/icons/icon_dialog_left.svg": "bb303debddc6f445be3e192a5dc2acbf",
"assets/assets/icons/icon_dialog_right.svg": "0fb6825c8d41e25aee8b38bce5cea294",
"assets/assets/icons/instagram.svg": "3f6850423c6fa4b6ce3a96058ab5f037",
"assets/assets/icons/jim.svg": "0745bd3a11b51f00e07b1b17af7b887d",
"assets/assets/icons/location.svg": "62b0cc82dceb43ce7a11b16c5b9ec256",
"assets/assets/icons/logisting_logo.svg": "074ab51aafc18f9b2e383c122da23d68",
"assets/assets/icons/logo_logisting_head.svg": "7a8c9ad3ac202e1d3f684667b14090fe",
"assets/assets/icons/next.svg": "9d90c539136673ea87c0a6da24ecf2bb",
"assets/assets/icons/phone.svg": "43b5d1ad2aa99b3b6d05480b0d462c3f",
"assets/assets/icons/show.svg": "4206f8d33ad033c8d8a0fa95b1c2ca77",
"assets/assets/icons/showoff.svg": "1aae54ef52a2396596be26e7da41a4a6",
"assets/assets/icons/Snapchat.svg": "2517180e9bb6264d57cbb32e07a1eaff",
"assets/assets/icons/star.svg": "1b4242e9366b9b618295ed87af6f81db",
"assets/assets/icons/Tiktok.svg": "c5f31ab86bbdf6b4eef192d70bb6c187",
"assets/assets/icons/twitter.svg": "96709f3bdc98ba350442f4971c22e26e",
"assets/assets/icons/vector.svg": "b79ff7bb3c6b73464fcf5b8fd6634c70",
"assets/assets/icons/Whatsapp.svg": "c9e77f0840b99ec0b28a95e15629c2df",
"assets/assets/images/banner1.png": "79d612ee114d6eefc68f4684cdd4857b",
"assets/assets/images/banner2.png": "e3153a6ec4789d1b62be8995f9b7cc89",
"assets/assets/images/banner3.png": "cf039646685c106486762822869e15e4",
"assets/assets/images/client_image.png": "204540eee65f90898b982b4a255306ed",
"assets/assets/images/image_costume_review.png": "3d02305283bf4281e03262f4c629e037",
"assets/assets/images/img.png": "709ccb871f00a206f8fb1d918b608fec",
"assets/assets/images/img_1.png": "2b561d34ee70355bd7c84905756a81a2",
"assets/assets/images/img_10.png": "3d4fa2fa2a34561267f78a22a2758832",
"assets/assets/images/img_11.png": "e544ad4f5c6aed94ff216e07a98e1940",
"assets/assets/images/img_12.png": "3ed25d9a4b23824a52c828a5f7f954e7",
"assets/assets/images/img_13.png": "13af9501311085a873b5e0a60c39b9a5",
"assets/assets/images/img_2.png": "04a0e777442c1a1db36ad33fe3a01b92",
"assets/assets/images/img_3.png": "379e1e8b0a7bfb4edae346c0ca10567f",
"assets/assets/images/img_4.png": "379e1e8b0a7bfb4edae346c0ca10567f",
"assets/assets/images/img_5.png": "992aff1825937a33d8b5364cd2a0b7f5",
"assets/assets/images/img_6.png": "922024c4dd070668182030f66bba9cbc",
"assets/assets/images/img_7.png": "ea1925e0b91b7f2e19ec6016f0a47fdc",
"assets/assets/images/img_8.png": "689a8dfee7fe772e2dbdcdb2202a4cd8",
"assets/assets/images/img_9.png": "990cb24cacfee8b96e2371c26375c4fc",
"assets/assets/images/img_icon_whatsapp.png": "684f72b9fb9758496229b484ae2fada9",
"assets/assets/images/img_whatsapp.png": "aefb1245f12b5d082cb1d23f020d9703",
"assets/assets/images/orange_arrow.png": "2c07ee017571e72f24306b49f8022870",
"assets/assets/images/questions_image.png": "ebd7f6cdcaffe89a246370f1df0aa3c9",
"assets/assets/images/service_image1.png": "a52e2c5444d8cba7852a90bf04ae8d90",
"assets/assets/images/service_image2.png": "5dba0ea1fd8b1b999ea4e9cef7a6ea11",
"assets/assets/images/service_image3.png": "b35529d23af506ac739599ffbb47f9e0",
"assets/assets/images/service_image4.png": "fcc1a5500ea742b6497cc0c642c5f0c4",
"assets/assets/images/why_us_arrow.svg": "11b6a6afb4199596953b807b36b449cb",
"assets/assets/images/why_us_image.png": "7865fa28bf07dbbd723c563ff280de6e",
"assets/assets/titles/clients.svg": "5e202920360a78549ea071d05fbe3252",
"assets/assets/titles/our_services.svg": "22e1d6f204b0a64c84f91e6b32497825",
"assets/assets/titles/questions.svg": "ea2569df0914d742bbf7bc12d46e6b4b",
"assets/assets/titles/who_we_are.svg": "d15e59cb4487bf12f35b93fd0470e929",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dba3074879fba3c1d9dbae3555ea1966",
"assets/NOTICES": "3eb5bbad6ad7d842750872b97cd40f89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3c206eed2cf53d00c64e35018d907033",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3e4135f9e0f8c0558970ce5e0571e78d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d4391283042c4459382109d9066da982",
"/": "d4391283042c4459382109d9066da982",
"main.dart.js": "5bc8f19ecbcf608adce8d76647d14bc0",
"manifest.json": "e724cec5252f08e97043753a17d2d97d",
"version.json": "4e9cb1e8887323bea723cad8d7e3869d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
