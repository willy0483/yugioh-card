const cards = document.querySelectorAll(".cardTilting");

cards.forEach((card) => {
  const img = card.querySelector(".cardsImg");

  img.addEventListener("mousemove", (e) => {
    rotateElement(e, card);
  });

  img.addEventListener("mouseleave", () => {
    resetElement(card);
  });
});

function rotateElement(e, element) {
  // Remove transition for immediate effect on mousemove
  element.style.transition = "none";

  // get mouse position relative to the card
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // find the middle of the card
  const middleX = rect.width / 2;
  const middleY = rect.height / 2;

  // get offset from middle as a percentage
  // and tone it down a little
  const offsetX = ((x - middleX) / middleX) * 15;
  const offsetY = ((y - middleY) / middleY) * 15;

  // set rotation
  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -1 * offsetY + "deg");
  element.style.transform = `perspective(5000px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
}

function resetElement(element) {
  // Add transition for smooth effect on mouse leave
  element.style.transition = "transform 0.5s ease-in-out";
  element.style.setProperty("--rotateX", "0deg");
  element.style.setProperty("--rotateY", "0deg");
  element.style.transform = "perspective(5000px) rotateY(0deg) rotateX(0deg)";
}
