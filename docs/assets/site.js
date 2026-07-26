const header=document.querySelector(".site-header");
document.querySelector(".menu")?.addEventListener("click",()=>header.classList.toggle("open"));
document.querySelectorAll("[data-share]").forEach(button=>button.addEventListener("click",async()=>{
  const url=location.href,title=document.title,type=button.dataset.share;
  if(type==="linkedin") open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,"_blank","noopener");
  if(type==="x") open(`https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,"_blank","noopener");
  if(type==="copy"){await navigator.clipboard.writeText(url);button.textContent="Link copied";setTimeout(()=>button.textContent="Copy link",1800)}
}));

// Comments and reactions are stored as public GitHub issues through Utterances.
// Readers stay on the article while GitHub provides identity, moderation, and persistence.
const slot=document.querySelector(".giscus-slot");
if(slot){
  const s=document.createElement("script");s.src="https://utteranc.es/client.js";s.async=true;s.crossOrigin="anonymous";
  Object.assign(s.dataset,{repo:"lewis-os/DLJ","issue-term":slot.dataset.term,label:"journal-conversation",theme:"github-light"});
  slot.replaceChildren(s);
}
