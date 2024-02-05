"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{1014:function(e,t,i){let o,s,a;i.d(t,{a0:function(){return D},ij:function(){return O}});/*!
 * Jarallax v2.2.0 (https://github.com/nk-o/jarallax)
 * Copyright 2024 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */var n,r={type:"scroll",speed:.5,containerClass:"jarallax-container",imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null,videoClass:"jarallax-video",videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,disableVideo:!1,onVideoInsert:null,onVideoWorkerInit:null},l="undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{};let{navigator:p}=l,d=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent);function m(){o=l.innerWidth||document.documentElement.clientWidth,d?(!a&&document.body&&((a=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(a)),s=(a?a.clientHeight:0)||l.innerHeight||document.documentElement.clientHeight):s=l.innerHeight||document.documentElement.clientHeight}function h(){return{width:o,height:s}}m(),l.addEventListener("resize",m),l.addEventListener("orientationchange",m),l.addEventListener("load",m),n=()=>{m()},"complete"===document.readyState||"interactive"===document.readyState?n():document.addEventListener("DOMContentLoaded",n,{capture:!0,once:!0,passive:!0});let u=[];function c(){if(!u.length)return;let{width:e,height:t}=h();u.forEach((i,o)=>{let{instance:s,oldData:a}=i;if(!s.isVisible())return;let n=s.$item.getBoundingClientRect(),r={width:n.width,height:n.height,top:n.top,bottom:n.bottom,wndW:e,wndH:t},l=!a||a.wndW!==r.wndW||a.wndH!==r.wndH||a.width!==r.width||a.height!==r.height,p=l||!a||a.top!==r.top||a.bottom!==r.bottom;u[o].oldData=r,l&&s.onResize(),p&&s.onScroll()}),l.requestAnimationFrame(c)}let g=new l.IntersectionObserver(e=>{e.forEach(e=>{e.target.jarallax.isElementInViewport=e.isIntersecting})},{rootMargin:"50px"}),{navigator:y}=l,v=0;class f{constructor(e,t){let i=this;i.instanceID=v,v+=1,i.$item=e,i.defaults={...r};let o=i.$item.dataset||{},s={};if(Object.keys(o).forEach(e=>{let t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==i.defaults[t]&&(s[t]=o[e])}),i.options=i.extend({},i.defaults,s,t),i.pureOptions=i.extend({},i.options),Object.keys(i.options).forEach(e=>{"true"===i.options[e]?i.options[e]=!0:"false"===i.options[e]&&(i.options[e]=!1)}),i.options.speed=Math.min(2,Math.max(-1,parseFloat(i.options.speed))),"string"==typeof i.options.disableParallax&&(i.options.disableParallax=new RegExp(i.options.disableParallax)),i.options.disableParallax instanceof RegExp){let e=i.options.disableParallax;i.options.disableParallax=()=>e.test(y.userAgent)}if("function"!=typeof i.options.disableParallax&&(i.options.disableParallax=()=>!1),"string"==typeof i.options.disableVideo&&(i.options.disableVideo=new RegExp(i.options.disableVideo)),i.options.disableVideo instanceof RegExp){let e=i.options.disableVideo;i.options.disableVideo=()=>e.test(y.userAgent)}"function"!=typeof i.options.disableVideo&&(i.options.disableVideo=()=>!1);let a=i.options.elementInViewport;a&&"object"==typeof a&&void 0!==a.length&&([a]=a),a instanceof Element||(a=null),i.options.elementInViewport=a,i.image={src:i.options.imgSrc||null,$container:null,useImgTag:!1,position:"fixed"},i.initImg()&&i.canInitParallax()&&i.init()}css(e,t){return"string"==typeof t?l.getComputedStyle(e).getPropertyValue(t):(Object.keys(t).forEach(i=>{e.style[i]=t[i]}),e)}extend(e,...t){return function(e,...t){return e=e||{},Object.keys(t).forEach(i=>{t[i]&&Object.keys(t[i]).forEach(o=>{e[o]=t[i][o]})}),e}(e,...t)}getWindowData(){let{width:e,height:t}=h();return{width:e,height:t,y:document.documentElement.scrollTop}}initImg(){let e=this.options.imgElement;return e&&"string"==typeof e&&(e=this.$item.querySelector(e)),e instanceof Element||(this.options.imgSrc?(e=new Image).src=this.options.imgSrc:e=null),e&&(this.options.keepImg?this.image.$item=e.cloneNode(!0):(this.image.$item=e,this.image.$itemParent=e.parentNode),this.image.useImgTag=!0),!!this.image.$item||(null===this.image.src&&(this.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",this.image.bgImage=this.css(this.$item,"background-image")),!(!this.image.bgImage||"none"===this.image.bgImage))}canInitParallax(){return!this.options.disableParallax()}init(){let e={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},t={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden"};if(!this.options.keepImg){let e=this.$item.getAttribute("style");if(e&&this.$item.setAttribute("data-jarallax-original-styles",e),this.image.useImgTag){let e=this.image.$item.getAttribute("style");e&&this.image.$item.setAttribute("data-jarallax-original-styles",e)}}if("static"===this.css(this.$item,"position")&&this.css(this.$item,{position:"relative"}),"auto"===this.css(this.$item,"z-index")&&this.css(this.$item,{zIndex:0}),this.image.$container=document.createElement("div"),this.css(this.image.$container,e),this.css(this.image.$container,{"z-index":this.options.zIndex}),"fixed"===this.image.position&&this.css(this.image.$container,{"-webkit-clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 100%)","clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}),this.image.$container.setAttribute("id",`jarallax-container-${this.instanceID}`),this.options.containerClass&&this.image.$container.setAttribute("class",this.options.containerClass),this.$item.appendChild(this.image.$container),this.image.useImgTag?t=this.extend({"object-fit":this.options.imgSize,"object-position":this.options.imgPosition,"max-width":"none"},e,t):(this.image.$item=document.createElement("div"),this.image.src&&(t=this.extend({"background-position":this.options.imgPosition,"background-size":this.options.imgSize,"background-repeat":this.options.imgRepeat,"background-image":this.image.bgImage||`url("${this.image.src}")`},e,t))),("opacity"===this.options.type||"scale"===this.options.type||"scale-opacity"===this.options.type||1===this.options.speed)&&(this.image.position="absolute"),"fixed"===this.image.position){let e=(function(e){let t=[];for(;null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t})(this.$item).filter(e=>{let t=l.getComputedStyle(e),i=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return i&&"none"!==i||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])});this.image.position=e.length?"absolute":"fixed"}t.position=this.image.position,this.css(this.image.$item,t),this.image.$container.appendChild(this.image.$item),this.onResize(),this.onScroll(!0),this.options.onInit&&this.options.onInit.call(this),"none"!==this.css(this.$item,"background-image")&&this.css(this.$item,{"background-image":"none"}),u.push({instance:this}),1===u.length&&l.requestAnimationFrame(c),g.observe(this.options.elementInViewport||this.$item)}destroy(){var e;e=this,u.forEach((t,i)=>{t.instance.instanceID===e.instanceID&&u.splice(i,1)}),g.unobserve(e.options.elementInViewport||e.$item);let t=this.$item.getAttribute("data-jarallax-original-styles");if(this.$item.removeAttribute("data-jarallax-original-styles"),t?this.$item.setAttribute("style",t):this.$item.removeAttribute("style"),this.image.useImgTag){let e=this.image.$item.getAttribute("data-jarallax-original-styles");this.image.$item.removeAttribute("data-jarallax-original-styles"),e?this.image.$item.setAttribute("style",t):this.image.$item.removeAttribute("style"),this.image.$itemParent&&this.image.$itemParent.appendChild(this.image.$item)}this.image.$container&&this.image.$container.parentNode.removeChild(this.image.$container),this.options.onDestroy&&this.options.onDestroy.call(this),delete this.$item.jarallax}coverImage(){let{height:e}=h(),t=this.image.$container.getBoundingClientRect(),i=t.height,{speed:o}=this.options,s="scroll"===this.options.type||"scroll-opacity"===this.options.type,a=0,n=i,r=0;return s&&(o<0?(a=o*Math.max(i,e),e<i&&(a-=o*(i-e))):a=o*(i+e),o>1?n=Math.abs(a-e):o<0?n=a/o+Math.abs(a):n+=(e-i)*(1-o),a/=2),this.parallaxScrollDistance=a,r=s?(e-n)/2:(i-n)/2,this.css(this.image.$item,{height:`${n}px`,marginTop:`${r}px`,left:"fixed"===this.image.position?`${t.left}px`:"0",width:`${t.width}px`}),this.options.onCoverImage&&this.options.onCoverImage.call(this),{image:{height:n,marginTop:r},container:t}}isVisible(){return this.isElementInViewport||!1}onScroll(e){if(!e&&!this.isVisible())return;let{height:t}=h(),i=this.$item.getBoundingClientRect(),o=i.top,s=i.height,a={},n=Math.max(0,s+o),r=Math.max(0,-o),l=Math.max(0,o+s-t),p=Math.max(0,s-(o+s-t)),d=1-(t-o)/(t+s)*2,m=1;if(s<t?m=1-(r||l)/s:n<=t?m=n/t:p<=t&&(m=p/t),("opacity"===this.options.type||"scale-opacity"===this.options.type||"scroll-opacity"===this.options.type)&&(a.transform="translate3d(0,0,0)",a.opacity=m),"scale"===this.options.type||"scale-opacity"===this.options.type){let e=1;this.options.speed<0?e-=this.options.speed*m:e+=this.options.speed*(1-m),a.transform=`scale(${e}) translate3d(0,0,0)`}if("scroll"===this.options.type||"scroll-opacity"===this.options.type){let e=this.parallaxScrollDistance*d;"absolute"===this.image.position&&(e-=o),a.transform=`translate3d(0,${e}px,0)`}this.css(this.image.$item,a),this.options.onScroll&&this.options.onScroll.call(this,{section:i,beforeTop:Math.max(0,o),beforeTopEnd:n,afterTop:r,beforeBottom:l,beforeBottomEnd:p,afterBottom:Math.max(0,-o+t-s),visiblePercent:m,fromViewportCenter:d})}onResize(){this.coverImage()}}let b=function(e,t,...i){let o;("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);let s=e.length,a=0;for(;a<s;a+=1)if("object"==typeof t||void 0===t?e[a].jarallax||(e[a].jarallax=new f(e[a],t)):e[a].jarallax&&(o=e[a].jarallax[t].apply(e[a].jarallax,i)),void 0!==o)return o;return e};b.constructor=f;/*!
 * Video Worker v2.2.0 (https://github.com/nk-o/video-worker)
 * Copyright 2024 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/video-worker/blob/master/LICENSE)
 */var $={autoplay:!1,loop:!1,mute:!1,volume:100,showControls:!0,accessibilityHidden:!1,startTime:0,endTime:0};let I=0;class A{type="none";constructor(e,t){this.url=e,this.options_default={...$},this.options=function(e,...t){return e=e||{},Object.keys(t).forEach(i=>{t[i]&&Object.keys(t[i]).forEach(o=>{e[o]=t[i][o]})}),e}({},this.options_default,t),this.videoID=this.constructor.parseURL(e),this.videoID&&this.init()}isValid(){return!!this.videoID}init(){this.ID=I,I+=1,this.playerID=`VideoWorker-${this.ID}`}on(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}off(e,t){this.userEventsList&&this.userEventsList[e]&&(t?this.userEventsList[e].forEach((i,o)=>{i===t&&(this.userEventsList[e][o]=!1)}):delete this.userEventsList[e])}fire(e,...t){this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(e=>{e&&e.apply(this,t)})}static parseURL(e){return!1}play(e){}pause(){}mute(){}unmute(){}setVolume(e=!1){}getVolume(e){}getMuted(e){}setCurrentTime(e=!1){}getCurrentTime(e){}getImageURL(e){}getVideo(e){}}var x="undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{};function E(){this.doneCallbacks=[],this.failCallbacks=[]}E.prototype={execute(e,t){let i=e.length;for(t=Array.prototype.slice.call(t);i;)e[i-=1].apply(null,t)},resolve(...e){this.execute(this.doneCallbacks,e)},reject(...e){this.execute(this.failCallbacks,e)},done(e){this.doneCallbacks.push(e)},fail(e){this.failCallbacks.push(e)}};let V=0,T=0,w=new E;class C extends A{type="youtube";static parseURL(e){let t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=)([^#\&\?]*).*/);return!!t&&11===t[1].length&&t[1]}init(){super.init(),function(){if(V)return;V=!0;let e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.src="https://www.youtube.com/iframe_api",t.appendChild(e)}()}play(e){let t=this;t.player&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),x.YT.PlayerState.PLAYING!==t.player.getPlayerState()&&(t.options.endTime&&!t.options.loop?t.getCurrentTime(e=>{e<t.options.endTime&&t.player.playVideo()}):t.player.playVideo()))}pause(){this.player&&this.player.pauseVideo&&x.YT.PlayerState.PLAYING===this.player.getPlayerState()&&this.player.pauseVideo()}mute(){this.player&&this.player.mute&&this.player.mute()}unmute(){this.player&&this.player.unMute&&this.player.unMute()}setVolume(e=!1){this.player&&"number"==typeof e&&this.player.setVolume&&this.player.setVolume(e)}getVolume(e){if(!this.player){e(!1);return}this.player.getVolume&&e(this.player.getVolume())}getMuted(e){if(!this.player){e(null);return}this.player.isMuted&&e(this.player.isMuted())}setCurrentTime(e=!1){this.player&&"number"==typeof e&&this.player.seekTo&&this.player.seekTo(e)}getCurrentTime(e){this.player&&this.player.getCurrentTime&&e(this.player.getCurrentTime())}getImageURL(e){let t=this;if(t.videoImage){e(t.videoImage);return}let i=["maxresdefault","sddefault","hqdefault","0"],o=0,s=new Image;s.onload=function(){120!==(this.naturalWidth||this.width)||o===i.length-1?(t.videoImage=`https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`,e(t.videoImage)):(o+=1,this.src=`https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`)},s.src=`https://img.youtube.com/vi/${t.videoID}/${i[o]}.jpg`}getVideo(e){var t;let i=this;if(i.$video){e(i.$video);return}t=()=>{let t,o,s;i.$video||((t=document.createElement("div")).style.display="none"),i.playerOptions={host:"https://www.youtube-nocookie.com",videoId:i.videoID,playerVars:{autohide:1,rel:0,autoplay:0,playsinline:1}},i.options.showControls||(i.playerOptions.playerVars.iv_load_policy=3,i.playerOptions.playerVars.modestbranding=1,i.playerOptions.playerVars.controls=0,i.playerOptions.playerVars.showinfo=0,i.playerOptions.playerVars.disablekb=1),i.playerOptions.events={onReady(e){i.options.mute?e.target.mute():"number"==typeof i.options.volume&&e.target.setVolume(i.options.volume),i.options.autoplay&&i.play(i.options.startTime),i.fire("ready",e),i.options.loop&&!i.options.endTime&&(i.options.endTime=i.player.getDuration()-.1),setInterval(()=>{i.getVolume(t=>{i.options.volume!==t&&(i.options.volume=t,i.fire("volumechange",e))})},150)},onStateChange(e){i.options.loop&&e.data===x.YT.PlayerState.ENDED&&i.play(i.options.startTime),o||e.data!==x.YT.PlayerState.PLAYING||(o=1,i.fire("started",e)),e.data===x.YT.PlayerState.PLAYING&&i.fire("play",e),e.data===x.YT.PlayerState.PAUSED&&i.fire("pause",e),e.data===x.YT.PlayerState.ENDED&&i.fire("ended",e),e.data===x.YT.PlayerState.PLAYING?s=setInterval(()=>{i.fire("timeupdate",e),i.options.endTime&&i.player.getCurrentTime()>=i.options.endTime&&(i.options.loop?i.play(i.options.startTime):i.pause())},150):clearInterval(s)},onError(e){i.fire("error",e)}};let a=!i.$video;if(a){let e=document.createElement("div");e.setAttribute("id",i.playerID),t.appendChild(e),document.body.appendChild(t)}i.player=i.player||new x.YT.Player(i.playerID,i.playerOptions),a&&(i.$video=document.getElementById(i.playerID),i.options.accessibilityHidden&&(i.$video.setAttribute("tabindex","-1"),i.$video.setAttribute("aria-hidden","true")),i.videoWidth=parseInt(i.$video.getAttribute("width"),10)||1280,i.videoHeight=parseInt(i.$video.getAttribute("height"),10)||720),e(i.$video)},void 0!==x.YT&&0!==x.YT.loaded||T?"object"==typeof x.YT&&1===x.YT.loaded?t():w.done(()=>{t()}):(T=1,x.onYouTubeIframeAPIReady=function(){x.onYouTubeIframeAPIReady=null,w.resolve("done"),t()})}}let L=0,P=0,S=new E;class k extends A{type="vimeo";static parseURL(e){let t=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);return!!t&&!!t[3]&&t[3]}static parseURLHash(e){let t=e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);return t&&5===t.length?t[4]:null}init(){super.init(),function(){if(L||(L=!0,void 0!==x.Vimeo))return;let e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.src="https://player.vimeo.com/api/player.js",t.appendChild(e)}()}play(e){let t=this;t.player&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(e=>{e&&(t.options.endTime&&!t.options.loop?t.getCurrentTime(e=>{e<t.options.endTime&&t.player.play()}):t.player.play())}))}pause(){let e=this;e.player&&e.player.getPaused().then(t=>{t||e.player.pause()})}mute(){this.player&&this.player.setVolume&&this.setVolume(0)}unmute(){this.player&&this.player.setVolume&&this.setVolume(this.options.volume||100)}setVolume(e=!1){this.player&&"number"==typeof e&&this.player.setVolume&&this.player.setVolume(e/100)}getVolume(e){if(!this.player){e(!1);return}this.player.getVolume&&this.player.getVolume().then(t=>{e(100*t)})}getMuted(e){if(!this.player){e(null);return}this.player.getVolume&&this.player.getVolume().then(t=>{e(!!t)})}setCurrentTime(e=!1){this.player&&"number"==typeof e&&this.player.setCurrentTime&&this.player.setCurrentTime(e)}getCurrentTime(e){this.player&&this.player.getCurrentTime&&this.player.getCurrentTime().then(t=>{e(t)})}getImageURL(e){let t=this;if(t.videoImage){e(t.videoImage);return}let i=x.innerWidth||1920;x.devicePixelRatio&&(i*=x.devicePixelRatio),i=Math.min(i,1920);let o=new XMLHttpRequest;o.open("GET",`https://vimeo.com/api/oembed.json?url=${t.url}&width=${i}`,!0),o.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400){let i=JSON.parse(this.responseText);i.thumbnail_url&&(t.videoImage=i.thumbnail_url,e(t.videoImage))}},o.send()}getVideo(e){let t=this;if(t.$video){e(t.$video);return}!function(e){if(void 0!==x.Vimeo||P)void 0!==x.Vimeo?e():S.done(()=>{e()});else{P=1;let t=setInterval(()=>{void 0!==x.Vimeo&&(clearInterval(t),S.resolve("done"),e())},20)}}(()=>{let i,o;t.$video||((i=document.createElement("div")).style.display="none"),t.playerOptions={dnt:1,id:t.videoID,autopause:0,transparent:0,autoplay:t.options.autoplay?1:0,loop:t.options.loop?1:0,muted:t.options.mute||0===t.options.volume?1:0};let s=t.constructor.parseURLHash(t.url);if(s&&(t.playerOptions.h=s),t.options.showControls||(t.playerOptions.controls=0),!t.options.showControls&&t.options.loop&&t.options.autoplay&&(t.playerOptions.background=1),!t.$video){let e="";Object.keys(t.playerOptions).forEach(i=>{""!==e&&(e+="&"),e+=`${i}=${encodeURIComponent(t.playerOptions[i])}`}),t.$video=document.createElement("iframe"),t.$video.setAttribute("id",t.playerID),t.$video.setAttribute("src",`https://player.vimeo.com/video/${t.videoID}?${e}`),t.$video.setAttribute("frameborder","0"),t.$video.setAttribute("mozallowfullscreen",""),t.$video.setAttribute("allowfullscreen",""),t.$video.setAttribute("title","Vimeo video player"),t.options.accessibilityHidden&&(t.$video.setAttribute("tabindex","-1"),t.$video.setAttribute("aria-hidden","true")),i.appendChild(t.$video),document.body.appendChild(i)}t.player=t.player||new x.Vimeo.Player(t.$video,t.playerOptions),t.options.mute||"number"!=typeof t.options.volume||t.setVolume(t.options.volume),t.options.startTime&&t.options.autoplay&&t.player.setCurrentTime(t.options.startTime),t.player.getVideoWidth().then(e=>{t.videoWidth=e||1280}),t.player.getVideoHeight().then(e=>{t.videoHeight=e||720}),t.player.on("timeupdate",e=>{o||(t.fire("started",e),o=1),t.fire("timeupdate",e),t.options.endTime&&e.seconds>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())}),t.player.on("play",e=>{t.fire("play",e),t.options.startTime&&0===e.seconds&&t.play(t.options.startTime)}),t.player.on("pause",e=>{t.fire("pause",e)}),t.player.on("ended",e=>{t.fire("ended",e)}),t.player.on("loaded",e=>{t.fire("ready",e)}),t.player.on("volumechange",e=>{t.getVolume(e=>{t.options.volume=e}),t.fire("volumechange",e)}),t.player.on("error",e=>{t.fire("error",e)}),e(t.$video)})}}class j extends A{type="local";static parseURL(e){let t=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),i={},o=0;return t.forEach(e=>{let t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);t&&t[1]&&t[2]&&(i["ogv"===t[1]?"ogg":t[1]]=t[2],o=1)}),!!o&&i}play(e){let t=this;t.player&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&(t.options.endTime&&!t.options.loop?t.getCurrentTime(e=>{e<t.options.endTime&&t.player.play()}):t.player.play()))}pause(){this.player&&!this.player.paused&&this.player.pause()}mute(){this.player&&(this.$video.muted=!0)}unmute(){this.player&&(this.$video.muted=!1)}setVolume(e=!1){this.player&&"number"==typeof e&&(this.$video.volume=e/100)}getVolume(e){if(!this.player){e(!1);return}e(100*this.$video.volume)}getMuted(e){if(!this.player){e(null);return}e(this.$video.muted)}setCurrentTime(e=!1){this.player&&"number"==typeof e&&(this.$video.currentTime=e)}getCurrentTime(e){this.player&&e(this.player.currentTime)}getImageURL(e){this.videoImage&&e(this.videoImage)}getVideo(e){let t,i;let o=this;if(o.$video){e(o.$video);return}o.$video||((t=document.createElement("div")).style.display="none"),o.$video||(o.$video=document.createElement("video"),o.player=o.$video,o.options.showControls&&(o.$video.controls=!0),"number"==typeof o.options.volume&&o.setVolume(o.options.volume),o.options.mute&&o.mute(),o.options.loop&&(o.$video.loop=!0),o.$video.setAttribute("playsinline",""),o.$video.setAttribute("webkit-playsinline",""),o.options.accessibilityHidden&&(o.$video.setAttribute("tabindex","-1"),o.$video.setAttribute("aria-hidden","true")),o.$video.setAttribute("id",o.playerID),t.appendChild(o.$video),document.body.appendChild(t),Object.keys(o.videoID).forEach(e=>{!function(e,t,i){let o=document.createElement("source");o.src=t,o.type=i,e.appendChild(o)}(o.$video,o.videoID[e],`video/${e}`)})),o.player.addEventListener("playing",e=>{i||o.fire("started",e),i=1}),o.player.addEventListener("timeupdate",function(e){o.fire("timeupdate",e),o.options.endTime&&this.currentTime>=o.options.endTime&&(o.options.loop?o.play(o.options.startTime):o.pause())}),o.player.addEventListener("play",e=>{o.fire("play",e)}),o.player.addEventListener("pause",e=>{o.fire("pause",e)}),o.player.addEventListener("ended",e=>{o.fire("ended",e)}),o.player.addEventListener("loadedmetadata",function(){o.videoWidth=this.videoWidth||1280,o.videoHeight=this.videoHeight||720,o.fire("ready"),o.options.autoplay&&o.play(o.options.startTime)}),o.player.addEventListener("volumechange",e=>{o.getVolume(e=>{o.options.volume=e}),o.fire("volumechange",e)}),o.player.addEventListener("error",e=>{o.fire("error",e)}),e(o.$video)}}function R(e,t){let i=!1;return Object.keys(R.providers).forEach(o=>{!i&&R.providers[o].parseURL(e)&&(i=new R.providers[o](e,t))}),i||new A(e,t)}R.BaseClass=A,R.providers={Youtube:C,Vimeo:k,Local:j};let D=b,O=function(){return function(e=l.jarallax){if(void 0===e)return;let t=e.constructor,i=t.prototype.onScroll;t.prototype.onScroll=function(){let e=this;i.apply(e),e.isVideoInserted||!e.video||e.options.videoLazyLoading&&!e.isElementInViewport||e.options.disableVideo()||(e.isVideoInserted=!0,e.video.getVideo(t=>{let i=t.parentNode;e.css(t,{position:e.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",margin:0,zIndex:-1}),e.$video=t,"local"===e.video.type&&(e.image.src?e.$video.setAttribute("poster",e.image.src):e.image.$item&&"IMG"===e.image.$item.tagName&&e.image.$item.src&&e.$video.setAttribute("poster",e.image.$item.src)),e.options.videoClass&&e.$video.setAttribute("class",`${e.options.videoClass} ${e.options.videoClass}-${e.video.type}`),e.image.$container.appendChild(t),i.parentNode.removeChild(i),e.options.onVideoInsert&&e.options.onVideoInsert.call(e)}))};let o=t.prototype.coverImage;t.prototype.coverImage=function(){let e=o.apply(this),t=!!this.image.$item&&this.image.$item.nodeName;if(e&&this.video&&t&&("IFRAME"===t||"VIDEO"===t)){let i=e.image.height,o=i*this.image.width/this.image.height,s=(e.container.width-o)/2,a=e.image.marginTop;e.container.width>o&&(i=(o=e.container.width)*this.image.height/this.image.width,s=0,a+=(e.image.height-i)/2),"IFRAME"===t&&(i+=400,a-=200),this.css(this.$video,{width:`${o}px`,marginLeft:`${s}px`,height:`${i}px`,marginTop:`${a}px`})}return e};let s=t.prototype.initImg;t.prototype.initImg=function(){let e=s.apply(this);return(this.options.videoSrc||(this.options.videoSrc=this.$item.getAttribute("data-jarallax-video")||null),this.options.videoSrc)?(this.defaultInitImgResult=e,!0):e};let a=t.prototype.canInitParallax;t.prototype.canInitParallax=function(){let e=this,t=a.apply(e);if(!e.options.videoSrc)return t;let i=new R(e.options.videoSrc,{autoplay:!0,loop:e.options.videoLoop,showControls:!1,accessibilityHidden:!0,startTime:e.options.videoStartTime||0,endTime:e.options.videoEndTime||0,mute:!e.options.videoVolume,volume:e.options.videoVolume||0});function o(){e.image.$default_item&&(e.image.$item=e.image.$default_item,e.image.$item.style.display="block",e.coverImage(),e.onScroll())}if(e.options.onVideoWorkerInit&&e.options.onVideoWorkerInit.call(e,i),i.isValid()){if(this.options.disableParallax()&&(t=!0,e.image.position="absolute",e.options.type="scroll",e.options.speed=1),t){if(i.on("ready",()=>{if(e.options.videoPlayOnlyVisible){let t=e.onScroll;e.onScroll=function(){t.apply(e),e.videoError||!e.options.videoLoop&&(e.options.videoLoop||e.videoEnded)||(e.isVisible()?i.play():i.pause())}}else i.play()}),i.on("started",()=>{e.image.$default_item=e.image.$item,e.image.$item=e.$video,e.image.width=e.video.videoWidth||1280,e.image.height=e.video.videoHeight||720,e.coverImage(),e.onScroll(),e.image.$default_item&&(e.image.$default_item.style.display="none")}),i.on("ended",()=>{e.videoEnded=!0,e.options.videoLoop||o()}),i.on("error",()=>{e.videoError=!0,o()}),e.video=i,!e.defaultInitImgResult&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"!==i.type))return i.getImageURL(t=>{e.image.bgImage=`url("${t}")`,e.init()}),!1}else e.defaultInitImgResult||i.getImageURL(t=>{let i=e.$item.getAttribute("style");i&&e.$item.setAttribute("data-jarallax-original-styles",i),e.css(e.$item,{"background-image":`url("${t}")`,"background-position":"center","background-size":"cover"})})}return t};let n=t.prototype.destroy;t.prototype.destroy=function(){this.image.$default_item&&(this.image.$item=this.image.$default_item,delete this.image.$default_item),n.apply(this)}}(D)}}}]);