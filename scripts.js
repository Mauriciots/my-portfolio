(() => {
  const toggleEl = document.querySelector(".navbar__toggle");
  const menuEl = document.querySelector(".navbar__menu");
  toggleEl.addEventListener("click", () =>
    menuEl.classList.toggle("navbar__menu--expanded")
  );
})();
