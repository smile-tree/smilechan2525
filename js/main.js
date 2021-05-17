'use strict';

{
  const images=["phototop/p1.jpg","phototop/p2.jpg","phototop/p3.jpg","phototop/p4.jpg","phototop/p5.jpg","phototop/p6.jpg"];

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