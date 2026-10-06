document.querySelectorAll("[data-menu]").forEach(btn=>btn.addEventListener("click",()=>document.querySelector("[data-nav]").classList.toggle("open")));
document.querySelectorAll(".faq-btn").forEach(btn=>btn.addEventListener("click",()=>btn.closest(".faq-item").classList.toggle("open")));
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
const quoteForm=document.querySelector("[data-quote-form]");
if(quoteForm){quoteForm.addEventListener("submit",e=>{e.preventDefault();const n=document.querySelector("[data-form-notice]");if(n){n.style.display="block";n.scrollIntoView({behavior:"smooth",block:"nearest"});}});}
