(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5bc85fe8","chunk-2d237543"],{"34f8":function(e,t,l){"use strict";l("b344")},b344:function(e,t,l){var r=l("ec305");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,l("499e").default)("43323d54",r,!0,{sourceMap:!1,shadowMode:!1})},c63c:function(e,t,l){"use strict";l.r(t),l("8e6e"),l("ac6a"),l("456d");var r=l("ade3"),a=l("2f62"),s=l("fb3d");function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){Object(r.a)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var u={data:function(){return{msgTypeList:s.msgTypeList,msgNoticeTypeList:s.msgNoticeTypeList,levelList:s.levelList,sendStatusList:s.sendStatusList,handleStatusList:s.handleStatusList,formTitle:"edit"===this.$route.query.optType?"编辑我的消息":"view"===this.$route.query.optType?"查看我的消息":"新增我的消息",preview:"",ruleForm:{codeType:"",name:"",remark:""},rules:{},isView:!1,id:this.$route.query.id,handlerStatus:this.$route.query.type}},created:function(){this.$route.query.id&&this.loadData(),"view"===this.$route.query.optType&&(this.isView=!0)},methods:n(n({},Object(a.b)(["_AJAX"])),{},{loadData:function(){var e=this;this._AJAX({url:"sys.message.id",method:"GET",data:{id:this.$route.query.id,needSendList:2}}).then((function(t){0==t.code&&(e.ruleForm=t.result)}))},translation:function(e,t){if(null==t)return"-";for(var l=0;l<e.length;l++)if(e[l].value===t)return e[l].label}})},i=(l("34f8"),l("2877")),p=Object(i.a)(u,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("audaque-detail-form-page",{staticClass:"news-type-sys-edit",attrs:{title:e.formTitle,"opt-type":e.$route.query.optType}},[l("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px",disabled:e.isView}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"应用key",prop:"appKey"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.ruleForm.appKey,callback:function(t){e.$set(e.ruleForm,"appKey",t)},expression:"ruleForm.appKey"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"应用名称",prop:"appName"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.ruleForm.appName,callback:function(t){e.$set(e.ruleForm,"appName",t)},expression:"ruleForm.appName"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"标题",prop:"title"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"摘要",prop:"messageAbstract"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.ruleForm.messageAbstract,callback:function(t){e.$set(e.ruleForm,"messageAbstract",t)},expression:"ruleForm.messageAbstract"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"消息类型",prop:"type"}},[l("el-select",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.msgTypeList,(function(e){return l("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1)],1),3===e.ruleForm.type?l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"办理状态",prop:"handlerStatus"}},[l("el-select",{model:{value:e.ruleForm.handlerStatus,callback:function(t){e.$set(e.ruleForm,"handlerStatus",t)},expression:"ruleForm.handlerStatus"}},e._l(e.handleStatusList,(function(e){return l("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1)],1):e._e(),l("el-col",{attrs:{span:12}},[3==e.handlerStatus?l("el-form-item",{attrs:{label:"办理人",prop:"handlerUsername"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.ruleForm.handlerUsername,callback:function(t){e.$set(e.ruleForm,"handlerUsername",t)},expression:"ruleForm.handlerUsername"}})],1):e._e()],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"通知对象",prop:"receiveType"}},[l("el-select",{model:{value:e.ruleForm.receiveType,callback:function(t){e.$set(e.ruleForm,"receiveType",t)},expression:"ruleForm.receiveType"}},e._l(e.msgNoticeTypeList,(function(e){return l("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"紧急程度",prop:"level"}},[l("el-select",{model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}},e._l(e.levelList,(function(e){return l("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1)],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"内容",prop:"content"}},[l("div",{staticClass:"content-item",domProps:{innerHTML:e._s(e.ruleForm.content)}})])],1),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"原始内容",prop:"originalParam"}},[l("div",{staticClass:"content-item",domProps:{innerHTML:e._s(e.ruleForm.originalParam)}})])],1),l("div",{staticClass:"clear"})],1)],1)}),[],!1,null,"39b8cbb8",null);t.default=p.exports},ec305:function(e,t,l){(e.exports=l("2350")(!1)).push([e.i,".news-type-sys-edit[data-v-39b8cbb8] .news-type-sys-introduction{min-height:90px!important;height:auto!important}.news-type-sys-edit[data-v-39b8cbb8] .news-type-sys-introduction /deep/ .el-textarea__inner{min-height:90px!important}.news-type-sys-edit .content-item[data-v-39b8cbb8]{background-color:#f5f7fa;border-color:#e4e7ed;padding:15px;word-wrap:break-word;word-break:normal}",""])},fb3d:function(e,t,l){"use strict";l.r(t),l.d(t,"msgTypeList",(function(){return r})),l.d(t,"msgNoticeTypeList",(function(){return a})),l.d(t,"levelList",(function(){return s})),l.d(t,"sendStatusList",(function(){return o})),l.d(t,"publishStatusList",(function(){return n})),l.d(t,"handleStatusList",(function(){return u})),l.d(t,"channelList",(function(){return i}));var r=[{label:"其他",value:0},{label:"公告",value:1},{label:"消息",value:2},{label:"任务",value:3},{label:"告警",value:4}],a=[{label:"标签",value:0},{label:"全部用户",value:1},{label:"用户",value:2},{label:"部门",value:3}],s=[{label:"默认",value:0},{label:"低",value:1},{label:"中",value:2},{label:"高",value:3}],o=[{label:"初始化",value:0},{label:"已发送",value:1},{label:"推送失败",value:3},{label:"失败不再发送",value:-1}],n=[{label:"未发布",value:0},{label:"已发布",value:1},{label:"已撤销",value:2}],u=[{label:"-",value:null},{label:"部分办理",value:3},{label:"撤销",value:2},{label:"办理",value:1},{label:"未办",value:0}],i=[{label:"系统",value:"1"},{label:"邮件",value:"2"},{label:"短信",value:"3"}]}}]);