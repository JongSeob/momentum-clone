// const images = ["0.jpg", "1.jpg", "2.jpg"];
const images = ["0.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

const bgImg = document.createElement("img");

bgImg.src = `images/${chosenImage}`;
bgImg.classList.add("img--full-size");

document.body.appendChild(bgImg);
