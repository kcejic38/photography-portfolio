var imageContainer = document.getElementById("imageContainer");
var imageModal = document.getElementById("imageModal")
var imageModalImage = document.getElementById("imageModalImage")

imageContainer.addEventListener("click", function (event) {
  if (event.target.nodeName === "IMG") {
    var imageURL = event.target.src
    imageModalImage.src = imageURL
    imageModal.classList.remove("hideModal")
  }
});

imageModal.addEventListener("click", function (event) {
  if (event.target.nodeName !== "IMG") {
    imageModal.classList.add("hideModal")
  }
});

window.addEventListener("keydown", function (event) {
  var isAlreadyHidden = imageModal.classList.contains("hideModal")
  if (event.key === "Escape" && !isAlreadyHidden) {
    imageModal.classList.add("hideModal")
  }
});

for (var i = 0; i < photoURLs.length; i ++) {
  var image = document.createElement("img"); 
  image.classList.add("imageContainerItem");
  image.src = photoURLs[i];
  imageContainer.appendChild(image);
}

