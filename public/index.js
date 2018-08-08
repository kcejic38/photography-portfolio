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

var imageContainer = document.getElementById("imageContainer");

for (var i = 0; i < photoURLs.length; i ++) {
  var image = document.createElement("img"); 
  image.classList.add("imageContainerItem");
  image.src = "https://scontent-dfw5-2.cdninstagram.com/vp/" + photoURLs[i];
  imageContainer.appendChild(image);
}