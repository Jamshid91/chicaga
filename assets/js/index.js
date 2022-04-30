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

//   Start FAQ 

let faqItem = document.querySelectorAll('.faq-item');

faqItem.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('showFaqItem')
    })
})


const baseMethods = document.querySelector('.base_methods'),
      closeBaseMethods = document.querySelector('.close_base_methods'),
      lesson_1 = document.querySelector('.lesson_1'),
      modalLesson_1 = document.querySelector('.modal-lesson_1'),
      closeLesson_1 = document.querySelector('.close-lesson_1'),
      inGroups = document.querySelector('.in-groups'),
      inGroupsBtn = document.querySelector('.in_groups'),
      inGroupsClose = document.querySelector('.in_groups_close'),
      freeze = document.querySelector('.freeze'),
      freezeBtn = document.querySelector('.freeze__btn'),
      freezeClose = document.querySelector('.freeze_close'),
      firstTime = document.querySelector('.first_time'),
      firstTimeBtn = document.querySelector('.first_time_btn'),
      firstTimeClose = document.querySelector('.close_first_time'),
      buyCourse = document.querySelector('.buy_course'),
      buyCourseBtn = document.querySelector('.buy_course_btn'),
      buyCourseClose = document.querySelector('.buy_course_close')


baseMethods.addEventListener('click', () => {
    baseMethods.nextElementSibling.classList.remove('hidden')
});
closeBaseMethods.addEventListener('click', () => {
    closeBaseMethods.parentElement.classList.add('hidden')
});

lesson_1.addEventListener('click', () => {
    modalLesson_1.classList.remove('hidden')
});
closeLesson_1.addEventListener('click', () => {
    modalLesson_1.classList.add('hidden')
});

inGroupsBtn.addEventListener('click', () => {
    inGroups.classList.remove('hidden')
});
inGroupsClose.addEventListener('click', () => {
    inGroups.classList.add('hidden')
});

freezeBtn.addEventListener('click', () => {
    freeze.classList.remove('hidden')
});
freezeClose.addEventListener('click', () => {
    freeze.classList.add('hidden')
});

firstTimeBtn.addEventListener('click', () => {
    firstTime.classList.remove('hidden')
});
firstTimeClose.addEventListener('click', () => {
    firstTime.classList.add('hidden')
});

buyCourseBtn.addEventListener('click', () => {
    buyCourse.classList.remove('hidden')
});
buyCourseClose.addEventListener('click', () => {
    buyCourse.classList.add('hidden')
});


const confidenceItem = document.querySelectorAll('.confidence-item')


confidenceItem.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('showConfidenceItem')
    })
});

$('.lessons-carousel-sup').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    touchMove: false,
    asNavFor: '.lessons-carousel-sub',
    nextArrow: `<button class="slick-next">
                    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.293137 0.561936C-0.0973869 0.95246 -0.0973869 1.58563 0.293137 1.97615L5.58603 7.26904L0.293137 12.5619C-0.0973869 12.9525 -0.0973869 13.5856 0.293137 13.9761C0.683662 14.3667 1.31683 14.3667 1.70735 13.9761L7.70735 7.97615C8.09787 7.58563 8.09787 6.95246 7.70735 6.56194L1.70735 0.561936C1.31683 0.171412 0.683662 0.171412 0.293137 0.561936Z" fill="white"/>
                    </svg>
                </button>`,

    prevArrow: `<button class="slick-prev">
                    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70686 0.561936C8.09739 0.95246 8.09739 1.58563 7.70686 1.97615L2.41397 7.26904L7.70686 12.5619C8.09739 12.9525 8.09739 13.5856 7.70686 13.9761C7.31634 14.3667 6.68317 14.3667 6.29265 13.9761L0.29265 7.97615C-0.0978737 7.58563 -0.0978737 6.95246 0.29265 6.56194L6.29265 0.561936C6.68317 0.171412 7.31634 0.171412 7.70686 0.561936Z" fill="white"/>
                    </svg>
                </button>`,
});
$('.lessons-carousel-sub').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    touchMove: false,
    asNavFor: '.lessons-carousel-sup',
});


$('.teachers-carousel-sup').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    touchMove: false,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.teachers-carousel-sub',
    nextArrow: `<button class="slick-next">
                    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.293137 0.561936C-0.0973869 0.95246 -0.0973869 1.58563 0.293137 1.97615L5.58603 7.26904L0.293137 12.5619C-0.0973869 12.9525 -0.0973869 13.5856 0.293137 13.9761C0.683662 14.3667 1.31683 14.3667 1.70735 13.9761L7.70735 7.97615C8.09787 7.58563 8.09787 6.95246 7.70735 6.56194L1.70735 0.561936C1.31683 0.171412 0.683662 0.171412 0.293137 0.561936Z" fill="white"/>
                    </svg>
                </button>`,

    prevArrow: `<button class="slick-prev">
                    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70686 0.561936C8.09739 0.95246 8.09739 1.58563 7.70686 1.97615L2.41397 7.26904L7.70686 12.5619C8.09739 12.9525 8.09739 13.5856 7.70686 13.9761C7.31634 14.3667 6.68317 14.3667 6.29265 13.9761L0.29265 7.97615C-0.0978737 7.58563 -0.0978737 6.95246 0.29265 6.56194L6.29265 0.561936C6.68317 0.171412 7.31634 0.171412 7.70686 0.561936Z" fill="white"/>
                    </svg>
                </button>`,
});

$('.teachers-carousel-sub').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    touchMove: false,
    asNavFor: '.teachers-carousel-sup',
});

$('.english-carousel-sup').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    touchMove: false,
    asNavFor: '.english-carousel-sub',
    nextArrow: `<button class="slick-next">
                    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.293137 0.561936C-0.0973869 0.95246 -0.0973869 1.58563 0.293137 1.97615L5.58603 7.26904L0.293137 12.5619C-0.0973869 12.9525 -0.0973869 13.5856 0.293137 13.9761C0.683662 14.3667 1.31683 14.3667 1.70735 13.9761L7.70735 7.97615C8.09787 7.58563 8.09787 6.95246 7.70735 6.56194L1.70735 0.561936C1.31683 0.171412 0.683662 0.171412 0.293137 0.561936Z" fill="white"/>
                    </svg>
                </button>`,

    prevArrow: `<button class="slick-prev">
                    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70686 0.561936C8.09739 0.95246 8.09739 1.58563 7.70686 1.97615L2.41397 7.26904L7.70686 12.5619C8.09739 12.9525 8.09739 13.5856 7.70686 13.9761C7.31634 14.3667 6.68317 14.3667 6.29265 13.9761L0.29265 7.97615C-0.0978737 7.58563 -0.0978737 6.95246 0.29265 6.56194L6.29265 0.561936C6.68317 0.171412 7.31634 0.171412 7.70686 0.561936Z" fill="white"/>
                    </svg>
                </button>`,
});

$('.english-carousel-sub').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    touchMove: false,
    asNavFor: '.english-carousel-sup',
});


$('.reviews-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    focusOnSelect: true,
    touchMove: false,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.teachers-carousel-sub',
    nextArrow: `<button class="slick-next">
                    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.293137 0.561936C-0.0973869 0.95246 -0.0973869 1.58563 0.293137 1.97615L5.58603 7.26904L0.293137 12.5619C-0.0973869 12.9525 -0.0973869 13.5856 0.293137 13.9761C0.683662 14.3667 1.31683 14.3667 1.70735 13.9761L7.70735 7.97615C8.09787 7.58563 8.09787 6.95246 7.70735 6.56194L1.70735 0.561936C1.31683 0.171412 0.683662 0.171412 0.293137 0.561936Z" fill="white"/>
                    </svg>
                </button>`,

    prevArrow: `<button class="slick-prev">
                    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70686 0.561936C8.09739 0.95246 8.09739 1.58563 7.70686 1.97615L2.41397 7.26904L7.70686 12.5619C8.09739 12.9525 8.09739 13.5856 7.70686 13.9761C7.31634 14.3667 6.68317 14.3667 6.29265 13.9761L0.29265 7.97615C-0.0978737 7.58563 -0.0978737 6.95246 0.29265 6.56194L6.29265 0.561936C6.68317 0.171412 7.31634 0.171412 7.70686 0.561936Z" fill="white"/>
                    </svg>
                </button>`,
});