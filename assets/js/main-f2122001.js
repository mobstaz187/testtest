(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const s=document.getElementById("uiiaiGif");document.getElementById("videoContainer");const i=document.getElementById("resultVideo"),u=document.getElementById("rollButton");function y(){const o=document.querySelector(".background-elements"),n=50,t=50;for(let a=0;a<n;a++){const e=document.createElement("div");e.className="particle",e.style.left=`${Math.random()*100}%`,e.style.top=`${Math.random()*100}%`,e.style.setProperty("--moveX",`${(Math.random()-.5)*300}px`),e.style.setProperty("--moveY",`${(Math.random()-.5)*300}px`),e.style.setProperty("--rotation",`${Math.random()*720-360}deg`),e.style.animationDelay=`${Math.random()*20}s`,o.appendChild(e)}for(let a=0;a<t;a++){const e=document.createElement("div");e.className="sparkle",e.style.left=`${Math.random()*100}%`,e.style.top=`${Math.random()*100}%`,e.style.animationDelay=`${Math.random()*2}s`,o.appendChild(e)}}y();const d=new Audio("./oia.mp3"),p=document.getElementById("contractAddress"),m=p.querySelector(".copied-message");p.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("Updating...."),m.classList.add("show"),setTimeout(()=>{m.classList.remove("show")},2e3)}catch(o){console.error("Failed to copy:",o)}});let c=null;const h=()=>{const o=document.createElement("canvas");o.width=s.width,o.height=s.height,o.getContext("2d").drawImage(s,0,0),c=new Image,c.src=o.toDataURL(),f()};s.addEventListener("load",h,{once:!0});function f(){c&&(s.src=c.src)}function g(){for(let n=0;n<30;n++){const t=document.createElement("img");t.src="./happy-cat.gif",t.className="happy-cat",t.style.left=Math.random()*100+"vw",t.style.top=Math.random()*100+"vh",document.body.appendChild(t),setTimeout(()=>{t.remove()},4e3)}}function v(){for(let n=0;n<30;n++){const t=document.createElement("img");t.src="./oia-uia.gif",t.className="floating-uiiai",t.style.left=Math.random()*100+"vw",t.style.top=Math.random()*100+"vh",document.body.appendChild(t),setTimeout(()=>{t.remove()},4e3)}}function E(o){i.src=`./video/${o}.mp4`,i.onloadeddata=()=>{i.play().catch(n=>{console.error("Error playing video:",n)})}}i.addEventListener("ended",()=>{i.src="",f(),u.style.display="block",document.querySelector(".content-wrapper").classList.remove("rolling")});function w(){u.style.display="none",document.querySelector(".content-wrapper").classList.add("rolling"),d.currentTime=0,d.play().catch(t=>{console.error("Error playing audio:",t)});const o=document.getElementById("result");o.style.transform="scale(0)",o.style.animation="none",o.textContent="";const n=new Date().getTime();s.src=`./oia-uia.gif?t=${n}`,g(),v(),setTimeout(()=>{const t=Math.floor(Math.random()*6)+1;o.textContent=`You rolled a ${t}!`,o.style.animation="resultBounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",E(t)},4e3)}document.getElementById("rollButton").addEventListener("click",w);s.src="./oia-uia.gif";
