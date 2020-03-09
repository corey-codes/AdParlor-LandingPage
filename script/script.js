/* ==========================================
   MOBILE NAV
========================================== */

const mobileOpen = () => {

  //HTML ELEMENTS ******
  const navBar = document.querySelector('nav');
  const mobileNav = document.querySelector('.navBar__mobileNav');
  const navMenus = document.querySelector('.navBar__menuLists');
  const navLinks = document.querySelectorAll('.navBar__menuItem');
  

  // ADD LINKS TO MOBILE MENU *******
  const mobileLinks = [];
  mobileLinks.push(mobileNav, navLinks);

  // OPEN AND CLOSE MOBILE MENU *******
  navBar.addEventListener('click', () => {
    navMenus.classList.toggle('navBar__menu--mobileActive');

    // ANIMATE LINKS ON LOAD *******
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`
      }
    });

    // ANIMATE BURGER MENU WITH TOGGLE
    mobileNav.classList.toggle('navBar__mobileBurger--toExit');

  })

}

mobileOpen();

/* ==========================================
   SCROLL TO TOP ON PAGE RELOAD
========================================== */

const app = () => {

  window.addEventListener('load', scrollTo(0, 0));

}

app();