/* Retirado do site OwlCarousel -> Demos -> Basic -> Setup 
Serve para manipulação de elementos em tela */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})