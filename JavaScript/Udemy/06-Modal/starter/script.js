'use strict';

// Lecture-1
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// const btnsOpenModal = document.querySelector('.show-modal');  //In this, only the 1st is selected (Limitation of querySelector)
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Lecture-2
function closeModal() {
  modal.classList.add('hidden'); // hidden, NOT .hidden
  overlay.classList.add('hidden');
}

function openModal() {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// console.log(btnsOpenModal);
for (let index = 0; index < btnsOpenModal.length; index++) {
  btnsOpenModal[index].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal); // not closeModal() because JS will execute as soon as the page is loaded
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key === 'Escape');
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});

/*

document.addEventListener('keydown', function (e) {
  console.log(e.key === 'Escape');
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
  }
});

*/
