(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6b2534a6","chunk-74701673"],{"020b":function(t,e,i){"use strict";i.r(e);var s={name:"TableTitle",data:function(){return{}},props:{title:{type:String,default:""},icon:{type:String,default:""},none:String}},n=(i("1cf6"),i("2877")),a=Object(n.a)(s,(function(){var t=this._self._c;return t("div",{class:["title","iconfont",this.icon?this.icon:"",this.none]},[t("i",{staticClass:"leftBorder"}),t("div",{staticClass:"text"},[this._v(this._s(this.title))]),t("div",{staticClass:"titleIcon"},[this._t("default")],2)])}),[],!1,null,"095b347a",null);e.default=a.exports},"1cf6":function(t,e,i){"use strict";i("8bde")},3423:function(t,e,i){"use strict";i.r(e),i("8e6e"),i("ac6a"),i("456d");var s=i("ade3"),n=i("2f62"),a=i("020b");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var l={data:function(){return{messageType:null,messageInfoTotal:null,searchList:{type:"",state:1,page:1,rows:10},dataList:[]}},watch:{$route:function(t,e){this.searchList.type=this.$route.query.type,this.getDataList()},messageInfoList:function(t){this.getDataList()}},created:function(){this.searchList.type=this.$route.query.type,this.getDataList()},mounted:function(){},computed:r({},Object(n.d)("user",["messageInfoList"])),components:{TableTitle:a.default},methods:r(r({},Object(n.b)("user",["GET_MESSAGE_INFO_LIST","UPDATE_MESSAGE_STGATE","GET_NEWS_NUM"])),{},{getDataList:function(){1==this.searchList.type&&this.messageInfoList?(this.dataList=this.messageInfoList.taskEvent,this.messageInfoTotal=this.messageInfoList.taskEvent.length):2==this.searchList.type&&this.messageInfoList&&(this.dataList=this.messageInfoList.msgEvent,this.messageInfoTotal=this.messageInfoList.msgEvent.length)},clickContent:function(t){t.url&&this.$router.push({path:"/",query:{recordId:""}})},handleSizeChange:function(t){this.searchList.rows=t,this.getDataList()},handleCurrentChange:function(t){this.searchList.page=t,this.getDataList()}})},c=i("2877"),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("audaque-table-list-page",[e("template",{slot:"title"},[e("audaque-table-title",{attrs:{title:1==t.searchList.type?"待办列表":"消息列表"}})],1),[e("el-table",{staticClass:"el-table-common__list",attrs:{data:t.dataList,"tooltip-effect":"light","highlight-current-row":"",stripe:"",border:""}},[e("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"60"}}),e("el-table-column",{attrs:{prop:"tableName",label:"类别",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(1==e.row.type?"待办":"消息")+"\n                ")]}}])}),e("el-table-column",{attrs:{prop:"editting",align:"left",label:"内容"},scopedSlots:t._u([{key:"default",fn:function(i){return[0==i.row.state?e("span",{staticClass:"iconfont iconweidu",staticStyle:{color:"#428bca",cursor:"pointer"},on:{click:function(e){return t.clickContent(i.row)}}},[t._v(t._s(i.row.title))]):e("span",{staticClass:"iconfont iconxinfengdakai",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.clickContent(i.row)}}},[t._v(t._s(i.row.title))])]}}])}),e("el-table-column",{attrs:{prop:"createTime",align:"center",width:"250",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(t.publics.formatTime(e.row.createTime,"Y-M-D h:m:s"))+"\n                ")]}}])})],1)]],2)}),[],!1,null,"0a917072",null);e.default=u.exports},"39c2":function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,'.title[data-v-095b347a]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;font-size:14px;padding:0 0 0 16px;color:#717783;line-height:50px;height:50px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #f0f0f0}.title .text[data-v-095b347a]{line-height:20px;font-size:16px;font-weight:400;color:#333}.title div[data-v-095b347a]:nth-child(3){-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right}.title .leftBorder[data-v-095b347a]{width:3px;height:16px;background:#4885d6;margin-right:5px;line-height:16px}.title i.iconfont.rect-icon[data-v-095b347a]:nth-child(n+2):after{content:"";position:absolute;height:20px;border-left:1px solid #e6e6e6;left:0;top:4px}.title .react-active[data-v-095b347a]{color:#4885d6}.top[data-v-095b347a]{border-top:none}',""])},"8bde":function(t,e,i){var s=i("39c2");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals),(0,i("499e").default)("21ec43e0",s,!0,{sourceMap:!1,shadowMode:!1})}}]);