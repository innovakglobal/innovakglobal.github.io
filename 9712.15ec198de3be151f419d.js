(self.webpackChunkMyInnovak=self.webpackChunkMyInnovak||[]).push([[9712],{9712:(e,s,t)=>{"use strict";t.r(s),t.d(s,{startFocusVisible:()=>a});const o="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],a=()=>{let e=[],s=!0;const t=document,a=s=>{e.forEach(e=>e.classList.remove(o)),s.forEach(e=>e.classList.add(o)),e=s},c=()=>{s=!1,a([])};t.addEventListener("keydown",e=>{s=n.includes(e.key),s||a([])}),t.addEventListener("focusin",e=>{if(s&&e.composedPath){const s=e.composedPath().filter(e=>!!e.classList&&e.classList.contains("ion-focusable"));a(s)}}),t.addEventListener("focusout",()=>{t.activeElement===t.body&&a([])}),t.addEventListener("touchstart",c),t.addEventListener("mousedown",c)}}}]);