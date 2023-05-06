if (window.matchMedia("(max-width: 500px)").matches) {
   let img1 = document.querySelector('.img1');
   let img2 = document.querySelector('.img2');
   let img3 = document.querySelector('.img3');
   let img4 = document.querySelector('.img4');
   let img5 = document.querySelector('.img5');
   let img6 = document.querySelector('.img6');
   let films = document.querySelector('.films-img1');

   img2.style.display = 'none';
   img3.style.display = 'none';
   img4.style.display = 'none';
   img5.style.display = 'none';
   img6.style.display = 'none';
  /*
   setTimeout(() => {
  
    img1.style.display = 'none';
    img2.style.display = 'block';
  }, 2000)
  setTimeout(() => {
    img2.style.display = 'none';
    img3.style.display = 'block';
  }, 4000)
  setTimeout(() => {
    img3.style.display = 'none';
    img1.style.display = 'block';
  }, 6000)
  setTimeout(() => {
    img1.style.display = 'none';
    img2.style.display = 'block';
  }, 8000)
  setTimeout(() => {
    img2.style.display = 'none';
    img3.style.display = 'block';
  }, 10000)
  */
  function trocarImagens() {
    setTimeout(() => {
      img1.style.display = 'none';
      img2.style.display = 'block';
      setTimeout(() => {
        img2.style.display = 'none';
        img3.style.display = 'block';
        setTimeout(() => {
          img3.style.display = 'none';
          img1.style.display = 'block';
          trocarImagens(); // chama a função recursivamente
        }, 2000)
      }, 2000)
    }, 2000)
  }
  
  trocarImagens();

} else{
   
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 500) {
    location.reload();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1300) {
    location.reload();
  }
});
  