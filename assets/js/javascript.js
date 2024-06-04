const pre = document.querySelector("pre");
const cardsImg = document.getElementById("cardsImg");


cardsImg.addEventListener("mousemove", (e) => {
  rotateElement(e, pre);
});

cardsImg.addEventListener("mouseleave", () => {
  resetElement(pre);
});

function rotateElement(e, element) {
  // Remove transition for immediate effect on mousemove
  element.style.transition = "none";

  // get mouse position
  const x = e.clientX;
  const y = e.clientY;

  // find the middle
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // get offset from middle as a percentage
  // and tone it down a little
  const offsetX = ((x - middleX) / middleX) * 25;
  const offsetY = ((y - middleY) / middleY) * 35;

  // set rotation
  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -1 * offsetY + "deg");
  element.style.transform = `perspective(5000px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
}

function resetElement(element) {
  // Add transition for smooth effect on mouse leave
  element.style.transition = "transform 0.5s ease";
  element.style.setProperty("--rotateX", "0deg");
  element.style.setProperty("--rotateY", "0deg");
  element.style.transform = "perspective(5000px) rotateY(0deg) rotateX(0deg)";
}
