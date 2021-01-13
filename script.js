/* When user clicks on burger icon, the mobile navigation menu is revealed */
let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile');
let exit = document.querySelector('.exit');
burger.onclick = function() {
    burger.style.display = "none";
    mobileMenu.style.display = "block";
    exit.style.display = "block";
}

/* Function removes exit icon upon loading windows */
function removeExit() {
    exit.style.display = "none";
}
removeExit();

/* When user clicks on exit icon, the mobile navigation menu is closed */
exit.addEventListener('click', function() {
    burger.style.display = "block";
    mobileMenu.style.display = "none";
    exit.style.display = "none";
});

/* When user clicks on services link, dropdown content is revealed */
let services = document.querySelector('.mobile__links-services');
let dropdownContent = document.querySelector('.mobile__dropdown-content');
services.onclick = function() {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      services.style.backgroundColor = "black";
    } else {
        dropdownContent.style.display = "block";
        services.style.backgroundColor = "#B52025";
    }
}

/* When user clicks on a link, the mobile menu is closed */
dropdownContent.addEventListener('click', function() {
    dropdownContent.style.display = "none";
    burger.style.display = "block";
    mobileMenu.style.display = "none";
    exit.style.display = "none";
});

/*When user clicks on contact link, the mobile menu is closed*/
let contact = document.querySelector(".contact");
contact.addEventListener('click', function() {
    dropdownContent.style.display = "none";
    burger.style.display = "block";
    mobileMenu.style.display = "none";
    exit.style.display = "none";
});

/* When user hovers over services link (Desktop Version), dropdown content is revealed */
let desktopServices = document.querySelector('.desktop-nav__services');
let desktopDropdownContent = document.querySelector('.desktop-nav__dropdown');
desktopServices.onmouseover = function() {
    desktopDropdownContent.style.display = "block";
}

/* When users cursor leaves the services area, the dropdown content is hidden */
let desktopSuper = document.querySelector('.desktop-nav__super');
desktopSuper.onmouseleave = function() {
    desktopDropdownContent.style.display = "none";
}

/*Jump to Top */
let jump = document.querySelector('.jump');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        jump.style.display = "block";
      } else {
        jump.style.display = "none";
      }
};

// When the user clicks on the button, scroll to the top of the document
jump.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

