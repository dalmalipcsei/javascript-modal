'use strict';

let modalButtons = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModal = document.querySelector('.close-modal');

const displayModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const hideModalEsc = function (event) {
  if (event.key === 'Escape') {
    hideModal();
  }
};

for (let i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener('click', displayModal);
}

//close modal
closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
// close modal with Esc
document.addEventListener('keydown', hideModalEsc);
