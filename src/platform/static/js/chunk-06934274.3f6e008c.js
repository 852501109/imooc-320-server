(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-06934274","chunk-7a1ef581","chunk-2d237543"],{1617:function(e,t,a){"use strict";a("5632")},3030:function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".news-type-sys-edit[data-v-32dedd85] .news-type-sys-introduction{min-height:90px!important;height:auto!important}.news-type-sys-edit[data-v-32dedd85] .news-type-sys-introduction /deep/ .el-textarea__inner{min-height:90px!important}",""])},5044:function(e,t,a){"use strict";a.r(t),a("386d"),a("8e6e"),a("456d");var l=a("ade3"),r=(a("ac6a"),a("d574")),o=a("2f62"),i=a("aad9"),n=a("fb3d");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={data:function(){return{isSearch:!1,param:{page:1,rows:10},tableList:{rows:[],total:0},templateObj:{3:"系统"},templateList:[{label:"系统",value:3}],isDialog:!1,ruleForm:{},rules:{messageAbstract:{required:!0,message:"请输入摘要",trigger:"blur"},appName:{required:!0,message:"请输入应用名称",trigger:"change"},appKey:{required:!0,message:"请选择应用key",trigger:"change"},title:{required:!0,message:"请输入标题",trigger:"blur"},originalParam:{required:!0,message:"请输入测试数据",trigger:"blur"},receiveCode:{required:!0,message:"请选择用户",trigger:"change"},type:{required:!0,message:"请选择消息类型",trigger:"change"},receiveType:{required:!0,message:"请选择通知对象",trigger:"change"},level:{required:!0,message:"请选择级别",trigger:"change"}},userList:[],userTotal:0,userParams:{page:1,rows:200,name:null},defaultCheckedKeys:[],validateJsonClassObject:{pass:!1,fail:!1},validateJsonResult:"",msgTypeList:n.msgTypeList,levelList:n.levelList,sysList:[],appList:{}}},components:{adqTree:i.default},created:function(){var e=this;this.loadData(),this._AJAX({url:"webkit.appList",method:"GET",data:{page:1,rows:999999}}).then((function(t){0===t.code&&(e.sysList=t.rows,t.rows.forEach((function(t){e.appList[t.appKey]=t.appName})))}))},mixins:[r.default],methods:c(c({},Object(o.b)(["_AJAX"])),{},{loadData:function(){var e=this;this.parameterEchoMixin(),this.adqSearchListMixin={param:this.param},this._AJAX({url:"sys.message.template.list",method:"GET",data:this.param}).then((function(t){if(0==t.code){var a=t.result;e.tableList=a}}))},changeAppKey:function(e){this.$set(this.ruleForm,"appName",this.appList[e])},handleSizeChange:function(e){this.param.page=1,this.param.rows=e,this.loadData()},handleCurrentChange:function(e){this.param.page=e,this.loadData()},search:function(e){var t=this;this.param.page=1,0==e&&this.publics.resetFun(this.param,(function(){t.param.rows=10})),this.loadData()},pageType:function(e,t){this.$router.push({path:"/news/sysMessageTemplateListEdit",query:{optType:e,id:t?t.id:null}})},del:function(e){var t=this;this.$AudaqueToast.warn({template:"确认删除？",methods:{okEvent:function(){t._AJAX({url:"sys.message.template.del",method:"GET",data:{id:e.id}}).then((function(e){0==e.code&&t.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){t.loadData()}}})}))}}})},test:function(e){this.ruleForm=e,this.$set(this.ruleForm,"originalParam",e.templateTestJson),this.isDialog=!0},submitSendTest:function(){var e=this,t=this,a=Object.assign({},this.ruleForm),l=null;this.$refs.tree&&(l=this.$refs.tree.$refs.adqTree.getCheckedKeys(),a.receiveCode=l),a.receiveCode&&a.receiveCode.length>0&&(a.receiveCode=a.receiveCode.join(",")),this.$refs.ruleForm.validate((function(l){if(!l)return!1;e._AJAX({url:"sys.message.temp.add",method:"POST",data:a}).then((function(e){0==e.code&&t.$AudaqueToast.tip({template:"操作成功",methods:{okEvent:function(){t.isDialog=!1}}})}))}))}})},p=(a("dcec"),a("2877")),d=Object(p.a)(u,(function(){var e=this,t=e._self._c;return t("audaque-table-list-page",[t("template",{slot:"title"},[t("audaque-table-title",{attrs:{title:"模板管理"}},[t("i",{staticClass:"iconfont iconshaixuan audaque-rect-icon",on:{click:function(t){e.isSearch=!e.isSearch}}},[e._v("筛选 ")])])],1),t("template",{slot:"search"},[t("audaque-table-search",{directives:[{name:"show",rawName:"v-show",value:e.isSearch,expression:"isSearch"}],on:{close:function(t){e.isSearch=!1},search:function(t){return e.search(1)},reset:function(t){return e.search(0)}}},[t("audaque-table-search-item",{attrs:{title:"模板编码"}},[t("el-input",{staticClass:"autoSize f14",attrs:{clearable:""},model:{value:e.param.templateCode,callback:function(t){e.$set(e.param,"templateCode","string"==typeof t?t.trim():t)},expression:"param.templateCode"}})],1),t("audaque-table-search-item",{attrs:{title:"模板标题"}},[t("el-input",{staticClass:"autoSize f14",attrs:{clearable:""},model:{value:e.param.templateName,callback:function(t){e.$set(e.param,"templateName","string"==typeof t?t.trim():t)},expression:"param.templateName"}})],1),t("audaque-table-search-item",{attrs:{title:"模板用途"}},[t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.param.templateType,callback:function(t){e.$set(e.param,"templateType",t)},expression:"param.templateType"}},e._l(e.templateList,(function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),[t("el-table",{staticClass:"el-table-common__list",attrs:{"tooltip-effect":"light","highlight-current-row":"",stripe:"",data:e.tableList.rows,border:""}},[t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",label:"序号",index:function(t){return e.$utils._indexMethod(t,e.param.page,e.param.rows)},width:"50"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"templateCode",label:"模板编码"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"templateName",label:"模板标题"}}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"templateType",label:"模板用途"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.templateObj[t.row.templateType])+"\n                ")]}}])}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"createTime",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.publics.formatTime(t.row.createTime,"Y-M-D h:m:s")))]}}])}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"updateTime",label:"更新时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.publics.formatTime(t.row.updateTime,"Y-M-D h:m:s")))]}}])}),t("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[e.permitList.templateEdit?t("span",{staticClass:"iconfont iconFill",attrs:{title:"编辑"},on:{click:function(t){return e.pageType("edit",a.row)}}}):e._e(),e.permitList.templateId?t("span",{staticClass:"iconfont iconchakan11",attrs:{title:"查看详情"},on:{click:function(t){return e.pageType("view",a.row)}}}):e._e()]}}])}),t("template",{slot:"empty"},[t("audaque-table-empty",{attrs:{tableFetchStatus:e.$store.state.tableFetchStatus,"is-new":!1},on:{fetch:function(t){return e.loadData()}}})],1)],2),t("adq-pagination",{attrs:{"current-page":e.param.page,"page-size":e.param.rows,total:e.tableList.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],t("el-dialog",{attrs:{title:"发送测试",visible:e.isDialog,width:"400","close-on-click-modal":!1},on:{"update:visible":function(t){e.isDialog=t}}},[t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"90px"}},[t("el-form-item",{attrs:{label:"模板标题",prop:"templateName"}},[t("el-input",{attrs:{placeholder:"",disabled:""},model:{value:e.ruleForm.templateName,callback:function(t){e.$set(e.ruleForm,"templateName","string"==typeof t?t.trim():t)},expression:"ruleForm.templateName"}})],1),t("el-form-item",{attrs:{label:"模板内容",prop:"templateContent"}},[t("tinymce",{attrs:{disabled:""},model:{value:e.ruleForm.templateContent,callback:function(t){e.$set(e.ruleForm,"templateContent",t)},expression:"ruleForm.templateContent"}})],1),t("el-col",{attrs:{span:24}},[t("el-form-item",{attrs:{label:"测试数据",prop:"originalParam"}},[t("el-input",{staticClass:"news-type-sys-introduction",attrs:{type:"textarea",autosize:"",placeholder:"","show-word-limit":""},model:{value:e.ruleForm.originalParam,callback:function(t){e.$set(e.ruleForm,"originalParam","string"==typeof t?t.trim():t)},expression:"ruleForm.originalParam"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"摘要",prop:"messageAbstract"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.ruleForm.messageAbstract,callback:function(t){e.$set(e.ruleForm,"messageAbstract","string"==typeof t?t.trim():t)},expression:"ruleForm.messageAbstract"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"应用key",prop:"appKey"}},[t("el-select",{attrs:{clearable:""},on:{change:e.changeAppKey},model:{value:e.ruleForm.appKey,callback:function(t){e.$set(e.ruleForm,"appKey",t)},expression:"ruleForm.appKey"}},e._l(e.sysList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.appKey,value:e.appKey}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"应用名称",prop:"appName"}},[t("el-input",{attrs:{placeholder:"",readonly:""},model:{value:e.ruleForm.appName,callback:function(t){e.$set(e.ruleForm,"appName","string"==typeof t?t.trim():t)},expression:"ruleForm.appName"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"标题",prop:"title"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title","string"==typeof t?t.trim():t)},expression:"ruleForm.title"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"消息类型",prop:"type"}},[t("el-select",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.msgTypeList,(function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"紧急程度",prop:"level"}},[t("el-select",{model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}},e._l(e.levelList,(function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"通知对象",prop:"receiveType"}},[t("el-select",{model:{value:e.ruleForm.receiveType,callback:function(t){e.$set(e.ruleForm,"receiveType",t)},expression:"ruleForm.receiveType"}},[t("el-option",{attrs:{label:"指定用户",value:2}}),t("el-option",{attrs:{label:"指定部门",value:3}})],1)],1)],1),t("el-col",{attrs:{span:12}},[2===e.ruleForm.receiveType?t("el-form-item",{attrs:{label:"用户",prop:"receiveCode"}},[t("adq-user-list-component",{attrs:{multiple:!0},model:{value:e.ruleForm.receiveCode,callback:function(t){e.$set(e.ruleForm,"receiveCode",t)},expression:"ruleForm.receiveCode"}})],1):e._e()],1),t("el-col",{attrs:{span:12}},[3===e.ruleForm.receiveType?t("el-form-item",{attrs:{label:"部门",prop:"departmentIds"}},[t("adq-tree",{ref:"tree",attrs:{defaultCheckedKeys:e.defaultCheckedKeys,"check-strictly":!0}})],1):e._e()],1),t("el-col",{attrs:{span:12}}),t("el-col",{attrs:{span:12}})],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.isDialog=!e.isDialog}}},[e._v("取消")]),t("el-button",{attrs:{loading:e.isSHowButtonLoading},on:{click:e.submitSendTest}},[e._v("提交")])],1)],1)],2)}),[],!1,null,"32dedd85",null);t.default=d.exports},5632:function(e,t,a){var l=a("b219");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,a("499e").default)("1b5e0773",l,!0,{sourceMap:!1,shadowMode:!1})},aad9:function(e,t,a){"use strict";a.r(t),a("8e6e"),a("456d"),a("7f7f"),a("ac6a");var l=a("ade3"),r=a("2f62");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var n={name:"adqTree",data:function(){return{filterText:"",isAllCheck:null,allIds:[],treeData:[],loading:!1,isSearch:!1}},watch:{treeData:{handler:function(e){},deep:!0},filterText:function(e){0===e.length&&(this.isSearch=!1,this.$refs.adqTree.filter(e))}},props:{defaultCheckedKeys:{type:Array,default:function(){return[]}},defaultExpandedKeys:{type:Array,default:function(){return[]}},checkStrictly:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!0},isCheckBtn:{type:Boolean,default:!0},expandOnClickNode:{type:Boolean,default:!0},nodeKey:{type:String,default:"id"},defaultProps:{type:Object,default:function(){return{label:"name",children:"children",isLeaf:"isEnd"}}}},mounted:function(){this.loadInit()},methods:i(i({},Object(r.b)(["_AJAX"])),{},{loadInit:function(){var e=this;this.loading=!0,this._AJAX({url:"org.findRootDept",method:"GET",data:{}}).then((function(t){0===t.code&&e._AJAX({url:"org.findRootDeptTree",method:"GET",data:{deptId:t.result.id}}).then((function(t){e.treeData=[t.result],e.loading=!1,e.defaultExpandedKeys.push(t.result.id),e.allIds=[],e.loadIds([t.result])}))}))},loadIds:function(e){var t=this;e.forEach((function(e){t.allIds.push(e.id),e.children&&e.children.length>0&&t.loadIds(e.children)}))},treeIsAllCheck:function(e){e?this.$refs.adqTree.setCheckedKeys(this.allIds):this.$refs.adqTree.setCheckedKeys([])},clickInquireTreeData:function(){var e=this;this.isSearch=!0,this.loading=!0,setTimeout((function(){e.$refs.adqTree.filter(e.filterText),e.$nextTick().then((function(){setTimeout((function(){e.loading=!1}),500)}))}),50)},parentSearch:function(e){this.filterText=e,this.clickInquireTreeData()},filterNode:function(e,t,a){return!e||-1!==t.name.indexOf(e)},filterNodeMethod:function(e){var t=this;!function a(l){l.map((function(l){var r=l[t.defaultProps.children];l.visible=t.filterNode(e,l),r&&r.length>0&&a(r)}))}(this.treeData)},handleNodeClick:function(e,t){this.$emit("node-click",e,t),this.showChildrenNode(e,t)},showChildrenNode:function(e,t){1!=t.level&&!t.isLeaf&&this.isSearch&&(t.expanded=!0,t.childNodes.forEach((function(e){e.visible=!0})))},handleCheckChange:function(e,t){this.$emit("check-change",e,t)},handleRenderContent:function(e,t){var a=t.node,l=t.data,r=(t.store,"iconfont icondrxx95 group");return l.isPosition?r=l.leader?"iconfont iconlingdao leader":"iconfont iconyuangong people":1===a.level&&(r="iconfont icondrxx95 root"),e("span",{class:r,style:""},[" ",l.name])}})},s=(a("1617"),a("2877")),c=Object(s.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"adq-tree"},[t("el-input",{staticClass:"filter-tree-input",attrs:{placeholder:"输入关键字进行过滤",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.clickInquireTreeData.apply(null,arguments)}},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}},[t("el-button",{staticClass:"query-btn",attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.clickInquireTreeData},slot:"append"},[e._v("搜索")])],1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"adq-tree-item",attrs:{"element-loading-spinner":"el-icon-loading"}},[e.showCheckbox&&e.isCheckBtn?t("el-radio-group",{staticStyle:{"margin-left":"20px"},model:{value:e.isAllCheck,callback:function(t){e.isAllCheck=t},expression:"isAllCheck"}},[t("el-radio-button",{attrs:{label:!0},nativeOn:{click:function(t){return e.treeIsAllCheck(!0)}}},[e._v("全选")]),t("el-radio-button",{attrs:{label:!1},nativeOn:{click:function(t){return e.treeIsAllCheck(!1)}}},[e._v("全不选")])],1):e._e(),t("el-tree",{ref:"adqTree",staticClass:"tree-dashed",attrs:{props:e.defaultProps,"show-checkbox":e.showCheckbox,"expand-on-click-node":e.expandOnClickNode,"node-key":e.nodeKey,"default-checked-keys":e.defaultCheckedKeys,"default-expanded-keys":e.defaultExpandedKeys,"check-strictly":e.checkStrictly,"render-content":e.handleRenderContent,"filter-node-method":e.filterNode,indent:20,data:e.treeData},on:{"node-click":e.handleNodeClick,"check-change":e.handleCheckChange}})],1)],1)}),[],!1,null,"3c72946d",null);t.default=c.exports},b219:function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".adq-tree[data-v-3c72946d]{border:1px solid #dcdfe6;width:100%;z-index:99999;max-height:300px;overflow:auto}.adq-tree .filter-tree-input .query-btn[data-v-3c72946d]{background:#409eff;color:#fff}.adq-tree .adq-tree-item[data-v-3c72946d]{height:260px}.adq-tree .adq-tree-item[data-v-3c72946d] .el-loading-spinner i{font-size:30px}",""])},dcec:function(e,t,a){"use strict";a("e7b3")},e7b3:function(e,t,a){var l=a("3030");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,a("499e").default)("59e7fcc7",l,!0,{sourceMap:!1,shadowMode:!1})},fb3d:function(e,t,a){"use strict";a.r(t),a.d(t,"msgTypeList",(function(){return l})),a.d(t,"msgNoticeTypeList",(function(){return r})),a.d(t,"levelList",(function(){return o})),a.d(t,"sendStatusList",(function(){return i})),a.d(t,"publishStatusList",(function(){return n})),a.d(t,"handleStatusList",(function(){return s})),a.d(t,"channelList",(function(){return c}));var l=[{label:"其他",value:0},{label:"公告",value:1},{label:"消息",value:2},{label:"任务",value:3},{label:"告警",value:4}],r=[{label:"标签",value:0},{label:"全部用户",value:1},{label:"用户",value:2},{label:"部门",value:3}],o=[{label:"默认",value:0},{label:"低",value:1},{label:"中",value:2},{label:"高",value:3}],i=[{label:"初始化",value:0},{label:"已发送",value:1},{label:"推送失败",value:3},{label:"失败不再发送",value:-1}],n=[{label:"未发布",value:0},{label:"已发布",value:1},{label:"已撤销",value:2}],s=[{label:"-",value:null},{label:"部分办理",value:3},{label:"撤销",value:2},{label:"办理",value:1},{label:"未办",value:0}],c=[{label:"系统",value:"1"},{label:"邮件",value:"2"},{label:"短信",value:"3"}]}}]);