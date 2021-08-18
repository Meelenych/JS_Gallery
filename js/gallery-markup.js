import galleryItems from "./pictures.js";
// console.log(galleryItems)

// console.dir(document)

//==============================Создание галереи=====================================
const list = document.querySelector('.gallery')
list.classList.add('gallery')
//console.log(list)

const galleryCreator =  galleryItems.map(({ preview, description, original }) => { 

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
   
    return line
})

// console.log(galleryCreator)

 list.append(...galleryCreator)

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
    image.src = '';
    image.alt = '';
}

//===========================Слушатели событий========================================

//===Подскажите, пожалуйста, что не так в синтаксите моего ветевления if-else. Если убираю закоментированность, слушатели вообще не работают.

// if (lightbox.classList.contains('is-open')) {
    button.addEventListener('click', () => {
        close()
    })

    overlay.addEventListener('click', () => {
        close()
    })

    window.addEventListener('keydown', (e) => {
        if (e.code === "Escape") { close() }
    })
// }
    
// else {
//     button.removeEventListener('click', close)

//     overlay.removeEventListener('click', close)

//     window.removeEventListener('keydown', close)
// }



//===========================Слайдер========================================

window.addEventListener('keydown', (e) => {
    console.log(e.code)


    function getActiveIndex() {
        return galleryItems.findIndex(img => img.original === image.src);
    }

    let index = getActiveIndex() ? getActiveIndex() : 0;
    
    console.log(index)


    let nextImg = function () {
        if (index === galleryItems.length - 1) {
            return index = galleryItems.length - 1
        }
        return index++
    }
            
    let prevImg = function () {
        if (index === 0) {
           return index = 0
        }
        return index--
    }

    if (e.code === "ArrowRight") {
        nextImg()
    }
        
    else if (e.code === "ArrowLeft") {
        prevImg()
    }

    return image.setAttribute('src', `${galleryItems[index].original}`)
        
})

