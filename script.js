// JavaScript code for "Cargar más" and "Mostrar menos" functionality

// JavaScript code for "Cargar más" and "Mostrar menos" functionality

const allImages = document.querySelectorAll('.img-container');
const buttonLoadMore = document.getElementById('button-load-more');
let currentIndex = allImages.length - 1;
let isShowingAll = false;

const showImages = () => {
  if (!isShowingAll) {
    allImages[currentIndex].style.display = 'block';
    currentIndex--;
    if (currentIndex < 0) {
      buttonLoadMore.textContent = 'Mostrar menos';
      isShowingAll = true;
      currentIndex = 0;
    }
  } else {
    allImages.forEach((img) => {
      img.style.display = 'none';
    });
    buttonLoadMore.textContent = 'Cargar más';
    isShowingAll = false;
    currentIndex = allImages.length - 1;
    allImages[currentIndex].style.display = 'block'; // Show the first image when resetting
  }
};

buttonLoadMore.addEventListener('click', showImages);

// Initial display: Show only the last image
showImages();
