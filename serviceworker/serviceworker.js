
self.addEventListener("install", (event) => {
  console.log("service worker installed");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("service worker activated");
  event.waitUntil(self.clients.claim());
});

let timer;
let counter = 0;
self.addEventListener("message", async (event) => {
  if(!timer) {
    console.log("creating and starting a interval");
    timer = setInterval(() => {
      console.log("interval is running");
      counter++;
    }, 1000);
  }
  if(event.data.type === "ping") {
    event.source.postMessage(`pong: ${counter}`);
  }
});