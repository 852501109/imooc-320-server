(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2875a000","chunk-5812be3d","chunk-ec39b560","chunk-f46f4ac2","chunk-4ad8ed95","chunk-2d207acb"],{"0205":function(e,t,a){var i=a("3307");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("ac44c870",i,!0,{sourceMap:!1,shadowMode:!1})},"0ab2":function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".audaque-nav-menu{height:100%;overflow:auto}.el-icon-arrow-down:before{color:#94a6bf}",""])},"320e":function(e,t,a){var i=a("4727");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("787a5e9d",i,!0,{sourceMap:!1,shadowMode:!1})},3307:function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".audaque-idata-menu-item[data-v-7b826a5a]{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:14px;color:#6c7280;line-height:40px;padding-left:6px;border-left:2px solid #dfe1e6;cursor:pointer;white-space:normal}.audaque-idata-menu-item[data-v-7b826a5a]:hover{-webkit-box-shadow:1px 0 14px 0 rgba(213,219,236,.5);box-shadow:1px 0 14px 0 rgba(213,219,236,.5)}.audaque-idata-menu-item__is-active[data-v-7b826a5a]{color:#5394eb}",""])},3372:function(e,t,a){"use strict";a("70d4")},4727:function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,'[data-v-819e6f86] .el-menu{height:100%}[data-v-819e6f86] .el-menu .el-menu-item,[data-v-819e6f86] .el-menu .el-submenu__title{height:50px;line-height:50px}[data-v-819e6f86] .el-menu .el-menu-item:hover{background-color:#395370!important}[data-v-819e6f86] .el-menu .el-menu-item.is-active{background-color:#395370!important;position:relative}[data-v-819e6f86] .el-menu .el-menu-item.is-active:before{border-left-color:#008aff;border-left-width:3px;border-left-style:solid;display:block;content:"";height:100%;left:0;position:absolute}',""])},"55f0":function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,'.audaque-idata-menu[data-v-55cd7936]{width:250px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:#fff;height:100%;overflow:auto}.audaque-idata-menu .app-name-layout[data-v-55cd7936]{position:relative;font-weight:700;color:#282b33;font-size:20px;text-align:left;padding:22px 36px 22px 22px;margin-bottom:10px}.audaque-idata-menu .app-name-layout[data-v-55cd7936]:after{position:absolute;bottom:0;content:"";border:dashed #dfe1e6;border-width:0 0 1px;left:20px;right:36px}.audaque-idata-menu .menu-layout[data-v-55cd7936]{padding-left:20px;padding-right:10px}.audaque-idata-menu .menu-layout .submenu-group-layout[data-v-55cd7936]{padding-left:14px}.audaque-idata-menu .menu-layout .item-layout[data-v-55cd7936]{margin-left:14px}',""])},"70d4":function(e,t,a){var i=a("55f0");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("21924ad8",i,!0,{sourceMap:!1,shadowMode:!1})},"7a754":function(e,t,a){var i=a("dd52");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("4cff3234",i,!0,{sourceMap:!1,shadowMode:!1})},8223:function(e,t,a){"use strict";a.r(t),a("7f7f");var i={mixins:[a("a215").default],name:"AudaqueIdataMenuItemGroup",componentName:"AudaqueIdataMenuItemGroup",data:function(){return{expandAll:!1}},watch:{},props:{index:{default:null,validator:function(e){return"string"==typeof e||null===e}},title:{type:String},active:{type:Boolean,default:!1},isGroup:{type:Boolean},name:{type:String}},mounted:function(){this.dispatch("AudaqueIdataMenu","audaque.submenu.addgroup",[this])},methods:{expandAllSubmenu:function(){this.expandAll=!0},handleClick:function(){this.$emit("menu-group-click")}}},n=(a("af3b"),a("2877")),u=Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"audaque-idata-menu-item-group"},[t("div",{staticClass:"audaque-idata-menu-item-group__content",class:{"audaque-idata-menu-item-group__content--is-active":e.active}},[e.isGroup?t("div",{staticClass:"click-title-layout",class:{"click-title-layout--is-active":e.active},on:{click:e.handleClick}},[e._t("clickTitle",(function(){return[t("span",[e._v(e._s(e.name))])]}))],2):t("div",{staticClass:"title-layout",on:{click:function(t){e.expandAll=!e.expandAll}}},[t("div",{staticClass:"title-content"},[e._t("title",(function(){return[t("span",[e._v(e._s(e.name))])]}))],2),t("i",{class:["iconfront",e.expandAll?"el-icon-caret-bottom":"el-icon-caret-right"]})])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.expandAll,expression:"expandAll"}]},[e._t("default")],2)])}),[],!1,null,"197cd106",null);t.default=u.exports},"8e66":function(e,t,a){"use strict";a.r(t),a("7f7f");var i={mixins:[a("a215").default],name:"AudaqueIdataMenuItem",componentName:"AudaqueIdataMenuItem",props:{index:{default:null,validator:function(e){return"string"==typeof e||null===e}},active:{type:Boolean,default:!1},name:{type:String},path:{type:String,require:!0}},computed:{},mounted:function(){this.dispatch("AudaqueIdataMenu","audaque.submenu.additem",[this])},methods:{submenuItemClick:function(){this.$emit("menu-item-click")}}},n=(a("d33a"),a("2877")),u=Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"audaque-idata-menu-item",class:{"audaque-idata-menu-item__is-active":e.active},on:{click:e.submenuItemClick}},[e._t("default",(function(){return[t("span",[e._v(e._s(e.name))])]}))],2)}),[],!1,null,"7b826a5a",null);t.default=u.exports},"95e2":function(e,t,a){var i=a("0ab2");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("05015d69",i,!0,{sourceMap:!1,shadowMode:!1})},"9e32":function(e,t,a){"use strict";a.r(t),a("7f7f");var i={name:"AudaqueNavMenu",mixins:[],data:function(){return{}},props:{data:{type:Array,default:function(){return[]}},path:{type:String}},components:{},watch:{},computed:{},created:function(){},mounted:function(){},methods:{submenuItemClick:function(e){alert(111),this.$emit("item-click",e)}},beforeDestroy:function(){}},n=(a("cfa3"),a("e546"),a("2877")),u=Object(n.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"audaque-nav-menu"},[t("el-menu",{staticStyle:{width:"200px"},attrs:{"default-active":e.path,"background-color":"#1E2936","text-color":"#94A6BF","active-text-color":"#fff"}},[e._l(e.data,(function(a,i){return[a.children&&a.children.length>0?t("el-submenu",{key:i,attrs:{index:i+""}},[t("template",{slot:"title"},[t("i",{staticClass:"iconfont",class:a.icon||"main-biaoqian1",staticStyle:{color:"#94a6bf"}}),t("span",{staticStyle:{"padding-left":"8px"}},[e._v(e._s(a.name))])]),e._l(a.children,(function(a,n){return[a.children&&a.children.length>0?t("el-submenu",{key:n,attrs:{index:i+"-"+n}},[t("template",{slot:"title"},[e._v(e._s(a.name))]),e._l(a.children,(function(a,i){return t("el-menu-item",{key:i,attrs:{index:a.route},on:{click:function(t){return e.submenuItemClick(a)}}},[e._v("\n                            "+e._s(a.name)+"\n                        ")])}))],2):t("el-menu-item",{key:n,attrs:{index:a.route},on:{click:function(t){return e.submenuItemClick(a)}}},[e._v("\n                        "+e._s(a.name)+"\n                    ")])]}))],2):t("el-menu-item",{key:i,attrs:{index:a.route},on:{click:function(t){return e.submenuItemClick(a)}}},[e._v("\n                "+e._s(a.name)+"\n            ")])]}))],2)],1)}),[],!1,null,"819e6f86",null);t.default=u.exports},a215:function(e,t,a){"use strict";function i(e,t,a){this.$children.forEach((function(n){n.$options.componentName===e?n.$emit.apply(n,[t].concat(a)):i.apply(n,[e,t].concat([a]))}))}a.r(t),a("ac6a"),t.default={methods:{dispatch:function(e,t,a){for(var i=this.$parent||this.$root,n=i.$options.componentName;i&&(!n||n!==e);)(i=i.$parent)&&(n=i.$options.componentName);i&&i.$emit.apply(i,[t].concat(a))},broadcast:function(e,t,a){i.call(this,e,t,a)}}}},a216:function(e,t,a){var i=a("d6af");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,a("499e").default)("734d987b",i,!0,{sourceMap:!1,shadowMode:!1})},af3b:function(e,t,a){"use strict";a("a216")},bb3a:function(e,t,a){"use strict";a.r(t),a("7f7f"),a("6b54"),a("7514");var i=a("8223"),n=a("8e66"),u={name:"AudaqueIdataMenu",componentName:"AudaqueIdataMenu",components:{AudaqueIdataMenuItemGroup:i.default,AudaqueIdataMenuItem:n.default},computed:{},watch:{},props:{title:{type:String,required:!0},data:{type:Array,default:function(){}},urlKey:{type:String,default:"url"},path:{type:String},defaultActive:{type:String}},data:function(){return{groupList:[],itemList:[]}},created:function(){var e=this;this.$on("audaque.submenu.addgroup",(function(t){t&&e.groupList.push(t)})),this.$on("audaque.submenu.additem",(function(t){t&&e.itemList.push(t)}))},beforeUpdate:function(){},mounted:function(){var e=this;setTimeout((function(){e.initOpenedMenu()}),50)},methods:{goPage:function(e){this.$emit("item-click",e)},initOpenedMenu:function(){var e=this,t=this.itemList.find((function(t){return t.path===e.path}));if(t)for(var a=t.$parent||t.$root,i=a.$options.componentName;a&&(!i||"AudaqueIdataMenuItemGroup"===i);)a.expandAll=!0,(a=a.$parent)&&(i=a.$options.componentName)}},destroyed:function(){}},o=(a("3372"),a("2877")),s=Object(o.a)(u,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"audaque-idata-menu"},[t("div",{staticClass:"app-name-layout"},[e._v(e._s(e.title))]),t("div",{staticClass:"menu-layout"},e._l(e.data,(function(a,i){return t("audaque-idata-menu-item-group",{key:a.id,attrs:{index:i.toString(),active:a[e.urlKey]===e.path,isGroup:!!a[e.urlKey],name:a.name},on:{"menu-group-click":function(t){return e.goPage(a)}}},[e._l(a.children,(function(a,n){return[a[e.urlKey]?t("audaque-idata-menu-item",{key:a.id,staticClass:"item-layout",attrs:{index:i+"-"+n,active:a[e.urlKey]===e.path,name:a.name,path:a[e.urlKey]},on:{"menu-item-click":function(t){return e.goPage(a)}}}):t("audaque-idata-menu-item-group",{key:a.id,staticClass:"submenu-group-layout",attrs:{index:i+"-"+n,active:a[e.urlKey]===e.path,isGroup:!!a[e.urlKey],name:a.name},on:{"menu-group-click":function(t){return e.goPage(a)}}},e._l(a.children,(function(a,u){return t("audaque-idata-menu-item",{key:a.id,staticClass:"item-layout",attrs:{index:i+"-"+n+"-"+u,active:a[e.urlKey]===e.path,name:a.name,path:a[e.urlKey]},on:{"menu-item-click":function(t){return e.goPage(a)}}})})),1)]}))],2)})),1)])}),[],!1,null,"55cd7936",null);t.default=s.exports},ce92:function(e,t,a){"use strict";a("7a754")},cfa3:function(e,t,a){"use strict";a("95e2")},d33a:function(e,t,a){"use strict";a("0205")},d6af:function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".audaque-idata-menu-item-group[data-v-197cd106]{width:100%}.audaque-idata-menu-item-group .audaque-idata-menu-item-group__content[data-v-197cd106]{color:#c2c7d3;font-weight:700;height:40px;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.audaque-idata-menu-item-group .audaque-idata-menu-item-group__content .title-layout[data-v-197cd106]{width:100%;color:#6c7280;font-size:14px;font-weight:400;display:-webkit-box;display:-ms-flexbox;display:flex}.audaque-idata-menu-item-group .audaque-idata-menu-item-group__content .title-layout .title-content[data-v-197cd106]{-webkit-box-flex:1;-ms-flex:1;flex:1}.audaque-idata-menu-item-group .audaque-idata-menu-item-group__content .title-layout .el-icon-arrow-down[data-v-197cd106]:before,.audaque-idata-menu-item-group .audaque-idata-menu-item-group__content .title-layout .el-icon-arrow-right[data-v-197cd106]:before{padding-right:1px}.audaque-idata-menu-item-group .audaque-idata-menu-item-group__content .click-title-layout[data-v-197cd106]{width:100%;height:40px;line-height:40px;cursor:pointer;color:#282b33;font-size:14px;font-weight:700}.audaque-idata-menu-item-group .audaque-idata-menu-item-group__content .click-title-layout[data-v-197cd106]:hover{-webkit-box-shadow:1px 0 14px 0 rgba(213,219,236,.5);box-shadow:1px 0 14px 0 rgba(213,219,236,.5)}.audaque-idata-menu-item-group .audaque-idata-menu-item-group__content .click-title-layout--is-active[data-v-197cd106]{color:#5394eb}.audaque-idata-menu-item-group .audaque-idata-menu-item-group--is-active[data-v-197cd106]{color:#5394eb;background-color:#ecf3fe;border-left-color:#5394eb}",""])},dd52:function(e,t,a){(e.exports=a("2350")(!1)).push([e.i,".audaque-frame-page[data-v-56fea112]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.audaque-frame-page .main-layout[data-v-56fea112]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.audaque-frame-page .main-layout .middle-layout[data-v-56fea112]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;height:0}.audaque-frame-page .main-layout .middle-layout .content-layout[data-v-56fea112]{-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:#fafafa;width:0}",""])},e546:function(e,t,a){"use strict";a("320e")},f7a8:function(e,t,a){"use strict";a.r(t);var i=a("2909"),n=(a("7514"),a("ade3")),u=(a("7f7f"),a("6762"),a("2fdb"),a("c5f6"),a("9e32")),o=a("bb3a"),s={name:"AudaqueFramePage",mixins:[],data:function(){return{currentIndex:0,spreadTreeNodes:[],menuList:[],banners:{},submenuList:[],title:"",isSwitchProduct:!1}},props:{layoutTheme:{type:Number,default:1},applicationName:{type:String},menuIconClass:{type:String,default:""},showHeader:{type:Boolean,default:!0},showNav:{type:Boolean,default:!0},showMenu:{type:Boolean,default:!0},data:{type:Array,required:!0,default:function(){return[]}},projectList:{type:Array,required:!0,default:function(){return[]}},showMore:{type:Boolean,default:!0},urlKey:{type:String,default:"url"},props:{type:Object,default:function(){return{name:"name",children:"systems",id:"mainUrl"}}},path:{type:String}},components:{AudaqueIdataMenu:o.default,AudaqueNavMenu:u.default},watch:{data:{handler:function(e){if(1===this.layoutTheme&&this.handleMenuData(e),this.restorePermission(),this.isSwitchProduct&&"route"===this.urlKey){var t={index:0,item:this.menuList[0]};this.onMeunItemClick(t),this.isSwitchProduct=!1}}}},computed:{isShowMenu:function(){return[1,2,5].includes(this.layoutTheme)},isShowSubMenu:function(){return[1,4].includes(this.layoutTheme)||this.showSubmenu}},created:function(){},mounted:function(){this.$nextTick((function(){document.querySelector(".audaque-menu__icon.iconpeizhi").parentNode.parentNode.classList.add("setmovebottom")}))},methods:{handleMenuPositon:function(e){if(this.menuList.length>0){var t=sessionStorage.getItem("menuListedLastPath"),a=this.findModuleByPath(t),i=this.findModuleByPath(e)||a||{order:[-1],path:""};this.currentIndex=i.order[0],this.currentIndex<0?this.submenuList=[]:(this.submenuList=this.banners[this.menuList[this.currentIndex].id],this.title=this.menuList[this.currentIndex].name)}},onItemClick:function(e){this.$emit("item-click",e)},onProductClick:function(e){this.isSwitchProduct=!0,this.$emit("product-click",e)},onMeunItemClick:function(e){var t=e.item,a=t[this.urlKey];if(this.title=e.item.name,a)this.$refs.submenu.close(),this.submenuList=[],this.$emit("item-click",t);else if(this.currentIndex!==e.index||this.isSwitchProduct)if(this.submenuList=this.banners[t.id],this.submenuList&&this.submenuList.length>0){this.$refs.submenu.open();var i=this.submenuList[0];if(i[this.urlKey])this.$emit("item-click",i),this.$emit("page-permission",i);else{var n=this.submenuList[0].children[0];this.$emit("item-click",n),this.$emit("page-permission",n)}}else this.$refs.submenu.close();else this.$refs.submenu.toggleSubmenu();this.currentIndex=e.index},handleMenuData:function(e){var t=this;this.spreadTree(e),this.menuList=(e||[]).map((function(e){return t.banners[e.id]=e.children||[],Object(n.a)({name:e.name,id:e.id,simpleName:e.simpleName||e.name,iconClass:e.icon?e.icon:t.menuIconClass,url:e[t.urlKey]},t.urlKey,e[t.urlKey])}));var a=sessionStorage.getItem("menuListedLastPath"),i=this.findModuleByPath(a),u=this.findModuleByPath(this.$route.path)||i||{order:[-1],path:""};this.currentIndex=u.order[0],this.currentIndex<0?this.submenuList=[]:(this.submenuList=this.banners[this.menuList[this.currentIndex].id],this.title=(e||[])[this.currentIndex].name)},switchProduct:function(){},restorePermission:function(){this.$emit("restore-permission",this.path)},findModuleByPath:function(e){return this.spreadTreeNodes.find((function(t){return t.path===e}))},spreadTree:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=0;a<e.length;a++)e[a].children&&e[a].children.length>0?this.spreadTree(e[a].children,[].concat(Object(i.a)(t),[a])):this.spreadTreeNodes.push({order:[].concat(Object(i.a)(t),[a]),path:e[a][this.urlKey]})},handlePermission:function(e){var t=e.permissions;this.SET_PERMISSION(t)}},beforeDestroy:function(){}},r=(a("ce92"),a("2877")),d=Object(r.a)(s,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"audaque-frame-page"},[e.isShowMenu&&e.showNav?t("div",[1===e.layoutTheme?t("audaque-menu",{attrs:{"show-more":e.showMore,"project-list":e.projectList,"default-active":e.currentIndex,data:e.menuList,props:e.props},on:{"menu-click":e.onMeunItemClick,"product-click":e.onProductClick}}):2===e.layoutTheme?t("audaque-nav-menu",{attrs:{data:e.data,path:e.path},on:{"item-click":e.onItemClick}}):5===e.layoutTheme?t("audaque-idata-menu",{attrs:{title:e.applicationName,"url-key":e.urlKey,data:e.data,path:e.path},on:{"item-click":e.onItemClick}}):e._e()],1):e._e(),t("div",{staticClass:"main-layout"},[e.showHeader?e._t("toolbar"):e._e(),t("div",{staticClass:"middle-layout"},[e.isShowSubMenu&&e.showMenu?t("div",[t("audaque-submenu",{ref:"submenu",attrs:{"url-key":e.urlKey,data:e.submenuList,title:e.title,path:e.$route.fullPath},on:{"submenu-click":e.onItemClick}})],1):e._e(),t("div",{staticClass:"content-layout"},[e._t("default")],2)])],2)])}),[],!1,null,"56fea112",null);t.default=d.exports}}]);