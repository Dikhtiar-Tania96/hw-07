import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//отримую доступ до елемента,на який вішаю розмітку
const galleryContainer = document.querySelector('.gallery');


function createGalleryMarkup(images) {
    return images.map (({preview, original, description})=>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
    </li>`
    ).join('');
}

//додаю розмітку у DOM

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin',galleryMarkup);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay : 250,
});