(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3b2dfb02"],{"02b3":function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".get-edit-item[data-v-c0d75aaa]{padding-top:20px;margin:0 50px}.get-edit-item li[data-v-c0d75aaa]{margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex}.get-edit-item li .get-edit-type[data-v-c0d75aaa]{height:40px;line-height:40px}.get-edit-item li .get-edit-title[data-v-c0d75aaa]{width:80px;color:#3a405b;height:40px;line-height:40px}.get-edit-item li .el-tree[data-v-c0d75aaa]{width:100%;border:1px solid #dcdfe6;padding:24px}[data-v-c0d75aaa] .el-table__body-wrapper{overflow-y:auto}[data-v-c0d75aaa] .el-table__body-wrapper .el-table__body{position:absolute;padding-bottom:20px}[data-v-c0d75aaa] .cell{text-align:center}",""])},"21a6":function(e,t,a){(function(a){var r,n,o;n=[],void 0===(o="function"==typeof(r=function(){"use strict";function t(e,t,a){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){d(r.response,t,a)},r.onerror=function(){},r.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,i=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,a,i){var d=o.URL||o.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?n(s):r(s.href)?t(e,a,i):n(s,s.target="_blank")):(s.href=d.createObjectURL(e),setTimeout((function(){d.revokeObjectURL(s.href)}),4e4),setTimeout((function(){n(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,o){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),a);else if(r(e))t(e,a,o);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){n(i)}))}}:function(e,a,r,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,r);var d="application/octet-stream"===e.type,s=/constructor/i.test(o.HTMLElement)||o.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||d&&s||i)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},c.readAsDataURL(e)}else{var p=o.URL||o.webkitURL,u=p.createObjectURL(e);n?n.location=u:location.href=u,n=null,setTimeout((function(){p.revokeObjectURL(u)}),4e4)}});o.saveAs=d.saveAs=d,e.exports=d})?r.apply(t,n):r)||(e.exports=o)}).call(this,a("c8ba"))},3150:function(e,t,a){"use strict";a("5a7b")},"5a7b":function(e,t,a){var r=a("02b3");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,a("499e").default)("e8faee76",r,!0,{sourceMap:!1,shadowMode:!1})},f0be:function(e,t,a){"use strict";a.r(t),a("7f7f"),a("8e6e"),a("456d"),a("6762"),a("2fdb"),a("34ef"),a("ac6a"),a("7514"),a("20d6");var r=a("ade3"),n=a("2f62");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d=a("25ca"),s=a("21a6"),l={data:function(){return{value:"",rowId:this.$route.query.id,filter:"view"!=this.$route.query.filter,visibleList:[],itemHeight:48,totalHeight:0,scrollTop:0,debounce:!1,param:{id:"",standardName:"",standardCode:"",standardType:1,codeNum:"",standardDesc:"",dataLength:"",dataType:"",dataTypeDesc:"",dataAccuracy:"",dataState:"",createUser:"",createTime:"",updateUser:"",updateTime:"",standardCodeList:[],oldCode:"",oldName:""},rules:{standardName:[{required:!0,message:"请输入标准名称",trigger:"blur"}],standardCode:[{required:!1,message:"请输入参考标准编号",trigger:"blur"}],standardType:[{required:!0,message:"请输入标准类别",trigger:"blur"}],standardDesc:[{required:!1,message:"请输入描述",trigger:"blur"}],dataType:[{required:!0,message:"请输入数据类型",trigger:"blur"}],dataTypeDesc:[{required:!1,message:"请输入数据类型描述",trigger:"blur"}],dataLength:[{required:!0,message:"请输入数据长度",trigger:"blur"},{pattern:/^[0-9]*$/,message:"请输入数字",trigger:"blur"}],dataAccuracy:[{required:!1,message:"请输入数据精度",trigger:"blur"},{pattern:/^[0-9]*$/,message:"请输入数字",trigger:"blur"}]}}},computed:i({},Object(n.d)("standardCode",["standardTypeOptions","dataTypeOptions"])),methods:i(i({},Object(n.b)("standardCode",["GOEDITSTANDARDCODE","MODIFYSTANDARDCODE","ADDSTANDARDCODE","GETSTANDARDTYPEOPTIONS_LIST","GETDATATYPEOPTIONS_LIST"])),{},{delRow:function(e){var t;e.index&&(t=this.param.standardCodeList.findIndex((function(t){return t.index===e.index}))),this.param.standardCodeList.splice(t,1),this.totalHeight-=this.itemHeight,this.scrollTop=this.scrollTop+1},addRow:function(){var e={index:this.param.standardCodeList.length>0?this.param.standardCodeList[this.param.standardCodeList.length-1].index+1:1,standardValue:"",standardDesc:""};this.param.standardCodeList.push(e),this.totalHeight+=this.itemHeight,this.scrollTop=this.scrollTop+1},subBtn:function(){var e=this,t=this;this.$refs.standardCodeForm.validate((function(a){if(!a)return!1;if(e.param.standardCodeList.find((function(e){return!e.standardValue})))e.$AudaqueToast.warn({template:"列表有未完善项"});else if(e.$store.commit("SHOW_LOADING",!0),e.rowId)e.param.id=e.rowId,e.MODIFYSTANDARDCODE(e.param).then((function(a){0==a.code&&e.$AudaqueToast.tip({template:"修改成功",methods:{okEvent:function(){t.$router.go(-1)}}})}));else{var r=e.param;e.ADDSTANDARDCODE(r).then((function(a){0==a.code&&e.$AudaqueToast.tip({template:"添加成功",methods:{okEvent:function(){t.$router.go(-1)}}})}))}}))},exportFun:function(e){this.publics.exportFile(this,e,{})},exportData:function(){if(0!==this.param.standardCodeList.length){var e=[],t=[],a=["标准值","标准值描述"];a.forEach((function(e){t.push(e)})),e.push(t),this.param.standardCodeList.forEach((function(t){var r=[];a.forEach((function(e){"标准值"===e&&r.push(t.standardValue),"标准值描述"===e&&r.push(t.standardDesc)})),e.push(r)}));var r=d.utils.book_new(),n=d.utils.aoa_to_sheet(e);d.utils.book_append_sheet(r,n,"标准明细");var o=d.write(r,{bookType:"xlsx",type:"array"});s.saveAs(new Blob([o]),"标准代码导出_"+this.param.standardName+"代码明细_"+this.dateFormat(new Date)+".xlsx")}else this.$AudaqueToast.warn({template:"没有可导出的数据",methods:{okEvent:function(){}}})},dateFormat:function(e){var t=new Date(e);return t.getFullYear()+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+(t.getDate()<10?"0"+t.getDate():t.getDate())+(t.getHours()<10?"0"+t.getHours():t.getHours())+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},importData:function(){this.$refs.addStandardCodeFile.click()},handleFileUpload:function(e){var t=e.target.files[0];this.parseExcel(t)},parseExcel:function(e){var t=this,a=new FileReader;a.onload=function(e){var a=new Uint8Array(e.target.result),r=d.read(a,{type:"array"}),n=r.SheetNames[0],o=r.Sheets[n],i=d.utils.sheet_to_json(o,{header:1});2===i[0].length&&i[0].includes("标准值")&&i[0].includes("标准值描述")?i.slice(1).forEach((function(e){var a={index:t.param.standardCodeList[t.param.standardCodeList.length-1].index+1,standardValue:e[0],standardDesc:e[1]};t.totalHeight+=t.itemHeight,t.param.standardCodeList.push(a),t.$refs.addStandardCodeFile.value=""})):(t.$AudaqueToast.warn({template:"导入文件格式错误",methods:{okEvent:function(){}}}),t.$refs.addStandardCodeFile.value="")},a.readAsArrayBuffer(e)}}),mounted:function(){var e=this;this.$refs.addStandardCodeFile.addEventListener("change",this.handleFileUpload),this.$refs.table.bodyWrapper.addEventListener("scroll",(function(t){e.scrollTop=t.target.scrollTop}))},beforeUnmount:function(){this.$refs.addStandardCodeFile.removeEventListener("change",this.handleFileUpload)},watch:{scrollTop:{immediate:!0,handler:function(e){var t=this;this.$nextTick((function(){var a=Math.floor(e/t.itemHeight);t.visibleList=t.param.standardCodeList.slice(a,a+20),t.top=a*t.itemHeight,t.$refs.table.$el.getElementsByClassName("el-table__body")[0].style.top="".concat(a*t.itemHeight,"px")}))}}},created:function(){var e=this;this.GETDATATYPEOPTIONS_LIST(),this.rowId&&this.GOEDITSTANDARDCODE({id:this.rowId}).then((function(t){e.param.id=t.id,e.param.standardName=t.standardName,e.param.standardCode=t.standardCode,e.param.standardType=t.standardType,e.param.codeNum=t.codeNum,e.param.standardDesc=t.standardDesc,e.param.dataLength=t.dataLength,e.param.dataType=t.dataType,e.param.dataTypeDesc=t.dataTypeDesc,e.param.dataAccuracy=t.dataAccuracy,e.param.dataState=t.dataState,e.param.createUser=t.createUser,e.param.createTime=t.createTime,e.param.updateUser=t.updateUser,e.param.updateTime=t.updateTime,e.param.standardCodeList=null==t.standardCodeList?[]:t.standardCodeList,e.param.standardCodeList.forEach((function(t,a){t.index=a+1,e.totalHeight+=e.itemHeight})),e.scrollTop+=1,e.param.oldName=t.standardName,e.param.oldCode=t.standardCode}))}},c=(a("3150"),a("2877")),p=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("audaque-detail-form-page",{attrs:{title:e.filter?e.rowId?"修改标准代码":"新增标准代码":"查看标准代码","opt-type":e.$route.query.filter},on:{"submit-click":e.subBtn}},[[t("el-form",{ref:"standardCodeForm",staticClass:"form-item",attrs:{model:e.param,"label-width":"120px",rules:e.rules,disabled:!e.filter}},[t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"标准名称",prop:"standardName",rules:e.rules.standardName}},[t("el-input",{attrs:{disabled:!e.filter,placeholder:"请输入标准名称",maxlength:"85","show-word-limit":""},model:{value:e.param.standardName,callback:function(t){e.$set(e.param,"standardName","string"==typeof t?t.trim():t)},expression:"param.standardName"}})],1),t("el-form-item",{attrs:{label:"参考标准编号",prop:"standardCode",rules:e.rules.standardCode}},[t("el-input",{attrs:{disabled:!e.filter,placeholder:"请输入参考标准编号",maxlength:"200","show-word-limit":""},model:{value:e.param.standardCode,callback:function(t){e.$set(e.param,"standardCode","string"==typeof t?t.trim():t)},expression:"param.standardCode"}})],1),t("el-form-item",{attrs:{label:"标准类别",prop:"standardType",rules:e.rules.standardType}},[t("el-radio-group",{attrs:{disabled:!e.filter,placeholder:"请选择",clearable:""},model:{value:e.param.standardType,callback:function(t){e.$set(e.param,"standardType","string"==typeof t?t.trim():t)},expression:"param.standardType"}},e._l(e.standardTypeOptions,(function(a,r){return t("el-radio-button",{key:r,attrs:{label:a.code}},[e._v("\n                                "+e._s(a.name)+"\n                            ")])})),1)],1),t("el-form-item",{attrs:{label:"数据类型",prop:"dataType",rules:e.rules.dataType}},[t("el-select",{attrs:{disabled:!e.filter,placeholder:"请选择",clearable:""},model:{value:e.param.dataType,callback:function(t){e.$set(e.param,"dataType",t)},expression:"param.dataType"}},e._l(e.dataTypeOptions,(function(e){return t("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})})),1)],1),t("el-form-item",{attrs:{label:"数据类型描述",prop:"dataTypeDesc",rules:e.rules.dataTypeDesc}},[t("el-input",{attrs:{disabled:!e.filter,placeholder:"请输入数据类型描述",maxlength:"85","show-word-limit":""},model:{value:e.param.dataTypeDesc,callback:function(t){e.$set(e.param,"dataTypeDesc","string"==typeof t?t.trim():t)},expression:"param.dataTypeDesc"}})],1),t("el-form-item",{attrs:{label:"数据长度",prop:"dataLength",rules:e.rules.dataLength}},[t("el-input",{attrs:{disabled:!e.filter,placeholder:"请输入数据长度",maxlength:"200","show-word-limit":""},model:{value:e.param.dataLength,callback:function(t){e.$set(e.param,"dataLength","string"==typeof t?t.trim():t)},expression:"param.dataLength"}})],1),t("el-form-item",{attrs:{label:"数据精度",prop:"dataAccuracy",rules:e.rules.dataAccuracy}},[t("el-input",{attrs:{disabled:!e.filter,placeholder:"请输入数据精度",maxlength:"200","show-word-limit":""},model:{value:e.param.dataAccuracy,callback:function(t){e.$set(e.param,"dataAccuracy","string"==typeof t?t.trim():t)},expression:"param.dataAccuracy"}})],1),t("el-form-item",{attrs:{label:"标准描述",prop:"standardDesc",rules:e.rules.standardDesc}},[t("el-input",{attrs:{disabled:!e.filter,placeholder:"请输入标准描述",maxlength:"85","show-word-limit":""},model:{value:e.param.standardDesc,callback:function(t){e.$set(e.param,"standardDesc","string"==typeof t?t.trim():t)},expression:"param.standardDesc"}})],1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:24}},[t("label",{staticStyle:{display:"inline-block","line-height":"20px","font-weight":"700","font-size":"14px",color:"#666","margin-top":"11px"}},[e._v("代码明细")]),t("el-button",{staticStyle:{float:"right","margin-right":"5px"},attrs:{title:"下载导入模板",type:"primary",disabled:!e.filter},on:{click:function(t){return e.exportFun("/standardCode/standardDtlTemplateDown.do")}}},[e._v(" 下载导入模板")]),t("el-button",{staticStyle:{float:"right","margin-right":"5px"},attrs:{type:"primary",disabled:!e.filter},on:{click:e.exportData}},[e._v("导出")]),t("el-button",{staticStyle:{float:"right","margin-right":"-5px"},attrs:{type:"primary",disabled:!e.filter},on:{click:e.importData}},[e._v("导入")]),t("input",{ref:"addStandardCodeFile",staticStyle:{display:"none"},attrs:{type:"file",accept:".xlsx, .xls"}})],1)],1),t("el-table",{ref:"table",attrs:{data:e.visibleList,height:"400px",border:""},scopedSlots:e._u([{key:"append",fn:function(){return[t("div",{style:{height:"".concat(e.totalHeight,"px")}})]},proxy:!0}])},[t("el-table-column",{attrs:{label:"序号",prop:"index",width:"50",align:"center"}}),t("el-table-column",{attrs:{label:"标准值"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{attrs:{disabled:!e.filter,placeholder:"请输入标准值",maxlength:"85","show-word-limit":""},model:{value:a.row.standardValue,callback:function(t){e.$set(a.row,"standardValue","string"==typeof t?t.trim():t)},expression:"scope.row.standardValue"}})]}}])}),t("el-table-column",{attrs:{prop:"standardDesc",label:"描述",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input",{attrs:{disabled:!e.filter,placeholder:"请输入描述",maxlength:"85","show-word-limit":""},model:{value:a.row.standardDesc,callback:function(t){e.$set(a.row,"standardDesc","string"==typeof t?t.trim():t)},expression:"scope.row.standardDesc"}})]}}])}),t("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start"}},[e.filter?t("el-button",{attrs:{type:"danger",icon:"el-icon-minus",size:"mini",circle:""},on:{click:function(t){return e.delRow(a.row)}}}):e._e()],1)]}}])},[t("template",{slot:"header"},[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"新增",placement:"top-start"}},[e.filter?t("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini",circle:""},on:{click:e.addRow}}):e._e()],1)],1)],2)],1)]],2)}),[],!1,null,"c0d75aaa",null);t.default=p.exports}}]);