const openModalButtons = document.querySelectorAll('.callback-button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close-button');

const openModal = () => {
  modal.style.display = 'block';
};

const closeModal = () => {
  modal.style.display = 'none';
};

export const initModal = () => {
  openModalButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });

  modalCloseButton.addEventListener('click', closeModal);

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
};
