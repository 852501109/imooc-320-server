(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c1d9f0fa"],{"42ec":function(e,t,i){"use strict";i.r(t),i("8e6e"),i("456d"),i("c5f6"),i("6762"),i("2fdb"),i("ac6a"),i("7f7f");var r=i("ade3"),n=i("2f62");function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){Object(r.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var c={props:{isShowDepartModal:{type:Boolean,default:!1},selectedValue:{type:Array,default:function(){return[]}}},data:function(){return{ruleTypeOptionsGroup:[],endList:[],allNodes:[],isSelect:!1,searchDepartName:"",treeLoading:!1,defaultProps:{children:"children",label:"name"},isSearch:!1,getHeight:!1,total:1,param:{page:1,rows:10,deptId:""},search_dataRange:""}},computed:o(o({},Object(n.d)("unReportAuthorization",["userList"])),Object(n.d)("apiServiceAccredit",["apiServiceAccreditDetail"])),mounted:function(){this.init()},methods:o(o(o({},Object(n.b)("unReportAuthorization",["GETTREELIST","GETUSERLIST"])),Object(n.b)(["_AJAX"])),{},{cancelBtn:function(){this.$emit("cancel")},handleRowClick:function(e,t){t.checked=!t.checked},handleDisable:function(e){return this.apiServiceAccreditDetail.createUser!=e.id},init:function(){this.$nextTick((function(){var e=document.querySelector(".custom-container");e&&(e.style.height=e.clientHeight+"px")}))},subButton:function(){var e=this.$refs.tree.getCheckedNodes().map((function(e){return{id:e.id,name:e.name}}));this.$emit("submit",e)},deepFlat:function(e,t){var i=this;if(Array.isArray(e))e.forEach((function(e){var t=e.id==i.apiServiceAccreditDetail.deptId;e.disabled=t,i.deepFlat(e,t)}));else if(e.children&&e.children.length>0){var r=e.id==this.apiServiceAccreditDetail.deptId||t;e.disabled=r,e.children.forEach((function(e){i.deepFlat(e,r)}))}else{var n=e.id==this.apiServiceAccreditDetail.deptId||t;e.disabled=n}},traverseNode:function(e){var t=this;Array.isArray(e)?e.forEach((function(e){t.traverseNode(e)})):(this.allNodes.push(e),e.children&&e.children.length>0&&e.children.forEach((function(e){t.traverseNode(e)})))},updateSameList:function(){var e=this;setTimeout((function(){e.allNodes=[],e.traverseNode(e.ruleTypeOptionsGroup);var t=e.allNodes.filter((function(t){return e.endList.map((function(e){return Number(e.id)})).includes(Number(t.id))}));e.$refs.tree.setCheckedKeys([]),e.$refs.tree.setCheckedKeys(t.map((function(e){return e.id})).concat([e.apiServiceAccreditDetail.deptId])),e.isSelect=!1}))},onSearch:function(){var e=this;this.treeLoading=!0,this.isSelect=!0,this.GETTREELIST({deptName:this.searchDepartName}).then((function(t){e.ruleTypeOptionsGroup=t||[],e.treeLoading=!1,e.$nextTick((function(){e.updateSameList()}))}))},handleNodeChange:function(){var e=this;this.isSelect||(this.allNodes=[],this.traverseNode(this.ruleTypeOptionsGroup),this.$nextTick((function(){var t=e.$refs.tree.getCheckedNodes(),i=e.allNodes.filter((function(t){return e.endList.map((function(e){return Number(e.id)})).includes(Number(t.id))})).filter((function(e){return!t.map((function(e){return Number(e.id)})).includes(Number(e.id))}));e.endList=e.endList.filter((function(e){return!i.map((function(e){return Number(e.id)})).includes(Number(e.id))})),t.forEach((function(t){e.endList.map((function(e){return Number(e.id)})).includes(Number(t.id))||e.endList.push(t)}))})))},QUERYLIST_PARAMS:function(e){var t=this;this.param.page=1,e>0&&this.publics.resetFun(this.param,(function(){t.param.rows=10}))}}),created:function(){var e=this;this.endList=this.selectedValue||[],this.treeLoading=!0,this.GETTREELIST({deptName:""}).then((function(t){e.ruleTypeOptionsGroup=t||[],e.treeLoading=!1;var i=[];e.selectedValue.forEach((function(e){i.push(e.deptId)})),e.$nextTick((function(){e.$refs.tree.setCheckedKeys(i),e.isSelect=!1}))}))}},s=(i("f59a"),i("2877")),d=Object(s.a)(c,(function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:"授权部门",visible:e.isShowDepartModal,width:"50%","append-to-body":""},on:{"update:visible":function(t){e.isShowDepartModal=t},close:e.cancelBtn}},[t("div",{staticClass:"custom-container",staticStyle:{"min-height":"60vh"}},[e.ruleTypeOptionsGroup.length>0?t("el-tree",{ref:"tree",attrs:{data:e.ruleTypeOptionsGroup,"current-node-key":e.param.ruleType,"show-checkbox":"","node-key":"id","default-expand-all":!0,props:e.defaultProps},on:{check:e.handleNodeChange,"node-click":e.handleRowClick}}):t("div",{staticClass:"empty"},[e._v("暂无数据")])],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("div",[t("el-button",{on:{click:e.cancelBtn}},[e._v("取消")])],1),t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.subButton}},[e._v("确认")])],1)])])}),[],!1,null,"7ebf0608",null);t.default=d.exports},"974a":function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,".row[data-v-7ebf0608]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.row>div[data-v-7ebf0608]{width:48%}.row[data-v-7ebf0608] .el-date-editor.el-input,.row[data-v-7ebf0608] .el-date-editor.el-input__inner{width:100%!important}.dialog-footer[data-v-7ebf0608]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.dialog-footer>div[data-v-7ebf0608]:first-child{margin-right:10px}.flex[data-v-7ebf0608]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.flex>div[data-v-7ebf0608]{margin-bottom:5px}.search-date[data-v-7ebf0608]{width:100%!important}.search[data-v-7ebf0608]{padding:0 10px}.el-icon-thumb[data-v-7ebf0608],.el-icon-view[data-v-7ebf0608]{font-size:16px;cursor:pointer;color:#409eff}.empty[data-v-7ebf0608]{color:#333;width:100%;text-align:center;font-size:14px;padding:20px 0}[data-v-7ebf0608] .el-dialog__body{max-height:100%!important}[data-v-7ebf0608] .pane-comp,[data-v-7ebf0608] .tree-dashed{overflow:auto}",""])},ce11:function(e,t,i){var r=i("974a");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,i("499e").default)("8fed0696",r,!0,{sourceMap:!1,shadowMode:!1})},f59a:function(e,t,i){"use strict";i("ce11")}}]);