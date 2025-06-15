const imgContainer = document.querySelector('.images');

// Helper wait function
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

// Create image function that returns a Promise
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found: ' + imgPath));
    });
  });
};

// Global variable to track current image
let currentImg;

// Sequence image loading
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => {
    console.error('❌', err);
  });
