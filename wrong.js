document.querySelector('.logo-text').style.color = '#384241';

document.querySelector('header').style.justifyContent = 'flex-start';

document.querySelector('header').style.borderBottom = '1px solid lightgray';

document.getElementById('recipe-name').textContent = 'Frozen Cheescake';

document.querySelector('.time-container span:first-child').className =
  'material-icons';

document.querySelector('.time').textContent = '60+ min';

document.querySelector('.image-container img').src =
  'assets/frozen-cheesecake-slice.jpg';

document.querySelector('.ingredients-container').style.backgroundColor =
  '#f9f9f9';

const bottomIngredientsList = document.querySelector('.ingredients-list-bottom');
bottomIngredientsList.innerHTML = '<li>15st digistivetex</li><li>Lite smör</li>';



  