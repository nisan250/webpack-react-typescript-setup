if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(e=>{const r=c(...e);return i.default||(i.default=r),i})}))}}define("./sw.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"3d013e124ccd4cd2835d63865f620da3.svg",revision:"2a4562a579e11b7b094d7793c6d5a21b"},{url:"523e1b932381f19b26060571ccfc7a31.svg",revision:"e0b5805d423a4ec9473ee315250968b2"},{url:"f745b86e2d3c3a774b2a1b432700aa70.ttf",revision:"9942588a6c84f959132556d99e83ded6"},{url:"favico.png",revision:"6fc37db53608c22ea21e12a1a78bb06e"},{url:"index.html",revision:"694de827c0e75167bb96a1552c12b360"},{url:"main.css",revision:"f16de936c43f0e1bf868518cfbe5bb6a"},{url:"main.fbd998d9dba3d4898797.js",revision:"37068ada3c618d059b52922a1d4396e5"},{url:"manifest.13a7f46c0959f20382785266f8730ec2.json",revision:"13a7f46c0959f20382785266f8730ec2"},{url:"runtime.c0c294e9d041672fb654.js",revision:"bac88d544bdbbe5a66ee018b2815af84"},{url:"vendors.45c0f82140ce927ef204.js",revision:"53c9bf4958b511b9aab81d49d0193b73"}],{})}));
