(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0fee8f5a","chunk-fef4ede6","chunk-70b655bc","chunk-7d2a5f5e","chunk-2d228fdd"],{"147c":function(e,t,o){var r=o("3e0e6");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,o("499e").default)("d3b60e02",r,!0,{sourceMap:!1,shadowMode:!1})},"3c2d":function(e,t,o){var r=o("ee50");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,o("499e").default)("9644ae48",r,!0,{sourceMap:!1,shadowMode:!1})},"3e0e6":function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,".row[data-v-2ec53f19]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px}.row>div[data-v-2ec53f19]{margin-right:10px}[data-v-2ec53f19] .el-input--medium .el-input__inner{height:35px!important}",""])},"3e6e":function(e,t,o){"use strict";o("3c2d")},4134:function(e,t,o){"use strict";o("8fcd")},7915:function(e,t,o){"use strict";o.r(t),o("8e6e"),o("ac6a"),o("456d");var r=o("ade3"),l=o("2f62"),a=o("dc19"),s=o("9bf5"),i=o("7aa2");function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){Object(r.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}t.default={mixins:[a.default],data:function(){return{stepActiveId:"configStep",filter:"edit"==this.$route.query.filter,runDialog:!1,loading:!0}},computed:{},components:{configStep:s.default,submitStep:i.default},created:function(){},methods:c(c({},Object(l.b)(["_AJAX"])),{},{clone:function(e){return JSON.parse(JSON.stringify(e))},cancel:function(){this.$router.push("/wdglLdit")},closeRun:function(){this.runDialog=!1},next:function(){var e=this;this.$refs[this.stepActiveId].submitForm().then((function(t){e.tableData=t,e.stepActiveId="submitStep"})).catch((function(e){}))},save:function(){this.$refs[this.stepActiveId].submitForm().then((function(){}))},pre:function(){this.stepActiveId="configStep"},run:function(){var e=this;this.runDialog=!0,this.loading=!0,setTimeout((function(){e.loading=!1}),4e3)},backTo:function(e){var t=this;"submitStep"==e.id?this.$refs.configStep.submitForm().then((function(){t.stepActiveId="submitStep"})).catch((function(){})):this.stepActiveId=e.id},submit:function(){this.$refs[this.stepActiveId].submitForm().then((function(){}))}})}},"7aa2":function(e,t,o){"use strict";o.r(t);var r=o("e888"),l=o("db05"),a=o.n(l),s={props:{stepActiveId:{type:String,default:""}},data:function(){return{placeholder:"自定义sql，输入ctrl+d格式化",dialogSync:!1,dialogTitle:"",resultTableData:[{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"}],ruleForm:{slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:""},rules:{slot1:[{required:!0,message:"请选择数据源",trigger:"change"}],slot2:[{required:!0,message:"请选择结果数据源",trigger:"change"}],slot3:[{required:!0,message:"请选择选择结果表",trigger:"change"}],slot8:[{required:!0,message:"自定义SQL必填",trigger:"change"}]}}},components:{SqlEditor:r.default},methods:{changeTextarea:function(e){this.$set(this.ruleForm,"slot8",e)},dialogSyncClose:function(){this.dialogSync=!1},changeSlot1:function(){this.ruleForm.slot2="",this.ruleForm.slot3=""},changeSlot2:function(){this.ruleForm.slot3=""},submitDialog:function(){},add:function(e){this.dialogSync=!0,this.dialogTitle=e},generateSql:function(){},formaterSql:function(e){var t=this.$refs.sqleditor;t.editor.setValue(a.a.format(t.editor.getValue()))},submitForm:function(){var e=this;return new Promise((function(t,o){e.$refs.ruleForm.validate((function(e){if(!e)return o("submit"),!1;t("submit")}))}))},resetForm:function(){this.$refs.ruleForm.resetFields()}}},i=(o("becd"),o("2877")),n=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("div",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px",disabled:"view"===e.$route.query.filter}},[t("el-row",{attrs:{gutter:24}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"数据源",prop:"slot1"}},[t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeSlot1},model:{value:e.ruleForm.slot1,callback:function(t){e.$set(e.ruleForm,"slot1",t)},expression:"ruleForm.slot1"}},[t("el-option",{attrs:{label:"test1",value:"test1"}}),t("el-option",{attrs:{label:"test2",value:"test2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"结果数据源",prop:"slot2"}},[t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeSlot2},model:{value:e.ruleForm.slot2,callback:function(t){e.$set(e.ruleForm,"slot2",t)},expression:"ruleForm.slot2"}},[t("el-option",{attrs:{label:"test1",value:"test1"}}),t("el-option",{attrs:{label:"test2",value:"test2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"选择结果表",prop:"slot3"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.slot3,callback:function(t){e.$set(e.ruleForm,"slot3",t)},expression:"ruleForm.slot3"}},[t("el-option",{attrs:{label:"test1",value:"test1"}}),t("el-option",{attrs:{label:"test2",value:"test2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"时间戳",prop:"slot4"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.slot4,callback:function(t){e.$set(e.ruleForm,"slot4",t)},expression:"ruleForm.slot4"}},[t("el-option",{attrs:{label:"test1",value:"test1"}}),t("el-option",{attrs:{label:"test2",value:"test2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"模式配置",prop:"slot5"}},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.ruleForm.slot5,callback:function(t){e.$set(e.ruleForm,"slot5",t)},expression:"ruleForm.slot5"}},[t("el-option",{attrs:{label:"全量",value:"1"}}),t("el-option",{attrs:{label:"增量",value:"2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"源表名",prop:"slot6"}},[t("el-input",{model:{value:e.ruleForm.slot6,callback:function(t){e.$set(e.ruleForm,"slot6",t)},expression:"ruleForm.slot6"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"自定义SQL",prop:"slot8"}},[t("div",["submitStep"==e.stepActiveId?t("SqlEditor",{ref:"sqleditor",attrs:{value:e.ruleForm.slot8,placeholder:e.placeholder},on:{changeTextarea:function(t){return e.changeTextarea(t)}}}):e._e()],1)])],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"结果表字段"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.resultTableData,height:"300px",border:""}},[t("el-table-column",{attrs:{prop:"filedName",label:"字段名称"}}),t("el-table-column",{attrs:{prop:"filedColumn",label:"字段注释"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,"2ec53f19",null);t.default=n.exports},"83e9":function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,".row[data-v-01224539]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px}.row>div[data-v-01224539]{margin-right:10px}",""])},"8fcd":function(e,t,o){var r=o("83e9");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,o("499e").default)("6bda058b",r,!0,{sourceMap:!1,shadowMode:!1})},"9bf5":function(e,t,o){"use strict";o.r(t);var r={data:function(){return{dialogSync:!1,dialogTitle:"",ruleForm:{slot1:"",slot2:"",slot3:"",slot4:"",slot5:""},rules:{slot1:[{required:!0,message:"请输入指标中文名",trigger:"change"}],slot2:[{required:!0,validator:this.checkDimName,trigger:"change"}]}}},methods:{dialogSyncClose:function(){this.dialogSync=!1},checkDimName:function(e,t,o){return t?/^[a-zA-Z].*$/.test(t)?void o():o(new Error("必须以英文开头")):o(new Error("请输入指标英文名"))},submitDialog:function(){},add:function(e){this.dialogSync=!0,this.dialogTitle=e},submitForm:function(){var e=this;return new Promise((function(t,o){e.$refs.ruleForm.validate((function(e){if(!e)return o("submit"),!1;t("submit")}))}))},resetForm:function(){this.$refs.ruleForm.resetFields()}}},l=(o("4134"),o("2877")),a=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"140px",disabled:"view"===e.$route.query.filter}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"指标中文名",prop:"slot1"}},[t("el-input",{model:{value:e.ruleForm.slot1,callback:function(t){e.$set(e.ruleForm,"slot1",t)},expression:"ruleForm.slot1"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"指标英文名",prop:"slot2"}},[t("el-input",{model:{value:e.ruleForm.slot2,callback:function(t){e.$set(e.ruleForm,"slot2",t)},expression:"ruleForm.slot2"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"所属部门",prop:"slot3"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.slot3,callback:function(t){e.$set(e.ruleForm,"slot3",t)},expression:"ruleForm.slot3"}},[t("el-option",{attrs:{label:"test1",value:"test1"}}),t("el-option",{attrs:{label:"test2",value:"test2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"来源依据",prop:"slot4"}},[t("el-input",{model:{value:e.ruleForm.slot4,callback:function(t){e.$set(e.ruleForm,"slot4",t)},expression:"ruleForm.slot4"}})],1)],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"指标描述",prop:"slot5"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.slot5,callback:function(t){e.$set(e.ruleForm,"slot5",t)},expression:"ruleForm.slot5"}})],1)],1)],1)],1)],1)}),[],!1,null,"01224539",null);t.default=a.exports},b866:function(e,t,o){var r=o("d131");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,o("499e").default)("3875f97e",r,!0,{sourceMap:!1,shadowMode:!1})},becd:function(e,t,o){"use strict";o("147c")},d131:function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,".cm-s-idea span.cm-meta{color:olive}.cm-s-idea span.cm-number{color:#00f}.cm-s-idea span.cm-keyword{line-height:1em;font-weight:700;color:navy}.cm-s-idea span.cm-atom{font-weight:700;color:navy}.cm-s-idea span.cm-def,.cm-s-idea span.cm-operator,.cm-s-idea span.cm-property,.cm-s-idea span.cm-type,.cm-s-idea span.cm-variable,.cm-s-idea span.cm-variable-2,.cm-s-idea span.cm-variable-3{color:#000}.cm-s-idea span.cm-comment{color:grey}.cm-s-idea span.cm-string,.cm-s-idea span.cm-string-2{color:green}.cm-s-idea span.cm-qualifier{color:#555}.cm-s-idea span.cm-error{color:red}.cm-s-idea span.cm-attribute{color:#00f}.cm-s-idea span.cm-tag{color:navy}.cm-s-idea span.cm-link{color:#00f}.cm-s-idea .CodeMirror-activeline-background{background:#fffae3}.cm-s-idea span.cm-builtin{color:#30a}.cm-s-idea span.cm-bracket{color:#cc7}.cm-s-idea{font-family:Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif}.cm-s-idea .CodeMirror-matchingbracket{outline:1px solid grey;color:#000!important}.CodeMirror-hints.idea{font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#616569;background-color:#ebf3fd!important}.CodeMirror-hints.idea .CodeMirror-hint-active{background-color:#a2b8c9!important;color:#5c6065!important}",""])},d7d5:function(e,t,o){!function(e){function t(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function o(e){t(e);var o=e.state.placeholder=document.createElement("pre");o.style.cssText="height: 0; overflow: visible",o.style.direction=e.getOption("direction"),o.className="CodeMirror-placeholder CodeMirror-line-like";var r=e.getOption("placeholder");"string"==typeof r&&(r=document.createTextNode(r)),o.appendChild(r),e.display.lineSpace.insertBefore(o,e.display.lineSpace.firstChild)}function r(e){a(e)&&o(e)}function l(e){var r=e.getWrapperElement(),l=a(e);r.className=r.className.replace(" CodeMirror-empty","")+(l?" CodeMirror-empty":""),l?o(e):t(e)}function a(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",(function(a,s,i){var n=i&&i!=e.Init;if(s&&!n)a.on("blur",r),a.on("change",l),a.on("swapDoc",l),e.on(a.getInputField(),"compositionupdate",a.state.placeholderCompose=function(){!function(e){setTimeout((function(){var r=!1;if(1==e.lineCount()){var l=e.getInputField();r="TEXTAREA"==l.nodeName?!e.getLine(0).length:!/[^\u200b]/.test(l.querySelector(".CodeMirror-line").textContent)}r?o(e):t(e)}),20)}(a)}),l(a);else if(!s&&n){a.off("blur",r),a.off("change",l),a.off("swapDoc",l),e.off(a.getInputField(),"compositionupdate",a.state.placeholderCompose),t(a);var c=a.getWrapperElement();c.className=c.className.replace(" CodeMirror-empty","")}s&&!a.hasFocus()&&r(a)}))}(o("56b3"))},dc19:function(e,t,o){"use strict";o.r(t),o("8e6e"),o("ac6a"),o("456d");var r=o("ade3"),l=(o("20d6"),o("2f62"));function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}var s={data:function(){return{storey:["au_ods","au_std","au_dwd","au_dwm","au_dws","au_app"],databaseList:[{label:"前置库",options:[]},{label:"",options:[]}],title:"view"===this.$route.query.filter?"查看自定义指标":this.$route.query.id?"编辑自定义指标":"新增自定义指标",permission:[],process:[{id:"configStep",title:"配置业务信息",success:!0},{id:"submitStep",title:"配置技术口径",success:!0}]}},computed:{hasNext:function(){var e=this;return this.permission.findIndex((function(t){return t===e.stepActiveId}))+1<this.permission.length},hasPre:function(){var e=this;return this.permission.findIndex((function(t){return t===e.stepActiveId}))>0}},methods:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){Object(r.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},Object(l.b)("fusionTask",["GET_DATA_BASE_LIST","GET_STEP_HEADERR"])),created:function(){}};t.default=s},e888:function(e,t,o){"use strict";o.r(t),o("b866"),o("a7be"),o("f6b6"),o("d7d5");var r=o("db05"),l=o.n(r),a=o("56b3");o("8c33"),o("31c5"),o("ffda"),o("9b74"),o("991c");var s={data:function(){return{editor:null}},props:{value:{type:String,default:""},sqlStyle:{type:String,default:"default"},readOnly:{type:[Boolean,String]},placeholder:{type:String,default:""}},watch:{newVal:function(e,t){this.editor&&this.$emit("changeTextarea",this.editor.getValue())}},computed:{newVal:function(){if(this.editor)return this.editor.getValue()},isView:function(){return"view"===this.$route.query.filter}},mounted:function(){this.initCodeMirror()},methods:{formaterSql:function(){this.editor.setValue(l.a.format(this.editor.getValue()))},initCodeMirror:function(){var e=this,t=this;this.editor=a.fromTextArea(this.$refs.mycode,{value:this.value,mode:"text/x-mariadb",indentWithTabs:!0,smartIndent:!0,lineNumbers:!0,matchBrackets:!0,cursorHeight:1,lineWrapping:!0,readOnly:this.isView,theme:"idea",autofocus:!0,extraKeys:{Ctrl:"autocomplete"},hintOptions:{completeSingle:!1,tables:{users:["name","score","birthDate"],countries:["name","population","size"],score:["zooao"]}},gutters:["myGutter","CodeMirror-linenumbers"],gutterWidth:40}),this.editor.on("inputRead",(function(){e.editor.showHint()})),this.editor.setOption("extraKeys",{"Ctrl-D":function(e){t.formaterSql()}})},setVal:function(){this.editor&&(""===this.value?this.editor.setValue(""):this.editor.setValue(this.value))}}},i=(o("3e6e"),o("2877")),n=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{border:"1px solid #409eff"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"mycode",staticClass:"codesql",attrs:{placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})])}),[],!1,null,"cfaaadd0",null);t.default=n.exports},ee50:function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,"[data-v-cfaaadd0] .CodeMirror{color:#000;direction:ltr;line-height:22px;border:1px solid #e7e7e7}.CodeMirror-hints[data-v-cfaaadd0]{z-index:9999!important}[data-v-cfaaadd0] .CodeMirror pre.CodeMirror-placeholder{color:#929292;font-size:15px}",""])}}]);