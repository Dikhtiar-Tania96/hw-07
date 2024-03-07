 import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems)

// Отримую доступ до елемента, на який буду "вішати" розмітку
const galleryContainer = document.querySelector('.gallery');
// Cтворюю розмітку
function createGalleryMarkup(images){
return images.map(({preview, original, description})=>
`<li class = 'gallery__items'>
  <a class = 'gallery__link' href="${original}">
    <img class = 'gallery__image'
    src="${preview}" 
    data-source = '${original}'
    alt="${description}"/>
  </a>
</li>`
).join('')
}
// Додаю розмітку в DOM
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup)

// Додаю слухача, який буде слухати клік
galleryContainer.addEventListener('click', onImgClick)


function onImgClick(evt){
// Прибираю нативну поведінку під час кліку по елементу
evt.preventDefault()
// Відбираю, щоб ф-ція спрацьовувала лише по кліку на зображення, а за його межами - ні
const isImgEl = evt.target.classList.contains('gallery__image');
if(!isImgEl){
    return
}

// Отримую доступ до дата-атрибуту img, щоб отримати доступ до шляху великого зображення
const sourceImgEl = evt.target.dataset.source;
  
// Використовю бібліотеку для відкриття модалки (код повністю з бібліотеки крім шаблоннї розмітки)
const instance = basicLightbox.create(`
   
<img
     class="gallery__image"
     src="${sourceImgEl}"
     width="800"
     height="auto"
   />

`, {

onShow: (instance) => {document.addEventListener('keydown', onClose)},

onClose: (instance) => {document.removeEventListener('keydown', onClose)}
})
instance.show()

function onClose(evt) {
if (evt.code !== "Escape") {
return;
}
instance.close()
} 

}






