(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d2f33"],{"5b4d":function(e,t,a){"use strict";a.r(t),a("8e6e"),a("ac6a"),a("456d"),a("386d");var o=a("ade3"),r=a("d574"),l=a("2f62");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var n={name:"datasourcePublic",data:function(){return{form:{page:1,rows:10,name:null,key:null,username:null,host:null,port:null,appKey:null,isEnabled:null,deptName:null,decryptEnabled:!1},searchBarVisible:!1,permissionLevelObj:{1:"私有",2:"公开",3:"自定义"},datasourcelist:{rows:[],total:0},isShowAddBtn:!0,sceneTypeObj:{1:"生产环境",2:"前置机",3:"归集库",4:"其他",null:"-"}}},props:{pageType:{type:String,default:""}},computed:s({},Object(l.d)("datasource",["appList","category"])),mixins:[r.default],created:function(){this.loadData(),this.ALL_CATEGORY(),this.ALL_APP()},methods:s(s(s({},Object(l.b)("datasource",["ALL_CATEGORY","ALL_APP","ENABLE_SOURCE","DISABLE_SOURCE","DELETE_SOURCE","TEST_SOURCE"])),Object(l.b)(["_AJAX"])),{},{loadData:function(){var e=this;this.parameterEchoMixin(),this.adqSearchListMixin={form:this.form},this._AJAX({url:"system"===this.pageType?"datasource.sourceList":"datasource.mySourceList",method:"POST",data:this.form}).then((function(t){0==t.code&&(e.datasourcelist=t.result)})),"dept"===this.pageType&&this._AJAX({url:"datasource.getManager",method:"GET",data:{}}).then((function(t){0==t.code&&(e.isShowAddBtn=!t.result)}))},add:function(){this.$router.push({path:"/config/datasourceEdit",query:{pageType:this.pageType}})},enableSource:function(e){var t=this,a=this;this.ENABLE_SOURCE(e).then((function(e){t.$AudaqueToast.tip({template:"启用成功",methods:{okEvent:function(){a.loadData()}}})}))},testSouce:function(e){var t=this;this.TEST_SOURCE({id:e}).then((function(e){t.$AudaqueToast.tip({template:"测试连接成功",methods:{okEvent:function(){}}})}))},disableSource:function(e){var t=this;this.DISABLE_SOURCE(e).then((function(e){t.$AudaqueToast.tip({template:"禁用成功",methods:{okEvent:function(){t.loadData()}}})}))},delSouce:function(e){var t=this;this.$AudaqueToast.warn({template:"确认删除？",methods:{okEvent:function(){t.DELETE_SOURCE(e).then((function(e){t.$AudaqueToast.tip({template:"删除成功",methods:{okEvent:function(){t.loadData()}}})}))}}})},prevClick:function(e){this.form.page=e,this.loadData()},nextClick:function(e){this.form.page=e,this.loadData()},currentChange:function(e){this.form.page=e,this.loadData()},sizeChange:function(e){this.form.rows=e,this.form.page=1,this.loadData()},searchClick:function(){this.$refs.search.isSearch=!0},resetClick:function(){var e=this;this.form.page=1,this.publics.resetFun(this.form,(function(){e.form.rows=10})),this.loadData()},filterClick:function(){this.form.page=1,this.loadData()}})},c=a("2877"),u=Object(c.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("audaque-table-list-page",[a("template",{slot:"title"},[a("audaque-table-title",{attrs:{title:"数据源列表"}},[e.permitList.addSource&&e.isShowAddBtn?a("i",{staticClass:"iconfont iconxinzeng2 audaque-rect-icon",on:{click:e.add}},[e._v("\n                新增")]):e._e(),a("i",{staticClass:"iconfont iconshaixuan audaque-rect-icon",on:{click:function(t){e.searchBarVisible=!e.searchBarVisible}}},[e._v("筛选查询\n            ")])])],1),a("template",{slot:"search"},[a("audaque-table-search",{directives:[{name:"show",rawName:"v-show",value:e.searchBarVisible,expression:"searchBarVisible"}],on:{close:function(t){e.searchBarVisible=!1},search:e.filterClick,reset:e.resetClick}},[a("audaque-table-search-item",{attrs:{title:"数据源名称"}},[a("el-input",{attrs:{placeholder:"请输入数据源名称",clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name","string"==typeof t?t.trim():t)},expression:"form.name"}})],1),a("audaque-table-search-item",{attrs:{title:"数据源分类名"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}},e._l(e.category,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.key}})})),1)],1),a("audaque-table-search-item",{attrs:{title:"用户名"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"==typeof t?t.trim():t)},expression:"form.username"}})],1),a("audaque-table-search-item",{attrs:{title:"IP"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入IP"},model:{value:e.form.host,callback:function(t){e.$set(e.form,"host","string"==typeof t?t.trim():t)},expression:"form.host"}})],1),a("audaque-table-search-item",{attrs:{title:"端口"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入端口"},model:{value:e.form.port,callback:function(t){e.$set(e.form,"port","string"==typeof t?t.trim():t)},expression:"form.port"}})],1),a("audaque-table-search-item",{attrs:{title:"授权"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.appKey,callback:function(t){e.$set(e.form,"appKey",t)},expression:"form.appKey"}},e._l(e.appList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.appName,value:e.appKey}})})),1)],1),a("audaque-table-search-item",{attrs:{title:"状态"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.isEnabled,callback:function(t){e.$set(e.form,"isEnabled",t)},expression:"form.isEnabled"}},[a("el-option",{attrs:{label:"启用",value:!0}}),a("el-option",{attrs:{label:"禁用",value:!1}})],1)],1),a("audaque-table-search-item",{attrs:{title:"所属部门"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入所属部门"},model:{value:e.form.deptName,callback:function(t){e.$set(e.form,"deptName","string"==typeof t?t.trim():t)},expression:"form.deptName"}})],1)],1)],1),[a("el-table",{staticClass:"el-table-common__list",attrs:{data:e.datasourcelist.rows,"tooltip-effect":"light","highlight-current-row":"",stripe:"",border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",index:function(t){return e.$utils._indexMethod(t,e.form.page,e.form.rows)},width:"50"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"数据源名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"keyName",label:"数据源分类名称"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"username",label:"用户名"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"host",label:"IP"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"port",label:"端口"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"appNames",label:"授权",formatter:function(e){return e.appNames?e.appNames.join("/"):"-"}}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"appNames",label:"可见范围",formatter:function(t){return e.permissionLevelObj[t.permissionLevel]}}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"deptName",label:"所属部门"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"sceneType",formatter:function(t){return e.sceneTypeObj[t.sceneType]},label:"应用场景"}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"enabled",label:"状态",formatter:function(e){return e.enabled?"启用":"禁用"}}}),a("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"operate"},[e.permitList.testSource&&t.row.hasOperation||e.permitList.testSource&&t.row.hasReadOnly?a("a",{attrs:{title:"连接"},on:{click:function(a){return e.testSouce(t.row.id)}}},[a("i",{staticClass:"iconfont iconlianjie"})]):e._e(),t.row.hasOperation?a("span",[e.permitList.disableSource&&t.row.enabled?a("a",{attrs:{title:"禁用"},on:{click:function(a){return e.disableSource(t.row.id)}}},[a("i",{staticClass:"iconfont iconjinyong1"})]):e._e(),e.permitList.enableSource&&!t.row.enabled?a("a",{attrs:{title:"启用"},on:{click:function(a){return e.enableSource(t.row.id)}}},[a("i",{staticClass:"iconfont iconqiyong2"})]):e._e(),e.permitList.modifySource?a("router-link",{attrs:{title:"编辑",to:"/config/datasourceEdit?id="+t.row.id+"&pageType="+e.pageType}},[a("i",{staticClass:"iconfont iconFill"})]):e._e(),e.permitList.deleteSource?a("a",{attrs:{title:"删除"},on:{click:function(a){return e.delSouce(t.row.id)}}},[a("i",{staticClass:"iconfont shanchu iconShape1"})]):e._e()],1):e._e()])]}}])}),a("template",{slot:"empty"},[a("audaque-table-empty",{attrs:{tableFetchStatus:e.$store.state.tableFetchStatus,"is-new":!1},on:{fetch:function(t){return e.loadData()}}})],1)],2),a("adq-pagination",{attrs:{total:e.datasourcelist.total,"page-size":e.form.rows,"current-page":e.form.page},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})]],2)}),[],!1,null,null,null);t.default=u.exports}}]);