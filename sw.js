/* Kill-switch: an earlier deployment registered a gate service worker at this
   scope. This replacement unregisters itself and reloads any controlled tabs,
   so browsers that still hold the old worker self-heal on their next visit. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  await self.registration.unregister();
  const clients = await self.clients.matchAll({ type: "window" });
  clients.forEach(c => c.navigate(c.url));
})()));
