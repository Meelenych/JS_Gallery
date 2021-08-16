import galleryItems from "./pictures.js";
// console.log(galleryItems)

// console.dir(document)

//==============================Создание галереи=====================================
const list = document.querySelector('.gallery')
list.classList.add('gallery')
//console.log(list)

const galleryCreator = galleryItems.map(({ preview, description, original }) => { 

const line = document.createElement('li');
line.classList.add('gallery__item')

const ref = document.createElement('a');
ref.classList.add('gallery__link')   

const img = document.createElement('img');
img.setAttribute('src', `${preview}`);
img.setAttribute('alt', `${description}`);
img.setAttribute('data-source', `${original}`)
img.classList.add('gallery__image')

    ref.appendChild(img)
    line.appendChild(ref)
    list.appendChild(line)
       
    
return list
})
//==============================Доступы=====================================
const lightbox = document.querySelector('.lightbox')
// console.log(lightbox)
const overlay = document.querySelector('.lightbox__overlay')
// console.log(overlay)
const content = document.querySelector('.lightbox__content')
// console.log(content)
const image = document.querySelector('.lightbox__image')
//console.log(image)
//===========================Открытие модалки========================================
list.addEventListener('click', (e) => {
   //console.log('click')
    e.preventDefault();
    lightbox.classList.toggle('is-open')
    image.setAttribute('src', `${e.target.dataset.source}`)
})
//===========================Закрытие модалки========================================
const button = document.querySelector('.lightbox__button')
// console.log(button)
const close = function () {
    lightbox.classList.remove('is-open');
}

button.addEventListener('click', () => {
   close()
})

overlay.addEventListener('click', () => {
   close()
})

window.addEventListener('keydown', (e) => {
    if (e.code === "Escape")
    { close() }
})
//===========================Слайдер - пока не работает========================================
window.addEventListener('keydown', (e) => {
    //console.log(e.code)

    const imgSrc = galleryItems.map(source => {
        return source.original
    })

    //console.log(imgSrc)

    if (e.code === "ArrowRight")
    {image.setAttribute('src', `${imgSrc[imgSrc.length += 1]}`)}
    
    if (e.code === "ArrowLeft")
    { image.setAttribute('src', `${imgSrc[imgSrc.length -= 1]}`)}
})

//console.dir(image)