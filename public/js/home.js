// change navbar styles on scroll
window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY >0)
});
// change navbar styles on scroll
window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY >0)
});
// market
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n> slides.length){
        slideIndex = 1;
    }
    if (n<1){
        slideIndex = slides.length
    }
    for(i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.repeat("active","")
    }
    slides[slideIndex -1].getElementsByClassName.display = "block";
    dots[slideIndex -1].className += "active";
}