
  // JavaScript code for "Cargar más" and "Mostrar menos" functionality

  const allImages = document.querySelectorAll('.img-container');
  const buttonLoadMore = document.getElementById('button-load-more');
  let currentIndex = 0;
  let isShowingAll = false;

  const showImages = () => {
    if (!isShowingAll) {
      for (let i = currentIndex; i < currentIndex + 2 && i < allImages.length; i++) {
        allImages[i].style.display = 'inline-block';
      }
      currentIndex += 2;
      if (currentIndex >= allImages.length) {
        buttonLoadMore.textContent = 'Mostrar menos';
        isShowingAll = true;
      }
    } else {
      allImages.forEach((img) => {
        img.style.display = 'none';
      });
      buttonLoadMore.textContent = 'Cargar más';
      isShowingAll = false;
      currentIndex = 0;
      for (let i = currentIndex; i < currentIndex + 2 && i < allImages.length; i++) {
        allImages[i].style.display = 'inline-block';
      }
      currentIndex += 2;
    }
  };

  buttonLoadMore.addEventListener('click', showImages);

  // Initial display: Show the first 2 images
  showImages();