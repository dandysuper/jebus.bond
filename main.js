(function () {
  "use strict";

  // staggered entrance
  window.addEventListener("DOMContentLoaded", function () {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.classList.add("loaded");
      });
    });
  });

  // live clock — Asia/Almaty
  var el = document.getElementById("clock");
  function tick() {
    try {
      var now = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Almaty",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(new Date());
      el.textContent = "ALMT " + now;
    } catch (e) {
      el.textContent = new Date().toLocaleTimeString();
    }
  }
  tick();
  setInterval(tick, 1000);
})();
