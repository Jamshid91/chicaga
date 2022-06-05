const menu = document.querySelector('.menu'),
      menuItem = document.querySelector('.menu .menu-item'),
      menuClose = document.querySelector('.menu .close_menu'),
      menuBurger = document.querySelector('.menu_burger'),
      findOut = document.querySelector('.find-out'),
      findOutClose = document.querySelector('.find-out__close'),
      readMoreFindOut = document.querySelector('.readMore-findOut'),
      wrapperFormBtn1 = document.querySelector('.wrapper-form__btn.btn1'),
      wrapperFormBtn2 = document.querySelector('.wrapper-form__btn.btn2'),
      formTakeCall = document.querySelector('.form-take-call'),
      pizzaCarousel = document.querySelector('.pizza-carousel'),
      pizzaCarouselBtn = document.querySelector('.pizza-carousel__btn'),
      tradeCarousel = document.querySelector('.trade-carousel'),
      tradeCarouselBtn = document.querySelector('.trade-carousel__btn')

pizzaCarouselBtn.addEventListener('click', () => {
    pizzaCarousel.classList.remove('hidden');
    tradeCarousel.classList.add('hidden');
    pizzaCarouselBtn.classList.add('buttonBlue');
    pizzaCarouselBtn.classList.remove('buttonGray');
    tradeCarouselBtn.classList.add('buttonGray');
});

tradeCarouselBtn.addEventListener('click', () => {
    tradeCarousel.classList.remove('hidden');
    pizzaCarousel.classList.add('hidden');
    tradeCarouselBtn.classList.add('buttonBlue');
    pizzaCarouselBtn.classList.add('buttonGray');
    tradeCarouselBtn.classList.remove('buttonGray');
});


wrapperFormBtn1.addEventListener('click', () => {
    formTakeCall.classList.add('hidden')
    wrapperFormBtn1.classList.add('active')
    wrapperFormBtn2.classList.remove('active')
});
wrapperFormBtn2.addEventListener('click', () => {
    formTakeCall.classList.remove('hidden')
    wrapperFormBtn1.classList.remove('active')
    wrapperFormBtn2.classList.add('active')
});

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
    findOut.classList.remove('hidden');
});
findOutClose.addEventListener('click', () => {
    findOut.classList.add('hidden');
})


$(document).ready(function() {
    $('.scrollBar-item').hide();
    $('.scrollBar-item:first-child').show();
    $('.radio_button').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.scrollBar-item').hide();
      $('.' + pageInfo).show();
    })
  });

//   modul carousel info
  $(document).ready(function() {
    $('.modul-modal').hide();
    $('.modul__btn').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.modul-modal').hide();
      $('.' + pageInfo).show();
    })
  });


  let modulModalClose = document.querySelectorAll('.modul-modal__close');

    modulModalClose.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.style.display = 'none'
        })
    })
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
      buyCourseClose = document.querySelector('.buy_course_close'),
      rating = document.querySelector('.rating'),
      ratingBtn = document.querySelector('.rating__btn'),
      ratingClose = document.querySelector('.rating__close'),
      trialLessonsBtn = document.querySelector('.trial-lessons__btn'),
      trialLessonsClose = document.querySelector('.trial-lessons__close'),
      teenagersModal = document.querySelector('.teenagers-modal'),
      teenagersModalBtn = document.querySelector('.teenagers-modal__btn'),
      teenagersModalClose = document.querySelector('.teenagers-modal__close'),
      managementModal = document.querySelector('.management-modal'),
      managementModalBtn = document.querySelector('.management-modal__btn'),
      managementModalClose = document.querySelector('.management-modal__close'),
      managementModalFormShow = document.querySelector('.management-modal-form-show'),
      managementModalForm = document.querySelector('.management-modal-form'),
      managementModalFormClose = document.querySelector('.management-modal-form__close')


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

ratingBtn.addEventListener('click', () => {
    rating.classList.remove('hidden')
});
ratingClose.addEventListener('click', () => {
    rating.classList.add('hidden')
});

trialLessonsBtn.addEventListener('click', () => {
   trialLessonsBtn.parentElement.children[1].classList.remove('hidden')
});
trialLessonsClose.addEventListener('click', () => {
    trialLessonsBtn.parentElement.children[1].classList.add('hidden')
});
teenagersModalBtn.addEventListener('click', () => {
    teenagersModal.classList.remove('hidden')
});
teenagersModalClose.addEventListener('click', () => {
    teenagersModal.classList.add('hidden')
});

managementModalBtn.addEventListener('click', () => {
    managementModal.classList.remove('hidden')
});
managementModalClose.addEventListener('click', () => {
    managementModal.classList.add('hidden')
});

managementModalFormShow.addEventListener('click', () => {
    managementModalForm.classList.remove('hidden'),
    managementModal.classList.add('hidden')
});
managementModalFormClose.addEventListener('click', () => {
    managementModalForm.classList.add('hidden')
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

$('.modul-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    touchMove: false,
    centerMode: true,
    centerPadding: '0px',
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



$('.pizza-carousel-sup').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    touchMove: false,
    asNavFor: '.pizza-carousel-sub',
    nextArrow: `<button class="slick-next">
                    <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0073 0.731635C20.5856 0.303159 19.9216 0.303159 19.4999 0.731635C19.0924 1.14564 19.0924 1.83467 19.4999 2.24771L27.1434 10.0134H1.92083C1.33287 10.0134 0.850342 10.4882 0.850342 11.0855C0.850342 11.6829 1.33287 12.1731 1.92083 12.1731H27.1434L19.4999 19.9243C19.0924 20.3528 19.0924 21.0428 19.4999 21.4558C19.9216 21.8843 20.5856 21.8843 21.0073 21.4558L30.4603 11.8518C30.8678 11.4378 30.8678 10.7487 30.4603 10.3357L21.0073 0.731635Z" fill="url(#paint0_linear_2_1321)"/>
                        <defs>
                        <linearGradient id="paint0_linear_2_1321" x1="15.8081" y1="0.410278" x2="15.8081" y2="21.7772" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF5353"/>
                        <stop offset="1" stop-color="#FF7B7B"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </button>`,

    prevArrow: `<button class="slick-prev">
                    <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99274 0.731635C10.4145 0.303159 11.0784 0.303159 11.5002 0.731635C11.9077 1.14564 11.9077 1.83467 11.5002 2.24771L3.85664 10.0134H29.0792C29.6672 10.0134 30.1497 10.4882 30.1497 11.0855C30.1497 11.6829 29.6672 12.1731 29.0792 12.1731H3.85664L11.5002 19.9243C11.9077 20.3528 11.9077 21.0428 11.5002 21.4558C11.0784 21.8843 10.4145 21.8843 9.99274 21.4558L0.53973 11.8518C0.13224 11.4378 0.13224 10.7487 0.53973 10.3357L9.99274 0.731635Z" fill="url(#paint0_linear_2_1318)"/>
                        <defs>
                        <linearGradient id="paint0_linear_2_1318" x1="15.1919" y1="0.410278" x2="15.1919" y2="21.7772" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF5353"/>
                        <stop offset="1" stop-color="#FF7B7B"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </button>`,
});
$('.pizza-carousel-sub').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    touchMove: false,
    asNavFor: '.pizza-carousel-sup',
});



$('.trade-carousel-sup').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    touchMove: false,
    asNavFor: '.trade-carousel-sub',
    nextArrow: `<button class="slick-next">
                    <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0073 0.731635C20.5856 0.303159 19.9216 0.303159 19.4999 0.731635C19.0924 1.14564 19.0924 1.83467 19.4999 2.24771L27.1434 10.0134H1.92083C1.33287 10.0134 0.850342 10.4882 0.850342 11.0855C0.850342 11.6829 1.33287 12.1731 1.92083 12.1731H27.1434L19.4999 19.9243C19.0924 20.3528 19.0924 21.0428 19.4999 21.4558C19.9216 21.8843 20.5856 21.8843 21.0073 21.4558L30.4603 11.8518C30.8678 11.4378 30.8678 10.7487 30.4603 10.3357L21.0073 0.731635Z" fill="url(#paint0_linear_2_1321)"/>
                        <defs>
                        <linearGradient id="paint0_linear_2_1321" x1="15.8081" y1="0.410278" x2="15.8081" y2="21.7772" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF5353"/>
                        <stop offset="1" stop-color="#FF7B7B"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </button>`,

    prevArrow: `<button class="slick-prev">
                    <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99274 0.731635C10.4145 0.303159 11.0784 0.303159 11.5002 0.731635C11.9077 1.14564 11.9077 1.83467 11.5002 2.24771L3.85664 10.0134H29.0792C29.6672 10.0134 30.1497 10.4882 30.1497 11.0855C30.1497 11.6829 29.6672 12.1731 29.0792 12.1731H3.85664L11.5002 19.9243C11.9077 20.3528 11.9077 21.0428 11.5002 21.4558C11.0784 21.8843 10.4145 21.8843 9.99274 21.4558L0.53973 11.8518C0.13224 11.4378 0.13224 10.7487 0.53973 10.3357L9.99274 0.731635Z" fill="url(#paint0_linear_2_1318)"/>
                        <defs>
                        <linearGradient id="paint0_linear_2_1318" x1="15.1919" y1="0.410278" x2="15.1919" y2="21.7772" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF5353"/>
                        <stop offset="1" stop-color="#FF7B7B"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </button>`,
});
$('.trade-carousel-sub').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    touchMove: false,
    asNavFor: '.trade-carousel-sup',
});