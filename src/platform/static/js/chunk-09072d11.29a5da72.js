(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-09072d11"],{"304f":function(t,e,a){var n=a("fafd");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,a("499e").default)("85c4dacc",n,!0,{sourceMap:!1,shadowMode:!1})},"5e9f":function(t,e,a){"use strict";a("304f")},"6ca7":function(t,e,a){"use strict";a.r(e),a("7f7f"),a("386d"),a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("28a5"),a("96cf");var n=a("1da1"),i=a("ade3"),o=a("d574"),l=a("2f62");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a("365c");var c,u={data:function(){return{isSearch:!1,param:{name:null,title:null,applyer:null,suspended:null,assignee:null,page:1,rows:10},applicationTime:null,tableList:{rows:[],total:0},businessList:[{value:"财务",label:"财务"},{value:"考勤",label:"考勤"}],statusList:[{value:"状态1",label:"状态1"},{value:"状态2",label:"状态2"}],activityName:0,activeItem:0,suspendedObj:{null:"-",1:"运行中",2:"暂停"}}},computed:{titles:function(){var t=[];return this.permitList.runningInsList&&t.push("运行中"),this.permitList.finishedInsList&&t.push("已结束"),this.setActiveItem(),t}},mixins:[o.default],created:function(){},mounted:function(){this.loadData()},methods:r(r({},Object(l.b)(["_AJAX"])),{},{loadData:function(){var t=this;this.parameterEchoMixin(),this.adqSearchListMixin={param:this.param,applicationTime:this.applicationTime,activityName:this.activeItem};var e=Object.assign({},this.param);e.createTimeBegin=this.applicationTime?this.applicationTime[0]:null,e.createTimeEnd=this.applicationTime?this.applicationTime[1]:null,this._AJAX({url:0===this.activeItem?"activiti.process.instance.run":"activiti.process.instance.finished",method:"GET",data:e}).then((function(e){0==e.code&&(t.tableList=e.result)})).catch((function(){}))},setActiveItem:function(){!this.permitList.runningInsList&&this.permitList.finishedInsList&&(this.activeItem=1)},changeTableList:function(t,e){this.param.page=1,this.param.rows=10,this.activityName=t,this.activeItem=t,this.setActiveItem(),this.loadData()},handleSizeChange:function(t){this.param.page=1,this.param.rows=t,this.loadData()},handleCurrentChange:function(t){this.param.page=t,this.loadData()},search:function(t){var e=this;this.param.page=1,0==t&&this.publics.resetFun(this.param,(function(){e.param.rows=10,e.applicationTime=null})),this.loadData()},revoke:function(t){var e=this,a=this;this.$store.commit("SHOW_LOADING",!0),this._AJAX({url:"activiti.biz.proc.cancel",method:"POST",data:{procInstId:t.procInstId,bizCode:t.businessKey,result:6}}).then((function(t){0==t.code&&e.$AudaqueToast.tip({template:"操作成功",methods:{okEvent:function(){a.loadData()}}})})).catch((function(){e.loadData()}))},changeStatus:function(t){var e=this,a=this,n=2===t.suspended?1:0;this.$store.commit("SHOW_LOADING",!0),this._AJAX({url:"activiti.process.instance.status",method:"POST",data:{procInsId:t.procInstId,status:n}}).then((function(t){0==t.code&&a.$AudaqueToast.tip({template:0===n?"挂起成功":"解挂成功",methods:{okEvent:function(){a.loadData()}}})})).catch((function(){e.loadData()}))},jump:(c=Object(n.a)(regeneratorRuntime.mark((function t(e){var a,n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this,n=[],t.next=4,a._AJAX({url:"activiti.task.back.nodes",method:"GET",data:{procInstId:e.procInstId,taskId:e.taskId}}).then((function(t){t.result&&t.result.length>0&&(n=t.result)})).catch((function(){i.loadData()}));case 4:0===n.length?a.$AudaqueToast.warn({template:"无可跳转节点",methods:{okEvent:function(){}}}):this.$AudaqueToast.dialog({title:"跳转",width:"800px",data:{ruleForm:{id:a.taskId,comment:"",selectedRows:[]},tableData:n},template:'\n                        <el-form ref="rejectform" :model="ruleForm" label-width="120px" class="reject-form">\n                            <el-form-item\n                                label="目标活动环节"\n                                prop="selectedRows"\n                                :rules="[{ required: true, message: \'请选择驳回节点\', trigger: \'change\' }]"\n                            >\n                                <el-table\n\n                                    ref="rejecttable"\n                                    :data="tableData"\n                                    style="width: 100%"\n                                    border\n                                    @selection-change="handleSelectionChange"\n                                >\n                                    <el-table-column\n                                        type="selection"\n                                        width="55">\n                                    </el-table-column>\n                                    <el-table-column\n                                        type="index"\n                                        label="序号"\n                                    >\n                                    </el-table-column>\n                                    <el-table-column\n                                        prop="name"\n                                        label="环节名称"\n                                    >\n                                    </el-table-column>\n\x3c!--                                    <el-table-column--\x3e\n\x3c!--                                        prop="address"--\x3e\n\x3c!--                                        label="处理人">--\x3e\n\x3c!--                                    </el-table-column>--\x3e\n                                    <el-table-column\n                                        prop="endTime"\n                                        label="处理时间"\n                                    >\n                                        <template #default="scope">\n                                            <span>{{scope.row.endTime|audaqueDatetime}}</span>\n                                        </template>\n                                    </el-table-column>\n                                </el-table>\n                            </el-form-item>\n                            <el-form-item\n                                label="说明"\n                                prop="comment"\n                                :rules="[{ required: true, message: \'请输入内容\', trigger: \'blur\' }]"\n                            >\n                                <el-input type="textarea" v-model.trim="ruleForm.comment"/>\n                            </el-form-item>\n                        </el-form>\n\n                    ',mounted:function(){},methods:{handleSelectionChange:function(t){t.length>1&&(this.$refs.rejecttable.clearSelection(),this.$refs.rejecttable.toggleRowSelection(t.pop())),this.ruleForm.selectedRows=t},okEvent:function(){var t=this,n=!1;return this.$refs.rejectform.validate((function(i){if(!i)return n=!0,!1;var o=t.ruleForm,l={id:o.id,comment:o.comment},s=t.ruleForm.selectedRows[0];l.procInstId=s.procInstId,l.procDefId=s.procDefId,l.backTaskSid=s.key,l.id=e.taskId,a.$store.commit("SHOW_LOADING",!0),a._AJAX({url:"activiti.task.back.task",method:"POST",data:l}).then((function(t){a.$AudaqueToast.tip({template:"驳回成功",methods:{okEvent:function(){a.loadData()}}})}))})),n}}});case 5:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)}),del:function(t){var e=this;this.$AudaqueToast.warn({template:"确定删除？",methods:{okEvent:function(){var a=this;e.$store.commit("SHOW_LOADING",!0),e._AJAX({url:"activiti.process.instance.historic/del",method:"GET",data:{procInstIdS:t.id}}).then((function(t){a.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){e.loadData()}}})}))}}})},preview:function(t){var e=this;this.$AudaqueToast.dialog({title:"查看",className:"",width:"1000px",data:{imageDataSrc:"",imageDataSuccess:!0,imageDataError:"",hideCancel_a_d_q:!0,okBtnName:"确定",tableList:{rows:[],total:0},result:{null:"-",0:"未提交",1:"处理中",2:"通过",3:"驳回",4:"撤销",5:"不通过",6:"中止"},form:{page:1,rows:10,procInstId:null}},mounted:function(){var e=t.procInstId?{procInstId:t.procInstId}:{procDefId:t.procDefId};this.getImg(e),this.tableList.rows=[],this.loadTableData()},template:'\n                             <div style="text-align:center">\n                                <img style="min-height:250px" class="content-image" :src="imageDataSrc" v-show="imageDataSuccess"/>\n                                <span v-show="!imageDataSuccess">{{ imageDataError }}</span>\n                                <div>\n                                    <el-table\n                                    tooltip-effect=\'light\'\n                                    class="el-table-common__list"\n                                    highlight-current-row\n                                    stripe\n                                    :data="tableList.rows"\n                                    row-key="id"\n                                    :tree-props="{ children: \'audits\', hasChildren: \'hasChildren\' }"\n                                    border>\n                                         <el-table-column\n                                            show-overflow-tooltip\n                                            type="index"\n                                            label="序号"\n                                            width="50">\n                                        </el-table-column>\n                                        <el-table-column\n                                                show-overflow-tooltip\n                                                prop="name"\n                                                label="环节"\n                                        ></el-table-column>\n                                        <el-table-column\n                                                show-overflow-tooltip\n                                                prop="startTime"\n                                                label="开始时间"\n                                        ></el-table-column>\n                                        <el-table-column\n                                                show-overflow-tooltip\n                                                prop="endTime"\n                                                label="完成时间"\n                                        ></el-table-column>\n                                        <el-table-column\n                                            show-overflow-tooltip\n                                            prop="nodeDeadLine"\n                                            label="节点期限"\n                                    >\n                                        <template slot-scope="scope">{{ publics.formatTime(scope.row.nodeDeadLine,\'Y-M-D h:m:s\') }}</template>\n                                    </el-table-column>\n                                        <el-table-column\n                                                show-overflow-tooltip\n                                                prop="duration"\n                                                label="用时(秒)"\n                                        >\n                                        <template #default="scope">\n                                            {{scope.row.duration ? scope.row.duration / 1000 : \'-\'}}\n                                        </template>\n                                        </el-table-column>\n                                        <el-table-column\n                                                show-overflow-tooltip\n                                                prop="assignee"\n                                                label="审核人"\n                                        >\n                                            <template #default="scope">\n                                                <span v-html="$audaquePreventXss(markRed(scope.row.assignee), $xssWhitelist)"></span>\n                                            </template>\n                                        </el-table-column>\n                                        <el-table-column\n                                                show-overflow-tooltip\n                                                prop="comment"\n                                                label="审核意见"\n                                        ></el-table-column>\n\n                                    </el-table>\n                                     <adq-pagination\n                                        @size-change="sizeChange"\n                                        @current-change="currentChange"\n                                        :total="tableList.total"\n                                        :page-size="form.rows"\n                                    ></adq-pagination>\n                                </div>\n                            </div>\n\n                            ',methods:{okEvent:function(){},markRed:function(t){if(!t)return"-";for(var e=t.split(","),a=0;a<e.length;a++){var n=e[a];if(/_\*$/.test(n)){var i=n.replace("_*","");e[a]='<span style="color:red;">'+i+"</span>"}}return e.join(",")},loadTableData:function(){var a=this,n=t.procInstId?t.procInstId:t.id,i=this.form;i.procInstId=n,e._AJAX({url:"activiti.task.historic",method:"GET",data:i}).then((function(t){a.tableList=t.result}))},sizeChange:function(t){this.form.rows=t,this.loadTableData()},currentChange:function(t){this.form.page=t,this.loadTableData()},getImg:function(t){var a=this;e._AJAX({url:"activiti.models.img",method:"GET",responseType:"blob",data:t}).then((function(t){var e=new Blob([t]),n=window.URL.createObjectURL(e);a.imageDataSrc=n}))}}})}})},p=(a("5e9f"),a("2877")),m=Object(p.a)(u,(function(){var t=this,e=t._self._c;return e("audaque-table-list-page",[e("template",{slot:"title"},[e("audaque-table-title",{attrs:{titles:t.titles,index:t.activityName},on:{change:t.changeTableList}},[e("i",{staticClass:"iconfont iconshaixuan audaque-rect-icon",on:{click:function(e){t.isSearch=!t.isSearch}}},[t._v("筛选 ")])])],1),e("template",{slot:"search"},[e("audaque-table-search",{directives:[{name:"show",rawName:"v-show",value:t.isSearch,expression:"isSearch"}],on:{close:function(e){t.isSearch=!1},search:function(e){return t.search(1)},reset:function(e){return t.search(0)}}},[e("audaque-table-search-item",{attrs:{title:"流程名称"}},[e("el-input",{staticClass:"autoSize f14",model:{value:t.param.name,callback:function(e){t.$set(t.param,"name","string"==typeof e?e.trim():e)},expression:"param.name"}})],1),e("audaque-table-search-item",{attrs:{title:"申请标题"}},[e("el-input",{staticClass:"autoSize f14",attrs:{clearable:""},model:{value:t.param.title,callback:function(e){t.$set(t.param,"title","string"==typeof e?e.trim():e)},expression:"param.title"}})],1),0===t.activeItem?e("audaque-table-search-item",{attrs:{title:"状态"}},[e("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:t.param.suspended,callback:function(e){t.$set(t.param,"suspended",e)},expression:"param.suspended"}},[e("el-option",{attrs:{label:"运行中",value:1}}),e("el-option",{attrs:{label:"暂停",value:2}})],1)],1):t._e(),e("audaque-table-search-item",{attrs:{title:"发起人"}},[e("el-input",{staticClass:"autoSize f14",attrs:{clearable:""},model:{value:t.param.applyer,callback:function(e){t.$set(t.param,"applyer","string"==typeof e?e.trim():e)},expression:"param.applyer"}})],1),0===t.activeItem?e("audaque-table-search-item",{attrs:{title:"处理人"}},[e("el-input",{staticClass:"autoSize f14",attrs:{clearable:""},model:{value:t.param.assignee,callback:function(e){t.$set(t.param,"assignee","string"==typeof e?e.trim():e)},expression:"param.assignee"}})],1):t._e(),e("audaque-table-search-item",{staticClass:"search-time-line",attrs:{title:"发起时间"}},[e("el-date-picker",{staticClass:"search-date",attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH:mm:ss",align:"right","unlink-panels":"","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.applicationTime,callback:function(e){t.applicationTime=e},expression:"applicationTime"}})],1)],1)],1),[e("el-table",{staticClass:"el-table-common__list",attrs:{"tooltip-effect":"light","highlight-current-row":"",stripe:"",data:t.tableList.rows,border:""}},[e("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",label:"序号",index:function(e){return t.$utils._indexMethod(e,t.param.page,t.param.rows)},width:"50"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"businessKey",label:"流程流水号"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"流程名称"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"title",label:"申请标题"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"applyer",label:"发起人"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"startTime",label:"发起时间"}}),0===t.activeItem?e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"currTaskName",label:"当前节点"}}):t._e(),0===t.activeItem?e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"suspended",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(t.suspendedObj[e.row.suspended])+"\n                ")]}}],null,!1,3752098492)}):t._e(),0===t.activeItem?e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"assigneeName",label:"处理人"}}):t._e(),e("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"220px"},scopedSlots:t._u([{key:"default",fn:function(a){return[t.permitList.taskHistoric?e("span",{staticClass:"iconfont iconchakan11 operate",attrs:{title:"查看"},on:{click:function(e){return t.preview(a.row)}}}):t._e(),t.permitList.bizCancel&&0===t.activeItem?e("span",{staticClass:"iconfont icontingzhi operate",attrs:{title:"结束"},on:{click:function(e){return t.revoke(a.row)}}}):t._e(),t.permitList.insStatus&&0===t.activeItem?e("span",{class:["iconfont  operate",2===a.row.suspended?"iconjihuo":"iconminus"],attrs:{title:2===a.row.suspended?"解挂":"挂起"},on:{click:function(e){return t.changeStatus(a.row)}}}):t._e(),t.permitList.taskBack&&0===t.activeItem?e("span",{staticClass:"iconfont iconiconzhengli_tiaozhuan operate",attrs:{title:"跳转"},on:{click:function(e){return t.jump(a.row)}}}):t._e(),t.permitList.insHistoricDel&&1===t.activeItem?e("span",{staticClass:"iconfont iconShape1 operate",attrs:{title:"删除"},on:{click:function(e){return t.del(a.row)}}}):t._e()]}}])}),e("template",{slot:"empty"},[e("audaque-table-empty",{attrs:{tableFetchStatus:t.$store.state.tableFetchStatus,"is-new":!1},on:{fetch:function(e){return t.loadData()}}})],1)],2),e("adq-pagination",{attrs:{"current-page":t.param.page,"page-size":t.param.rows,total:t.tableList.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})]],2)}),[],!1,null,"5cb7389b",null);e.default=m.exports},fafd:function(t,e,a){(t.exports=a("2350")(!1)).push([t.i,'[data-v-5cb7389b] .audaque-table-title__title-active{position:relative;margin-right:35px}[data-v-5cb7389b] .audaque-table-title__title-active:before{content:"";width:100%;height:2px;background:#5394eb;position:absolute;bottom:-12px}',""])}}]);