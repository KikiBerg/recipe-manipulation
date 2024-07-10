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

const bottomIngredientsList = document.querySelector(
  '.ingredients-list-bottom'
);
bottomIngredientsList.innerHTML =
  '<li>15st digistivetex</li><li>Lite smör</li>';

document.querySelector('.ingredients-list-paste li:nth-child(3)').textContent =
  '3tsk vaniljsocker';

const pasteIngredientsList = document.querySelector('.ingredients-list-paste');
const newIngredient = document.createElement('li');
newIngredient.textContent = '400g naturell philadelphiaost';
pasteIngredientsList.appendChild(newIngredient);

document.querySelector('.instructions').classList.remove('shadow');

const instructionsList = document.querySelector('.instructions-list');
instructionsList.children[1].textContent =
  'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
instructionsList.children[8].textContent = 'Ställ in i frysen över natten.';
