// js/script.js

// Smooth Navigation
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
};

document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Video Generator Form Handling
const videoForm = document.getElementById('video-form');
videoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const videoData = new FormData(this);
    // Process video data here
    console.log('Video data submitted:', videoData);
});

// LocalStorage Integration
const saveFormData = () => {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
};

const loadFormData = () => {
    const formData = JSON.parse(localStorage.getItem('formData')) || {};
    document.getElementById('name').value = formData.name || '';
    document.getElementById('email').value = formData.email || '';
};

loadFormData();

// Dynamic Gallery Management
const imageGallery = document.getElementById('gallery');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

images.forEach(imgSrc => {
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = 'Gallery Image';
    imageGallery.appendChild(imgElement);
});