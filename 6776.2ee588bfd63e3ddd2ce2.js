(self.webpackChunkMyInnovak=self.webpackChunkMyInnovak||[]).push([[6776],{6776:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createSwipeBackGesture:()=>s});var a=n(1843),r=n(8520);n(6953);const s=(e,t,n,s,o)=>{const c=e.ownerDocument.defaultView;return(0,r.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:n,onMove:e=>{s(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,n=e.deltaX/t,r=e.velocityX,s=r>=0&&(r>.2||e.deltaX>t/2),i=(s?1-n:n)*t;let u=0;if(i>5){const e=i/Math.abs(r);u=Math.min(e,540)}o(s,n<=0?.01:(0,a.j)(0,n,.9999),u)}})}}}]);