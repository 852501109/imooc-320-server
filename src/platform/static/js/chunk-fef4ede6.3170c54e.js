(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fef4ede6","chunk-70b655bc"],{"147c":function(e,t,o){var l=o("3e0e6");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,o("499e").default)("d3b60e02",l,!0,{sourceMap:!1,shadowMode:!1})},"3c2d":function(e,t,o){var l=o("ee50");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,o("499e").default)("9644ae48",l,!0,{sourceMap:!1,shadowMode:!1})},"3e0e6":function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,".row[data-v-2ec53f19]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10px}.row>div[data-v-2ec53f19]{margin-right:10px}[data-v-2ec53f19] .el-input--medium .el-input__inner{height:35px!important}",""])},"3e6e":function(e,t,o){"use strict";o("3c2d")},"7aa2":function(e,t,o){"use strict";o.r(t);var l=o("e888"),r=o("db05"),a=o.n(r),s={props:{stepActiveId:{type:String,default:""}},data:function(){return{placeholder:"自定义sql，输入ctrl+d格式化",dialogSync:!1,dialogTitle:"",resultTableData:[{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"},{filedName:"结果表字段test",filedColumn:"注释"}],ruleForm:{slot1:"",slot2:"",slot3:"",slot4:"",slot5:"",slot6:"",slot7:"",slot8:""},rules:{slot1:[{required:!0,message:"请选择数据源",trigger:"change"}],slot2:[{required:!0,message:"请选择结果数据源",trigger:"change"}],slot3:[{required:!0,message:"请选择选择结果表",trigger:"change"}],slot8:[{required:!0,message:"自定义SQL必填",trigger:"change"}]}}},components:{SqlEditor:l.default},methods:{changeTextarea:function(e){this.$set(this.ruleForm,"slot8",e)},dialogSyncClose:function(){this.dialogSync=!1},changeSlot1:function(){this.ruleForm.slot2="",this.ruleForm.slot3=""},changeSlot2:function(){this.ruleForm.slot3=""},submitDialog:function(){},add:function(e){this.dialogSync=!0,this.dialogTitle=e},generateSql:function(){},formaterSql:function(e){var t=this.$refs.sqleditor;t.editor.setValue(a.a.format(t.editor.getValue()))},submitForm:function(){var e=this;return new Promise((function(t,o){e.$refs.ruleForm.validate((function(e){if(!e)return o("submit"),!1;t("submit")}))}))},resetForm:function(){this.$refs.ruleForm.resetFields()}}},i=(o("becd"),o("2877")),n=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("div",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px",disabled:"view"===e.$route.query.filter}},[t("el-row",{attrs:{gutter:24}},[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"数据源",prop:"slot1"}},[t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeSlot1},model:{value:e.ruleForm.slot1,callback:function(t){e.$set(e.ruleForm,"slot1",t)},expression:"ruleForm.slot1"}},[t("el-option",{attrs:{label:"test1",value:"test1"}}),t("el-option",{attrs:{label:"test2",value:"test2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"结果数据源",prop:"slot2"}},[t("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeSlot2},model:{value:e.ruleForm.slot2,callback:function(t){e.$set(e.ruleForm,"slot2",t)},expression:"ruleForm.slot2"}},[t("el-option",{attrs:{label:"test1",value:"test1"}}),t("el-option",{attrs:{label:"test2",value:"test2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"选择结果表",prop:"slot3"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.slot3,callback:function(t){e.$set(e.ruleForm,"slot3",t)},expression:"ruleForm.slot3"}},[t("el-option",{attrs:{label:"test1",value:"test1"}}),t("el-option",{attrs:{label:"test2",value:"test2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"时间戳",prop:"slot4"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.slot4,callback:function(t){e.$set(e.ruleForm,"slot4",t)},expression:"ruleForm.slot4"}},[t("el-option",{attrs:{label:"test1",value:"test1"}}),t("el-option",{attrs:{label:"test2",value:"test2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"模式配置",prop:"slot5"}},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.ruleForm.slot5,callback:function(t){e.$set(e.ruleForm,"slot5",t)},expression:"ruleForm.slot5"}},[t("el-option",{attrs:{label:"全量",value:"1"}}),t("el-option",{attrs:{label:"增量",value:"2"}})],1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"源表名",prop:"slot6"}},[t("el-input",{model:{value:e.ruleForm.slot6,callback:function(t){e.$set(e.ruleForm,"slot6",t)},expression:"ruleForm.slot6"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"自定义SQL",prop:"slot8"}},[t("div",["submitStep"==e.stepActiveId?t("SqlEditor",{ref:"sqleditor",attrs:{value:e.ruleForm.slot8,placeholder:e.placeholder},on:{changeTextarea:function(t){return e.changeTextarea(t)}}}):e._e()],1)])],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"结果表字段"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.resultTableData,height:"300px",border:""}},[t("el-table-column",{attrs:{prop:"filedName",label:"字段名称"}}),t("el-table-column",{attrs:{prop:"filedColumn",label:"字段注释"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,"2ec53f19",null);t.default=n.exports},b866:function(e,t,o){var l=o("d131");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,o("499e").default)("3875f97e",l,!0,{sourceMap:!1,shadowMode:!1})},becd:function(e,t,o){"use strict";o("147c")},d131:function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,".cm-s-idea span.cm-meta{color:olive}.cm-s-idea span.cm-number{color:#00f}.cm-s-idea span.cm-keyword{line-height:1em;font-weight:700;color:navy}.cm-s-idea span.cm-atom{font-weight:700;color:navy}.cm-s-idea span.cm-def,.cm-s-idea span.cm-operator,.cm-s-idea span.cm-property,.cm-s-idea span.cm-type,.cm-s-idea span.cm-variable,.cm-s-idea span.cm-variable-2,.cm-s-idea span.cm-variable-3{color:#000}.cm-s-idea span.cm-comment{color:grey}.cm-s-idea span.cm-string,.cm-s-idea span.cm-string-2{color:green}.cm-s-idea span.cm-qualifier{color:#555}.cm-s-idea span.cm-error{color:red}.cm-s-idea span.cm-attribute{color:#00f}.cm-s-idea span.cm-tag{color:navy}.cm-s-idea span.cm-link{color:#00f}.cm-s-idea .CodeMirror-activeline-background{background:#fffae3}.cm-s-idea span.cm-builtin{color:#30a}.cm-s-idea span.cm-bracket{color:#cc7}.cm-s-idea{font-family:Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif}.cm-s-idea .CodeMirror-matchingbracket{outline:1px solid grey;color:#000!important}.CodeMirror-hints.idea{font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#616569;background-color:#ebf3fd!important}.CodeMirror-hints.idea .CodeMirror-hint-active{background-color:#a2b8c9!important;color:#5c6065!important}",""])},d7d5:function(e,t,o){!function(e){function t(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function o(e){t(e);var o=e.state.placeholder=document.createElement("pre");o.style.cssText="height: 0; overflow: visible",o.style.direction=e.getOption("direction"),o.className="CodeMirror-placeholder CodeMirror-line-like";var l=e.getOption("placeholder");"string"==typeof l&&(l=document.createTextNode(l)),o.appendChild(l),e.display.lineSpace.insertBefore(o,e.display.lineSpace.firstChild)}function l(e){a(e)&&o(e)}function r(e){var l=e.getWrapperElement(),r=a(e);l.className=l.className.replace(" CodeMirror-empty","")+(r?" CodeMirror-empty":""),r?o(e):t(e)}function a(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",(function(a,s,i){var n=i&&i!=e.Init;if(s&&!n)a.on("blur",l),a.on("change",r),a.on("swapDoc",r),e.on(a.getInputField(),"compositionupdate",a.state.placeholderCompose=function(){!function(e){setTimeout((function(){var l=!1;if(1==e.lineCount()){var r=e.getInputField();l="TEXTAREA"==r.nodeName?!e.getLine(0).length:!/[^\u200b]/.test(r.querySelector(".CodeMirror-line").textContent)}l?o(e):t(e)}),20)}(a)}),r(a);else if(!s&&n){a.off("blur",l),a.off("change",r),a.off("swapDoc",r),e.off(a.getInputField(),"compositionupdate",a.state.placeholderCompose),t(a);var c=a.getWrapperElement();c.className=c.className.replace(" CodeMirror-empty","")}s&&!a.hasFocus()&&l(a)}))}(o("56b3"))},e888:function(e,t,o){"use strict";o.r(t),o("b866"),o("a7be"),o("f6b6"),o("d7d5");var l=o("db05"),r=o.n(l),a=o("56b3");o("8c33"),o("31c5"),o("ffda"),o("9b74"),o("991c");var s={data:function(){return{editor:null}},props:{value:{type:String,default:""},sqlStyle:{type:String,default:"default"},readOnly:{type:[Boolean,String]},placeholder:{type:String,default:""}},watch:{newVal:function(e,t){this.editor&&this.$emit("changeTextarea",this.editor.getValue())}},computed:{newVal:function(){if(this.editor)return this.editor.getValue()},isView:function(){return"view"===this.$route.query.filter}},mounted:function(){this.initCodeMirror()},methods:{formaterSql:function(){this.editor.setValue(r.a.format(this.editor.getValue()))},initCodeMirror:function(){var e=this,t=this;this.editor=a.fromTextArea(this.$refs.mycode,{value:this.value,mode:"text/x-mariadb",indentWithTabs:!0,smartIndent:!0,lineNumbers:!0,matchBrackets:!0,cursorHeight:1,lineWrapping:!0,readOnly:this.isView,theme:"idea",autofocus:!0,extraKeys:{Ctrl:"autocomplete"},hintOptions:{completeSingle:!1,tables:{users:["name","score","birthDate"],countries:["name","population","size"],score:["zooao"]}},gutters:["myGutter","CodeMirror-linenumbers"],gutterWidth:40}),this.editor.on("inputRead",(function(){e.editor.showHint()})),this.editor.setOption("extraKeys",{"Ctrl-D":function(e){t.formaterSql()}})},setVal:function(){this.editor&&(""===this.value?this.editor.setValue(""):this.editor.setValue(this.value))}}},i=(o("3e6e"),o("2877")),n=Object(i.a)(s,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{border:"1px solid #409eff"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"mycode",staticClass:"codesql",attrs:{placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})])}),[],!1,null,"cfaaadd0",null);t.default=n.exports},ee50:function(e,t,o){(e.exports=o("2350")(!1)).push([e.i,"[data-v-cfaaadd0] .CodeMirror{color:#000;direction:ltr;line-height:22px;border:1px solid #e7e7e7}.CodeMirror-hints[data-v-cfaaadd0]{z-index:9999!important}[data-v-cfaaadd0] .CodeMirror pre.CodeMirror-placeholder{color:#929292;font-size:15px}",""])}}]);