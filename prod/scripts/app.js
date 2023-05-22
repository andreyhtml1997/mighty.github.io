/*jslint browser, es6 */
/*global window */

let lastScrollTop = 0;




const password = document.querySelectorAll('.password__visibility');
const passwordVisibilityToggle = function(toggler) {
  toggler.addEventListener('click', function(e) {
    e.currentTarget.classList.toggle('active');
    if(e.currentTarget.previousElementSibling.type == 'password') {
      e.currentTarget.previousElementSibling.type = 'text';
    } else if(e.currentTarget.previousElementSibling.type == 'text') {
      e.currentTarget.previousElementSibling.type = 'password';
    }
  });
}

const accountMenuTrigger = document.querySelectorAll('.account-menu-trigger');
// const mainMenuTrigger = document.querySelectorAll('.account-menu-trigger');

const parallaxEl = document.querySelector('.el-1-container');
let scrollValue = 0;
if(parallaxEl) {
  let parallaxElClientRect = parallaxEl.getBoundingClientRect();
}



window.onload = function () {


  document.querySelector('.preloader').classList.add('hidden');
  document.body.classList.remove('overflow-hidden');


  if(password){
    password.forEach(el => passwordVisibilityToggle(el))
  }
  

  accountMenuTrigger.forEach(el => el.addEventListener('click', () => {
    if(document.querySelector('#ac_navbar')) {
      document.querySelector('#ac_navbar').classList.toggle('show');
    }
    if(document.querySelector('.no-auth-menu')) {
      document.querySelector('.no-auth-menu').classList.toggle('show');
    }
    accountMenuTrigger.forEach(el => el.classList.toggle('active'));
    document.body.classList.toggle('overflow-hidden--lg');
    document.documentElement.classList.toggle('menu-open');
    document.querySelector('.navbar.w-nav').classList.toggle('open');
  }))

  /* mainMenuTrigger.forEach(el => el.addEventListener('click', () => {
    document.querySelector('#ac_navbar').classList.toggle('show');
    mainMenuTrigger.forEach(el => el.classList.toggle('active'));
    document.body.classList.toggle('overflow-hidden--lg');
    document.querySelector('.navbar.w-nav').classList.toggle('open');
  })) */




  let fanInput = document.querySelector('.fan-calculator__input');
  let calculatorError = document.querySelector('.fan-calculator__error');
  if(fanInput) {
    let fanInputMaskOptions = {
      radix: '.',  // fractional delimiter
      mask: Number
    };
    let fanInputMask = IMask(fanInput, fanInputMaskOptions);

    fanInput.addEventListener('input', function(e){
      if(e.target.value > 30000) {
        e.target.value = 30000
      }
      if(e.target.value < 10 && calculatorError) {
        
        calculatorError.classList.add('active');
      } else {
        calculatorError.classList.remove('active');
      }
      if(document.querySelector('.total-return')) {
        document.querySelector('.total-return').textContent = (e.target.value/100 * 150).toFixed(2);
      }
      if(document.querySelector('.daily-return')) {
        document.querySelector('.daily-return').textContent = (e.target.value/100 * 10).toFixed(2);
      }
    });
  }
};

window.onscroll = function (e) {
  if(window.pageYOffset) {
    //document.querySelector('.navbar.w-nav').classList.add('scrolled');
  } else {
    //document.querySelector('.navbar.w-nav').classList.remove('scrolled');
  }

  if(parallaxEl) {
    parallaxElClientRect = parallaxEl.getBoundingClientRect();

    if(parallaxElClientRect.y < window.innerHeight - parallaxElClientRect.height && parallaxElClientRect.y > 0) {
      parallaxEl.style.transform = `translateY(${66 - parallaxElClientRect.y/22}px)`
      /* let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        
      } else if (st < lastScrollTop) {
        
      } // else was horizontal scroll
      lastScrollTop = st <= 0 ? 0 : st; */
    }

  }
  
};
AOS.init();



function tilt () {
  $('.js-tilt-simple').tilt({});
	$('.js-tilt').tilt({
		glare: true,
		maxGlare: 0.1
	});
	$('.js-tilt-little').tilt({
		glare: true,
		maxGlare: 0.1,
		maxTilt: 7
	});
  $('.tab-logo').tilt({
		glare: false,
		maxTilt: 30,
    scale: 1.3,
    perspective: 500
	});
}
$(document).ready (function () {
  tilt ();
});