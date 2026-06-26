// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
    ?.scrollIntoView({behavior:"smooth"});
  });
});

// 页面淡入
window.addEventListener("load",()=>{
  document.body.style.opacity="0";
  document.body.style.transition="0.6s";
  requestAnimationFrame(()=>{
    document.body.style.opacity="1";
  });
});
