// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);


import { galleryItems } from "./gallery-items.js";

// Отримую доступ до елемента, на який буду "вішати" розмітку
const galleryContainer = document.querySelector('.gallery');

// Cтворюю розмітку
function createGalleryMarkup(images){
    return images.map(({preview, original, description}) =>
    `<li class = 'gallery__item'>
    <a  class = 'gallery__link' href="${original}">
      <img class= 'gallery__image'
      src="${preview}" 
      alt="${description}">
    </a>
  </li>`)
}
// Додаю розмітку в DOM


// Додаю слухача, який буде слухати клік



  // Відбираю, щоб ф-ція спрацьовувала лише по кліку на зображення, а за його межами - ні

  // Отримую доступ до дата-атрибуту img, щоб отримати доступ до шляху великого зображення

  // Використовю бібліотеку для відкриття модалки (код повністю з бібліотеки крім шаблоннї розмітки)


