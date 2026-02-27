document.addEventListener('DOMContentLoaded',()=>{
  const hb=document.querySelector('.hamburger');
  const nl=document.querySelector('.nav-links');
  if(hb&&nl)hb.addEventListener('click',()=>nl.classList.toggle('open'));
  document.querySelectorAll('.acc-head').forEach(btn=>{
    btn.addEventListener('click',()=>btn.closest('.acc-item').classList.toggle('open'));
  });
  const path=window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href=a.getAttribute('href').split('/').pop();
    if(href===path||(path===''&&href==='index.html'))a.classList.add('active');
  });
});
