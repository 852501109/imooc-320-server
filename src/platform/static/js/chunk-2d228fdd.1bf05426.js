(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d228fdd"],{dc19:function(e,t,r){"use strict";r.r(t),r("8e6e"),r("ac6a"),r("456d");var n=r("ade3"),i=(r("20d6"),r("2f62"));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var o={data:function(){return{storey:["au_ods","au_std","au_dwd","au_dwm","au_dws","au_app"],databaseList:[{label:"前置库",options:[]},{label:"",options:[]}],title:"view"===this.$route.query.filter?"查看自定义指标":this.$route.query.id?"编辑自定义指标":"新增自定义指标",permission:[],process:[{id:"configStep",title:"配置业务信息",success:!0},{id:"submitStep",title:"配置技术口径",success:!0}]}},computed:{hasNext:function(){var e=this;return this.permission.findIndex((function(t){return t===e.stepActiveId}))+1<this.permission.length},hasPre:function(){var e=this;return this.permission.findIndex((function(t){return t===e.stepActiveId}))>0}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(i.b)("fusionTask",["GET_DATA_BASE_LIST","GET_STEP_HEADERR"])),created:function(){}};t.default=o}}]);