document.getElementById("sign-in-button").addEventListener("click", () => {
  window.location.href = "auth.html";
});

document.querySelector(".new-entry-button").addEventListener("click", () => {
  document.querySelector(".entry-modal").classList.toggle("active");
});
