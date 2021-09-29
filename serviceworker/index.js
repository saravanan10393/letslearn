

window.addEventListener("DOMContentLoaded", () => {
  registerServiceWorker();
});

function registerServiceWorker() {
  navigator.serviceWorker.register("serviceworker.js")
  .then((reg) => {
    console.log("service workder registerd in web");
    getCounter();
  })
  .catch(err => console.log("Failed to register ", err))
}

function getCounter() {
  document.getElementById("ping")
    .addEventListener("click", () => {
      navigator.serviceWorker.ready.then(reg => {
        reg.active.postMessage({
          type: "ping"
        })
      })
    })

  navigator.serviceWorker.addEventListener('message', event => {
    console.log("received message ", event.data);
    document.getElementById("pong").innerHTML = event.data;
  });
  
}
