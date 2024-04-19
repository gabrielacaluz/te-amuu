document.addEventListener("DOMContentLoaded", () => {
const btn = document.body.querySelector("#btn");

btn.addEventListener("click", () => {
    if (btn.textContent === "clique aqui!") {
      btn.textContent = "te amuuu";
    } else {
      btn.textContent = "clique aqui!";
    }})});

