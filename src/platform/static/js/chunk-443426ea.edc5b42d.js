(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-443426ea"],{"0909":function(e,t,r){(e.exports=r("2350")(!1)).push([e.i,".system-config-edit[data-v-fa217f5e] .system-introduction{min-height:90px!important;height:auto!important}.system-config-edit[data-v-fa217f5e] .system-introduction /deep/ .el-textarea__inner{min-height:90px!important}.system-config-edit[data-v-fa217f5e] .manual-file{width:100%}.system-config-edit[data-v-fa217f5e] .manual-file /deep/ .el-upload-list__item-name{line-height:40px}.system-config-edit .iconfont[data-v-fa217f5e]{font-size:16px;color:#444f61;cursor:pointer;margin-left:8px}",""])},4491:function(e,t,r){var o=r("0909");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,r("499e").default)("615ac1c2",o,!0,{sourceMap:!1,shadowMode:!1})},"6a92":function(e,t,r){"use strict";r.r(t),r("7f7f"),r("8e6e"),r("456d"),r("ac6a"),r("96cf");var o=r("1da1"),a=r("ade3"),i=r("2f62");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l,u={computed:n({},Object(i.d)(["upload"])),data:function(){return{imgVisible:!1,preview:"",ruleForm:{name:"",remark:"",smallIcon:"",systems:[]},rules:{name:[{required:!0,message:"平台名称不能为空",trigger:"blur"}],remark:[{required:!0,message:"平台介绍不能为空",trigger:"blur"}],id:[{required:!0,message:"请选择系统名称",trigger:"change"}]},fileList:[],options:[],isView:!1}},watch:{},created:(l=Object(o.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._AJAX({url:"authorManage.findOther",method:"GET",data:{page:1,rows:1e4}}).then((function(e){0==e.code&&(t.options=e.result.rows)}));case 2:this.$route.query.id&&this.loadData(),this.$route.query.view&&(this.isView=!0);case 4:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),methods:n(n(n({},Object(i.b)(["LOADIMG","LOADOBJ","_AJAX","MYPLATFORM"])),Object(i.b)("webkit",["MODIFYAPP","ADDAPP","APPDETAIL"])),{},{loadData:function(){var e=this;this._AJAX({url:"authorManage.platform.find",method:"GET",data:{id:this.$route.query.id}}).then((function(t){if(0==t.code){var r=t.result;r.systems&&r.systems.length>0?(e.options=e.options.concat(r.systems),e.ruleForm=r):(r.systems=[],e.ruleForm=r)}}))},handleClick:function(){},sortFun:function(e){var t=this;this._AJAX({url:"authorManage.moveOrder",method:"POST",data:{id:e.id,upOrDown:!1,step:1}}).then((function(e){0===e.code&&t.loadData()}))},uploadSuccess:function(e){this.fileList=e.fileList,this.ruleForm.smallIcon=e.res.result},submitForm:function(){var e=this;this.$refs.ruleForm.validate((function(t){var r=e;if(!t)return!1;var o=Object.assign({},e.ruleForm);o.systems.length>0?(o.systems.forEach((function(e,t){delete e.index,e.customOrder=++t})),r.$store.commit("SHOW_LOADING",!0),e.$route.query.id?e._AJAX({url:"authorManage.platform.modify",method:"POST",data:o}).then((function(t){e.$AudaqueToast.tip({template:"修改成功",methods:{okEvent:function(){r.$router.go(-1),r.MYPLATFORM({page:1,row:1e3})}}})})):e._AJAX({url:"authorManage.platform.add",method:"POST",data:o}).then((function(t){e.$AudaqueToast.tip({template:"新增成功",methods:{okEvent:function(){r.$router.go(-1),r.MYPLATFORM({page:1,row:1e3})}}})}))):e.$AudaqueToast.warn({template:"请添加系统",methods:{okEvent:function(){}}})}))},handleTableChange:function(e,t){var r=this,o=0;this.ruleForm.systems.forEach((function(a){if(a.id===e&&o++,o>1){var i=r;r.$AudaqueToast.warn({template:"该系统已经存在请勿重复添加",methods:{okEvent:function(){i.$set(i.ruleForm.systems[t],"id","")}}})}}))}})},c=(r("c1c9"),r("2877")),m=Object(c.a)(u,(function(){var e=this,t=e._self._c;return t("audaque-detail-form-page",{staticClass:"system-config-edit",attrs:{title:e.$route.query.id?e.isView?"查看平台":"编辑平台":"新增平台","opt-type":e.$route.query.optType},on:{"submit-click":e.submitForm}},[t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px",disabled:e.isView}},[t("el-form-item",{attrs:{label:"平台名称",prop:"name"}},[t("el-input",{attrs:{maxlength:"24","show-word-limit":""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name","string"==typeof t?t.trim():t)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"平台介绍",prop:"remark"}},[t("el-input",{staticClass:"system-introduction",attrs:{type:"textarea",autosize:"",placeholder:"",maxlength:"100","show-word-limit":""},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark","string"==typeof t?t.trim():t)},expression:"ruleForm.remark"}}),t("div",{staticClass:"clear"})],1),t("el-form-item",{attrs:{label:" "}},[t("div",{attrs:{slot:"label"},slot:"label"},[t("span",{staticStyle:{color:"#f56c6c"}},[e._v("*")]),e._v("系统")]),t("el-button",{staticClass:"add-system-btn",on:{click:function(t){return e.publics.addLine(e.ruleForm.systems,!1)}}},[e._v("添加系统")]),t("el-table",{staticClass:"el-table-common__list",attrs:{"tooltip-effect":"light","highlight-current-row":"",stripe:"",data:e.ruleForm.systems,border:""}},[t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",align:"center",width:"50",label:"序号"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"系统名称",align:"center",prop:"id"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-form-item",{attrs:{prop:"systems."+r.$index+".id",rules:e.rules.id}},[t("el-select",{attrs:{clearable:"",placeholder:"",filterable:""},on:{change:function(t){e.handleTableChange(t,r.$index)}},model:{value:r.row.id,callback:function(t){e.$set(r.row,"id",t)},expression:"scope.row.id"}},e._l(e.options,(function(e,r){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)]}}])}),e.isView?e._e():t("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("span",{class:["iconfont","iconShape1","operate"],attrs:{title:"删除"},on:{click:function(t){return e.publics.removeLine(e.ruleForm.systems,[e.ruleForm.systems[r.$index]])}}})]}}],null,!1,1402790415)})],1)],1)],1)],1)}),[],!1,null,"fa217f5e",null);t.default=m.exports},c1c9:function(e,t,r){"use strict";r("4491")}}]);