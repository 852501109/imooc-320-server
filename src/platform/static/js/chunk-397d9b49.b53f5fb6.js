(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-397d9b49"],{"164c":function(e,t,n){var o=n("eb81");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("499e").default)("0eeba1f7",o,!0,{sourceMap:!1,shadowMode:!1})},7766:function(e,t,n){"use strict";n.r(t);var o=n("5a89");const a={type:"change"},i={type:"start"},c={type:"end"};class s extends o.l{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.ub,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.H.ROTATE,MIDDLE:o.H.DOLLY,RIGHT:o.H.PAN},this.touches={ONE:o.nb.ROTATE,TWO:o.nb.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return m.phi},this.getAzimuthalAngle=function(){return m.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",V),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",V),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),r=s.NONE},this.update=function(){const t=new o.ub,i=(new o.cb).setFromUnitVectors(e.up,new o.ub(0,1,0)),c=i.clone().invert(),b=new o.ub,f=new o.cb,g=new o.ub,E=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),m.setFromVector3(t),n.autoRotate&&r===s.NONE&&M(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(m.theta+=u.theta*n.dampingFactor,m.phi+=u.phi*n.dampingFactor):(m.theta+=u.theta,m.phi+=u.phi);let o=n.minAzimuthAngle,y=n.maxAzimuthAngle;return isFinite(o)&&isFinite(y)&&(o<-Math.PI?o+=E:o>Math.PI&&(o-=E),y<-Math.PI?y+=E:y>Math.PI&&(y-=E),m.theta=o<=y?Math.max(o,Math.min(y,m.theta)):m.theta>(o+y)/2?Math.max(o,m.theta):Math.min(y,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=p,m.radius=Math.max(n.minDistance,Math.min(n.maxDistance,m.radius)),!0===n.enableDamping?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),t.setFromSpherical(m),t.applyQuaternion(c),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),d.set(0,0,0)),p=1,!!(h||b.distanceToSquared(n.object.position)>l||8*(1-f.dot(n.object.quaternion))>l||g.distanceToSquared(n.target)>0)&&(n.dispatchEvent(a),b.copy(n.object.position),f.copy(n.object.quaternion),g.copy(n.target),h=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",F),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",U),n.domElement.removeEventListener("pointermove",X),n.domElement.removeEventListener("pointerup",Z),null!==n._domElementKeyEvents&&(n._domElementKeyEvents.removeEventListener("keydown",V),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const l=1e-6,m=new o.lb,u=new o.lb;let p=1;const d=new o.ub;let h=!1;const b=new o.tb,f=new o.tb,g=new o.tb,E=new o.tb,y=new o.tb,v=new o.tb,w=new o.tb,O=new o.tb,P=new o.tb,T=[],L={};function A(){return Math.pow(.95,n.zoomSpeed)}function M(e){u.theta-=e}function j(e){u.phi-=e}const N=function(){const e=new o.ub;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}}(),k=function(){const e=new o.ub;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),x=function(){const e=new o.ub;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let c=e.length();c*=Math.tan(n.object.fov/2*Math.PI/180),N(2*t*c/a.clientHeight,n.object.matrix),k(2*o*c/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),k(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):n.enablePan=!1}}();function S(e){n.object.isPerspectiveCamera?p/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),h=!0):n.enableZoom=!1}function Y(e){n.object.isPerspectiveCamera?p*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),h=!0):n.enableZoom=!1}function _(e){b.set(e.clientX,e.clientY)}function H(e){E.set(e.clientX,e.clientY)}function R(){if(1===T.length)b.set(T[0].pageX,T[0].pageY);else{const e=.5*(T[0].pageX+T[1].pageX),t=.5*(T[0].pageY+T[1].pageY);b.set(e,t)}}function I(){if(1===T.length)E.set(T[0].pageX,T[0].pageY);else{const e=.5*(T[0].pageX+T[1].pageX),t=.5*(T[0].pageY+T[1].pageY);E.set(e,t)}}function D(){const e=T[0].pageX-T[1].pageX,t=T[0].pageY-T[1].pageY,n=Math.sqrt(e*e+t*t);w.set(0,n)}function K(e){if(1==T.length)f.set(e.pageX,e.pageY);else{const t=G(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);f.set(n,o)}g.subVectors(f,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;M(2*Math.PI*g.x/t.clientHeight),j(2*Math.PI*g.y/t.clientHeight),b.copy(f)}function C(e){if(1===T.length)y.set(e.pageX,e.pageY);else{const t=G(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);y.set(n,o)}v.subVectors(y,E).multiplyScalar(n.panSpeed),x(v.x,v.y),E.copy(y)}function z(e){const t=G(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);O.set(0,i),P.set(0,Math.pow(O.y/w.y,n.zoomSpeed)),S(P.y),w.copy(O)}function F(e){!1!==n.enabled&&(0===T.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",X),n.domElement.addEventListener("pointerup",Z)),function(e){T.push(e)}(e),"touch"===e.pointerType?function(e){switch(B(e),T.length){case 1:switch(n.touches.ONE){case o.nb.ROTATE:if(!1===n.enableRotate)return;R(),r=s.TOUCH_ROTATE;break;case o.nb.PAN:if(!1===n.enablePan)return;I(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case o.nb.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&D(),n.enablePan&&I(),r=s.TOUCH_DOLLY_PAN;break;case o.nb.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&D(),n.enableRotate&&R(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.H.DOLLY:if(!1===n.enableZoom)return;!function(e){w.set(e.clientX,e.clientY)}(e),r=s.DOLLY;break;case o.H.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;H(e),r=s.PAN}else{if(!1===n.enableRotate)return;_(e),r=s.ROTATE}break;case o.H.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;_(e),r=s.ROTATE}else{if(!1===n.enablePan)return;H(e),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(i)}(e))}function X(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(B(e),r){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;K(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;C(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&z(e),n.enablePan&&C(e)}(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&z(e),n.enableRotate&&K(e)}(e),n.update();break;default:r=s.NONE}}(e):function(e){switch(r){case s.ROTATE:if(!1===n.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),g.subVectors(f,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;M(2*Math.PI*g.x/t.clientHeight),j(2*Math.PI*g.y/t.clientHeight),b.copy(f),n.update()}(e);break;case s.DOLLY:if(!1===n.enableZoom)return;!function(e){O.set(e.clientX,e.clientY),P.subVectors(O,w),P.y>0?S(A()):P.y<0&&Y(A()),w.copy(O),n.update()}(e);break;case s.PAN:if(!1===n.enablePan)return;!function(e){y.set(e.clientX,e.clientY),v.subVectors(y,E).multiplyScalar(n.panSpeed),x(v.x,v.y),E.copy(y),n.update()}(e)}}(e))}function Z(e){!function(e){delete L[e.pointerId];for(let t=0;t<T.length;t++)if(T[t].pointerId==e.pointerId)return void T.splice(t,1)}(e),0===T.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",X),n.domElement.removeEventListener("pointerup",Z)),n.dispatchEvent(c),r=s.NONE}function U(e){!1!==n.enabled&&!1!==n.enableZoom&&r===s.NONE&&(e.preventDefault(),n.dispatchEvent(i),function(e){e.deltaY<0?Y(A()):e.deltaY>0&&S(A()),n.update()}(e),n.dispatchEvent(c))}function V(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):x(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):x(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):x(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):x(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function q(e){!1!==n.enabled&&e.preventDefault()}function B(e){let t=L[e.pointerId];void 0===t&&(t=new o.tb,L[e.pointerId]=t),t.set(e.pageX,e.pageY)}function G(e){const t=e.pointerId===T[0].pointerId?T[1]:T[0];return L[t.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",F),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",U,{passive:!1}),this.update()}}var r,l,m=n("34ad"),u={data:function(){return{}},components:{},computed:{},mounted:function(){(r=new o.hb).background=new o.i(6710886),(l=new o.X).position.y=10,l.position.x=10,l.position.z=10,function(){var e=new o.N({color:16724736});(new m.a).load("/01.glb",(function(t){r.add(t.scene),t.scene.traverse((function(t){t.material=e,t.castShadow=!0,t.receiveShadow=!0}))}));var t=new o.c(5);r.add(t)}();var e=new o.wb;e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,document.getElementById("container").appendChild(e.domElement),e.render(r,l);var t=new s(l,e.domElement);t.addEventListener("change",(function(){})),t.enableDamping=!0,t.dampingFactor=.1,function n(){requestAnimationFrame(n),t.update(),e.render(r,l)}()},methods:{}},p=(n("cc8b"),n("2877")),d=Object(p.a)(u,(function(){this.$createElement;return this._self._c,this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{attrs:{id:"container"}}),t("div",{attrs:{id:"gui"}})])}],!1,null,"3fd4c79e",null);t.default=d.exports},cc8b:function(e,t,n){"use strict";n("164c")},eb81:function(e,t,n){(e.exports=n("2350")(!1)).push([e.i,"#container[data-v-3fd4c79e]{position:absolute;right:0;top:0;height:1080px;width:100vw}",""])}}]);