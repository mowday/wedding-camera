(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],f=0,d=[];f<o.length;f++)i=o[f],s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"0ab6":function(t,e,n){},1757:function(t,e,n){"use strict";var a=n("0ab6"),s=n.n(a);s.a},"1cb7":function(t,e,n){},"1fec":function(t,e,n){"use strict";var a=n("1cb7"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("collage")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.error?n("div",[t._v("\n  "+t._s(t.error)+"\n")]):n("div",{staticClass:"wrapper",on:{click:function(e){t.countdown=!0}}},[n("camera",{staticClass:"camera",model:{value:t.countdown,callback:function(e){t.countdown=e},expression:"countdown"}}),n("div",{staticClass:"grid"},[n("div",{staticClass:"slot"},[n("image-switcher",{attrs:{src:t.slotA}})],1),n("div",{staticClass:"slot"},[n("image-switcher",{attrs:{src:t.slotB}})],1)]),n("div",{staticClass:"grid"},[n("div",{staticClass:"slot"},[n("image-switcher",{attrs:{src:t.slotC}})],1),n("div",{staticClass:"slot"},[n("image-switcher",{attrs:{src:t.slotD}})],1)]),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"middle-circle"},[n("div",{staticClass:"outer"},[n("div",{staticClass:"inner"})])])}],c=(n("96cf"),n("3b8d")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-switcher-wrapper"},[n("img",{ref:"top",staticClass:"image-switcher-top",class:{active:!0===t.showTop},on:{load:function(e){return t.imageReady(!0)}}}),n("img",{ref:"bottom",staticClass:"image-switcher-bottom",class:{active:void 0!==t.showTop},on:{load:function(e){return t.imageReady(!1)}}})])},l=[],f={name:"ImageSwitcher",data:function(){return{showTop:void 0}},props:{src:String},mounted:function(){this.src&&this.update(this.src)},methods:{update:function(t){var e=this.showTop?this.$refs.bottom:this.$refs.top;e.src=t,e.complete&&this.imageReady(!this.showTop)},imageReady:function(t){this.showTop=t}},watch:{src:function(t){this.update(t)}}},d=f,h=(n("1757"),n("2877")),p=Object(h["a"])(d,u,l,!1,null,"a44294ac",null),v=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"camera-wrapper",class:{active:t.value}},[0!=t.countdown?n("div",{staticClass:"countdown"},[t._v(t._s(t.countdown))]):t._e(),n("video",{ref:"video",class:{visible:!t.image}}),n("div",{staticClass:"canvas-wrapper",class:{visible:t.image}},[n("canvas",{ref:"canvas",class:{visible:t.image}})])])},g=[],w={name:"Camera",data:function(){return{countdown:7,running:!1,image:void 0}},methods:{start:function(){var t=this;this.countdown=7;var e=setInterval(function(){t.countdown--,0==t.countdown&&(clearInterval(e),t.takePhoto())},1e3)},takePhoto:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$refs.canvas.width=this.$refs.video.clientWidth,this.$refs.canvas.height=this.$refs.video.clientHeight,this.$refs.canvas.getContext("2d").drawImage(this.$refs.video,0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.image=this.$refs.canvas.toDataURL("image/jpeg",1),t.next=6,fetch("http://localhost:3000/upload",{method:"POST",body:this.image});case 6:setTimeout(function(){e.$emit("input",!1),e.image=void 0},5e3);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;navigator.getUserMedia({video:!0,audio:!1},function(e){var n=t.$refs.video;n.srcObject=e,n.play(),t.canvas=document.createElement("canvas")},console.log)},props:{value:{type:Boolean,default:!1}},watch:{value:function(t,e){t&&!e&&this.start()}}},b=w,x=(n("fbc2"),Object(h["a"])(b,m,g,!1,null,"f227111e",null)),y=x.exports,C={name:"Collage",components:{ImageSwitcher:v,Camera:y},data:function(){return{images:[],slotA:void 0,slotB:void 0,slotC:void 0,slotD:void 0,lastSlot:0,lastIndex:0,countdown:!1,error:void 0}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return setInterval(Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateImages();case 2:e.swapNextSlot();case 3:case"end":return t.stop()}},t)})),1e4),t.next=3,this.updateImages();case 3:this.swapNextSlot(),this.swapNextSlot(),this.swapNextSlot(),this.swapNextSlot();case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getImage:function(){if(0!==this.images.length){if(1===this.images.length)return this.images[0];var t=this.lastIndex++;return t>=this.images.length&&(t=0,this.lastIndex=0),this.images[t]}},updateImages:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/images.json");case 2:if(e=t.sent,200!==e.status){t.next=10;break}return t.next=6,e.json();case 6:n=t.sent,this.images=n,t.next=11;break;case 10:console.log("Failed to get images");case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),swapNextSlot:function(){navigator.getUserMedia||(this.error="No webcam detected :(");var t=["slotA","slotB","slotC","slotD"],e=t[this.lastSlot++];this[e]=this.getImage(),this.lastSlot>t.length&&(this.lastSlot=0)}},watch:{countdown:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return t.next=3,this.updateImages();case 3:this.images.length<4&&this.swapNextSlot();case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},_=C,j=(n("1fec"),Object(h["a"])(_,i,o,!1,null,"02747fac",null)),O=j.exports,S={name:"app",components:{Collage:O}},$=S,k=(n("034f"),Object(h["a"])($,s,r,!1,null,null,null)),I=k.exports;n("d2d7");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(I)}}).$mount("#app")},"64a9":function(t,e,n){},aef3:function(t,e,n){},d2d7:function(t,e,n){},fbc2:function(t,e,n){"use strict";var a=n("aef3"),s=n.n(a);s.a}});
//# sourceMappingURL=app.32e9b2cc.js.map