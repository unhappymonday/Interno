
const focusHandler = () => {
  const searchInput = document.querySelector('.input-search');

  function focusAnimationHandler(element) {
    element.classList.add('focus');
  }

  function unfocusAnimationHandler(element) {
    element.classList.add('unfocus');
  }

  searchInput.addEventListener('focusin', () => {
    searchInput.classList.remove('unfocus');
    focusAnimationHandler(searchInput);
  })

  searchInput.addEventListener('focusout', () => {
    searchInput.classList.remove('focus');
    unfocusAnimationHandler(searchInput);
  })
};

export default focusHandler;





