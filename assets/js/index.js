const menu = document.querySelector('.menu'),
      menuItem = document.querySelector('.menu .menu-item'),
      menuClose = document.querySelector('.menu .close_menu'),
      menuBurger = document.querySelector('.menu_burger'),
      findOut = document.querySelector('.find-out'),
      readMoreFindOut = document.querySelector('.readMore-findOut')


menuBurger.addEventListener('click', () => {
    menu.classList.add('showMenu');
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('showMenu');
});

menuItem.addEventListener('click', () => {
    menuItem.classList.toggle('showMenuItem');
});

// End header

let giftCarouselSub = document.querySelector(".gift-carousel-sub");
let buttons = document.querySelectorAll(".gift-carousel-button button");
let [right, left] = buttons
let gifts = document.querySelectorAll(".gift-carousel-item");
let i = 0;

left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);

function moveLeft() {
    if (i == gifts.length - 1) {
       
    } else {
        gifts[i].classList.add('hidden');
        gifts[i + 1].classList.remove('hidden');
        i++
    }
    right.classList.remove('hidden')
    if(i == 5) {
        giftCarouselSub.classList.add('hidden');
    }
}

function moveRight() {
    if (i == 0) {
        right.classList.add('hidden')
    } else {
        gifts[i].classList.add('hidden');
        gifts[i - 1].classList.remove('hidden');
        i--;
    }
}

readMoreFindOut.addEventListener('click', () => {
    findOut.classList.add('showFindOut');
    readMoreFindOut.classList.add('hidden')
});


$(document).ready(function() {
    $('.scrollBar-item').hide();
    $('.scrollBar-item:first-child').show();
    $('.radio_button').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.scrollBar-item').hide();
      $('.' + pageInfo).show();
    })
  });