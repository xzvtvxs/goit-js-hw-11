import{a as d,S as y,i as a}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="53364959-970251902b7523d6caf21016a";function L(i){return d.get("https://pixabay.com/api/",{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader-container"),S=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:["←","→"],animationSpeed:500,loop:!1});function b(i){let r="";for(const o of i){const{webformatURL:s,largeImageURL:e,tags:t,likes:n,views:f,comments:g,downloads:p}=o;r+=`<li class="gallery-item">
        <a class="gallery-link" href=" ${e}">
          <img
            class="gallery-image"
            src="${s}"
            alt="${t}"
          />
        </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <span>Likes</span>
          ${n}
        </li>
        <li class="gallery-info-item">
          <span>Views</span>
          ${f}
        </li>
        <li class="gallery-info-item">
          <span>Comments</span>
          ${g}
        </li>
        <li class="gallery-info-item">
          <span>Downloads</span>
          ${p}
        </li>
      </ul>
    </li>`}c.insertAdjacentHTML("afterbegin",r),S.refresh()}function w(){c.innerHTML=""}function v(){u.classList.remove("is-hidden")}function l(){u.classList.add("is-hidden")}const m=document.querySelector(".form"),q=document.querySelector('[name = "search-text"]');m.addEventListener("submit",F);function F(i){i.preventDefault();const r=q.value.trim();if(!r){a.warning({title:"Warning!",message:"Please enter a search request!",position:"topRight"});return}w(),v(),L(r).then(o=>{if(l(),!o.hits||o.hits.length===0){a.info({title:"Attention!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(()=>{l(),a.error({message:"Something went wrong! Please try again later!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",iconText:"",iconUrl:"./img/error-icon.svg",iconColor:"#FAFAFB"})}),m.reset()}
//# sourceMappingURL=index.js.map
