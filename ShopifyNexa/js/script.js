function toggleMenu(){
  var ham=document.getElementById('hamburger');
  var menu=document.getElementById('mobileMenu');
  var isOpen=menu.classList.contains('open');
  if(isOpen){
    menu.classList.remove('open');
    ham.classList.remove('open');
    document.body.style.overflow='';
  } else {
    menu.classList.add('open');
    ham.classList.add('open');
    document.body.style.overflow='hidden';
  }
}
function closeMenu(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow='';
}
// Close menu on outside click
document.addEventListener('click',function(e){
  var menu=document.getElementById('mobileMenu');
  var ham=document.getElementById('hamburger');
  if(menu.classList.contains('open')&&!menu.contains(e.target)&&!ham.contains(e.target)){
    closeMenu();
  }
});

function toggleFaq(btn){
  var item=btn.closest('.faq-item');
  var isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function(el){el.classList.remove('open')});
  if(!isOpen)item.classList.add('open');
}

function submitForm(){
  var email=document.getElementById('formEmail').value;
  var service=document.getElementById('formService').value;
  if(!email||!service){alert('Please fill in your email and select a service.');return;}
  document.getElementById('contactForm').style.display='none';
  document.getElementById('formSuccess').style.display='block';
}

var observer=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      e.target.style.opacity=1;
      e.target.style.transform='translateY(0)';
    }
  });
},{threshold:.12});

document.querySelectorAll('.service-card,.process-step,.pricing-card,.testimonial-card,.faq-item,.why-point,.about-value,.problem-card,.portfolio-item').forEach(function(el){
  el.style.opacity=0;
  el.style.transform='translateY(22px)';
  el.style.transition='opacity .55s ease,transform .55s ease';
  observer.observe(el);
});
