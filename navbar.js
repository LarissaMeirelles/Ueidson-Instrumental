const toggle = () => {
  const menu = document.querySelector('.dropdown-content');
  const burguer = document.querySelector('.burguer');
  const close = document.querySelector('.close');
  const html = document.documentElement;
  const categories = document.querySelector('.categories');
  const dropdown = document.querySelector('.categories-dropdown');

  const toggleMenu = () => {
    menu.classList.toggle('open');
    dropdown.classList.toggle('translate');
    html.style.transform = 'translateX(80%)';
    close.style.display = 'flex';
    burguer.style.display = 'none';

    html.addEventListener('mouseenter', () => {
      return menu.classList.contains('open') ?
      categories.classList.add('no-scroll') :
      categories.classList.remove('no-scroll');
    });

    html.addEventListener('mouseleave', () => {
      return menu.classList.contains('open') ?
      categories.classList.add('no-scroll') :
      categories.classList.remove('no-scroll');
    });
  }

  const toggleClose = () => {
    menu.classList.remove('open');
    html.style.transform = 'translateX(0)';
    close.style.display = 'none';
    burguer.style.display = 'flex';
  }

  const handleDocumentClick = (event) => {
    const menuClicked = menu.contains(event.target);
    const burguerClicked = burguer.contains(event.target);
    const categoriesClicked = categories.contains(event.target);
    const dropdownClicked = dropdown.contains(event.target);

    if (!menuClicked && !burguerClicked) toggleClose();

    if (!categoriesClicked && !dropdownClicked) {
      dropdown.classList.remove('open');
      dropdown.classList.remove('noExists');
    }
  }

  const toggleCategories = () => dropdown.classList.contains('open')
  ? dropdown.classList.remove('open')
  : dropdown.classList.add('open');


  burguer.addEventListener('click', toggleMenu);
  close.addEventListener('click', toggleClose);
  html.addEventListener('click', handleDocumentClick);
  categories.addEventListener('click', toggleCategories);
}

toggle();

