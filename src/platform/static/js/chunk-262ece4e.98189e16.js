(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-262ece4e","chunk-2d21a3f4","chunk-2d21a3f4"],{2155:function(t,e,i){(t.exports=i("2350")(!1)).push([t.i,".chartsCustomFour[data-v-8211fb84],.chartsCustomOne[data-v-8211fb84],.chartsCustomThree[data-v-8211fb84],.chartsCustomTwo[data-v-8211fb84]{width:95%;margin:0 auto;height:25vh}.swiper-button-next[data-v-8211fb84],.swiper-button-prev[data-v-8211fb84]{height:1.5rem;top:40%}.leftChartTopCustom[data-v-8211fb84]{width:100%}.leftChartTopCustom .title[data-v-8211fb84]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center nowrap;-ms-flex-align:center nowrap;align-items:center nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:#40d7e5;font-weight:700;font-size:1rem;padding:1.5vh 0 0 2vh}.leftChartTopCustom .title img[data-v-8211fb84]{width:4rem;height:auto;vertical-align:middle}",""])},"79e7":function(t,e,i){"use strict";i.r(e),i("ac4d"),i("8a81"),i("5df3"),i("1c4c"),i("6b54"),i("8e6e"),i("ac6a"),i("456d"),i("6762"),i("2fdb"),i("7f7f");var o=i("ade3"),a=i("2f62"),r=i("313e"),n=i("7212");function s(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return l(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n=!0,s=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return n=t.done,t},e:function(t){s=!0,r=t},f:function(){try{n||null==i.return||i.return()}finally{if(s)throw r}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){Object(o.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}i("dfa4");var h={props:{allData:{type:Array,default:function(){return[]}},type:{type:String,default:"bar"}},data:function(){return{swiperOption:{effect:"coverflow",grabCursor:!0,centeredSlides:!0,touchStartPreventDefault:!1,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:-80,depth:400,modifier:.5,slideShadows:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!1,on:{click:function(){},slideChange:function(){}}},xData:[],actualData:[],actualRateData:[],registeredData:[],registeredRateData:[],permanentData:[],permanentRateData:[],floatingData:[],floatingRateData:[]}},components:{swiper:n.swiper,swiperSlide:n.swiperSlide},computed:{},mounted:function(){var t=this;this.GET_BIGSCREEN_DATA({code:"rk_rkfz"}).then((function(e){var i=e.code,o=e.result.rkfz;if(1==i&&o){for(var a=0;a<o.length;a++)t.xData.push(o[a].statistics_year),t.actualData.push(o[a].actual_population),t.actualRateData.push(o[a].permanent_population_rate),t.registeredData.push(o[a].registered_population),t.registeredRateData.push(o[a].registered_population_rate),t.permanentData.push(o[a].permanent_population),t.permanentRateData.push(o[a].permanent_population_rate),t.floatingData.push(o[a].floating_population),t.floatingRateData.push(o[a].registered_population_rate);t.initLeftChartsTop("myChartLeftChartTopOne",t.actualData,t.actualRateData,"chartsCustomOne","实有人口"),t.initLeftChartsTop("myChartLeftChartTopTwo",t.registeredData,t.registeredRateData,"chartsCustomTwo","户籍人口"),t.initLeftChartsTop("myChartLeftChartTopThree",t.permanentData,t.permanentRateData,"chartsCustomThree","常住人口"),t.initLeftChartsTop("myChartLeftChartTopFour",t.floatingData,t.floatingRateData,"chartsCustomFour","流动人口")}}))},methods:f(f({},Object(a.b)("largescreen",["GET_BIGSCREEN_DATA"])),{},{fontSize:function(t){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(e){var i=t*(e/1920);return i}},initLeftChartsTop:function(t,e,i,o,a){for(var n=this,l=[],c=this.xData.length-1;c>=0;c--)l.push([this.xData[c],i[c]]);window[t]={};var f={xAxis:{type:"category",boundaryGap:"bar"===this.type,data:this.xData,axisLabel:{interval:0,textStyle:{color:"#fff",fontSize:this.fontSize(10)}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#415efd"}}},tooltip:{extraCssText:"background:#08132f;color:#fff;border:1px solid #fff;border-radius:0;",trigger:"axis",confine:!0,formatter:function(t){return t.length<4?"<div>".concat(t[0].name,"年</div><div>").concat(t[0].seriesName,"：").concat(t[0].data).concat(t[0].seriesName.includes("率")?"%":"人","</div>"):"<div>".concat(t[0].name,"年</div><div>").concat(t[1].seriesName,"：").concat(t[1].data,"人</div><div>").concat(t[3].seriesName,"：：").concat(t[3].data,"%</div>")}},legend:[{bottom:this.fontSize(10),left:this.fontSize(78),data:[{name:a,icon:"circle"}],itemHeight:this.fontSize(9),textStyle:{color:"#fff",borderColor:"#fff",fontSize:this.fontSize(12),height:this.fontSize(9),padding:[0,0,0,-this.fontSize(6),this.fontSize(4)],rich:{a:{verticalAlign:"middle"}}}},{bottom:this.fontSize(10),right:this.fontSize(78),data:[{name:"".concat(a,"增长率"),icon:"roundRect"}],itemHeight:this.fontSize(4),textStyle:{color:"#fff",borderColor:"#fff",fontSize:this.fontSize(12),height:this.fontSize(10),rich:{a:{verticalAlign:"middle"}}}}],yAxis:[{type:"value",name:"（万人）",splitNumber:6,nameTextStyle:{color:"#fff",padding:[this.fontSize(5),this.fontSize(20),0,0],fontSize:this.fontSize(10)},position:"left",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#415efd"}},axisLabel:{show:!0,textStyle:{color:"#fff",fontSize:this.fontSize(10)},formatter:function(t){return t>=1e4?t/1e4:t}}},{type:"value",name:"（%）",splitNumber:4,nameTextStyle:{color:"#fff",padding:[this.fontSize(5),0,0,this.fontSize(40)],fontSize:this.fontSize(10)},position:"right",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#415efd"}},axisLabel:{show:!0,formatter:function(t){return(t>=10?t:t.toFixed(1))+"%"},textStyle:{color:"#fff",fontSize:this.fontSize(10)}}}],grid:{left:this.fontSize(20),right:this.fontSize(25),top:this.fontSize(40),bottom:this.fontSize(50),containLabel:!0},color:["bar"===this.type?"#5CFAFF":"#0E9CFF"],series:[{name:a,type:"pictorialBar",symbolSize:[this.fontSize(16),this.fontSize(8)],symbolOffset:[0,-3],z:12,data:e,symbolPosition:"end",itemStyle:{normal:{color:new r.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#19F1FF"},{offset:1,color:"#19F1FF"}],!1)}}},{name:a,type:"pictorialBar",symbolSize:[this.fontSize(15),-this.fontSize(5)],symbolOffset:[0,-1],z:12,data:e,itemStyle:{normal:{color:new r.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(25,241,255,0.6)"},{offset:1,color:"rgba(25,241,255,0.6)"}])}}},{name:a,type:"bar",barWidth:this.fontSize(16),yAxisIndex:0,barGap:"0%",z:11,data:e,itemStyle:{normal:{label:{show:!0,position:"top",textStyle:{color:"rgba(30,237,227)",fontSize:this.fontSize(10)}},color:function(){return new r.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(6,158,177,1)"},{offset:.35,color:"rgba(5,111,137,1)"},{offset:.65,color:"rgba(5,111,137,1)"},{offset:1,color:"rgba(6,158,177,1)"}])}}}},{name:"".concat(a,"增长率"),type:"line",yAxisIndex:1,smooth:!1,z:14,showAllSymbol:!0,boundaryGap:!1,symbol:"circle",symbolSize:this.fontSize(5),itemStyle:{color:"#19F1FF"},lineStyle:{color:"rgba(31, 188, 232, 1)"},areaStyle:{color:new r.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(30, 237, 227, 0)"},{offset:1,color:"rgba(30, 237, 227, 0.5)"}])},data:i},{name:"".concat(a,"增长率"),type:"effectScatter",coordinateSystem:"cartesian2d",data:l,yAxisIndex:1,symbolSize:this.fontSize(10),showEffectOn:"render",rippleEffect:{brushType:"stroke"},symbol:"circle",hoverAnimation:!0,itemStyle:{normal:{shadowBlur:this.fontSize(15),shadowColor:"#333"}},zlevel:1}]};setTimeout((function(){var e=document.getElementsByClassName(o);window[t]={};var i,a=s(e);try{for(a.s();!(i=a.n()).done;){var l=i.value;l.setAttribute("_echarts_instance_",""),window[t]=r.init(l),window[t].setOption(f)}}catch(t){a.e(t)}finally{a.f()}n.$emit("resize")}))}})},p=(i("877a"),i("2877")),u=Object(p.a)(h,(function(){var t=this._self._c;return t("div",{staticClass:"leftChartTopCustom"},[t("div",{staticClass:"title"},[t("img",{attrs:{src:i("bb64")}}),t("span",[this._v("  人口发展情况")])]),t("swiper",{attrs:{options:this.swiperOption}},[t("swiper-slide",[t("div",{staticClass:"chartsCustomOne",attrs:{id:"leftChartTop"}})]),t("swiper-slide",[t("div",{staticClass:"chartsCustomTwo"})]),t("swiper-slide",[t("div",{staticClass:"chartsCustomThree"})]),t("swiper-slide",[t("div",{staticClass:"chartsCustomFour"})]),t("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)],1)}),[],!1,null,"8211fb84",null);e.default=u.exports},"877a":function(t,e,i){"use strict";i("d937")},bb64:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAOCAYAAABgmT8gAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZBNTk3RTRCOTY4MTFFREEwNDVDNzA3OTRFOEY4QTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0NDRDZCMkNCOTZCMTFFREEwNDVDNzA3OTRFOEY4QTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRkE1OTdFMkI5NjgxMUVEQTA0NUM3MDc5NEU4RjhBMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRkE1OTdFM0I5NjgxMUVEQTA0NUM3MDc5NEU4RjhBMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgsiMdgAAAVGSURBVHjajJa9b1xFEMB37s4OjvwBtpU4RErkj4tCge9MZQpoItEgHCWioEApKfMnkMYSLY0LhFJA5YbEsWPRRAodsUTkU1ImZ8Upgk2MP+6MTeJ3b/jN7t75nWMET/feztud3Z3fzOy8k8nvVp0T9x+XtDX/R9WuyuVeKd+p6XFqlakeKS/U9biJlaluKc/varM7u8CjT7tlfHFX/21PeevPnRzv/ci7pZ+2/27b9GqfOJHzrPi6fGvnxVGgypXeYRQGVfVhea6WZhcH5l0nOikqP5fu1Pbb5l3uedupfCGi86X5+ousVZXPuk/QfM2+98rz9ftZIINRcdOISenu7o3jgTZ2CrQDdAKmW4Xlpy2og4miwRZVXTevv3dUnvjND8pjzXVKbHZO1K3RPhRxact16t7j+RFK28gLyPvNAfTPMftLBNP/kc4XZhP72JqDPL5BPIXqt3Tf92Nh6gnGfkD6WFS/LzxeuXE08vmuTz5P0zMDr9ikC6+cTM/0J7m1zcQPrm0q79tEoRvYgXSoXxirp0PG792yjgldgJzltZf3NTbV6LENCRAXaM/Trphnoyd2uJ+zZ4l2nNbG6jaP3x7yA4RJ2ku2B33PxJYVafC+CNkEe15NT/X35v7Y+qUN6MS1r8zwtGFQDijnTjaG+pN8hMoZ1FD/Nh6yKHko9DLJL+vmDA+lQEmAil59SVrtY4qHEg8lScwRoOQ5com54+is0F2PjtqjeUA7KRFKPZTPP5u/iPgB/Vf09DttUB4oRsNDmcctUjo00IqUQemZgW3GPFTINqmLF8x3eFG8M85yh0ixtXjb5KWlG1oXkGOkNAlz3Q73cxcjRbvCnKazLFK/0v+hQUkGquNxNQGESBmUXEmBykeoFlATinR6xZwuDDiZHoGySEmMlNlDZEKahHCshwgr6Sc+UozbsTCVl+EMCVAaI+USDYm7oxYpg3JA2RhQLgvlDEouWTZw7p7l17dcbn0rAWRRpB0qd0zVTYFR9fa63NEx+htRLhiJxgOrofOVmcjEznD2w0nWUKlIPWVtoQhJRzhosTKrWiE6YLl8TPvsZUdhD4usQPVmazj6r1l8Kxa5weT9kXybwcnEWI7NKcNsSnWiqu21Kl55zGIxyoNa7jbUUqV1/v11kbci8zeRl+hvNFMS7GEkSxuDusu8WoDxDjnNnGtodeLFWaJVNQ+EbHU9PKfRGcH6m0DdCemAPeOjefabYZ0p1ryN8nWqXqNwCFM0uEHnPQ/MchamaKuMsk8f3txAXpX2yF2kKbL4JhYuqVWzQwUPw/s+hi6AUAvlOcAwDozrxKhZ2moY81HtobFvzgj3Te65WAXdAZFgbIaXKfRuI1/nXPnMyTW/N6wzyDIF8uQNGDYIkVG3Uag8XdXDZLFDAkyIjBqMGEwrcsOIl1Del/AtqnkUW1GAsciIwQgwUm2mKBcwMi1ZmBhtO+o8gdEp5Aiz0mjamzMYOkNknGwXMmlG1CzAo6zTp6LAPFnNpihbX0ShiCM20VuyKRJp1SKjvuRS4dyCttLMPlTqI8PdyT2LcVXvhOCFHrSAUQ9D15w0zyIwPGdwBjByW47A2FWwKKp/uDYYF7/cMak2iNpq9p9GPAGWHZtYsuS/D7EMxCpgan8hLrJQzX9CtPkvxceIKuduoVu18qMuE3arK0pkhMioa3Wqr6yGrXOsy5mpNt4oaj33fvORKCw/OfZPZELKAartfWMuU6XyLhaAGBnvaQ3Vy1I5lZj8qs2q5o3jrGoSrIywrXmOKugOjjowJnnBCmjHozdh7PpHgAEADQZ8Cmhen74AAAAASUVORK5CYII="},d937:function(t,e,i){var o=i("2155");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),(0,i("499e").default)("5f61a68a",o,!0,{sourceMap:!1,shadowMode:!1})}}]);