/*jslint browser, es6 */
/*global window */

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

window.onload = function () {
  if(password){
    password.forEach(el => passwordVisibilityToggle(el))
  }
  accountMenuTrigger.forEach(el => el.addEventListener('click', () => {
    document.querySelector('#ac_navbar').classList.toggle('show');
    accountMenuTrigger.forEach(el => el.classList.toggle('active'))
  }))
};
