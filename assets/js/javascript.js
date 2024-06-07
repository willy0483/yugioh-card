// image slider
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "assets/images/Uploads/Aether, the Empowering Dragon.jpg",
    "assets/images/Uploads/Amulet Dragon.jpg",
    "assets/images/Uploads/Red-Eyes Black Dragon.jpg",
    "assets/images/Uploads/Yata-Garasu.jpg",
    "assets/images/Uploads/Cyber Dragon.jpg",
    "assets/images/Uploads/Pot of Greed.jpg",
    "assets/images/Uploads/Exodia the Forbidden One.jpg",
    "assets/images/Uploads/Dark Magician.jpg",
    "assets/images/Uploads/Kashtira Fenrir.jpg",
    "assets/images/Uploads/Bystial Druiswurm.jpg",
  ];

  const slider = document.getElementById("slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const slidesInView = 3;
  let currentIndex = 0;

  function showSlides() {
    slider.innerHTML = ""; // Clear existing images
    for (let i = currentIndex; i < currentIndex + slidesInView; i++) {
      const imgElement = document.createElement("img");
      imgElement.className = "cardsImg animation"; // Add animation class
      imgElement.src = images[i % images.length]; // Use modulo to loop through images array
      imgElement.alt = images[i % images.length].substring(
        images[i % images.length].lastIndexOf("/") + 1,
        images[i % images.length].lastIndexOf(".")
      );
      slider.appendChild(imgElement);
    }
    attachEventListeners(); // Attach event listeners after creating elements
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Use modulo to loop to the end
    showSlides();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length; // Use modulo to loop to the beginning
    showSlides();
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  function attachEventListeners() {
    const cards = document.querySelectorAll(".animation");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    cards.forEach((card) => {
      const img = card;

      img.addEventListener("mousemove", (e) => {
        rotateElement(e, card);
      });

      img.addEventListener("mouseleave", () => {
        resetElement(card);
      });

      img.addEventListener("click", (e) => {
        openModal(e.target.src);
      });
    });

    function rotateElement(e, element) {
      element.style.transition = "none";
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const middleX = rect.width / 2;
      const middleY = rect.height / 2;
      const offsetX = ((x - middleX) / middleX) * 15;
      const offsetY = ((y - middleY) / middleY) * 15;
      element.style.setProperty("--rotateX", offsetX + "deg");
      element.style.setProperty("--rotateY", -1 * offsetY + "deg");
      element.style.transform = `perspective(1000px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
    }

    function resetElement(element) {
      element.style.transition = `transform ${getComputedStyle(
        document.documentElement
      ).getPropertyValue(
        "--transition-duration"
      )} ease-in-out, box-shadow ${getComputedStyle(
        document.documentElement
      ).getPropertyValue("--transition-duration")} ease-in-out`;
      element.style.setProperty("--rotateX", "0deg");
      element.style.setProperty("--rotateY", "0deg");
      element.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    }

    function openModal(src) {
      modal.style.display = "flex";
      modalImg.src = src;
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    window.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  // Ensure to attach listeners to the existing images as well
  attachEventListeners();
  showSlides(); // Initialize slider
});

// ASIDE MENU
const myMenuOpen = document.getElementById("menuOpen");
const myMenuClose = document.getElementById("menuClose");

myMenuOpen.addEventListener("click", (e) => {
  document.getElementById("sideMenu").style.width = "220px";
  document.getElementById("sideMenu").style.transition =
    "width 0.5s ease-in-out";
  document.getElementById("main-container").style.transition =
    "margin-left 0.5s ease-in-out";

  myMenuOpen.style.visibility = "hidden";
  myMenuOpen.style.transition = "visibility 0s ease-in-out";

  document.getElementsByClassName("my-opacity")[0].style.opacity = "1";
  document.getElementsByClassName("my-opacity")[1].style.opacity = "1";
  document.getElementsByClassName("my-opacity")[2].style.opacity = "1";
  document.getElementsByClassName("my-opacity")[3].style.opacity = "1";
  document.getElementsByClassName("my-opacity")[4].style.opacity = "1";
});

const menuLink = document.querySelectorAll(".my-opacity");

menuLink.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("sideMenu").style.width = "0px";
    document.getElementById("main-container").style.marginLeft = "0px";
    myMenuOpen.style.visibility = "visible";
    myMenuOpen.style.transition = "visibility 0.5s ease-in-out 1s";

    document.getElementsByClassName("my-opacity")[0].style.opacity = "0";
    document.getElementsByClassName("my-opacity")[1].style.opacity = "0";
    document.getElementsByClassName("my-opacity")[2].style.opacity = "0";
    document.getElementsByClassName("my-opacity")[3].style.opacity = "0";
    document.getElementsByClassName("my-opacity")[4].style.opacity = "0";

    document.getElementById("sideMenu").style.transition =
      "width 0.5s ease-in-out 0.5s";
    document.getElementById("main-container").style.transition =
      "margin-left 0.5s ease-in-out 0.5s";
  });
});
