const nav=document.querySelector("[data-nav]");
const menu=document.querySelector("[data-menu]");
if(menu&&nav){
  const setMenu=open=>{
    nav.classList.toggle("open",open);
    menu.setAttribute("aria-expanded",String(open));
    menu.textContent=open?"Close":"Menu";
  };
  menu.addEventListener("click",()=>setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false);});
}
const current=location.pathname.split("/").pop()||"index.html";
document.querySelectorAll(".nav-links a").forEach(a=>{
  const href=(a.getAttribute("href")||"").split("#")[0];
  if(href===current){a.classList.add("active");a.setAttribute("aria-current","page");}
});
document.querySelectorAll(".faq-btn").forEach((btn,i)=>{
  btn.setAttribute("aria-expanded","false");
  btn.addEventListener("click",()=>{
    const item=btn.closest(".faq-item");
    const open=!item.classList.contains("open");
    item.classList.toggle("open",open);
    btn.setAttribute("aria-expanded",String(open));
    const mark=btn.querySelector("span");
    if(mark)mark.textContent=open?"−":"+";
  });
});
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
const quoteForm=document.querySelector("[data-quote-form]");
if(quoteForm){
  quoteForm.addEventListener("submit",e=>{
    e.preventDefault();
    const n=document.querySelector("[data-form-notice]");
    if(n){n.style.display="block";n.scrollIntoView({behavior:"smooth",block:"nearest"});}
  });
}