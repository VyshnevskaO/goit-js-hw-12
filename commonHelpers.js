import{a as b,S as v,i as m}from"./assets/vendor-4e844cac.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function g(r){return r.map(({webformatURL:t,largeImageURL:a,tags:o,likes:e,views:s,comments:l,downloads:L})=>`<li class="gallery-item">
	<a class="gallery-link" href="${a}">
		<img 
			class="gallery-image" 
			src="${t}"
			alt="${o}"
			width="360px"
            height="152px" />
	</a>
    <ul class="image-text"> 
    <li class="value">Likes<p class="amount">${e}</p></li>
    <li class="value">Views<p class="amount">${s}</p></li>
    <li class="value">Comments<p class="amount">${l}</p></li>
    <li class="value">Downloads<p class="amount">${L}</p></li>
    </ul>
   </li>`).join("")}async function p(r,t){const a="https://pixabay.com",o="/api/",e="43347579-3d95162bcb8db799a52fc5fc5";return(await b.get(`${a}${o}`,{params:{key:e,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const h=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),y=document.querySelector("form"),d=document.querySelector(".gallery"),i=document.querySelector("#animation"),u=document.querySelector(".load-btn");let n=1,c=null,f;y.addEventListener("submit",S);u.addEventListener("click",q);async function S(r){if(r.preventDefault(),u.classList.add("hidden"),i.classList.toggle("loader"),d.innerHTML="",n=1,c=r.target.elements.text.value.trim(),!c){i.classList.toggle("loader");return}try{const t=await p(c);t.hits.length===0?m.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(d.innerHTML=g(t.hits),h.refresh(),f=Math.ceil(t.totalHits/15),f>1&&u.classList.remove("hidden"))}catch(t){console.log(t)}finally{i.classList.toggle("loader"),y.reset()}}async function q(){i.classList.toggle("loader"),n+=1;try{const r=await p(c,n);d.insertAdjacentHTML("beforeend",g(r.hits)),h.refresh();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,left:0,behavior:"smooth"}),f===n&&(u.classList.add("hidden"),m.info({message:"We are sorry, but you have reached the end of search results"}))}catch(r){console.log(r)}finally{i.classList.toggle("loader")}}
//# sourceMappingURL=commonHelpers.js.map
