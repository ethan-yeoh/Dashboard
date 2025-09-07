self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("dashboard-v1").then(cache => {
      return cache.addAll([
        "/dashboard/",
        "/dashboard/index.html",
        "/dashboard/kanban.html",
        "/dashboard/eisenhower.html",
        "/dashboard/calendar.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
