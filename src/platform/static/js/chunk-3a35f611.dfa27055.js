(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3a35f611","chunk-2d0b9f99","chunk-2d21f441"],{"0112":function(e,t,n){"use strict";n("330e")},"0639":function(e,t,n){var i=n("b041");(e.exports=n("2350")(!1)).push([e.i,".card[data-v-47d0ff70]{width:90%;font-size:.875rem;margin:0 auto}.card .name[data-v-47d0ff70]{display:inline-block;color:#fff;width:48%;text-align:left}.card .num[data-v-47d0ff70]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.card .num span[data-v-47d0ff70]:first-child{font-size:1.75rem}.card .num span[data-v-47d0ff70]:nth-child(2){color:#fff}.card>div:nth-child(odd) .number_screen[data-v-47d0ff70]{color:#83f1b8}.card>div:nth-child(2n) .number_screen[data-v-47d0ff70]{color:#f8bf21}.card>div[data-v-47d0ff70]{background-image:url("+i(n("34df"))+");background-repeat:no-repeat;background-size:100% 100%;background-position:50%;display:inline-block;width:46%;margin:1%;height:6vh;padding:1.5vh 1.2rem}.card>div>div[data-v-47d0ff70]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.card>div>div[data-v-47d0ff70],.title[data-v-47d0ff70]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.title[data-v-47d0ff70]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center nowrap;-ms-flex-align:center nowrap;align-items:center nowrap;color:#40d7e5;font-weight:700;font-size:1rem;padding:1.5vh 1.3rem 0 2vh}.title img[data-v-47d0ff70]{width:4rem;height:auto;vertical-align:middle}",""])},2672:function(e,t,n){"use strict";n.r(t),n("7f7f"),n("8e6e"),n("ac6a"),n("456d");var i=n("ade3"),a=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var c={props:{allData:{type:Array,default:function(){return[]}},type:{type:String,default:"line"}},data:function(){return{cardList:[{name:"胶州单亲家庭占比",num:"-"},{name:"全国单亲家庭占比",num:"-"},{name:"胶州未婚同居率",num:"-"},{name:"全国未婚同居率",num:"-"},{name:"胶州非婚生育占比",num:"-"},{name:"全国非婚生育占比",num:"-"}]}},components:{},computed:{},mounted:function(){var e=this;this.GET_BIGSCREEN_DATA({code:"hy_fctjt"}).then((function(t){var n=t.code,i=t.result.fctjt;1==n&&i&&(e.cardList=[{name:"胶州单亲家庭占比",num:i.jz_one_parent_family_num},{name:"全国单亲家庭占比",num:i.nation_one_parent_family_num},{name:"胶州未婚同居率",num:i.jz_live_together},{name:"全国未婚同居率",num:i.nation_live_together},{name:"胶州非婚生育占比",num:i.jz_unmarried_child_rate},{name:"全国非婚生育占比",num:i.nation_unmarried_child_rate}])}))},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(a.b)("largescreen",["GET_BIGSCREEN_DATA"]))},o=(n("0112"),n("2877")),d=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"chartTopCustom"},[t("div",{staticClass:"title"},[t("span",[e._v("非传统家庭分析  ")]),t("img",{attrs:{src:n("d8a8")}})]),t("div",{staticClass:"card"},e._l(e.cardList,(function(n,i){return t("div",{key:i},[t("div",[t("span",{staticClass:"name"},[e._v(e._s(n.name))]),t("span",{staticClass:"num"},[t("span",{staticClass:"number_screen"},[e._v(e._s(n.num))]),t("span",[e._v("%")])])])])})),0)])}),[],!1,null,"47d0ff70",null);t.default=d.exports},"330e":function(e,t,n){var i=n("0639");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,n("499e").default)("09237c50",i,!0,{sourceMap:!1,shadowMode:!1})},"34df":function(e,t,n){e.exports=n.p+"static/img/right_block1_bg.f96476f0.png"},d8a8:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAOCAYAAABgmT8gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDlBOUZEN0VCOTdEMTFFREEwNDVDNzA3OTRFOEY4QTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjg4NjMwMjhCOTdFMTFFREEwNDVDNzA3OTRFOEY4QTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowOUE5RkQ3Q0I5N0QxMUVEQTA0NUM3MDc5NEU4RjhBMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowOUE5RkQ3REI5N0QxMUVEQTA0NUM3MDc5NEU4RjhBMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsiGh5wAAAL2SURBVHja3JbLb4xhFIdneqHTEqUUpZrSEUmFkhCJCK2wsW5F3GLHwkZsLFwiYiWx4s+wohqESETFXV1CUvQmYVBarZlpp63fSZ4veZ1M47LslzyZzHfmfd/zO7d34hMTE7Gp9BQ1XXye732z2CoOi1FnqxGHxDnxxdmms/ae6Myz73phEXyQx1YpasUjkXO2adi6RcbZ4qKc9+mCPBvvFufFSjHb2ZaKs6JOLHK2ErEHW3WefTeIBrFA+HPt3Toxi6B4MctFmSjNI8Z8TETritwPDogzRLdFpAJbUpxmjX12BLYEYkzkLXHb7btR1Is+cU2MB7aFYq0YEe1i2GXcxBSLLtHvxMzhN7ZmwAs6KI6L12KnK6cV4hSRPSleBTaL2l4cuyHuuEM3sb5HXBdjgd0CsIZy8WJKEGM+vhPf/yQmFGS9cky8QMy3YHE9IiyqJxAcPTPEPjFPtNE74aGbcaoLsWFmFlOCacT8dBlP4t/b0GH2raAUh8Tgb0NBHBFHxVOxyy1eTdZGEBM2+kyxn81bXaPboY30k0X3phOzRKxCRDuiwownqYZO53ABmckrJvpB1KDjTKDJnn+Z73H4G/v/3ht51xXW7jh0lwy0UCJXgtH4iX5pIuI2479iG8GWpHSyNH10WBdZrCOq7wMnBshKNb33MRjVo0TeptdcspgN9k3TO6UEJesF2ed9mqsZ51uDmk7RW1uwmYjPTtQyRJkzvcH+3YzbOpwLRQ1ypomqQlR05+UQHYlKu/snTdmVUmFZL8iehwwDy9Q2cTWYOjbxniHKLtw3ZC+K6EvuqAZKt9uJSiCqElFRP/2AaiZeiiCFosoRlXGiMohKhKJCQTEGQ4pJt11cDkTZHfCEsvSicoiqQVSMkoueHg638pxPs0eZGnKiJstUBU6nnahiMlVo372gGBfmB0rlkptOlsHHlFibG7U5yq+Kz363bx+HDge9FgtEDeBYrztzjDuojP71f4syTGvL7Gi88ULHlPpz+kuAAQBPSeTOCRGmQAAAAABJRU5ErkJggg=="}}]);