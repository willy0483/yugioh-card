document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".cardTilting");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    cards.forEach((card) => {
        const img = card.querySelector(".cardsImg");

        img.addEventListener("mousemove", (e) => {
            rotateElement(e, card);
        });

        img.addEventListener("mouseleave", () => {
            resetElement(card);
        });

        img.addEventListener("click", () => {
            openModal(img.src);
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
        element.style.transition = `transform ${getComputedStyle(document.documentElement).getPropertyValue('--transition-duration')} ease-in-out, box-shadow ${getComputedStyle(document.documentElement).getPropertyValue('--transition-duration')} ease-in-out`;
        element.style.setProperty("--rotateX", "0deg");
        element.style.setProperty("--rotateY", "0deg");
        element.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
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
});


document.querySelectorAll(".cardTilting").forEach((card) => {
    card.addEventListener("mousemove", function (event) {
        const flare = card.querySelector(".flare");
        flare.style.opacity = "1"; // Show the flare
        flare.style.top = event.clientY - card.getBoundingClientRect().top + "px";
        flare.style.left = event.clientX - card.getBoundingClientRect().left + "px";
    });

    card.addEventListener("mouseleave", function () {
        const flare = card.querySelector(".flare");
        flare.style.opacity = "0"; // Hide the flare when mouse leaves
    });
});




// ASIDE MENU
const myMenuOpen = document.getElementById('menuOpen')
const myMenuClose = document.getElementById('menuClose')


myMenuOpen.addEventListener('click', (e) => {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("main-container").style.marginLeft = "250px";
    document.getElementById("sideMenu").style.transition = 'width 0.5s ease-in-out';
    document.getElementById("main-container").style.transition = 'margin-left 0.5s ease-in-out';

    myMenuOpen.style.visibility = 'hidden';
    myMenuOpen.style.transition = 'visibility 0s ease-in-out';

    document.getElementsByClassName('my-opacity')[0].style.opacity = '1'
    document.getElementsByClassName('my-opacity')[1].style.opacity = '1'
    document.getElementsByClassName('my-opacity')[2].style.opacity = '1'
    document.getElementsByClassName('my-opacity')[3].style.opacity = '1'
    document.getElementsByClassName('my-opacity')[4].style.opacity = '1'

})


const menuLink = document.querySelectorAll('.my-opacity');

menuLink.forEach((links) => {
    links.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("sideMenu").style.width = "0px";
        document.getElementById("main-container").style.marginLeft = "0px";
        myMenuOpen.style.visibility = 'visible';
        myMenuOpen.style.transition = 'visibility 0.5s ease-in-out 1s';

        document.getElementsByClassName('my-opacity')[0].style.opacity = '0'
        document.getElementsByClassName('my-opacity')[1].style.opacity = '0'
        document.getElementsByClassName('my-opacity')[2].style.opacity = '0'
        document.getElementsByClassName('my-opacity')[3].style.opacity = '0'
        document.getElementsByClassName('my-opacity')[4].style.opacity = '0'

        document.getElementById("sideMenu").style.transition = 'width 0.5s ease-in-out 0.5s';
        document.getElementById("main-container").style.transition = 'margin-left 0.5s ease-in-out 0.5s';
    })
});