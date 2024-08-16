// var carouselElement = document.querySelector('#carouselExample');
//     var carousel = new bootstrap.Carousel(carouselElement, {
//         interval: 5000, // Set interval to 5000ms (5 seconds)
//         ride: 'carousel'
//     });
// const container = document.querySelector('.container');
// const columns = document.querySelectorAll('.column');

// container.addEventListener('click', () => {
//     container.classList.toggle('expanded');
// });

// columns.forEach((column, index) => {
//     const image = column.querySelector('.column-image');
//     const content = column.querySelector('.column-content');

//     image.addEventListener('click', () => {
//         image.style.color = 'white';
//         content.style.display = 'block';
//     });
// });

// let currentSlide = 0;  

// function showSlide(index) {  
//     const slides = document.querySelectorAll('.carousel-item');  
//     const totalSlides = slides.length;  

//     if (index >= totalSlides) {  
//         currentSlide = 0;  
//     } else if (index < 0) {  
//         currentSlide = totalSlides - 1;  
//     } else {  
//         currentSlide = index;  
//     }  

//     const offset = -currentSlide * 100;  
//     document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;  
// }  

// function nextSlide() {  
//     showSlide(currentSlide + 1);  
// }  

// function prevSlide() {  
//     showSlide(currentSlide - 1);  
// }  