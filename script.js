const listTab = document.querySelectorAll(".head-list .list-item");
const checkbox = document.querySelectorAll('input[type="checkbox"]');
const toggle = document.querySelector(".switch-theme");
const content = document.querySelectorAll(".content");
// TABS NAV
listTab.forEach((li) => {
  li.addEventListener("click", (e) => {
    listTab.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");

    content.forEach((cont) => cont.classList.remove("hidden"));
    const status = li.dataset.status;
    checkbox.forEach((box) => {
      const parent = box.closest(".content");
      if (status === "active" && !box.checked) {
        parent.classList.add("hidden");
      } else if (status === "inactive" && box.checked) {
        parent.classList.add("hidden");
      }
    });
  });
});
// LIGHT / DARK
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
});
