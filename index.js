const recipeName = document.getElementById('recipe-name').textContent;
console.log('Recipe name: ', recipeName);

const recipeNameTag = document.getElementById('recipe-name').tagName;
console.log('Recipe name tag: ', recipeNameTag);

const descriptionFont = window.getComputedStyle(document.querySelector('.description')).fontSize
console.log('Description font size: ', descriptionFont);


