(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-266502c5"],{"2bf4":function(t,e,r){"use strict";r("fdf5")},e424:function(t,e,r){(t.exports=r("2350")(!1)).push([t.i,"",""])},e91a:function(t,e,r){"use strict";r.r(e),r("8e6e"),r("ac6a"),r("456d"),r("a481"),r("28a5");var a=r("ade3"),o=(r("365c"),r("2f62"));function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var i={name:"processInfoComponent",data:function(){return{tableData:[],imgUrl:null,form:{page:1,rows:10,procInstId:null}}},props:["procInstId","procDefId"],watch:{procInstId:{handler:function(t){},deep:!0}},created:function(){this.procInstId?(this.getImg({procInstId:this.procInstId}),this.loadTableData()):this.getImg({procDefId:this.procDefId})},methods:s(s({},Object(o.b)(["_AJAX"])),{},{loadTableData:function(){var t=this,e=this.form;e.procInstId=this.procInstId,this._AJAX({url:"activiti.task.historic",method:"GET",data:e}).then((function(e){t.tableData=e.result}))},getImg:function(t){var e=this;this._AJAX({url:"activiti.models.img",method:"GET",responseType:"blob",data:t}).then((function(t){var r=new Blob([t]),a=window.URL.createObjectURL(r);e.imgUrl=a}))},markRed:function(t){if(!t)return"-";for(var e=t.split(","),r=0;r<e.length;r++){var a=e[r];if(/_\*$/.test(a)){var o=a.replace("_*","");e[r]='<span style="color:red;">'+o+"</span>"}}return e.join(",")},sizeChange:function(t){this.form.page=1,this.form.rows=t,this.loadTableData()},currentChange:function(t){this.form.page=t,this.loadTableData()}})},l=(r("2bf4"),r("2877")),c=Object(l.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{"text-align":"center"}},[e("img",{staticStyle:{"min-height":"250px","margin-bottom":"20px","max-width":"100%"},attrs:{src:t.imgUrl}})]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.rows,border:"","row-key":"id","tree-props":{children:"audits",hasChildren:"hasChildren"}}},[e("el-table-column",{attrs:{type:"index",label:"序号",index:function(e){return t.$utils._indexMethod(e,t.form.page,t.form.rows)},width:"50"}}),e("el-table-column",{attrs:{prop:"name",label:"活动流程"}}),e("el-table-column",{attrs:{prop:"startTime",label:"接收时间"}}),e("el-table-column",{attrs:{prop:"endTime",label:"完成时间"}}),e("el-table-column",{attrs:{prop:"assignee","show-overflow-tooltip":"",label:"参与者"},scopedSlots:t._u([{key:"default",fn:function(r){return[e("span",{domProps:{innerHTML:t._s(t.$audaquePreventXss(t.markRed(r.row.assignee),t.$xssWhitelist))}})]}}])}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"comment",label:"审核意见"}}),e("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"deleteReason",label:"审核"}})],1),e("adq-pagination",{attrs:{total:t.tableData.total,"page-size":t.form.rows,"current-page":t.form.page},on:{"size-change":t.sizeChange,"current-change":t.currentChange}})],1)}),[],!1,null,"32a383be",null);e.default=c.exports},fdf5:function(t,e,r){var a=r("e424");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,r("499e").default)("c5c68e98",a,!0,{sourceMap:!1,shadowMode:!1})}}]);