document.getElementById("year").textContent = new Date().getFullYear();

const filters = document.querySelectorAll(".filter");
const works = document.querySelectorAll(".work");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.filter;
    works.forEach((work) => {
      const visible = category === "all" || work.dataset.cat === category;
      work.classList.toggle("is-hidden", !visible);
    });
  });
});
