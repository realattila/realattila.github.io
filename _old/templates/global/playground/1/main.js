const slider = document.querySelector('.slider');
const imges = document.querySelectorAll('.slider img');


const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let counter = 0;

const size  = imges[0].clientWidth;
console.log(slider);


// slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter === 4) {
        if(counter === 4) counter = -1;
        counter++;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        slider.style.transition = 'none';
        return true;
    }

    if(counter === 4) counter = -1;
    counter ++;

    slider.style.transition = 'transform 0.4s ease-in-out';
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

    console.log(counter)

});

prevBtn.addEventListener('click', ()=> {
    if(counter === 0) {
        if(counter === 0) counter = 5;
        counter --;
        slider.style.transition =  'none';
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
        return true;
    }

    if(counter === 0) counter = 5;
    counter --;

    slider.style.transition =  'transform 0.4s ease-in-out';
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter)
 
});





// const container = document.querySelector('.container');
// const slider = container.querySelector('.slider');
// const sliderImages = container.querySelectorAll('.slider img');
// const leftBtn = document.querySelector('#prev');
// const rightBtn = document.querySelector('#next');
// let counter = 1;
// const width = sliderImages[0].clientWidth;


// slider.style.transform = 'translateX(' + (-width * counter) + 'px)';

// rightBtn.addEventListener('click', ()=>{
//   if(counter >= sliderImages.length -1) return;
//   slider.style.transition = 'transform 0.4s ease-in-out';
//   counter++;
//   console.log(counter);
//   slider.style.transform = 'translateX(' + (-width * counter) + 'px)';
// });

// leftBtn.addEventListener('click', ()=>{
//   if(counter <= 0) return;
//   slider.style.transition = 'transform 0.4s ease-in-out';
//   counter--;
//   console.log(counter);
//   slider.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';
// });