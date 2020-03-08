var modalOpenButton = document.querySelector('.slider__btn--modalShow');
var modal = document.querySelector('.modal');
var modalCloseButton = modal.querySelector('.modal__close-btn')

modalOpenButton.addEventListener('click', function () {
  modal.classList.remove('modal--hide')
});

modalCloseButton.addEventListener('click', function () {
  modal.classList.add('modal--hide')
});
document.addEventListener('keydown', function (evt) {
  if (evt === 'Eskape') {
    modal.classList
  }
})