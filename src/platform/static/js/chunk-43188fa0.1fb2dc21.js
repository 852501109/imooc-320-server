(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-43188fa0","chunk-12415036","chunk-2d0d43f6"],{"05e0":function(e,t,a){"use strict";a.r(t),a("8e6e"),a("456d"),a("7f7f"),a("ac6a");var r=a("ade3"),o=a("2f62"),s=a("e91a"),l=a("365c"),i=a("1971"),n=a("0314"),c=a("5fe4");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={data:function(){return{initedFileUUIDs:[],taskId:this.$route.query.id,pageType:this.$route.query.pageType,ruleForm:{},rules:{comment:{required:!0,message:"请输入审核意见",trigger:["blur","change"]},type:{required:!0,message:"请选择操作的类型",trigger:"change"},assigneeId:{required:!0,message:"请指定委派人",trigger:"change"},backTaskSid:{required:!0,message:"请选择下一节点处理人",trigger:"change"}},nodeData:[],activeNodeData:{},activeNodeVariables:{},operationData:[],key2:+new Date,formConf:{},activeName:"0",activeData:{},userInfoForm:{},userInfoRules:{},suspendedObj:{null:"<span>-</span>",1:"<span>运行中</span>",2:'<span style="color: red">暂停</span>'},isshowSelect:!0,nextNodeIsDisabled:!1,dataMapStr:null,isShowFormItem:!0,tabsNames:{0:"基本信息",1:"表单信息",2:"任务办理",3:"审核历史"},reviewStatus:c.reviewStatus}},computed:{},components:{processInfoComponent:s.default},created:function(){this.taskId&&this.init()},methods:u(u({},Object(o.b)(["_AJAX"])),{},{submitForm:function(e){var t=this;this._AJAX({url:"activiti.biz.update",method:"POST",data:{tableName:this.activeData.tableName,dataMap:e,rowId:this.activeData.businessKey,bizCode:this.activeData.businessKey,id:""}}).then((function(e){t.$AudaqueToast.tip({template:"编辑成功",methods:{okEvent:function(){}}})}))},translation:function(e,t){if(null==t)return"-";for(var a=0;a<e.length;a++)if(e[a].value===t)return e[a].label},init:function(){var e=this;this._AJAX({url:"upcoming"===this.pageType?"activiti.task.todo.id":"activiti.task.done.id",method:"GET",data:{taskId:this.taskId}}).then((function(t){if(0===t.code){if(e.activeData=t.result,e.userInfoForm=t.result,e.userInfoForm.ccInfo?e.userInfoForm.ccInfo=e.userInfoForm.ccInfo.map((function(e){return e.username})):e.userInfoForm.ccInfo=[],t.result.dataMapStr){var a=JSON.parse(t.result.dataMapStr);e.dataMapStr=a}e.loadFormInfo()}}))},loadFormInfo:function(){var e=this;if(this.activeData.formId){this.isShowFormItem=!0;var t=l.default["form.design.select"]+"/"+this.activeData.formId;this._AJAX({url:t,method:"GET",data:{}}).then((function(t){if(0===t.code&&(e.formConf=JSON.parse(t.result.formJson),e.dataMapStr)){var a=e.formConf.fields.map((function(e){return"el-upload"===e.__config__.tag?e.disabled=!1:e.disabled=!0,"el-tree"===e.__config__.tag&&(e["show-checkbox"]=!1),e}));i.fillFormData.call(e,a,e.dataMapStr,e.formConf),e.key2=+new Date}}))}else this.isShowFormItem=!1},switchOpinion:function(e){var t=e;this.$set(this.ruleForm,"comment",t)},changeContent:function(e){this.ruleForm.content=this.ruleForm.opinion+e},switchType:function(e){var t=this;this.nodeData=[],this.$set(this.ruleForm,"backTaskSid",""),this.$refs.ruleForm.clearValidate(),"pass"===e||"select"===e?this._AJAX({url:"pass"===e?"activiti.process.node.next":"activiti.process.node.next.all",method:"POST",data:{currActId:this.activeData.key,procDefId:this.activeData.procDefId,procInstId:this.activeData.procInstId}}).then((function(e){e.result&&e.result.length>0&&(t.nodeData=e.result,t.nodeData.forEach((function(e){e.name=e.name||" ",t.activeNodeData[e.nodeId]={users:e.users,variables:e.variables}})),t.$set(t.ruleForm,"backTaskSid",e.result[0].nodeId),t.switchNode(e.result[0].nodeId))})):"reject"===e&&this._AJAX({url:"activiti.task.back.nodes",method:"GET",data:{procInstId:this.activeData.procInstId,taskId:this.taskId}}).then((function(e){e.result&&e.result.length>0&&(t.nodeData=e.result,t.$set(t.ruleForm,"backTaskSid",e.result[0].key)),t.nodeData.push({name:"发起人",key:"sponsor"})}))},switchNode:function(e){var t=this;this.isshowSelect=!0,this.nextNodeIsDisabled=!1,this.nodeData.forEach((function(a){a.nodeId===e&&2===a.type&&(t.isshowSelect=!1)})),this.$set(this.ruleForm,"userIds",""),this.operationData=[],this.operationData=this.activeNodeData[e].users,this.ruleForm.userIds=this.operationData&&this.operationData.map((function(e){return e.id})),this.activeNodeVariables=this.activeNodeData[e].variables},handleDown:function(){n.default.loadNode(document.querySelector("#updateNode"+this.activeName),this.userInfoForm.title+"_"+this.tabsNames[this.activeName])},submit:function(){var e=this,t=this;this.$refs.ruleForm.validate((function(a){if(!a)return!1;if("pass"===e.ruleForm.type||"select"===e.ruleForm.type)e._AJAX({url:"activiti.task.submit",method:"POST",data:{id:e.taskId,userIds:e.ruleForm.userIds,comment:e.ruleForm.comment,variables:e.activeNodeVariables,procDefId:e.activeData.procDefId,ccUid:e.ruleForm.selectedUserIds}}).then((function(e){t.$AudaqueToast.tip({template:"操作成功",methods:{okEvent:function(){t.$router.go(-1)}}})}));else if("true"===e.ruleForm.type||"false"===e.ruleForm.type)e._AJAX({url:"activiti.task.submit",method:"POST",data:{id:e.taskId,userIds:e.ruleForm.userIds,comment:e.ruleForm.comment,variables:e.activeNodeVariables,procDefId:e.activeData.procDefId,pass:e.ruleForm.type,ccUid:e.ruleForm.selectedUserIds}}).then((function(e){t.$AudaqueToast.tip({template:"操作成功",methods:{okEvent:function(){t.$router.go(-1)}}})}));else if("reject"===e.ruleForm.type){var r=null;r="sponsor"===e.ruleForm.backTaskSid?{id:e.taskId,comment:e.ruleForm.comment,ccUid:e.ruleForm.selectedUserIds}:{id:e.taskId,comment:e.ruleForm.comment,procInstId:e.activeData.procInstId,procDefId:e.activeData.procDefId,backTaskSid:e.ruleForm.backTaskSid,ccUid:e.ruleForm.selectedUserIds},e._AJAX({url:"activiti.task.back.task",method:"POST",data:r}).then((function(e){t.$AudaqueToast.tip({template:"操作成功",methods:{okEvent:function(){t.$router.go(-1)}}})}))}else"entrust"===e.ruleForm.type&&e._AJAX({url:"activiti.task.delegate",method:"POST",data:{id:e.taskId,procInstId:e.activeData.procInstId,assigneeId:e.ruleForm.assigneeId,comment:e.ruleForm.comment,ccUid:e.ruleForm.selectedUserIds}}).then((function(e){t.$AudaqueToast.tip({template:"操作成功",methods:{okEvent:function(){t.$router.go(-1)}}})}))}))}})},m=(a("d296"),a("2877")),f=Object(m.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("audaque-detail-form-page",{staticClass:"workflow-review-edit",attrs:{title:"查看我的待办","opt-type":e.$route.query.optType}},[a("el-tabs",{attrs:{"tab-position":"left"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基本信息",name:"0"}},[a("el-form",{ref:"userInfoForm",staticClass:"demo-ruleForm",attrs:{model:e.userInfoForm,rules:e.userInfoRules,"label-width":"110px",id:"updateNode0"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"业务",prop:"categoryName"}},[a("el-input",{attrs:{disabled:""},model:{value:e.userInfoForm.categoryName,callback:function(t){e.$set(e.userInfoForm,"categoryName",t)},expression:"userInfoForm.categoryName"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"流程名称",prop:"processName"}},[a("el-input",{attrs:{disabled:""},model:{value:e.userInfoForm.processName,callback:function(t){e.$set(e.userInfoForm,"processName",t)},expression:"userInfoForm.processName"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"节点名称",prop:"name"}},[a("el-input",{attrs:{disabled:""},model:{value:e.userInfoForm.name,callback:function(t){e.$set(e.userInfoForm,"name",t)},expression:"userInfoForm.name"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"申请标题",prop:"title"}},[a("el-input",{attrs:{disabled:""},model:{value:e.userInfoForm.title,callback:function(t){e.$set(e.userInfoForm,"title",t)},expression:"userInfoForm.title"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"发起人",prop:"applyer"}},[a("el-input",{attrs:{disabled:""},model:{value:e.userInfoForm.applyer,callback:function(t){e.$set(e.userInfoForm,"applyer",t)},expression:"userInfoForm.applyer"}})],1)],1),a("el-col",{attrs:{span:12}},[e.userInfoForm.ccInfo&&e.userInfoForm.ccInfo.length>0?a("el-form-item",{attrs:{label:"抄送人",prop:"ccInfo"}},[a("div",{staticClass:"form-border"},[e._v("\n                            "+e._s(e.userInfoForm.ccInfo.join(","))+"\n                        ")])]):e._e()],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"发起人所属组织",prop:"deptnames"}},[a("el-input",{attrs:{disabled:""},model:{value:e.userInfoForm.deptnames,callback:function(t){e.$set(e.userInfoForm,"deptnames",t)},expression:"userInfoForm.deptnames"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"发起时间",prop:"startTime"}},[a("el-input",{attrs:{disabled:""},model:{value:e.userInfoForm.startTime,callback:function(t){e.$set(e.userInfoForm,"startTime",t)},expression:"userInfoForm.startTime"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"状态",prop:"suspended"}},["upcoming"===e.pageType?a("div",{staticClass:"form-border",domProps:{innerHTML:e._s(e.suspendedObj[e.userInfoForm.suspended])}}):a("div",{staticClass:"form-border"},[e._v("\n                            "+e._s(e.translation(e.reviewStatus,e.userInfoForm.result))+"\n                        ")])])],1)],1)],1),a("el-tab-pane",{attrs:{label:"表单信息",name:"1"}},[e.isShowFormItem?[a("div",[Object.keys(e.formConf).length>0?a("form-parser",{key:e.key2,ref:"formParser",attrs:{id:"updateNode1",formConf:e.formConf,isDisabled:!1},on:{submit:e.submitForm}}):e._e()],1)]:a("div",{staticClass:"air-item"},[e._v("暂无表单信息!")])],2),"upcoming"===e.pageType?a("el-tab-pane",{attrs:{label:"任务办理",name:"2"}},[a("div",{staticClass:"operation-item"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{id:"updateNode2",model:e.ruleForm,rules:e.rules,"label-width":"110px","label-position":"top",disabled:2===e.activeData.suspended}},[a("el-form-item",{attrs:{label:"处理意见",prop:"comment"}},[a("el-select",{staticClass:"opinion-line",attrs:{placeholder:"请选择",clearable:""},on:{change:e.switchOpinion},model:{value:e.ruleForm.opinion,callback:function(t){e.$set(e.ruleForm,"opinion",t)},expression:"ruleForm.opinion"}},[a("el-option",{attrs:{label:"同意",value:"同意"}}),a("el-option",{attrs:{label:"同意**的意见",value:"同意***的意见"}}),a("el-option",{attrs:{label:"请指示",value:"请指示"}}),a("el-option",{attrs:{label:"请**阅示",value:"请**阅示"}}),a("el-option",{attrs:{label:"请处理",value:"请处理"}}),a("el-option",{attrs:{label:"不同意",value:"不同意"}}),a("el-option",{attrs:{label:"呈领导阅示",value:"呈领导阅示"}}),a("el-option",{attrs:{label:"请审批",value:"请审批"}}),a("el-option",{attrs:{label:"审核无误",value:"审核无误"}})],1),a("el-input",{attrs:{type:"textarea",placeholder:"",clearable:""},on:{change:e.changeContent},model:{value:e.ruleForm.comment,callback:function(t){e.$set(e.ruleForm,"comment",t)},expression:"ruleForm.comment"}})],1),e.userInfoForm.countersign&&e.userInfoForm.countersign>0?a("el-form-item",{attrs:{label:"会签投票",prop:"type"}},[a("el-radio-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[a("el-radio",{attrs:{label:"true"}},[e._v("通过票")]),a("el-radio",{attrs:{label:"false"}},[e._v("否决票")])],1)],1):a("el-form-item",{attrs:{label:"",prop:"type"}},[a("div",{staticClass:"pass-reject"},[a("el-radio-group",{on:{change:e.switchType},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},["SYS_DATA_ANALYSIS"!=e.activeData.procCode?a("el-radio",{attrs:{label:"pass"}},[e._v("通过")]):e._e(),a("el-radio",{attrs:{label:"reject"}},[e._v("驳回")]),a("el-radio",{attrs:{label:"entrust"}},[e._v("委办")]),"SYS_DATA_ANALYSIS"===e.activeData.procCode?a("el-radio",{attrs:{label:"select"}},[e._v("选择节点")]):e._e()],1)],1)]),a("el-form-item",{attrs:{label:"抄送人",prop:"selectedUserIds"}},[a("adq-user-list-component",{attrs:{multiple:!0},model:{value:e.ruleForm.selectedUserIds,callback:function(t){e.$set(e.ruleForm,"selectedUserIds",t)},expression:"ruleForm.selectedUserIds"}})],1),"pass"===e.ruleForm.type||"select"===e.ruleForm.type?a("el-form-item",{attrs:{label:"下一节点"}},[a("el-select",{staticClass:"opinion-line",attrs:{disabled:e.nextNodeIsDisabled,placeholder:"请选择",clearable:""},on:{change:e.switchNode},model:{value:e.ruleForm.backTaskSid,callback:function(t){e.$set(e.ruleForm,"backTaskSid",t)},expression:"ruleForm.backTaskSid"}},e._l(e.nodeData,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.nodeId}})})),1)],1):e._e(),"reject"===e.ruleForm.type?a("el-form-item",{attrs:{label:"下一节点",prop:"backTaskSid"}},["reject"===e.ruleForm.type?a("el-select",{staticClass:"opinion-line",attrs:{placeholder:"请选择",clearable:""},model:{value:e.ruleForm.backTaskSid,callback:function(t){e.$set(e.ruleForm,"backTaskSid",t)},expression:"ruleForm.backTaskSid"}},e._l(e.nodeData,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.key}})})),1):e._e()],1):e._e(),"pass"===e.ruleForm.type&&e.isshowSelect||"select"===e.ruleForm.type?a("el-form-item",{attrs:{label:"指定下一操作人",prop:"userIds"}},[a("adq-user-list-component",{attrs:{multiple:!0},model:{value:e.ruleForm.userIds,callback:function(t){e.$set(e.ruleForm,"userIds",t)},expression:"ruleForm.userIds"}})],1):e._e(),"entrust"===e.ruleForm.type?a("el-form-item",{attrs:{label:"委派用户",prop:"assigneeId"}},[a("adq-user-list-component",{attrs:{multiple:!1},model:{value:e.ruleForm.assigneeId,callback:function(t){e.$set(e.ruleForm,"assigneeId",t)},expression:"ruleForm.assigneeId"}})],1):e._e(),a("el-form-item",{attrs:{label:" "}},[a("div",{staticClass:"submit-line"},[a("el-button",{attrs:{type:"primary",loading:e.isSHowButtonLoading,disabled:2===e.activeData.suspended},on:{click:e.submit}},[e._v("提交")])],1)])],1)],1)]):e._e(),a("el-tab-pane",{attrs:{label:"审核历史",name:"3"}},["3"===e.activeName?a("process-info-component",{attrs:{id:"updateNode3",procInstId:e.activeData.procInstId,procDefId:e.activeData.procDefId}}):e._e()],1)],1),2!=e.activeName?a("template",{slot:"bottom"},[1==e.activeName?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$refs.formParser.submitForm()}}},[e._v("提交")]):e._e(),a("el-button",{attrs:{type:"primary"},on:{click:e.handleDown}},[e._v("导出流程信息")])],1):e._e(),a("div",{staticStyle:{position:"absolute",width:"100%",right:"99999px",top:"99999px"},attrs:{id:"copyFormNode"}})],2)}),[],!1,null,"4ed098f3",null);t.default=f.exports},"25e0":function(e,t,a){var r=a("91ce");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,a("499e").default)("31dbd3d3",r,!0,{sourceMap:!1,shadowMode:!1})},"5fe4":function(e,t,a){"use strict";a.r(t),a.d(t,"status",(function(){return r})),a.d(t,"reviewStatus",(function(){return o})),t.default={1:{tableName:"oa_leave_bill",type:"请假审核"},2:{tableName:"oa_finance",type:"财务审核"},3:{tableName:"sys_category",type:"流程启用审核"}};var r={0:"草稿",1:"处理中",2:"结束"},o=[{label:"待提交",value:0},{label:"处理中",value:1},{label:"通过",value:2},{label:"驳回",value:3},{label:"撤回",value:4},{label:"不通过",value:5},{label:"终止",value:6}]},"8d51":function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,"[data-v-4ed098f3] .el-tabs{height:100%!important}[data-v-4ed098f3] .el-tabs .el-tabs__content{height:100%;overflow:auto}[data-v-4ed098f3] .el-tabs .el-tab-pane{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%}[data-v-4ed098f3] .el-tabs .el-tab-pane .operation-item{height:100%;text-align:left!important}[data-v-4ed098f3] .el-tabs .el-tab-pane .operation-item .el-form-item__label{padding:0;font-weight:600}[data-v-4ed098f3] .el-tabs .el-tab-pane .submit-line{margin-top:25px}[data-v-4ed098f3] .el-tabs .el-tab-pane .submit-line .el-button{padding:8px 20px}[data-v-4ed098f3] .el-tabs .el-tab-pane .opinion-line{margin-bottom:10px}[data-v-4ed098f3] .el-tabs .el-tab-pane .pass-reject{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}[data-v-4ed098f3] .el-tabs .el-tab-pane .pass-reject .el-select{width:300px;margin-left:30px}[data-v-4ed098f3] .el-tabs .el-tab-pane .pass-reject .el-radio-group{position:relative;top:10px}.form-border[data-v-4ed098f3]{background-color:#f5f7fa;color:#c0c4cc;padding:5px 15px;border:1px solid #dcdfe6;border-radius:4px;word-break:break-all;line-height:25px}.air-item[data-v-4ed098f3]{width:100%;height:200px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;font-weight:700}[data-v-4ed098f3] #copyFormNode .el-textarea,[data-v-4ed098f3] #copyFormNode .tinymce-editor{border:1px solid #ccc;padding:10px}[data-v-4ed098f3] .download-title{text-align:center;font-size:18px;font-weight:700;padding:0 0 15px 0;margin-bottom:10px;border-bottom:1px solid #e0e0e0}",""])},"91ce":function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,"",""])},b4a1:function(e,t,a){var r=a("8d51");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,a("499e").default)("51856389",r,!0,{sourceMap:!1,shadowMode:!1})},d296:function(e,t,a){"use strict";a("b4a1")},e91a:function(e,t,a){"use strict";a.r(t),a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("28a5");var r=a("ade3"),o=a("365c"),s=a("2f62");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var n={name:"processInfoComponent",data:function(){return{tableData:[],imgUrl:null,form:{page:1,rows:10,procInstId:null}}},props:["procInstId","procDefId"],watch:{procInstId:{handler:function(e){},deep:!0}},created:function(){this.procInstId?(this.imgUrl=o.default["activiti.models.img"]+"?procInstId="+this.procInstId+"&t="+Date.now(),this.loadTableData()):this.imgUrl=o.default["activiti.models.img"]+"?procDefId="+this.procDefId+"&t="+Date.now()},methods:i(i({},Object(s.b)(["_AJAX"])),{},{loadTableData:function(){var e=this,t=this.form;t.procInstId=this.procInstId,this._AJAX({url:"activiti.task.historic",method:"GET",data:t}).then((function(t){e.tableData=t.result}))},markRed:function(e){if(!e)return"-";for(var t=e.split(","),a=0;a<t.length;a++){var r=t[a];if(/_\*$/.test(r)){var o=r.replace("_*","");t[a]='<span style="color:red;">'+o+"</span>"}}return t.join(",")},sizeChange:function(e){this.form.page=1,this.form.rows=e,this.loadTableData()},currentChange:function(e){this.form.page=e,this.loadTableData()}})},c=(a("fa51"),a("2877")),d=Object(c.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{"min-height":"250px","margin-bottom":"20px","max-width":"100%"},attrs:{src:e.imgUrl}})]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.rows,border:"","row-key":"id","tree-props":{children:"audits",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{type:"index",label:"序号",index:function(t){return e.$utils._indexMethod(t,e.form.page,e.form.rows)},width:"50"}}),a("el-table-column",{attrs:{prop:"name",label:"活动流程"}}),a("el-table-column",{attrs:{prop:"startTime",label:"接收时间"}}),a("el-table-column",{attrs:{prop:"endTime",label:"完成时间"}}),a("el-table-column",{attrs:{prop:"assignee","show-overflow-tooltip":"",label:"参与者"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{innerHTML:e._s(e.markRed(t.row.assignee))}})]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"comment",label:"环节意见"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"deleteReason",label:"审核"}})],1),a("adq-pagination",{attrs:{total:e.tableData.total,"page-size":e.form.rows,"current-page":e.form.page},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1)}),[],!1,null,"539e58b0",null);t.default=d.exports},fa51:function(e,t,a){"use strict";a("25e0")}}]);