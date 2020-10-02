"use strict";

function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});



// button-call-me 

const btnCallMe = document.querySelector('.callme');

let stickyNavbar = document.querySelector('.header__row2').offsetTop;

window.addEventListener('scroll', () => {

   btnCallMe.hidden = (pageYOffset < 200);


   let navbar = document.querySelector('.header__row2');

   if (window.pageYOffset >= stickyNavbar) {
      navbar.classList.add("sticky");
   } else {

      navbar.classList.remove("sticky");
   }


});




// button morephones

document.querySelector('.hdr-links__phones').addEventListener('click', () => {
   let elem = document.querySelector('.phones__morephones');

   let arrow1 = document.querySelector('.morephones__arrow1');
   let arrow2 = document.querySelector('.morephones__arrow2');


   elem.classList.toggle('phones--active');

   arrow1.classList.toggle('phones--active');
   arrow2.classList.toggle('phones--active');



})


// Button footer-morephones


document.querySelector('.ftr-contacts__phones').addEventListener('click', () => {
   let elem = document.querySelector('.ftr-morephones');
   let arrow1 = document.querySelector('.ftr-contacts-phones__arrow1');
   let arrow2 = document.querySelector('.ftr-contacts-phones__arrow2');


   elem.classList.toggle('phones--active');
   arrow1.classList.toggle('phones--active');
   arrow2.classList.toggle('phones--active');



})




window.addEventListener('click', (e) => {

   if (document.querySelector('.phones__morephones').matches('.phones--active') && !e.target.closest('.hdr-links__phones')) {

      document.querySelector('.phones__morephones').classList.remove('phones--active');
      document.querySelector('.morephones__arrow1').classList.remove('phones--active');
      document.querySelector('.morephones__arrow2').classList.remove('phones--active');

   }

   if (document.querySelector('.ftr-morephones').matches('.phones--active') && !e.target.closest('.ftr-contacts__phones')) {

      document.querySelector('.ftr-morephones').classList.remove('phones--active');
      document.querySelector('.ftr-contacts-phones__arrow1').classList.remove('phones--active');
      document.querySelector('.ftr-contacts-phones__arrow2').classList.remove('phones--active');

   }

})


// Button Search

document.querySelector('.navbar-search').addEventListener('click', () => {

   if (document.querySelector('.navbar__burger').matches('.menu-active')) {

      document.querySelector('.navbar__burger').classList.remove('menu-active');
      document.querySelector('.navbar__list').classList.remove('menu-active');
      document.querySelector('body').classList.remove('lock');
   }


   document.querySelector('.navbar-search--hide').classList.toggle('search--active');
   document.querySelector('.navbar-search__block').classList.toggle('search--active');

   document.querySelector('.navbar-search__close').classList.toggle('search--active');

})


document.querySelector('.navbar__link-searсh').addEventListener('click', () => {

   document.querySelector('.navbar__link-search-icon').classList.toggle('search--active');
   document.querySelector('.navbar-search__block').classList.toggle('search--active');

   document.querySelector('.link-search__close').classList.toggle('search--active');

})


window.addEventListener('resize', () => {
   if (document.querySelector('.navbar-search__block').matches('.search--active')) {

      document.querySelector('.navbar-search--hide').classList.add('search--active');
      document.querySelector('.navbar-search__close').classList.add('search--active');
      document.querySelector('.navbar__link-search-icon').classList.add('search--active');
      document.querySelector('.link-search__close').classList.add('search--active');

   } else {

      document.querySelector('.navbar-search--hide').classList.remove('search--active');
      document.querySelector('.navbar-search__close').classList.remove('search--active');
      document.querySelector('.navbar__link-search-icon').classList.remove('search--active');
      document.querySelector('.link-search__close').classList.remove('search--active');

   }
})

// // MENU-BOTTOM-BURGER


document.addEventListener("DOMContentLoaded", MenuBurgerOpen);

function MenuBurgerOpen() {

   let elemButton = document.querySelector('.navbar__burger');

   elemButton.addEventListener('click', () => {

      if (document.querySelector('.navbar-search__block').matches('.search--active')) {

         document.querySelector('.navbar-search--hide').classList.remove('search--active');
         document.querySelector('.navbar-search__block').classList.remove('search--active');
         document.querySelector('.navbar-search__close').classList.remove('search--active');

      }

      document.querySelector('.navbar__burger').classList.toggle('menu-active');
      document.querySelector('.navbar__list').classList.toggle('menu-active');
      document.querySelector('body').classList.toggle('lock');


   });

}