/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

var index = 0

const showImage = () => {
    if (index < 7){
        index += 1
    } else {
        index = 0
    }
    document.querySelector('.featured_image').style.backgroundImage = `url('${images[index]}')`
}

const setIndex = (ev) => {
    const element = ev.currentTarget
    console.log(element.dataset.index)
    index = parseInt(element.dataset.index)
    displayImage()
}

const displayImage = () => {
    document.querySelector('.featured_image').style.backgroundImage = `url('${images[index]}')`
}

const next = () => {
    if (index < 7){
        index++
    } 
    else {
        index = 0
    }
    displayImage()
}

const prev = () => {
    if (index > 0){
        index--
    } 
    else {
        index = 7
    }
    displayImage()
}

initScreen()

document.querySelectorAll('.image').forEach(element => {
    element.onclick = setIndex
})
document.querySelector('.featured_image').onclick = showImage
document.querySelector('.next').onclick = next
document.querySelector('.prev').onclick = prev
