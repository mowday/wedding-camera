(function(t){function e(e){for(var s,i,o=e[0],c=e[1],u=e[2],d=0,h=[];d<o.length;d++)i=o[d],a[i]&&h.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"1f41":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("collage")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.error?n("div",[t._v("\n  "+t._s(t.error)+"\n")]):n("div",{staticClass:"wrapper",on:{click:function(e){t.countdown=!0}}},[n("camera",{staticClass:"camera",model:{value:t.countdown,callback:function(e){t.countdown=e},expression:"countdown"}}),n("div",{staticClass:"grid"},[n("div",{staticClass:"slot"},[n("image-switcher",{attrs:{src:t.slotA}})],1),n("div",{staticClass:"slot"},[n("image-switcher",{attrs:{src:t.slotB}})],1),n("div",{staticClass:"slot"},[n("image-switcher",{attrs:{src:t.slotC}})],1)]),n("div",{staticClass:"grid"},[n("div",{staticClass:"slot"},[n("image-switcher",{attrs:{src:t.slotD}})],1),n("div",{staticClass:"slot"},[n("image-switcher",{attrs:{src:t.slotE}})],1),n("div",{staticClass:"slot"},[n("image-switcher",{attrs:{src:t.slotF}})],1)]),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"middle-circle"},[n("div",{staticClass:"outer"},[n("div",{staticClass:"inner"})])])}],c=(n("96cf"),n("3b8d")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-switcher-wrapper"},[n("div",{ref:"top",staticClass:"image-switcher-top",class:{active:!0===t.showTop},style:{"background-image":t.topUrl},on:{load:function(e){return t.imageReady(!0)}}}),n("div",{ref:"bottom",staticClass:"image-switcher-bottom",class:{active:!1===t.showTop},style:{"background-image":t.bottomUrl},on:{load:function(e){return t.imageReady(!1)}}})])},l=[],d={name:"ImageSwitcher",data:function(){return{showTop:void 0,topUrl:void 0,bottomUrl:void 0}},props:{src:String},mounted:function(){this.src&&this.update(this.src)},methods:{update:function(t){this.showTop?this.bottomUrl='url("'.concat(t,'")'):this.topUrl='url("'.concat(t,'")'),this.imageReady(!this.showTop)},imageReady:function(t){this.showTop=t}},watch:{src:function(t){this.update(t)}}},h=d,f=(n("7381"),n("2877")),p=Object(f["a"])(h,u,l,!1,null,"58dc8958",null),v=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"camera-wrapper",class:{active:t.value}},[0!=t.countdown?n("div",{staticClass:"countdown"},[t._v(t._s(t.countdown))]):t._e(),n("video",{ref:"video",class:{visible:!t.image}}),n("div",{staticClass:"canvas-wrapper",class:{visible:t.image}},[n("canvas",{ref:"canvas",class:{visible:t.image}})])])},g=[],w={name:"Camera",data:function(){return{countdown:7,running:!1,image:void 0}},methods:{start:function(){var t=this;this.countdown=7;var e=setInterval(function(){t.countdown--,0==t.countdown&&(clearInterval(e),t.takePhoto())},1e3)},takePhoto:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$refs.canvas.width=this.$refs.video.clientWidth,this.$refs.canvas.height=this.$refs.video.clientHeight,this.$refs.canvas.getContext("2d").drawImage(this.$refs.video,0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.image=this.$refs.canvas.toDataURL("image/jpeg",1),t.next=6,fetch("http://localhost:3000/upload",{method:"POST",body:this.image});case 6:setTimeout(function(){e.$emit("input",!1),e.image=void 0},5e3);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=this;navigator.getUserMedia({video:!0,audio:!1},function(e){var n=t.$refs.video;n.srcObject=e,n.play(),t.canvas=document.createElement("canvas")},console.log)},props:{value:{type:Boolean,default:!1}},watch:{value:function(t,e){t&&!e&&this.start()}}},b=w,x=(n("fbc2"),Object(f["a"])(b,m,g,!1,null,"f227111e",null)),y=x.exports,C={name:"Collage",components:{ImageSwitcher:v,Camera:y},data:function(){return{images:[],slotA:void 0,slotB:void 0,slotC:void 0,slotD:void 0,slotE:void 0,slotF:void 0,lastSlot:0,lastIndex:0,countdown:!1,error:void 0}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return setInterval(Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateImages();case 2:e.swapNextSlot();case 3:case"end":return t.stop()}},t)})),1e4),t.next=3,this.updateImages();case 3:this.swapNextSlot(),this.swapNextSlot(),this.swapNextSlot(),this.swapNextSlot(),this.swapNextSlot(),this.swapNextSlot();case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getImage:function(){if(0!==this.images.length){if(1===this.images.length)return this.images[0];var t=this.lastIndex++;return t>=this.images.length&&(t=0,this.lastIndex=0),this.images[t]}},updateImages:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/images.json");case 2:if(e=t.sent,200!==e.status){t.next=10;break}return t.next=6,e.json();case 6:n=t.sent,this.images=n,t.next=11;break;case 10:console.log("Failed to get images");case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),swapNextSlot:function(){navigator.getUserMedia||(this.error="No webcam detected :(");var t=["slotA","slotB","slotC","slotD","slotE","slotF"],e=t[this.lastSlot++];this[e]=this.getImage(),this.lastSlot>t.length&&(this.lastSlot=0)}},watch:{countdown:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return t.next=3,this.updateImages();case 3:this.images.length<6&&this.swapNextSlot();case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},S=C,_=(n("e085"),Object(f["a"])(S,i,o,!1,null,"a4b788b4",null)),j=_.exports,O={name:"app",components:{Collage:j}},k=O,$=(n("034f"),Object(f["a"])(k,a,r,!1,null,null,null)),I=$.exports;n("d2d7");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(I)}}).$mount("#app")},"64a9":function(t,e,n){},7381:function(t,e,n){"use strict";var s=n("1f41"),a=n.n(s);a.a},aef3:function(t,e,n){},b0bc:function(t,e,n){},d2d7:function(t,e,n){},e085:function(t,e,n){"use strict";var s=n("b0bc"),a=n.n(s);a.a},fbc2:function(t,e,n){"use strict";var s=n("aef3"),a=n.n(s);a.a}});
//# sourceMappingURL=app.71bd29eb.js.map