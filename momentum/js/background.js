const images = ["pinkSky.jpg", "city2.jpg", "sunshine.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `../img/${chosenImage}`;

document.body.appendChild(bgImage);
