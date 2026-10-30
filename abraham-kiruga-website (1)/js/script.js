var bg=document.getElementById('bg'),nav=document.getElementById('nav');
bg.onclick=function(){var o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');bg.setAttribute('aria-expanded','false')}});
var links=[].slice.call(nav.querySelectorAll('a:not(.cta)'));
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});
links.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s)io.observe(s)})}