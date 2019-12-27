'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var modal = document.querySelector('.modal');
var modalOpen = document.querySelector('.button--contacts');
var modalClose = modal.querySelector('.modal__close');
var contentsInner = document.querySelector('.contents__inner');
var contents = document.querySelector('.contents');
var contacts = document.querySelector('.footer-contacts');
var contactsInner = document.querySelector('.footer-contacts__inner');

var contentsToggle = function (arg) {
  if (arg.classList.contains('show')) {
    arg.classList.remove('show');
    arg.classList.add('hide');
  } else if (arg.classList.contains('hide')) {
    arg.classList.remove('hide');
    arg.classList.add('show');
  }
};

contents.addEventListener('click', function () {
  contentsToggle(contentsInner);
});

contacts.addEventListener('click', function () {
  contentsToggle(contactsInner);
});

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  modal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  document.body.style.overflow = 'hidden';
};

var closePopup = function () {
  modal.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  document.body.style.overflow = 'visible';
};

modalOpen.addEventListener('click', function () {
  openPopup();
});

modalOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

modalClose.addEventListener('click', function () {
  closePopup();
});

modalClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
