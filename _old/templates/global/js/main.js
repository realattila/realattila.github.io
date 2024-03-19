// Work Slider
{
    const prevBtn = document.querySelector('.work__btn--prev');
    const nextBtn = document.querySelector('.work__btn--next');
    const slides = document.querySelectorAll('.work__list__li');
    const slidesArr = Array.from(slides);
    const workItem = document.querySelectorAll('.work__list__item');
    const workListItems = document.querySelector('.work__list');
    let workCounter = 1;

    const orderSlides = (number) => {
        slidesArr.map(slide => {
            slide.querySelector('a').classList.remove('work__list__item--active');
        });

        workListItems.style.opacity = 0;
        setTimeout(()=>{
            workListItems.style.opacity = 1;
        },500);
        switch (number) {
            case 0:
                workItem[0].classList.add('work__list__item--active');
                slides[0].style.order = 2;
                slides[1].style.order = 3;
                slides[2].style.order = 1;
                break;
            case 1:
                workItem[1].classList.add('work__list__item--active');
                slides[0].style.order = 1;
                slides[1].style.order = 2;
                slides[2].style.order = 3;
                break;
            case 2:
                workItem[2].classList.add('work__list__item--active');
                slides[0].style.order = 3;
                slides[1].style.order = 1;
                slides[2].style.order = 2;
                break;
        }
        
    }
    prevBtn.addEventListener('click', ()=> {
        if(workCounter === 0) workCounter = 3;
        workCounter --;
        orderSlides(workCounter);
        
    });
    nextBtn.addEventListener('click', ()=> {
        if(workCounter === 2) workCounter = -1;
        workCounter ++;
        orderSlides(workCounter);
    });
}

// Toggle Menu 
    let toggleTime = false;
    const toggleMenu = document.querySelector('.header__toggle');
    const menu = document.querySelector('.menu');
    const perspective =  document.querySelector('.perspective');

    toggleMenu.addEventListener('click', () => {
        if(!perspective.classList.contains('perspective--active')) {
            perspective.classList.add('perspective--active');
            menu.classList.add('menu--active');
            setTimeout(() => {
                toggleTime = true;
            },1)
        }
    });

    perspective.addEventListener('click', () => {
        if(toggleTime) {
            perspective.classList.remove('perspective--active');
            menu.classList.remove('menu--active');
            toggleTime = false;
        }
    });

    
// menu Selector 
const menuSelector = (number) => {

    SectionSelector(number);
} 

// line Selector
const lineSelector = (number) => {
    SectionSelector(number);
}

// key press
const bodyKeyPress = (event)=> {
    switch(event.keyCode) {
        case 40:
            SectionSelector(itemCounterChanger(1));
            break;
        case 38:
            SectionSelector(itemCounterChanger(0));
            break;

    }
}
let mouseWheelTimeout = true;
// mouseWheel
document.querySelector("#body").addEventListener('wheel', (e) => {
    if(mouseWheelTimeout) {
        if(e.deltaY > 0.5) {
            SectionSelector(itemCounterChanger(1));
        }
        else if(e.deltaY < -0.5) {
            SectionSelector(itemCounterChanger(0));
        }
        mouseWheelTimeout = false;
        setTimeout(() => {
            mouseWheelTimeout = true;
        }, 800);
    }
    else {
        return false;
    }


    
})



// variables 
const menuItems = document.querySelectorAll('.menu__item');
let itemCounter = 1;
const lineItems = document.querySelectorAll('.line__item');

// itemCounterChanger
const itemCounterChanger = (prop)=> {
    if(prop === 1) {
        if(itemCounter === 5) {
            return 1
        }
        else {
            return itemCounter + 1;
        }
    }
    else if(prop === 0) {
        if(itemCounter === 1) {
            return 5
        }
        else {
            return itemCounter -1;
        }
    }
}

// section Selector
const Sections = document.querySelectorAll('.item');
const SectionsArr = Array.from(Sections);
const SectionSelector = (number) => {

    //section Changer
    SectionsArr.map(item => {
        item.classList.remove('item--active');
        item.style.animation = 'none';
    });
    if(number > itemCounter) {
        SectionsArr[number -1].classList.add('item--active');
        SectionsArr[number -1].style.animation = 'showdown 1s';
        SectionsArr[itemCounter -1].style.animation = 'fadeup 0.5s';
    }
    else if (number < itemCounter){
        SectionsArr[number -1].classList.add('item--active');
        SectionsArr[number -1].style.animation = 'showup 1s';
        SectionsArr[itemCounter -1].style.animation = 'fadedown 0.5s';
    }
    itemCounter = number;

    //menu Changer
    Array.from(menuItems).map(item => {
        item.classList.remove('menu__item--active');
    });
    menuItems[number -1].classList.add('menu__item--active');
    perspective.classList.remove('perspective--active');
    menu.classList.remove('menu--active');
    toggleTime = false;

    //line Changer 
    Array.from(lineItems).map(item => {
        item.classList.remove('line__item--active');
    });
    lineItems[number -1].classList.add('line__item--active');
}