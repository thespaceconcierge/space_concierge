(function () {
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelectorAll(".nav__links a");

  // Nav background after scrolling past the top
  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  toggle.addEventListener("click", function () {
    var open = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", String(!open));
    toggle.setAttribute("aria-expanded", String(!open));
  });
  links.forEach(function (a) {
    a.addEventListener("click", function () {
      nav.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Quiet fade-in and active nav link
  if ("IntersectionObserver" in window) {
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); reveal.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { reveal.observe(el); });

    var active = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { active.observe(s); });
  } else {
    document.documentElement.classList.add("no-js");
  }

  // Send lead clicks to Google Tag Manager (mailto and LinkedIn links)
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href") || "";
    var method = href.indexOf("mailto:") === 0 ? "email" : href.indexOf("linkedin.com") > -1 ? "linkedin" : "";
    if (method) {
      (window.dataLayer = window.dataLayer || []).push({ event: "generate_lead", method: method });
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
