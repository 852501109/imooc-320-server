(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dc9c02a2"],{"30fa":function(t,e,a){(t.exports=a("2350")(!1)).push([t.i,".goto-edit[data-v-216827db]{background:#fff}.goto-edit .goto-edit-main[data-v-216827db]{display:-webkit-box;display:-ms-flexbox;display:flex}.goto-edit .goto-edit-main .goto-edit-bus[data-v-216827db],.goto-edit .goto-edit-main .goto-edit-title[data-v-216827db]{color:#3a405b;height:40px;line-height:40px}.goto-edit .goto-edit-main .goto-edit-bus i[data-v-216827db],.goto-edit .goto-edit-main .goto-edit-title i[data-v-216827db]{margin-right:5px;color:red}.goto-edit .goto-edit-main .goto-edit-item[data-v-216827db]{margin:30px 40px 0 20px}.goto-edit .goto-edit-main .goto-edit-item li[data-v-216827db]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:30px}.goto-edit .goto-edit-main .goto-edit-item li .goto-edit-bus[data-v-216827db]{width:80px;text-align:right}.goto-edit .goto-edit-main .goto-edit-item li .el-input[data-v-216827db],.goto-edit .goto-edit-main .goto-edit-item li .el-select[data-v-216827db],.goto-edit .goto-edit-main .goto-edit-item li .goto-edit-input[data-v-216827db]{width:520px}.goto-edit .goto-edit-main .goto-edit-cron[data-v-216827db]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:60px}.goto-edit .goto-edit-btn[data-v-216827db]{width:100%;text-align:center;padding-bottom:100px}.goto-edit .goto-edit-btn-hover[data-v-216827db]{text-align:left;margin-left:300px}",""])},"3e7f":function(t,e,a){"use strict";a("51410")},51410:function(t,e,a){var s=a("30fa");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals),(0,a("499e").default)("6adc93af",s,!0,{sourceMap:!1,shadowMode:!1})},"9ed0":function(t,e,a){"use strict";a.r(e),a("8e6e"),a("456d"),a("6b54"),a("ac6a"),a("a481");var s=a("ade3"),i=a("2f62"),o=a("d37a");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(s.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d=["请选择业务分类","该业务分类支持查看进度","该业务分类不支持查看进度"],n={components:{cron:o.default},data:function(){return{tasks:[],disabled:!0,disabled2:!!this.$route.query.id,progress:d[0],groupId:"",modes:[{key:1,value:"并行"},{key:2,value:"串行"},{key:3,value:"忽略"}],groupName:"",taskNames:[],taskIds:[],taskName:"",id:this.$route.query.id,param:{arguments:"",remark:"",beginTimeStr:"",endTimeStr:"",mode:"",singleUse:"false",cronExpression:""}}},watch:{"param.singleUse":function(t){"true"==t&&(this.param.endTimeStr="",this.param.cronExpression="",this.param.mode="")}},computed:l({},Object(i.d)("webkit",["cheduleGroups"])),methods:l({btnFun:function(){var t=this,e=this;if(this.id){var a=this.param;a.id=this.id,this.EDITJOB(a).then((function(a){0==a.code&&t.$AudaqueToast.tip({template:"编辑成功",methods:{okEvent:function(){e.$router.replace("/webkit/scheduleManage")}}})}))}else{var s=this.param;s.groupId=this.groupId,s.groupName=this.groupName,s.taskNames=this.taskNames,s.taskIds=this.taskIds,this.ADDJOB(s).then((function(a){0==a.code&&(t.$AudaqueToast.tip({template:"添加成功",methods:{okEvent:function(){e.$router.replace("/webkit/scheduleManage")}}}),t.$router.replace("/webkit/scheduleManage"))}))}},taskChange:function(){var t=this;this.taskNames=[],this.taskIds.forEach((function(e){t.tasks.forEach((function(a){e==a.key&&t.taskNames.push(a.value)}))}))},changeGroup:function(){var t=this;this.taskNames=[],this.taskIds=[],""==this.groupId?this.progress=d[0]:this.cheduleGroups.forEach((function(e){t.groupId==e.groupId&&(t.modes=e.modes,t.param.mode=t.modes[0].key.toString(),t.groupName=e.groupName,e.supportProgress?t.progress=d[1]:t.progress=d[2])}));var e={groupId:this.groupId};this.TASKLIST(e).then((function(e){e.result&&e.result.length>0?(t.disabled=!1,t.tasks=e.result):(t.disabled=!0,t.tasks=[])}))}},Object(i.b)("webkit",["GETEDITJOB","CHEDULEGROUPS","TASKLIST","ADDJOB","EDITJOB"])),created:function(){var t=this;this.CHEDULEGROUPS(),this.id&&this.GETEDITJOB({id:this.id}).then((function(e){if(0==e.code){t.groupId=e.result.pi.groupId;var a=e.result.jd.taskIds;t.taskIds=null!=a?a:[],t.taskName=e.result.jd.taskName,t.param.arguments=e.result.jd.arguments,t.param.remark=e.result.jd.remark,t.modes=e.result.pi.modes;var s=e.result.jd.beginTime,i=e.result.jd.endTime;t.param.beginTimeStr=null!=s&&""!=s?t.$utils.timeToDate(s):"",t.param.endTimeStr=null!=i&&""!=i?t.$utils.timeToDate(i):"",t.param.mode=e.result.jd.mode+"",t.param.singleUse=e.result.jd.singleUse+"",t.param.cronExpression=e.result.jd.cronExpression,e.result.pi.supportProgress?t.progress=d[1]:t.progress=d[2]}}))}},u=(a("3e7f"),a("2877")),p=Object(u.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"goto-edit"},[e("div",{staticClass:"goto-edit-main"},[e("ul",{staticClass:"goto-edit-item"},[e("li",[t._m(0),e("div",{staticClass:"goto-edit-input"},[e("el-select",{attrs:{disabled:t.disabled2,placeholder:"请选择"},on:{change:t.changeGroup},model:{value:t.groupId,callback:function(e){t.groupId=e},expression:"groupId"}},[e("el-option",{attrs:{label:"请选择",value:""}}),t._l(t.cheduleGroups,(function(t,a){return e("el-option",{key:a,attrs:{label:t.groupName,value:t.groupId}})}))],2)],1)]),e("li",[t._m(1),e("div",{staticClass:"goto-edit-input"},[t.id?e("el-input",{attrs:{disabled:"",placeholder:"请输入内容"},model:{value:t.taskName,callback:function(e){t.taskName="string"==typeof e?e.trim():e},expression:"taskName"}}):e("el-select",{attrs:{disabled:t.disabled,multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择输入任务名称"},on:{change:t.taskChange},model:{value:t.taskIds,callback:function(e){t.taskIds=e},expression:"taskIds"}},t._l(t.tasks,(function(t){return e("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})})),1)],1)]),e("li",[t._m(2),e("div",{staticClass:"goto-edit-input"},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.param.singleUse,callback:function(e){t.$set(t.param,"singleUse",e)},expression:"param.singleUse"}},[e("el-option",{attrs:{label:"多次",value:"false"}}),e("el-option",{attrs:{label:"一次",value:"true"}})],1)],1)]),e("li",[t._m(3),e("div",{staticClass:"goto-edit-input"},[e("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期"},model:{value:t.param.beginTimeStr,callback:function(e){t.$set(t.param,"beginTimeStr",e)},expression:"param.beginTimeStr"}})],1)]),e("li",{directives:[{name:"show",rawName:"v-show",value:"false"==t.param.singleUse,expression:"param.singleUse == 'false'"}]},[e("label",{staticClass:"goto-edit-bus"},[t._v("失效时间：")]),e("div",{staticClass:"goto-edit-input"},[e("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期"},model:{value:t.param.endTimeStr,callback:function(e){t.$set(t.param,"endTimeStr",e)},expression:"param.endTimeStr"}})],1)]),e("li",{directives:[{name:"show",rawName:"v-show",value:"false"==t.param.singleUse,expression:"param.singleUse == 'false'"}]},[t._m(4),e("div",{staticClass:"goto-edit-input"},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.param.mode,callback:function(e){t.$set(t.param,"mode",e)},expression:"param.mode"}},t._l(t.modes,(function(t){return e("el-option",{key:t.key,attrs:{label:t.value,value:t.key+""}})})),1)],1)]),e("li",[e("label",{staticClass:"goto-edit-bus"},[t._v("参数：")]),e("div",{staticClass:"goto-edit-input"},[e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.param.arguments,callback:function(e){t.$set(t.param,"arguments","string"==typeof e?e.trim():e)},expression:"param.arguments"}})],1)]),e("li",[e("label",{staticClass:"goto-edit-bus"},[t._v("查看进度：")]),e("div",{staticClass:"goto-edit-input",staticStyle:{"line-height":"40px"}},[t._v("\n                    "+t._s(t.progress)+"\n                ")])]),e("li",[e("label",{staticClass:"goto-edit-bus"},[t._v("备注：")]),e("div",{staticClass:"goto-edit-input"},[e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.param.remark,callback:function(e){t.$set(t.param,"remark","string"==typeof e?e.trim():e)},expression:"param.remark"}})],1)])]),"false"==t.param.singleUse?e("div",{staticClass:"goto-edit-cron"},[t._m(5),e("div",{staticClass:"goto-edit-content"},[e("cron",{model:{value:t.param.cronExpression,callback:function(e){t.$set(t.param,"cronExpression",e)},expression:"param.cronExpression"}})],1)]):t._e()]),e("div",{staticClass:"goto-edit-btn",class:{"goto-edit-btn-hover":"true"==t.param.singleUse}},[e("el-button",{staticStyle:{"margin-top":"30px"},attrs:{type:"primary"},on:{click:t.btnFun}},[t._v("提交")])],1)])}),[function(){var t=this._self._c;return t("label",{staticClass:"goto-edit-bus"},[t("i",[this._v("*")]),this._v("业务分类：")])},function(){var t=this._self._c;return t("label",{staticClass:"goto-edit-bus"},[t("i",[this._v("*")]),this._v("任务名称：")])},function(){var t=this._self._c;return t("label",{staticClass:"goto-edit-bus"},[t("i",[this._v("*")]),this._v("执行次数：")])},function(){var t=this._self._c;return t("label",{staticClass:"goto-edit-bus"},[t("i",[this._v("*")]),this._v("生效时间：")])},function(){var t=this._self._c;return t("label",{staticClass:"goto-edit-bus"},[t("i",[this._v("*")]),this._v("执行模式：")])},function(){var t=this._self._c;return t("label",{staticClass:"goto-edit-title"},[t("i",[this._v("*")]),this._v("Cron表达式：")])}],!1,null,"216827db",null);e.default=p.exports}}]);