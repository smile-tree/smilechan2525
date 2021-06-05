'use strict';

{
  const images=["photomain/m1.jpg","photomain/m2.jpg","photomain/m3.jpg","photomain/m4.jpg","photomain/m5.jpg","photomain/m6.jpg","photomain/m7.jpg","photomain/m8.jpg","photomain/m9.jpg","photomain/m10.jpg","photomain/m11.jpg"];

  let count=0;
  const slideimage=()=>{
    if(count >=images.length){
      count=0;
    }else{
      document.getElementById('slideshow').src=images[count];
      count++;
    }
  }
  setInterval(slideimage,5000);
}

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click',() =>{
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click',() =>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

}