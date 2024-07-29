const nextButton = document.querySelector('.nextButton')
const prevButton = document.querySelector('.prevButton')
const carousel = document.querySelector('.carousel')
const list = document.querySelector('.list')
const runningTime = document.querySelector('.carousel .timeRunning')

const slides = [
    {
        id: 1,
        name: "Eagle",
        url: 'image/eagel1.jpg'
    },
    {
        id: 2,
        name: "Owl",
        url: 'image/owl1.jpg',
    },
    {
        id: 3,
        name: "Crow",
        url: 'image/crow.jpg'
    },
    {
        id: 4,
        name: "Butterfly",
        url: 'image/heron.jpeg',
    },
    {
        id: 5,
        name: "Owl",
        url: 'image/owl2.jpg'
    },
    {
        id: 6,
        name: "Eagle",
        url: 'image/eagel3.jpg'
    },
    {
        id: 7,
        url: 'image/kingfirser2.jpeg'
    },
    {
        id: 8,
        name: "Parrot",
        url: 'image/parrot2.jpg'
    },
    {
        id: 9,
        name: "Heron",
        url: 'image/heron.jpeg'
    },
    {
        id: 10,
        name: "Butterfly",
        url: 'image/butterfly2.jpg'
    },
]

slides.forEach((slide) => {
    const item = document.createElement('div');
    const contentDiv = document.createElement('div');
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');

    item.classList.add('item');
    item.style.backgroundImage = `url("${slide.url}")`;
    contentDiv.classList.add('content');
    h1.classList.add('title');
    h2.classList.add('name');
    p.classList.add('des')

    h1.textContent = `${slide.name}`
    h2.textContent = 'SLIDER'
    p.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.'

    list.appendChild(item);
    item.appendChild(contentDiv);
    contentDiv.appendChild(h1)
    contentDiv.appendChild(h2)
    contentDiv.appendChild(p)
});


const timeRunning = 3000
const timeAutoNext = 7000

nextButton.onclick = function () {
    showSlider('nextButton')
}

prevButton.onclick = function () {
    showSlider('prevButton')
}

let runTimeOut

let runNextAuto = setTimeout(() => {
    nextButton.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if (type === 'nextButton') {
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('nextButton')
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prevButton')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout(() => {
        carousel.classList.remove('nextButton')
        carousel.classList.remove('prevButton')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextButton.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()