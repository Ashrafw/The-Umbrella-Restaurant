const mCarte = document.querySelector('.menu-carte');
const mDrinks = document.querySelector('.menu-drinks');
const mBrunch = document.querySelector('.menu-brunch');
const mDesert = document.querySelector('.menu-desert');

const carte = document.querySelector('.menu-e-carte');
const drinks = document.querySelector('.menu-e-drinks');
const brunch = document.querySelector('.menu-e-brunch');
const desert = document.querySelector('.menu-e-desert');

const menup = document.querySelectorAll('.menup');
console.log(menup);

carte.addEventListener('click', (e) => {
  mCarte.classList.add('open');
  console.log('clicked');
  e.preventDefault();
});

drinks.addEventListener('click', (e) => {
  mDrinks.classList.add('open');
  console.log('clicked');
  e.preventDefault();
});

brunch.addEventListener('click', (e) => {
  mBrunch.classList.add('open');
  console.log('clicked');
  e.preventDefault();
});

desert.addEventListener('click', (e) => {
  mDesert.classList.add('open');
  console.log('clicked');
  e.preventDefault();
});

menup.forEach((back) => {
  back.addEventListener('click', (e) => {
    console.log(e.target.classList);

    if (e.target.classList.contains('menup')) {
      console.log('contains');
      back.classList.remove('open');
    }
  });
});

const btnBurger = document.querySelector('#btn-hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElement = document.querySelectorAll('.has-fade');

btnBurger.addEventListener('click', function () {
  console.log('button pressed');
  if (header.classList.contains('open')) {
    //close
    header.classList.remove('open');
    fadeElement.forEach(function (element) {
      console.log('closeeeeee');
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    //open
    header.classList.add('open');
    fadeElement.forEach(function (element) {
      console.log('opennn');
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});

// preventDefault()
