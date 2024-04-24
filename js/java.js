const modal = document.querySelector("#modal");
const openModel = document.querySelector(".open-button");
const closeModel = document.querySelector(".close-button");
const openMdl = document.querySelector(".open-btn");

openModel.addEventListener("click", () => {
  modal.showModal();
});

openMdl.addEventListener("click", () => {
  modal.showModal();
});

closeModel.addEventListener("click", () => {
  modal.close();
});
