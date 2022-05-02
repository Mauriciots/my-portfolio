(() => {
  const toggleEl = document.querySelector(".navbar__toggle");
  const menuEl = document.querySelector(".navbar__menu");
  const bodyEl = document.querySelector("body");
  const headerEl = document.querySelector(".header");

  toggleEl.addEventListener("click", () =>
    menuEl.classList.toggle("navbar__menu--expanded")
  );

  bodyEl.onscroll = logScroll;

  setTimeout(logScroll, 0);

  function logScroll() {
    if (window.scrollY > 150) {
      headerEl.classList.add("header--with-border");
    } else {
      headerEl.classList.remove("header--with-border");
    }
  }
})();
