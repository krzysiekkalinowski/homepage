const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
      const navigation = document.querySelector('.top-navigation--js');
      navigation.classList.toggle('top-navigation--open');
})

export {hamburger}