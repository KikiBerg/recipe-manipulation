const recipeName = document.getElementById('recipe-name').textContent;
console.log('Recipe name: ', recipeName);

const recipeNameTag = document.getElementById('recipe-name').tagName;
console.log('Recipe name tag: ', recipeNameTag);

const descriptionFont = window.getComputedStyle(document.querySelector('.description')).fontSize
console.log('Description font size: ', descriptionFont);

const imageAlt = document.querySelector('.image-container img').alt;
console.log('Image alt text:', imageAlt);

const image = document.querySelector('.image-container img');
const imageInfo = {
  url: image.src,
  height: image.naturalHeight,
  width: image.naturalWidth
};
console.log('Image info:', imageInfo);

const pasteIngredients = document.querySelector('.ingredients-list-paste').children.length;
console.log('Number of paste ingredients: ', pasteIngredients);