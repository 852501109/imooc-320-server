(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-039528a6"],{"171f":function(e,t,n){"use strict";n("9f61")},"9f61":function(e,t,n){var o=n("b317");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n("499e").default)("ecb9dfba",o,!0,{sourceMap:!1,shadowMode:!1})},b317:function(e,t,n){(e.exports=n("2350")(!1)).push([e.i,".property-panel[data-v-fa6687b2]{position:absolute;right:0;top:0;border-left:1px solid #ccc;padding:20px;width:220px;height:100%}.property-panel[data-v-fa6687b2] .el-textarea__inner{min-height:60px!important}",""])},d6c1:function(e,t,n){"use strict";n.r(t),n("7f7f"),n("8e6e"),n("ac6a"),n("456d"),n("28a5");var o=n("ade3");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={name:"PropertyPanel",props:{modeler:{type:Object,required:!0}},computed:{userTask:function(){if(this.element)return"bpmn:UserTask"===this.element.type},sequenceFlow:function(){if(this.element)return"bpmn:SequenceFlow"===this.element.type||this.element.id&&-1!=this.element.id.indexOf("SequenceFlow")}},data:function(){return{form:{id:"",name:"",color:null,sequenceFlow:null},element:{},users:[{value:"zhangsan",label:"张三"},{value:"lisi",label:"李四"},{value:"wangwu",label:"王五"}],roles:[{value:"manager",label:"经理"},{value:"personnel",label:"人事"},{value:"charge",label:"主管"}]}},mounted:function(){this.handleModeler()},methods:{handleModeler:function(){var e=this;this.modeler.on("selection.changed",(function(t){var n=t.newSelection[0];e.element=n,n&&(e.form=s(s({},n.businessObject),n.businessObject.$attrs),"candidateUsers"===e.form.userType&&(e.form.candidateUsers=e.form.candidateUsers.split(",")||[]),"bpmn:SequenceFlow"===n.type&&n.businessObject.conditionExpression&&e.$set(e.form,"sequenceFlow",n.businessObject.conditionExpression.body),n.businessObject.conditionExpression&&n.id&&-1!=n.id.indexOf("SequenceFlow")&&e.$set(e.form,"sequenceFlow",n.businessObject.conditionExpression.body))})),this.modeler.on("element.changed",(function(t){var n=t.element;if(n){var o=n.businessObject;n.id===e.form.id&&(e.form.name=n.businessObject.name,e.form.sequenceFlow=o.conditionExpression?o.conditionExpression.body:"",e.form=s({},e.form))}}))},nameChange:function(e){this.modeler.get("modeling").updateLabel(this.element,e)},colorChange:function(e){var t=this.modeler.get("modeling");t.setColor(this.element,{fill:null,stroke:e}),t.updateProperties(this.element,{color:e})},addUser:function(e){this.updateProperties(Object.assign(e,{userType:Object.keys(e)[0]}))},typeChange:function(){var e=this;["assignee","candidateUsers","candidateGroups"].forEach((function(t){delete e.element.businessObject.$attrs[t],delete e.form[t]}))},updateProperties:function(e){this.modeler.get("modeling").updateProperties(this.element,e)},updateSequenceFlow:function(e){var t=this.modeler.get("moddle").create("bpmn:FormalExpression",{body:e});this.updateProperties({conditionExpression:t})}}},l=(n("171f"),n("2877")),a=Object(l.a)(i,(function(){var e=this,t=e._self._c;return t("div",{ref:"propertyPanel",staticClass:"property-panel"},[t("el-form",{attrs:{inline:!0,model:e.form,"label-width":"100px",size:"small","label-position":"left"}},[t("el-form-item",{attrs:{label:"节点ID"}},[t("el-input",{attrs:{disabled:""},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id","string"==typeof t?t.trim():t)},expression:"form.id"}})],1),t("el-form-item",{attrs:{label:"节点名称"}},[t("el-input",{attrs:{type:"textarea",autosize:""},on:{input:e.nameChange},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1),e.sequenceFlow?t("el-form-item",{attrs:{label:"分支条件"}},[t("el-input",{attrs:{type:"textarea"},on:{input:e.updateSequenceFlow},model:{value:e.form.sequenceFlow,callback:function(t){e.$set(e.form,"sequenceFlow","string"==typeof t?t.trim():t)},expression:"form.sequenceFlow"}})],1):e._e()],1)],1)}),[],!1,null,"fa6687b2",null);t.default=a.exports}}]);