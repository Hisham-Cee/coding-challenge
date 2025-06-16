'use strict';

const imageContainer = document.querySelector('.images');

// Helper function to wait
const wait = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

// Challenge 26's createImage function
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imageContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error(`Image not found: ${imgPath}`));
    });
  });
};

// ✅ PART 1: loadNPause using async/await
const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error('💥 Error:', err.message);
  }
};

//Uncomment this to run Part 1
loadNPause();


// PART 2: loadAll loading in parallel
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async path => await createImage(path));
    const imgElements = await Promise.all(imgs);

    imgElements.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error('💥 Error:', err.message);
  }
};

// Uncomment this to run Part 2
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
