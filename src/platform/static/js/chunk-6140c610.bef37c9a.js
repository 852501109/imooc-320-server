(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6140c610","chunk-7a1ef581"],{1617:function(e,t,i){"use strict";i("5632")},"1d4a":function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,"[data-v-1f182058] .el-dialog__wrapper>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[data-v-1f182058] .el-dialog__wrapper .el-dialog__headerbtn{display:none}[data-v-1f182058] .el-dialog__wrapper .el-dialog__footer{padding:8px 20px}.view-img-item[data-v-1f182058]{width:148px;height:148px;cursor:pointer}.uploader-border[data-v-1f182058]{display:inline-block;font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center;border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer}[data-v-1f182058] .manual-file{width:100%}[data-v-1f182058] .manual-file /deep/ .el-upload-list__item-name{line-height:40px}[data-v-1f182058] .manual-file .prompt{width:20px;height:20px;margin-left:20px}.upload-img[data-v-1f182058]{font-size:28px;color:#8c939d;width:148px;height:148px;text-align:center;display:inline}.upload-img .el-upload[data-v-1f182058]{position:relative;border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;overflow:hidden}.upload-img .el-upload[data-v-1f182058]:hover{border-color:#409eff}.upload-img .avatar[data-v-1f182058]{width:148px;height:148px}.el-form-item[data-v-1f182058]{margin-bottom:22px}",""])},5406:function(e,t,i){var l=i("1d4a");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,i("499e").default)("7210d11e",l,!0,{sourceMap:!1,shadowMode:!1})},5632:function(e,t,i){var l=i("b219");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals),(0,i("499e").default)("1b5e0773",l,!0,{sourceMap:!1,shadowMode:!1})},"7abee":function(e,t,i){"use strict";i("5406")},aad9:function(e,t,i){"use strict";i.r(t),i("8e6e"),i("456d"),i("7f7f"),i("ac6a");var l=i("ade3"),a=i("2f62");function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){Object(l.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var o={name:"adqTree",data:function(){return{filterText:"",isAllCheck:null,allIds:[],treeData:[],loading:!1,isSearch:!1}},watch:{treeData:{handler:function(e){},deep:!0},filterText:function(e){0===e.length&&(this.isSearch=!1,this.$refs.adqTree.filter(e))}},props:{defaultCheckedKeys:{type:Array,default:function(){return[]}},defaultExpandedKeys:{type:Array,default:function(){return[]}},checkStrictly:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!0},isCheckBtn:{type:Boolean,default:!0},expandOnClickNode:{type:Boolean,default:!0},nodeKey:{type:String,default:"id"},defaultProps:{type:Object,default:function(){return{label:"name",children:"children",isLeaf:"isEnd"}}}},mounted:function(){this.loadInit()},methods:r(r({},Object(a.b)(["_AJAX"])),{},{loadInit:function(){var e=this;this.loading=!0,this._AJAX({url:"org.findRootDept",method:"GET",data:{}}).then((function(t){0===t.code&&e._AJAX({url:"org.findRootDeptTree",method:"GET",data:{deptId:t.result.id}}).then((function(t){e.treeData=[t.result],e.loading=!1,e.defaultExpandedKeys.push(t.result.id),e.allIds=[],e.loadIds([t.result])}))}))},loadIds:function(e){var t=this;e.forEach((function(e){t.allIds.push(e.id),e.children&&e.children.length>0&&t.loadIds(e.children)}))},treeIsAllCheck:function(e){e?this.$refs.adqTree.setCheckedKeys(this.allIds):this.$refs.adqTree.setCheckedKeys([])},clickInquireTreeData:function(){var e=this;this.isSearch=!0,this.loading=!0,setTimeout((function(){e.$refs.adqTree.filter(e.filterText),e.$nextTick().then((function(){setTimeout((function(){e.loading=!1}),500)}))}),50)},parentSearch:function(e){this.filterText=e,this.clickInquireTreeData()},filterNode:function(e,t,i){return!e||-1!==t.name.indexOf(e)},filterNodeMethod:function(e){var t=this;!function i(l){l.map((function(l){var a=l[t.defaultProps.children];l.visible=t.filterNode(e,l),a&&a.length>0&&i(a)}))}(this.treeData)},handleNodeClick:function(e,t){this.$emit("node-click",e,t),this.showChildrenNode(e,t)},showChildrenNode:function(e,t){1!=t.level&&!t.isLeaf&&this.isSearch&&(t.expanded=!0,t.childNodes.forEach((function(e){e.visible=!0})))},handleCheckChange:function(e,t){this.$emit("check-change",e,t)},handleRenderContent:function(e,t){var i=t.node,l=t.data,a=(t.store,"iconfont icondrxx95 group");return l.isPosition?a=l.leader?"iconfont iconlingdao leader":"iconfont iconyuangong people":1===i.level&&(a="iconfont icondrxx95 root"),e("span",{class:a,style:""},[" ",l.name])}})},s=(i("1617"),i("2877")),c=Object(s.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"adq-tree"},[t("el-input",{staticClass:"filter-tree-input",attrs:{placeholder:"输入关键字进行过滤",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.clickInquireTreeData.apply(null,arguments)}},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}},[t("el-button",{staticClass:"query-btn",attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.clickInquireTreeData},slot:"append"},[e._v("搜索")])],1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"adq-tree-item",attrs:{"element-loading-spinner":"el-icon-loading"}},[e.showCheckbox&&e.isCheckBtn?t("el-radio-group",{staticStyle:{"margin-left":"20px"},model:{value:e.isAllCheck,callback:function(t){e.isAllCheck=t},expression:"isAllCheck"}},[t("el-radio-button",{attrs:{label:!0},nativeOn:{click:function(t){return e.treeIsAllCheck(!0)}}},[e._v("全选")]),t("el-radio-button",{attrs:{label:!1},nativeOn:{click:function(t){return e.treeIsAllCheck(!1)}}},[e._v("全不选")])],1):e._e(),t("el-tree",{ref:"adqTree",staticClass:"tree-dashed",attrs:{props:e.defaultProps,"show-checkbox":e.showCheckbox,"expand-on-click-node":e.expandOnClickNode,"node-key":e.nodeKey,"default-checked-keys":e.defaultCheckedKeys,"default-expanded-keys":e.defaultExpandedKeys,"check-strictly":e.checkStrictly,"render-content":e.handleRenderContent,"filter-node-method":e.filterNode,indent:20,data:e.treeData},on:{"node-click":e.handleNodeClick,"check-change":e.handleCheckChange}})],1)],1)}),[],!1,null,"3c72946d",null);t.default=c.exports},b219:function(e,t,i){(e.exports=i("2350")(!1)).push([e.i,".adq-tree[data-v-3c72946d]{border:1px solid #dcdfe6;width:100%;z-index:99999;max-height:300px;overflow:auto}.adq-tree .filter-tree-input .query-btn[data-v-3c72946d]{background:#409eff;color:#fff}.adq-tree .adq-tree-item[data-v-3c72946d]{height:260px}.adq-tree .adq-tree-item[data-v-3c72946d] .el-loading-spinner i{font-size:30px}",""])},f0f8:function(e,t,i){"use strict";i.r(t),i("6762"),i("2fdb"),i("8e6e"),i("ac6a"),i("456d"),i("28a5"),i("7f7f");var l=i("ade3"),a=i("2f62"),n=i("0042"),r=i("aad9");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}var s={name:"uploadComponents",data:function(){return{imgDialogVisible:!1,token:null,isShowDel:!1,ruleForm:{isPublic:[0],deptIds:[],userIds:[],owner:""},rules:{}}},props:{data:{type:Object,default:function(){return{isPublic:[0],deptIds:[],userIds:[],owner:""}}},type:{type:String,default:"file"},disabled:{type:Boolean,default:!1},fileList:{type:Array,default:function(){return[]}},action:{type:String,default:""},uploadFileType:{type:Array,default:function(){return[]}},config:{type:Object,default:function(){return{width:100,height:100,size:100,limit:1}}}},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){Object(l.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},Object(a.d)("webkit",["userInfo"])),components:{adqTree:r.default},watch:{fileList:function(e){this.imgDialogVisible&&"img"===this.type&&(e.length>=this.config.limit?document.querySelector(".upload-img > .el-upload--picture-card").style.display="none":(document.querySelector(".upload-img > .el-upload--picture-card").style.display="",this.leave()))},data:function(e){this.initData(e)}},created:function(){this.token=sessionStorage.getItem("token"),this.initData(this.data)},mounted:function(){},methods:{submit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;var i=Object(n.deepClone)(e.ruleForm);if(e.$refs.tree){var l=e.$refs.tree.$refs.adqTree.getCheckedKeys();i.deptIds=l,i.owner=e.userInfo.myUser.id}e.$emit("submit",i),e.imgDialogVisible=!1}))},initData:function(e){this.ruleForm=e?Object(n.deepClone)(e):{isPublic:[0],deptIds:[],userIds:[],owner:""}},changeCheck:function(e){e.includes(0)&&(this.ruleForm.userIds=[],this.ruleForm.deptIds=[],this.ruleForm.isPublic=[0]),e.includes(1)||(this.ruleForm.userIds=[]),e.includes(2)||(this.ruleForm.deptIds=[])},isOpenImgDialog:function(){this.disabled||(this.imgDialogVisible=!0)},openDialog:function(){var e=this;this.imgDialogVisible&&"img"===this.type&&this.$nextTick((function(){e.fileList.length>=e.config.limit?document.querySelector(".upload-img > .el-upload--picture-card").style.display="none":(document.querySelector(".upload-img > .el-upload--picture-card").style.display="",e.leave())}))},handleClose:function(){},handleAvatarImgSuccess:function(e,t,i){var l=this;e.success?(this.$message({message:"上传成功",type:"success"}),this.$emit("uploadSuccess",{res:e,file:t,fileList:i})):this.$AudaqueToast.error({template:e.msg,methods:{okEvent:function(){l.handleImgRemove()}}})},handleImgError:function(e,t,i){this.$message({message:e.msg,type:"error"})},beforeAvatarImgUpload:function(e){var t=this.uploadFileType,i=!0;if(e.name.length>40)return this.$message({message:"上传图片的文件名不能超过40个字符",type:"error"}),!1;if(e.size/1024>this.config.size){var l=this.config.size>1024?"M":"k";return this.$message({message:"上传图片大小必须小于"+this.config.size+l,type:"error"}),!1}var a=e.name.split(".")[1].toLowerCase();return t.includes(a)||(this.$message({message:"上传格式必须是."+t.join(","),type:"error"}),i=!1),i},handleImgRemove:function(e,t){this.$emit("closeFileList",t)},getImg:function(e){var t=this,i=e.target,l=i.naturalWidth,a=i.naturalHeight;if(l>this.config.width||a>this.config.height)return this.$message({message:"该图片尺寸超出小图标显示大小,请控制在"+this.config.width+"*"+this.config.height+"像素以内",type:"warning"}),setTimeout((function(){t.$emit("closeFileList")}),500)},enter:function(){this.fileList.length>=this.config.limit&&(this.isShowDel=!0,document.querySelector(".upload-img .el-upload__input").disabled=!0)},leave:function(){document.querySelector(".upload-img .el-upload__input").disabled=!1,this.isShowDel=!1},removeImg:function(){var e=this;this.$emit("closeFileList"),setTimeout((function(){e.leave()}),200)},handleFileClick:function(e){-1!=e.target.className.indexOf("el-upload__input")&&this.fileList.length>=this.config.limit?(document.querySelector(".manual-file .el-upload__input").disabled=!0,this.$AudaqueToast.warn({template:"只能上传".concat(this.config.limit,"个文件,如需修改请删除后重新上传"),methods:{okEvent:function(){}}})):document.querySelector(".manual-file .el-upload__input").disabled=!1},handleFileRemove:function(e,t){this.$emit("closeFileList",t)},handleSuccess:function(e,t,i){0===e.code?(this.$message({message:"上传成功",type:"success"}),this.$emit("uploadSuccess",{res:e,file:t,fileList:i})):this.$message({message:e.msg,type:"error"})},handleError:function(e){var t=e.code?e:JSON.parse(e.message);this.$message({message:t.msg,type:"error"})},handlePreview:function(e){if(e.key){var t="/file/pub/down/".concat(e.key,".do");this.publics.exportFile(this,t,{})}},handleBeforeUpload:function(e){var t=this.uploadFileType,i=!0;if(e.name.length>40)return this.$message({message:"上传的文件名不能超过40个字符",type:"error"}),!1;var l=e.name.split("."),a=l[l.length-1].toLowerCase();return t.includes(a)||(this.$message({message:"上传格式必须是."+t.join("、")+" 格式",type:"error"}),i=!1),i}}},c=(i("7abee"),i("2877")),d=Object(c.a)(s,(function(){var e=this,t=e._self._c;return t("div",["img"===e.type?[e.fileList&&e.fileList.length>0?e._l(e.fileList,(function(i,l){return t("img",{key:l,staticClass:"view-img-item",attrs:{src:i.url},on:{click:e.isOpenImgDialog}})})):t("i",{staticClass:"el-icon-plus uploader-border",on:{click:function(t){e.imgDialogVisible=!0}}})]:[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.isOpenImgDialog}},[e._v("点击上传")])],t("el-dialog",{attrs:{title:"上传",visible:e.imgDialogVisible,width:"800px","before-close":e.handleClose},on:{"update:visible":function(t){e.imgDialogVisible=t},open:e.openDialog}},[t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"文件"}},["img"===e.type?[t("el-upload",{class:["avatar-uploader","upload-img",e.isShowDel?"isHover":""],attrs:{headers:e.publics.ajaxHeaders(),action:e.action,accept:"image/*","show-file-list":!0,disabled:e.disabled,"list-type":"picture-card","file-list":e.fileList,"on-remove":e.handleImgRemove,"on-error":e.handleImgError,"on-success":e.handleAvatarImgSuccess,"before-upload":e.beforeAvatarImgUpload},nativeOn:{mouseenter:function(t){return e.enter.apply(null,arguments)},mouseleave:function(t){return e.leave.apply(null,arguments)}}},[t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])]:"file"===e.type?[t("el-upload",{staticClass:"manual-file",attrs:{action:e.action,"on-remove":e.handleFileRemove,"on-success":e.handleSuccess,"on-error":e.handleError,"on-preview":e.handlePreview,"before-upload":e.handleBeforeUpload,limit:e.config.limit,headers:e.publics.ajaxHeaders(),"file-list":e.fileList},nativeOn:{click:function(t){return e.handleFileClick.apply(null,arguments)}}},[e.disabled?e._e():[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"只能上传   "+this.uploadFileType.join(",")+"格式的文件",placement:"right"}},[t("span",{staticClass:"el-icon-question prompt"})])]],2)]:e._e()],2),t("el-form-item",{attrs:{label:"可见范围",prop:"isPublic"}},[t("el-checkbox-group",{on:{change:e.changeCheck},model:{value:e.ruleForm.isPublic,callback:function(t){e.$set(e.ruleForm,"isPublic",t)},expression:"ruleForm.isPublic"}},[t("el-checkbox",{attrs:{label:0}},[e._v("公开")]),e.ruleForm.isPublic.includes(0)?e._e():t("el-checkbox",{attrs:{label:1}},[e._v("用户")]),e.ruleForm.isPublic.includes(0)?e._e():t("el-checkbox",{attrs:{label:2}},[e._v("部门")])],1)],1),e.ruleForm.isPublic.includes(1)?t("el-form-item",{attrs:{label:"用户",prop:"userIds"}},[t("adq-user-list-component",{attrs:{multiple:!0},model:{value:e.ruleForm.userIds,callback:function(t){e.$set(e.ruleForm,"userIds",t)},expression:"ruleForm.userIds"}})],1):e._e(),e.ruleForm.isPublic.includes(2)?t("el-form-item",{attrs:{label:"部门",prop:"deptIds"}},[t("adq-tree",{ref:"tree",attrs:{defaultCheckedKeys:e.ruleForm.deptIds,"check-strictly":!0}})],1):e._e()],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.imgDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),t("div",{ref:"downDiv",staticStyle:{display:"none"}})],2)}),[],!1,null,"1f182058",null);t.default=d.exports}}]);