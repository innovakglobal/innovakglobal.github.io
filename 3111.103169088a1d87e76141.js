(self.webpackChunkMyInnovak=self.webpackChunkMyInnovak||[]).push([[3111],{3111:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>u,keyboardDidClose:()=>c,keyboardDidOpen:()=>w,keyboardDidResize:()=>y,resetKeyboardAssist:()=>r,setKeyboardClose:()=>g,setKeyboardOpen:()=>b,startKeyboardAssist:()=>h,trackViewportChanges:()=>l});const o="ionKeyboardDidShow",s="ionKeyboardDidHide";let a={},d={},n=!1;const r=()=>{a={},d={},n=!1},h=e=>{p(e),e.visualViewport&&(d=u(e.visualViewport),e.visualViewport.onresize=()=>{l(e),w()||y(e)?b(e):c(e)&&g(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>b(e,t)),e.addEventListener("keyboardDidHide",()=>g(e))},b=(e,t)=>{f(e,t),n=!0},g=e=>{k(e),n=!1},w=()=>!n&&a.width===d.width&&(a.height-d.height)*d.scale>150,y=e=>n&&!c(e),c=e=>n&&d.height===e.innerHeight,f=(e,t)=>{const i=new CustomEvent(o,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},k=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},l=e=>{a=Object.assign({},d),d=u(e.visualViewport)},u=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);