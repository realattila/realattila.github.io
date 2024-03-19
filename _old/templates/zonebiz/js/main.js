// Toggle Menu
$(".nav__toggle").click(() => { 
    $(".nav__toggle__icon").toggleClass("nav__toggle__icon--toggle");
    $(".nav__menu").toggleClass("nav__menu--show");
});

// fixed nav
$(window).on('scroll', ()=> {
    if($(window).scrollTop() > 50) {
        $('.nav').addClass('nav--fixed')
    }
    else {
        $('.nav').removeClass('nav--fixed')
    }
})

//Header Slider 
$('#header_slider').owlCarousel({
    items:1,
    loop:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});




$(document).ready( ()=> {
    let $grid = $('#projects').isotope({
        itemSelector: '.portfolio__item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.portfolio__item',
        }
    });
    $('.portfolio__selector').on('click', 'button', (event)=> {

    	let filterValue = event.target.attributes['data-filter'].value;
        $grid.isotope({ filter: filterValue });
        $('.portfolio__btn--active').removeClass('portfolio__btn--active');
        $(event.target).addClass('portfolio__btn--active');
    });

});




// blog slider 

//Header Slider 
$('#blog_slider').owlCarousel({
    items:3,
    navigationText:false,
    autoPlay:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        },
        992:{
            items:3,
            nav:true,
            loop:false
        }
    }
});
