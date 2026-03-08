const wrapperVideo = document.querySelector(".making-process-video-wrapper");
const modalVideo = document.querySelector("#modalMakingVideo");
wrapperVideo.addEventListener("click", () => {
  modalVideo.classList.toggle("is-open");
});
