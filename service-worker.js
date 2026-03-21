self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("Patient Sugar Checke").then(function(cache){
      return cache.addAll(["index.html"])
    })
  );
});