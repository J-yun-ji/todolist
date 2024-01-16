const images = ["1.jpg", "2.jpg", "3.jpg", "4.png", "5.jpg", "6.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/todolist/momentum/img/${chosenImage}`;
bgImage.alt = "background image";

document.body.appendChild(bgImage);
