(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0d61dc6c"],{"3e51":function(e,t,n){"use strict";n.r(t),n("8e6e"),n("ac6a"),n("456d");var r=n("ade3"),a=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={data:function(){return{searchList:{page:1,rows:10,type:1,sendStatus:1},ruleForm:{}}},watch:{$route:{handler:function(e,t){this.initData()},deep:!0}},created:function(){this.initData()},mounted:function(){},methods:o(o({},Object(a.b)(["_AJAX"])),{},{initData:function(){var e=this;this._AJAX({url:"sys.message.notice.id",method:"GET",data:{id:this.$route.query.id,needSendList:0}}).then((function(t){if(0==t.code){var n=t.result;e.ruleForm=n,e._AJAX({url:"sys.message.read",method:"GET",data:{messageCode:e.$route.query.uuidCode,readFlag:1}}).then((function(t){e.$store.state.news.isUpdateAnnouncement=new Date}))}}))},returnPrevPage:function(){this.$router.push({path:"/index/announcementList",query:{}})}})},c=(n("e009"),n("2877")),u=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("audaque-table-list-page",[n("template",{slot:"title"},[n("audaque-table-title",{attrs:{title:e.$route.meta.pageName}},[n("i",{staticClass:"iconfont iconfanhui1 audaque-rect-icon",on:{click:e.returnPrevPage}},[e._v(" 返回")])])],1),[n("div",[n("div",{staticClass:"title"},[e._v(e._s(e.ruleForm.title))]),n("div",{staticClass:"date-item"},[e._v("公告时间："+e._s(e.publics.formatTime(e.ruleForm.publishTime,"Y-M-D h:m:s")))]),n("div",{staticClass:"content-item",domProps:{innerHTML:e._s(e.ruleForm.content)}})])]],2)}),[],!1,null,"6f44a1e0",null);t.default=u.exports},"75e9":function(e,t,n){var r=n("bcc5");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,n("499e").default)("3c3dd05c",r,!0,{sourceMap:!1,shadowMode:!1})},bcc5:function(e,t,n){(e.exports=n("2350")(!1)).push([e.i,".title[data-v-6f44a1e0]{text-align:center;font-size:22px;font-weight:700;line-height:30px}.date-item[data-v-6f44a1e0]{text-align:right;font-size:14px;padding-bottom:15px;border-bottom:1px solid #e0e0e0}.content-item[data-v-6f44a1e0]{padding:15px 0}",""])},e009:function(e,t,n){"use strict";n("75e9")}}]);