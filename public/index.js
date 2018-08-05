var imageContainer = document.getElementById("imageContainer");
var imageModal = document.getElementById("imageModal")
var imageModalImage = document.getElementById("imageModalImage")
imageContainer.addEventListener("click", function (event) {
  if (event.target.nodeName === "IMG") {
    var instagramURL = event.target.src
    imageModalImage.src = instagramURL
    imageModal.classList.remove ("hideModal")
  }
})
imageModal.addEventListener("click", function (event) {
  if (event.target.nodeName !== "IMG") {
    imageModal.classList.add ("hideModal")
  }
})