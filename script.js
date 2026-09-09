document.querySelectorAll("[data-scroll]").forEach(el=>{
  el.addEventListener("click",()=>{
    const target=document.getElementById(el.dataset.scroll);
    if(target) target.scrollIntoView({behavior:"smooth"});
    document.querySelector(".mobile-menu")?.classList.remove("open");
  });
});

const menu=document.querySelector(".menu-button");
menu?.addEventListener("click",()=>document.querySelector(".mobile-menu").classList.toggle("open"));

document.querySelectorAll(".filters button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const filter=btn.dataset.filter;
    document.querySelectorAll(".project").forEach(card=>{
      card.style.display=(filter==="all"||card.dataset.category.split(" ").includes(filter))?"":"none";
    });
  });
});

document.querySelectorAll(".faq-item button").forEach(button=>{
  button.addEventListener("click",()=>{
    const item=button.parentElement;
    const wasOpen=item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(i=>{
      i.classList.remove("open");
      i.querySelector("button span").textContent="+";
    });
    if(!wasOpen){
      item.classList.add("open");
      item.querySelector("button span").textContent="−";
    }
  });
});

const form=document.getElementById("contactForm");
form?.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("contactName").value.trim();
  const detail=document.getElementById("contactDetail").value.trim();
  const project=document.getElementById("contactProject").value.trim();
  const message=`Hi Rupak, I would like to talk about a website.\n\nName: ${name}\nPhone/Email: ${detail}\nProject: ${project}`;
  window.open("https://wa.me/917020066862?text="+encodeURIComponent(message),"_blank");
});

document.getElementById("smsButton")?.addEventListener("click",()=>{
  const name=document.getElementById("contactName").value.trim();
  const detail=document.getElementById("contactDetail").value.trim();
  const project=document.getElementById("contactProject").value.trim();
  const message=`Hi Rupak, I would like to talk about a website. Name: ${name}. Contact: ${detail}. Project: ${project}`;
  window.location.href="sms:+917020066862?body="+encodeURIComponent(message);
});
