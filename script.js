// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuList = document.querySelector('.menu-list');

  // Toggle menu on click
  menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });
});

// Thumbnail switch
function changeImage(element) {
    const container = element.closest('.product-container');
    container.querySelector('.main-image').src = element.src;
    container.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active'));
    element.classList.add('active');
}

// Add to cart alert
function addToCart() {
    alert("Item added to cart!");
}

// Slider swipe functionality
const slider = document.querySelector('.product-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => isDown = false);
slider.addEventListener('mouseup', () => isDown = false);
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('touchend', () => isDown = false);
slider.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    e.preventDefault(); // prevents page scrolling
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});


// EMAILJS

(function(){
emailjs.init("YOUR_PUBLIC_KEY");
})();

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){
e.preventDefault();

emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID", this)
.then(function(){
alert("Message sent successfully!");
contactForm.reset();
}, function(error){
alert("Failed to send message.");
});
});