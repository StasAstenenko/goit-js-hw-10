import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as b,i as p}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");e.setAttribute("disabled","");let s,a;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){s=o[0],s<new Date?(e.setAttribute("disabled",""),p.error({message:"Please choose a date in the future",backgroundColor:"#ef4040",messageColor:"#fff",messageSize:"16",imageWidth:302,close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",iconColor:"#FAFAFB"})):e.removeAttribute("disabled"),console.log(s)}};b(c,C);e.addEventListener("click",()=>{a&&clearInterval(a),e.setAttribute("disabled",""),e.classList.remove("right-date"),c.setAttribute("disabled",""),l(),a=setInterval(l,1e3)});let t;function l(){if(t=s.getTime()-Date.now(),t<0){clearInterval(a),c.removeAttribute("disabled","");return}const o=1e3,i=o*60,r=i*60,n=r*24,d=Math.floor(t/n),u=Math.floor(t%n/r),m=Math.floor(t%n%r/i),f=Math.floor(t%n%r%i/o);S.textContent=String(d).padStart(2,"0"),g.textContent=String(u).padStart(2,"0"),h.textContent=String(m).padStart(2,"0"),y.textContent=String(f).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map