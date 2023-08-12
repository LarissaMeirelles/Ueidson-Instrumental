const dataCategories = [
  { name: 'Violão' },
  { name: 'Guitarra' },
  { name: 'Piano' },
  { name: 'Bateria' },
  { name: 'Tambor' },
  { name: 'Violino' },
  { name: 'Acordeon' },
  { name: 'Gaita' },
  { name: 'Teclado' },
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container-categories-list');
  const inputSearch = document.querySelector('.input-search-navbar');
  const dropdown = document.querySelector('.categories-dropdown');
  const categories = document.querySelector('.categories');

  let noCategory = false;


  const renderCategories = (categories) => {
    container.innerHTML = '';
    categories.forEach((category, id) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = "#";
      a.textContent = category.name;
      li.appendChild(a);
      li.setAttribute('class', 'categories-list');
      li.setAttribute('class', 'categories-list fade-in-item');
      li.setAttribute('data-id', id);
      container.appendChild(li);
    });
  };

  const renderNoExists = () => {
    container.innerHTML = '';
    const li = document.createElement('li');
    li.setAttribute('class', 'categories-list no-exists');
    dropdown.classList.add('noExists');
    li.innerHTML = "Categoria não existe";
    container.appendChild(li);
    noCategory = true;
  };

  const handleClick = () => {
    if (dropdown.classList.contains('open')) {
      renderCategories(dataCategories);
    } else {
      inputSearch.value = '';
    }
  };

  const handleChange = () => {
    const searchTerm = inputSearch.value.toLowerCase();
    const filterCategory = dataCategories.filter((category) => {
      return category.name.toLowerCase().includes(searchTerm);
    });

    if (filterCategory.length > 0) {
      dropdown.classList.add('open');
      renderCategories(filterCategory);
      noCategory = false;
      dropdown.classList.remove('noExists');

    } else if (!noCategory) {
      renderNoExists();
    }
  };

  inputSearch.addEventListener('input', handleChange);
  categories.addEventListener('click', handleClick);
});
