(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-12415036"],{"25e0":function(t,e,r){var a=r("91ce");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,r("499e").default)("31dbd3d3",a,!0,{sourceMap:!1,shadowMode:!1})},"91ce":function(t,e,r){(t.exports=r("2350")(!1)).push([t.i,"",""])},e91a:function(t,e,r){"use strict";r.r(e),r("8e6e"),r("ac6a"),r("456d"),r("a481"),r("28a5");var a=r("ade3"),o=r("365c"),n=r("2f62");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s={name:"processInfoComponent",data:function(){return{tableData:[],imgUrl:null,form:{page:1,rows:10,procInstId:null}}},props:["procInstId","procDefId"],watch:{procInstId:{handler:function(t){},deep:!0}},created:function(){this.procInstId?(this.imgUrl=o.default["activiti.models.img"]+"?procInstId="+this.procInstId+"&t="+Date.now(),this.loadTableData()):this.imgUrl=o.default["activiti.models.img"]+"?procDefId="+this.procDefId+"&t="+Date.now()},methods:i(i({},Object(n.b)(["_AJAX"])),{},{loadTableData:function(){var t=this,e=this.form;e.procInstId=this.procInstId,this._AJAX({url:"activiti.task.historic",method:"GET",data:e}).then((function(e){t.tableData=e.result}))},markRed:function(t){if(!t)return"-";for(var e=t.split(","),r=0;r<e.length;r++){var a=e[r];if(/_\*$/.test(a)){var o=a.replace("_*","");e[r]='<span style="color:red;">'+o+"</span>"}}return e.join(",")},sizeChange:function(t){this.form.page=1,this.form.rows=t,this.loadTableData()},currentChange:function(t){this.form.page=t,this.loadTableData()}})},c=(r("fa51"),r("2877")),p=Object(c.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticStyle:{"min-height":"250px","margin-bottom":"20px","max-width":"100%"},attrs:{src:t.imgUrl}})]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.rows,border:"","row-key":"id","tree-props":{children:"audits",hasChildren:"hasChildren"}}},[r("el-table-column",{attrs:{type:"index",label:"序号",index:function(e){return t.$utils._indexMethod(e,t.form.page,t.form.rows)},width:"50"}}),r("el-table-column",{attrs:{prop:"name",label:"活动流程"}}),r("el-table-column",{attrs:{prop:"startTime",label:"接收时间"}}),r("el-table-column",{attrs:{prop:"endTime",label:"完成时间"}}),r("el-table-column",{attrs:{prop:"assignee","show-overflow-tooltip":"",label:"参与者"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{domProps:{innerHTML:t._s(t.markRed(e.row.assignee))}})]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"comment",label:"环节意见"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"deleteReason",label:"审核"}})],1),r("adq-pagination",{attrs:{total:t.tableData.total,"page-size":t.form.rows,"current-page":t.form.page},on:{"size-change":t.sizeChange,"current-change":t.currentChange}})],1)}),[],!1,null,"539e58b0",null);e.default=p.exports},fa51:function(t,e,r){"use strict";r("25e0")}}]);