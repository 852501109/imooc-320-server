(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9caddcaa"],{3835:function(t,o,i){"use strict";i.d(o,"a",(function(){return e}));var n=i("06c5");function e(t,o){return function(t){if(Array.isArray(t))return t}(t)||function(t,o){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var n,e,a,s,r=[],l=!0,h=!1;try{if(a=(i=i.call(t)).next,0===o){if(Object(i)!==i)return;l=!1}else for(;!(l=(n=a.call(i)).done)&&(r.push(n.value),r.length!==o);l=!0);}catch(t){h=!0,e=t}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(h)throw e}}return r}}(t,o)||Object(n.a)(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"8cf2":function(t,o,i){"use strict";i.r(o),i("8e6e"),i("456d");var n=i("3835"),e=(i("7f7f"),i("6c7b"),i("2909")),a=(i("55dd"),i("ade3"));function s(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?s(Object(i),!0).forEach((function(o){Object(a.a)(t,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))}))}return t}i("c5f6"),i("ac6a");var l={name:"Pyramid",props:{options:{type:Object,default:function(){return{title:"",distance:[0,0],offset:[0,0],sort:"",color:["rgba(208,88,251,","rgba(36,201,255,","rgba(252,140,134,","rgba(128,235,210,"],fontFormatter:function(){return"default"},tooltip:{extraCssText:"background:#0C1A4D;color:#fff;",show:!0,fontColor:"#000",fontSize:14,backgroundColor:"#fff",formatter:null,z:999999},infoStyle:{stroke:!1,strokeColor:"#f00",size:null,color:null,highlightedColor:"#fff",setLineDash:[0,0],width:-10,offset:[0,0],dotSize:1}}}},data:{type:Array,default:function(){return[{name:"三孩以上",value:76},{name:"三孩",value:3221},{name:"二孩",value:13341},{name:"一孩",value:107652}]}}},watch:{data:{immediate:!0,deep:!0,handler:function(t){var o=this,i=0;t.forEach((function(t){i+=Number(t.value)})),this.dataInfo=t.map((function(t){var n=t.value/i*100;return r(r({},t),{},{accounted:n,title:o.integration.title})})),"max"===this.integration.sort?this.dataInfo.sort((function(t,o){return t.value-o.value})):"min"===this.integration.sort&&this.dataInfo.sort((function(t,o){return o.value-t.value}))}}},computed:{integration:function(){return{title:this.options.title?this.options.title:"",distance:this.options.distance?this.options.distance:[0,0],offset:this.options.offset?this.options.offset:[0,0],sort:this.options.sort?this.options.sort:"",color:this.options.color?this.options.color:["#70b89b","#bf6f6e","#23a0d8","#c143f8"],fontFormatter:this.options.fontFormatter?this.options.fontFormatter:function(){return"default"},tooltip:{extraCssText:"background:#0C1A4D;color:#fff;",show:!this.options.tooltip||!this.options.tooltip.show||this.options.tooltip.show,fontColor:this.options.tooltip&&this.options.tooltip.fontColor?this.options.tooltip.fontColor:"#000",fontSize:this.options.tooltip&&this.options.tooltip.fontSize?this.options.tooltip.fontSize:14,backgroundColor:this.options.tooltip&&this.options.tooltip.backgroundColor?this.options.tooltip.backgroundColor:"#fff",formatter:this.options.tooltip&&this.options.tooltip.formatter?this.options.tooltip.formatter:null,z:this.options.tooltip&&this.options.tooltip.z?this.options.tooltip.z:999999},infoStyle:{stroke:!!this.options.infoStyle&&!!this.options.infoStyle.stroke&&this.options.infoStyle.stroke,strokeColor:this.options.infoStyle&&this.options.infoStyle.strokeColor?this.options.infoStyle.strokeColor:"#fff",size:this.options.infoStyle&&this.options.infoStyle.size?this.options.infoStyle.size:null,color:this.options.infoStyle&&this.options.infoStyle.color?this.options.infoStyle.color:null,width:this.options.infoStyle&&(this.options.infoStyle.width||0!==this.options.infoStyle.width)?this.options.infoStyle.width:-10,offset:this.options.infoStyle&&this.options.infoStyle.offset?this.options.infoStyle.offset:[0,0],setLineDash:this.options.infoStyle&&this.options.infoStyle.setLineDash?this.options.infoStyle.setLineDash:[0,0],highlightedColor:this.options.infoStyle&&this.options.infoStyle.highlightedColor?this.options.infoStyle.highlightedColor:"#fff",dotSize:this.options.infoStyle&&(this.options.infoStyle.dotSize||0!==this.options.infoStyle.dotSize)?this.options.infoStyle.dotSize:4}}}},data:function(){return{canvas:null,ctx:null,canvasHeight:0,canvasWidth:0,canvasCenter:[0,0],point:{top:[0,0],left:[0,0],right:[0,0],bottom:[0,0],shadow:[0,0]},dataInfo:[],topAngle:{LTB:0,RTB:0},tooltipDiv:'<div  style="position:absolute;margin: 0px 0 0; line-height: 1;border-color: $[backgroundColor]$ ;background-color: $[backgroundColor]$;color: $[fontColor]$;\n      border-width: 1px;border-radius: 4px;padding: 10px;pointer-events: none;box-shadow: rgb(0 0 0 / 20%) 1px 2px 10px;border-style: solid;white-space: nowrap;">\n          <div style="margin: 0px 0 0;>\n            <div style="font-size: $[fontSize]$px; color: $[fontColor]$; font-weight: 400;> $[title]$ </div>\n            <div>\n              <div style="margin: 0px 0 0;>\n                <div style="margin: 0px 0 0;>\n                  <span\n                    style="\n                      display: inline-block;\n                      border-radius: 10px;\n                      width: 10px;\n                      height: 10px;\n                      background-color: $[color]$;\n                    "\n                  ></span>\n                  <span style="font-size: $[fontSize]$px; color: $[fontColor]$; font-weight: 400; margin-left: 2px">$[name]$</span>\n                  <span style="font-size: $[fontSize]$px; color: $[fontColor]$; font-weight: 900">$[val]$户</span>\n                  <div style="clear: both"></div>\n                </div>\n                <div style="clear: both"></div>\n              </div>\n              <div style="clear: both"></div>\n            </div>\n            <div style="clear: both"></div>\n          </div>\n          <div style="clear: both"></div>\n        </div>'}},mounted:function(){this.init()},methods:{init:function(){this.initCanvasBaseInfo(),this.paintDataInfo(),this.paintingBody(),this.eventRegistered()},initCanvasBaseInfo:function(){var t=document.getElementById("canvas-warpper");if(this.canvas=document.createElement("canvas"),t.appendChild(this.canvas),this.canvasWidth=t.offsetWidth,this.canvasHeight=t.offsetHeight,this.canvas.setAttribute("width",this.canvasWidth),this.canvas.setAttribute("height",this.canvasHeight),this.canvasCenter=[Math.round((this.canvasWidth-2*this.integration.distance[0])/2)+this.integration.distance[0],Math.round((this.canvasHeight-2*this.integration.distance[1])/2)+this.integration.distance[1]],!this.canvas.getContext)throw"canvas下未找到 getContext方法";for(var o in this.ctx=this.canvas.getContext("2d"),this.point.top=[this.canvasCenter[0]-this.canvasWidth/13,this.integration.distance[1]],this.point.left=[1.5*this.integration.distance[0],this.canvasHeight-this.integration.distance[1]-this.canvasHeight/5],this.point.right=[this.canvasWidth-1.9*this.integration.distance[0],this.canvasHeight-this.integration.distance[1]-this.canvasHeight/5],this.point.bottom=[this.canvasCenter[0]-this.canvasWidth/13,this.canvasHeight-this.integration.distance[1]],this.point.shadow=[this.integration.distance[0]-this.canvasCenter[0]/5,this.canvasHeight/1.2-this.integration.distance[1]],this.point)this.point[o][0]=this.point[o][0]+this.integration.offset[0],this.point[o][1]=this.point[o][1]+this.integration.offset[1];this.topAngle.LTB=this.angle(this.point.top,this.point.left,this.point.bottom),this.topAngle.RTB=this.angle(this.point.top,this.point.right,this.point.bottom),this.calculationPointPosition(this.dataInfo)},eventRegistered:function(){var t=document.getElementById("canvas-warpper");t.addEventListener("mousedown",this.doMouseDown,!1),t.addEventListener("mouseup",this.doMouseUp,!1),t.addEventListener("mousemove",this.doMouseMove,!1)},doMouseDown:function(t){},doMouseUp:function(t){},doMouseMove:function(t){var o=t.pageX,i=t.pageY;this.highlightCurrentRegion(this.determineDataMouse(this.getLocation(o,i))),this.integration.tooltip.show&&this.showTooltip(this.determineDataMouse(this.getLocation(o,i)),this.getLocation(o,i))},insidePolygon:function(t,o){for(var i=o[0],n=o[1],e=!1,a=0,s=t.length-1;a<t.length;s=a++){var r=t[a][0],l=t[a][1],h=t[s][0],p=t[s][1];l>n!=p>n&&i<(h-r)*(n-l)/(p-l)+r&&(e=!e)}return e},getLocation:function(t,o){var i=this.canvas.getBoundingClientRect();return[(t-i.left)*(this.canvas.width/i.width),(o-i.top)*(this.canvas.height/i.height)]},rotatePoint:function(t,o,i){var n=o[0],e=o[1],a=t[0],s=t[1];return[n+(a-n)*Math.cos(i*Math.PI/180)-(s-e)*Math.sin(i*Math.PI/180),e+(a-n)*Math.sin(i*Math.PI/180)+(s-e)*Math.cos(i*Math.PI/180)]},angle:function(t,o,i){var n=t[0],e=t[1],a=o[0],s=o[1],r=i[0],l=i[1],h=Math.sqrt(Math.pow(n-a,2)+Math.pow(e-s,2)),p=Math.sqrt(Math.pow(n-r,2)+Math.pow(e-l,2)),c=Math.sqrt(Math.pow(a-r,2)+Math.pow(s-l,2)),f=(Math.pow(h,2)+Math.pow(p,2)-Math.pow(c,2))/(2*h*p);return Math.round(180*Math.acos(f)/Math.PI)},getDistanceBetweenTwoPoints:function(t,o){var i=t[0]-o[0],n=t[1]-o[1];return Math.sqrt(Math.pow(i,2)+Math.pow(n,2))},calculationPointPosition:function(t){var o=this,i=this.rotatePoint(this.point.left,this.point.top,-1*this.topAngle.LTB),n=this.rotatePoint(this.point.right,this.point.top,this.topAngle.RTB),e={left:[[0,0],[0,0],[0,0]],right:[[0,0],[0,0],[0,0]],middle:[[0,0],[0,0],[0,0]]},a=t.map((function(t,a){if(0===a)for(var s in e)if("left"===s){var l=[o.point.top[0],(i[1]-o.point.top[1])*(t.accounted/100)+o.point.top[1]];e.left=[o.point.top,o.rotatePoint(l,o.point.top,o.topAngle.LTB),l]}else if("right"===s){var h=[o.point.top[0],(n[1]-o.point.top[1])*(t.accounted/100)+o.point.top[1]];e.right=[o.point.top,o.rotatePoint(h,o.point.top,-1*o.topAngle.RTB),h]}else"middle"===s&&(e.middle=[o.point.top,[o.point.top[0],(o.point.bottom[1]-o.point.top[1])*(t.accounted/100)+o.point.top[1]],[o.point.top[0],(o.point.bottom[1]-o.point.top[1])*(t.accounted/100)+o.point.top[1]]]);else for(var p in e){var c=JSON.parse(JSON.stringify(e[p][2]));if("left"===p){var f=[o.point.top[0],c[1]+(i[1]-o.point.top[1])*(t.accounted/100)];e.left=[o.point.top,o.rotatePoint(f,o.point.top,o.topAngle.LTB),f]}else if("right"===p){var d=[o.point.top[0],c[1]+(n[1]-o.point.top[1])*(t.accounted/100)];e.right=[o.point.top,o.rotatePoint(d,o.point.top,-1*o.topAngle.RTB),d]}else"middle"===p&&(e.middle=[o.point.top,[o.point.top[0],(o.point.bottom[1]-o.point.top[1])*(t.accounted/100)+c[1]],[o.point.top[0],(o.point.bottom[1]-o.point.top[1])*(t.accounted/100)+c[1]]])}return r(r({},t),{},{temporary:JSON.parse(JSON.stringify(e))})}));this.dataInfo=a},determineDataMouse:function(t){for(var o=!1,i=0;i<this.dataInfo.length;i++)if(this.insidePolygon(this.dataInfo[i].drawingPoint,t))return{l:i+1,obj:this.dataInfo[i]};return o},paintingBody:function(){var t,o,i;this.ctx.fillStyle="rgba(120,120,120,.15)",this.ctx.beginPath(),(t=this.ctx).moveTo.apply(t,Object(e.a)(this.point.top)),(o=this.ctx).lineTo.apply(o,Object(e.a)(this.point.bottom)),(i=this.ctx).lineTo.apply(i,Object(e.a)(this.point.left)),this.ctx.fill(),this.ctx.fill()},paintDataInfo:function(){var t=this,o=-1;this.dataInfo=this.dataInfo.map((function(i){return o++,t.integration.color.length===o&&(o=0),r(r({},i),{},{color:t.integration.color[o]})})),this.dataInfo=this.dataInfo.map((function(o,i){var n,a,s,l,h,p,c,f,d,g,u,v,y,b=t.ctx.createLinearGradient(0,0,1,0);if(b.addColorStop(0,o.color+"0)"),b.addColorStop(.25,o.color+"25)"),b.addColorStop(.5,o.color+"5)"),b.addColorStop(.6,o.color+"6)"),b.addColorStop(.75,o.color+"75)"),b.addColorStop(1,o.color+"1)"),t.ctx.fillStyle=b,t.ctx.beginPath(),0===i){var w=[o.temporary.left[0],o.temporary.left[1],o.temporary.middle[1],o.temporary.right[1],o.temporary.right[0],o.temporary.middle[0]];f=w[0],d=w[1],g=w[2],u=w[3],v=w[4],y=w[5]}else{var m=[t.dataInfo[i-1].temporary.left[1],o.temporary.left[1],o.temporary.middle[1],o.temporary.right[1],t.dataInfo[i-1].temporary.right[1],t.dataInfo[i-1].temporary.middle[1]];f=m[0],d=m[1],g=m[2],u=m[3],v=m[4],y=m[5]}return(n=t.ctx).moveTo.apply(n,Object(e.a)(f)),(a=t.ctx).lineTo.apply(a,Object(e.a)(d)),(s=t.ctx).lineTo.apply(s,Object(e.a)(g)),(l=t.ctx).lineTo.apply(l,Object(e.a)(u)),(h=t.ctx).lineTo.apply(h,Object(e.a)(v)),(p=t.ctx).lineTo.apply(p,Object(e.a)(y)),c=[f,d,g,u,v,y],t.integration.infoStyle.stroke&&(t.ctx.shadowOffsetX=0,t.ctx.shadowOffsetY=0,t.ctx.shadowBlur=2,t.ctx.shadowColor=t.integration.infoStyle.strokeColor),t.ctx.fill(),r(r({},o),{},{drawingPoint:c})}))},paintingText:function(t){var o=this;this.ctx.shadowColor="rgba(90,90,90,0)";var i=this.integration.infoStyle.color?this.integration.infoStyle.color:"#fff",n=this.integration.infoStyle.width?this.integration.infoStyle.width:0,a=this.integration.infoStyle.dotSize?this.integration.infoStyle.dotSize:4,s=this.integration.infoStyle.offset?this.integration.infoStyle.offset:[0,0],r="";this.ctx.strokeStyle=i,this.ctx.fillStyle=i,this.dataInfo.forEach((function(i,l){if(!i.drawingPoint)throw"未找到 drawingPoint 属性";var h,p,c,f=[[0,0],[0,0]];o.ctx.font="normal lighter ".concat(o.integration.infoStyle.size?o.integration.infoStyle.size:14,"px sans-serif "),o.ctx.beginPath(),t&&l+1===t.l?(f=[[t.obj.drawingPoint[2][0],(t.obj.drawingPoint[2][1]-t.obj.drawingPoint[5][1])/2+t.obj.drawingPoint[5][1]],[t.obj.drawingPoint[2][0]+t.obj.drawingPoint[2][0]/2+n,(t.obj.drawingPoint[2][1]-t.obj.drawingPoint[5][1])/2+t.obj.drawingPoint[5][1]]],o.ctx.font="normal lighter ".concat(o.integration.infoStyle.size?o.integration.infoStyle.size+2:16,"px sans-serif "),r="default"!==o.integration.fontFormatter(i)?o.integration.fontFormatter(i):t.obj.value+" ---- "+t.obj.name,o.ctx.setLineDash([0,0]),o.ctx.strokeText(r,f[1][0]+s[0],f[1][1]+(o.integration.infoStyle.size?o.integration.infoStyle.size+2:14)/3+s[1])):(f=[[i.drawingPoint[2][0],(i.drawingPoint[2][1]-i.drawingPoint[5][1])/2+i.drawingPoint[5][1]],[i.drawingPoint[2][0]+i.drawingPoint[2][0]/2+n,(i.drawingPoint[2][1]-i.drawingPoint[5][1])/2+i.drawingPoint[5][1]]],r="default"!==o.integration.fontFormatter(i)?o.integration.fontFormatter(i):i.value+" ----- "+i.name,o.ctx.setLineDash([0,0]),o.ctx.strokeText(r,f[1][0]+s[0],f[1][1]+(o.integration.infoStyle.size?o.integration.infoStyle.size+2:16)/3+s[1])),o.ctx.setLineDash(o.integration.infoStyle.setLineDash),(h=o.ctx).moveTo.apply(h,Object(e.a)(f[0])),(p=o.ctx).lineTo.apply(p,Object(e.a)(f[1])),o.ctx.stroke(),(c=o.ctx).arc.apply(c,Object(e.a)(f[0]).concat([a,0,360,!1])),o.ctx.fill()}))},showTooltip:function(t,o){var i=document.getElementById("canvas-warpper"),a=document.getElementById("canvas-tooltip");if(t){a.style.zIndex=this.integration.tooltip.z,a.style.transition=" opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s,transform 0.15s";var s=JSON.parse(JSON.stringify(this.tooltipDiv));this.integration.tooltip.formatter?s=this.integration.tooltip.formatter(t):[["$[title]$",t.obj.title],["$[name]$",t.obj.name],["$[val]$",t.obj.value],["$[color]$",t.obj.color],["$[fontSize]$",this.integration.tooltip.fontSize],["$[backgroundColor]$",this.integration.tooltip.backgroundColor],["$[fontColor]$",this.integration.tooltip.fontColor]].forEach((function(t){var o;s=(o=s).replaceAll.apply(o,Object(e.a)(t))})),a.innerHTML=s,i.style.cursor="pointer",a.style.visibility="visible",a.style.opacity=1;var r=Object(n.a)(o,2),l=r[0],h=r[1];h+=20,(l+=20)+a.clientWidth>this.canvasWidth&&(l=l-a.clientWidth-40),h+a.clientHeight>this.canvasHeight&&(h=h-a.clientHeight-40),a.style.transform="translate3d(".concat(l,"px, ").concat(h,"px, 0px)")}else i.style.cursor="default",a.style.visibility="hidden",a.style.opacity=0},highlightCurrentRegion:function(t){if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),!t)return this.paintDataInfo(),this.ctx.shadowColor="rgba(90,90,90,0)",void this.paintingBody();this.paintDataInfo(),this.ctx.shadowColor="rgba(90,90,90,0)",this.paintingBody(),this.ctx.fillStyle=t.obj.color,this.ctx.beginPath(),this.ctx.moveTo(t.obj.drawingPoint[0][0],t.obj.drawingPoint[0][1]),this.ctx.lineTo(t.obj.drawingPoint[1][0],t.obj.drawingPoint[1][1]),this.ctx.lineTo(t.obj.drawingPoint[2][0],t.obj.drawingPoint[2][1]),this.ctx.lineTo(t.obj.drawingPoint[3][0],t.obj.drawingPoint[3][1]),this.ctx.lineTo(t.obj.drawingPoint[4][0],t.obj.drawingPoint[4][1]),this.ctx.lineTo(t.obj.drawingPoint[5][0],t.obj.drawingPoint[5][1]),this.ctx.shadowOffsetX=0,this.ctx.shadowOffsetY=0,this.ctx.shadowBlur=10,this.ctx.shadowColor=this.integration.infoStyle.highlightedColor,this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(t.obj.drawingPoint[0][0],t.obj.drawingPoint[0][1]),this.ctx.lineTo(t.obj.drawingPoint[1][0],t.obj.drawingPoint[1][1]),this.ctx.lineTo(t.obj.drawingPoint[2][0],t.obj.drawingPoint[2][1]),this.ctx.lineTo(t.obj.drawingPoint[5][0],t.obj.drawingPoint[5][1]),this.ctx.fillStyle="rgba(120,120,120,.15)",this.ctx.fill()}}},h=(i("b942"),i("2877")),p=Object(h.a)(l,(function(){return this._self._c,this._m(0)}),[function(){var t=this._self._c;return t("div",{attrs:{id:"canvas-warpper"}},[t("div",{attrs:{id:"canvas-tooltip"}})])}],!1,null,"eaac41e6",null);o.default=p.exports},b942:function(t,o,i){"use strict";i("bc79")},bc79:function(t,o,i){var n=i("f1f2");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,i("499e").default)("cb3b58bc",n,!0,{sourceMap:!1,shadowMode:!1})},f1f2:function(t,o,i){(t.exports=i("2350")(!1)).push([t.i,"#canvas-warpper[data-v-eaac41e6]{position:relative;top:41%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:85%;height:55%}#canvas-warpper #canvas-tooltip[data-v-eaac41e6]{position:absolute;left:20%;top:-50%}",""])}}]);