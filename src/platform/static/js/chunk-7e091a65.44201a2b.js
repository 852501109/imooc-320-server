(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7e091a65"],{"11d6":function(t,i,e){"use strict";e("c4f0")},"6eed":function(t,i,e){var n=e("b041");(t.exports=e("2350")(!1)).push([t.i,"#container[data-v-786dc58e],.img_wrap[data-v-786dc58e]{position:absolute;width:100%;height:100%;right:0;top:0}.img_wrap[data-v-786dc58e]{z-index:1;pointer-events:none}.img_wrap img[data-v-786dc58e]{position:absolute;left:41%;top:2%;width:7rem}.img_wrap div[data-v-786dc58e]{position:absolute;width:7.0625rem;height:2.625rem;font-size:.8rem;text-align:center;background-image:url("+n(e("7e38"))+");background-repeat:no-repeat;background-size:100% 100%;background-position:50%;padding-top:.3rem}.img_wrap div[data-v-786dc58e]:nth-child(2){top:7%;left:-6%;color:#95f204}.img_wrap div[data-v-786dc58e]:nth-child(3){right:-6%;top:7%;color:#0ff}.img_wrap div[data-v-786dc58e]:nth-child(4){top:91%;right:-6%;color:#f224f3}.img_wrap div[data-v-786dc58e]:nth-child(5){top:91%;left:-6%;color:#ffd044}",""])},c4f0:function(t,i,e){var n=e("6eed");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,e("499e").default)("1278dc2c",n,!0,{sourceMap:!1,shadowMode:!1})},cafc:function(t,i,e){"use strict";e.r(i),e("ac6a"),e("6762"),e("2fdb"),e("7514"),e("7f7f");var n=e("5a89"),a=e("34ad"),o=e("22b5"),r={data:function(){return{show:!0,isPointer:!1,lastMoveEvent:{},startYArr:[],scene:null,container:null,landOrbit:{},width:"",height:"",zAxisNumber:"",camera:null,renderer:null,interval:null,timeout:null,activeTimeout:null,rayCaster:new n.ab,mouse:new n.nb,isLoading:!1,totalRotate1:0,totalRotate2:0,totalRotate3:0,totalRotate4:0,active1:0,active2:0,active3:0,active4:0,landOrbit1:null,landOrbit2:null,landOrbit3:null,landOrbit4:null}},components:{},computed:{},mounted:function(){var t=this;this.$nextTick((function(){t.init()})),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState?(cancelAnimationFrame(t.animate),clearTimeout(t.interval),clearTimeout(t.activeTimeout),t.show=!1):"visible"===document.visibilityState&&(t.show=!0,t.$nextTick((function(){t.init()})))}))},methods:{initScene:function(){this.scene=new n.db,this.scene.background=null},initCamera:function(){var t=this.width/2/Math.tan(Math.PI/12);this.zAxisNumber=Math.floor((t-1400)/2),this.camera=new n.T(15,this.width/this.height,1,3e4),this.camera.position.set(10,5,10,this.zAxisNumber),this.camera.lookAt(0,1,0)},initRenderer:function(){this.renderer=new n.qb({antialias:!0,alpha:!0}),this.renderer.setSize(this.fontSize(672),this.fontSize(424)),this.container.appendChild(this.renderer.domElement)},intervalFunction:function(){var t=this;this.isLoading=!0,this.totalRotate1=this.landOrbit1.rotation.y,this.totalRotate2=this.landOrbit2.rotation.y,this.totalRotate3=this.landOrbit3.rotation.y,this.totalRotate4=this.landOrbit4.rotation.y,this.totalRotate1-=2*Math.PI/3,this.totalRotate2-=Math.PI/2,this.totalRotate3-=Math.PI/2,this.totalRotate4+=2*Math.PI/6,new o.b(this.landOrbit1.rotation).to({y:this.totalRotate1},2e3).easing(o.a.Quadratic.InOut).start(),new o.b(this.landOrbit2.rotation).to({y:this.totalRotate2},2e3).easing(o.a.Quadratic.InOut).start(),new o.b(this.landOrbit3.rotation).to({y:this.totalRotate3},2e3).easing(o.a.Quadratic.InOut).start().onComplete((function(){})),new o.b(this.landOrbit4.rotation).to({y:this.totalRotate4},2e3).easing(o.a.Quadratic.InOut).start(),this.activeTimeout=setTimeout((function(){t.active1=2===t.active1?0:t.active1+1,t.active2=3===t.active2?0:t.active2+1,t.active3=3===t.active3?0:t.active3+1,t.active4=5===t.active4?0:t.active4+1,t.resetActive(),setTimeout((function(){t.isLoading=!1,t.$nextTick((function(){t.mousemoveHandle(t.lastMoveEvent)}))}),100),t.$emit("changeActiveArr",[t.active1,t.active2,t.active3,t.active4])}),2e3),this.interval=setTimeout((function(){t.intervalFunction()}),6e3)},intervalTween:function(t){t&&(this.active1=0,this.active2=0,this.active3=0,this.active4=0,this.$emit("changeActiveArr",[this.active1,this.active2,this.active3,this.active4])),this.resetActive(),clearTimeout(this.interval),clearTimeout(this.activeTimeout),this.intervalFunction()},initGltf:function(){var t=this;(new a.a).load("/new.glb",(function(i){var e=i.scene.children.map((function(t){return t.name})),a=t.scene.children.find((function(t){return t.isGroup}))?t.scene.children.find((function(t){return t.isGroup})).children.map((function(t){return t.name})):[],o=i.scene.children.map((function(t){return t.name}));a.every((function(t){return!o.includes(t)}))&&(t.scene.add(i.scene),t.landOrbit1=new n.R,t.landOrbit2=new n.R,t.landOrbit3=new n.R,t.landOrbit4=new n.R,e.map((function(e){var n=i.scene.children.find((function(t){return t.name===e}));["API服务","块数据","数据超市"].includes(e)&&t.landOrbit1.add(n),["数据化标准","脱敏加密","原子拆分","融合策略"].includes(e)&&t.landOrbit2.add(n),["罩子","罩子002","罩子003","元数据"].includes(e)&&t.landOrbit3.add(n),["文本","文本004","文本003","文本002","库表采集","文本001"].includes(e)&&t.landOrbit4.add(n)})),t.scene.add(t.landOrbit1),t.scene.add(t.landOrbit2),t.scene.add(t.landOrbit3),t.scene.add(t.landOrbit4),t.startYArr=[t.landOrbit1.rotation.y,t.landOrbit2.rotation.y,t.landOrbit3.rotation.y,t.landOrbit4.rotation.y]),t.intervalTween(!0),t.animate(),t.initEvent()}));var i=new n.a(4210752,1);this.scene.add(i);var e=new n.i(16777215,1.2);e.position.set(15,5,12),this.scene.add(e);var o=new n.U(31999,10);o.power=2,o.castShadow=!0,o.position.set(-13,3,-13),this.scene.add(o);var r=new n.U(31999,10);r.power=2,r.castShadow=!0,r.position.set(-5,1.03,-5),this.scene.add(r)},fontSize:function(t){var i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(i){var e=t*(i/1920),n=document.documentElement.clientHeight;return i/n>1920/1080&&(e=t*(n/1080)),e}},animate:function(){this.renderer.render(this.scene,this.camera),o.c(),requestAnimationFrame(this.animate)},resetActive:function(){0===this.active1&&(this.landOrbit1.rotation.y=this.startYArr[0],this.totalRotate1=0),0===this.active2&&(this.landOrbit2.rotation.y=this.startYArr[1],this.totalRotate2=0),0===this.active3&&(this.landOrbit3.rotation.y=this.startYArr[2],this.totalRotate3=0),0===this.active4&&(this.landOrbit4.rotation.y=this.startYArr[3],this.totalRotate4=0)},init:function(){this.container=document.getElementById("container"),this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.initScene(),this.initCamera(),this.initGltf(),this.initRenderer()},middleSort:function(t,i){var e=[],n=t.indexOf(i),a=Math.ceil(t.length/2)-1,o=t.length-n+a;return t.forEach((function(i,n){var a;a=o+n>=t.length?(o+n)%t.length:o+n,e[a]=i})),e},initClick:function(t,i,e,n,a,r,s){var c=this,d=this;if(!d.isLoading){""!==v&&(d.isLoading=!0,clearTimeout(d.interval),clearTimeout(d.timeout),d.timeout=setTimeout((function(){d.intervalTween()}),6e3));var l,h=d.middleSort(t,i),u=2*Math.PI/Math.abs(a),v="";h.indexOf(i)<h.indexOf(t[d[e]])&&(v="left",l=h.indexOf(t[d[e]])-h.indexOf(i)),h.indexOf(i)>h.indexOf(t[d[e]])&&(v="right",l=h.indexOf(i)-h.indexOf(t[d[e]])),"left"===v&&(d[n]=d[n]-s*a*l,new o.b(d[r].rotation).to({y:d[n]},2e3).easing(o.a.Quadratic.InOut).start().onComplete((function(){d[e]-l<0?d[e]=u+d[e]-l:d[e]=d[e]-l,d.$emit("changeActiveArr",[d.active1,d.active2,d.active3,d.active4]),setTimeout((function(){d.isLoading=!1,d.$nextTick((function(){d.mousemoveHandle(c.lastMoveEvent)}))}),100),d.resetActive()}))),"right"===v&&(d[n]=d[n]+s*a*l,new o.b(d[r].rotation).to({y:d[n]},2e3).easing(o.a.Quadratic.InOut).start().onComplete((function(){d[e]+l>u-1?d[e]=d[e]+l-u:d[e]=d[e]+l,d.$emit("changeActiveArr",[d.active1,d.active2,d.active3,d.active4]),setTimeout((function(){d.isLoading=!1,d.$nextTick((function(){d.mousemoveHandle(c.lastMoveEvent)}))}),100),d.resetActive()})))}},mousemoveHandle:function(t){this.lastMoveEvent=t,this.isPointer=!1,this.mouse.x=t.offsetX/this.fontSize(672)*2-1,this.mouse.y=-t.offsetY/this.fontSize(424)*2+1,this.rayCaster.setFromCamera(this.mouse,this.camera);var i=this.rayCaster.intersectObjects(this.scene.children,!0);if(i.length){var e=i[0].object.parent&&i[0].object.parent.name;(["块数据","数据超市","API服务"].includes(e)||["数据化标准","脱敏加密","原子拆分","融合策略"].includes(e)||["罩子","元数据","罩子002","罩子003"].includes(e)||["文本","文本004","文本003","文本002","库表采集","文本001"].includes(e))&&(this.isLoading||(this.isPointer=!0))}},initEvent:function(){var t=this;this.container.addEventListener("click",(function(i){t.mouse.x=i.offsetX/t.fontSize(672)*2-1,t.mouse.y=-i.offsetY/t.fontSize(424)*2+1,t.rayCaster.setFromCamera(t.mouse,t.camera);var e=t.rayCaster.intersectObjects(t.scene.children,!0);if(e.length){var n=e[0].object.parent&&e[0].object.parent.name,a=["块数据","数据超市","API服务"],o=["数据化标准","脱敏加密","原子拆分","融合策略"],r=["罩子","元数据","罩子002","罩子003"],s=["文本","文本004","文本003","文本002","库表采集","文本001"];a.includes(n)&&t.initClick(a,n,"active1","totalRotate1",2*Math.PI/3,"landOrbit1",-1),o.includes(n)&&t.initClick(o,n,"active2","totalRotate2",Math.PI/2,"landOrbit2",-1),r.includes(n)&&t.initClick(r,n,"active3","totalRotate3",Math.PI/2,"landOrbit3",-1),s.includes(n)&&t.initClick(s,n,"active4","totalRotate4",2*Math.PI/6,"landOrbit4",1)}})),this.container.addEventListener("mousemove",t.mousemoveHandle)}}},s=(e("11d6"),e("2877")),c=Object(s.a)(r,(function(){var t=this.$createElement,i=this._self._c||t;return this.show?i("div",[i("div",{style:{cursor:this.isPointer?"pointer":"auto"},attrs:{id:"container"}}),i("div",{staticClass:"img_wrap"},[i("img",{attrs:{src:e("2842")}}),i("div",[this._v("服务")]),i("div",[this._v("融合")]),i("div",[this._v("治理")]),i("div",[this._v("采集")])])]):this._e()}),[],!1,null,"786dc58e",null);i.default=c.exports}}]);