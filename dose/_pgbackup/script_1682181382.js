
const hideBtn = document.querySelector('#start');
const hideElement = document.querySelector('#main_container');
const showElement = document.querySelector('#full_post');
const modal1Btn = document.querySelector('#modal1-btn');

hideBtn.addEventListener('click', () => {
  hideElement.style.display = 'none';
  showElement.style.display = 'block';
});
