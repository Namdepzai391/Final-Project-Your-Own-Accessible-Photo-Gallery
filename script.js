function showImage(img) {
  document.getElementById("imageDescription").innerText = img.alt;
}

function resetImage() {
  document.getElementById("imageDescription").innerText =
    "Hover over or focus on an image to see the description.";
}

function addTabIndex() {
  console.log("Page loaded — adding tabindex");

  let images = document.querySelectorAll(".gallery img");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}

window.onload = addTabIndex;
