(function(e){function t(t){for(var n,o,r=t[0],i=t[1],d=t[2],c=0,v=[];c<r.length;c++)o=r[c],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&v.push(l[o][0]),l[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(v.length)v.shift()();return u.push.apply(u,d||[]),a()}function a(){for(var e,t=0;t<u.length;t++){for(var a=u[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==l[i]&&(n=!1)}n&&(u.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},l={app:0},u=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var s=i;u.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),l=a.n(n);l.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"},on:{touchmove:function(e){e.preventDefault()}}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"基金代码"},model:{value:e.fundData.code,callback:function(t){e.$set(e.fundData,"code",t)},expression:"fundData.code"}})],1),a("el-form-item",[a("el-select",{attrs:{placeholder:"周期"},model:{value:e.fundData.time,callback:function(t){e.$set(e.fundData,"time",t)},expression:"fundData.time"}},e._l(e.fund_years,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.showChart1}},[e._v("查询")])],1)],1),a("span",[e._v(e._s(e.fundData.name))]),a("canvas",{staticStyle:{width:"100%",height:"280px"},attrs:{id:"container"}})],1)},u=[],o=a("2095"),r=a.n(o),i=(a("b0c0"),a("b680"),a("1157")),d=a.n(i);function s(e){d.a.ajax({type:"GET",url:"https://api.doctorxiong.club/v1/fund/detail?code="+e.code,success:function(t){console.log(t["data"]["name"]),e["name"]=t["data"]["name"]},error:function(e){console.log("err::"+JSON.stringify(e))}})}function c(e){console.log("getFundCurInfo"),s(e),d.a.ajax({type:"GET",url:"https://fundmobapi.eastmoney.com/FundMApi/FundYieldDiagramNew.ashx?callback=jQuery311018968983467629652_1591665961187&FCODE="+e.code+"&RANGE="+e.time+"&deviceid=Wap&plat=Wap&product=EFund&version=2.0.0&Uid=8516335796029258&_=1591665961203",jsonpCallback:"jQuery311018968983467629652_1591665961187",dataType:"jsonp",success:function(e){console.log("jquery基金累计收益::",JSON.stringify(e));for(var t=[],a=[],n=0;n<e["Datas"].length;n++)t.push({time:e["Datas"][n]["PDATE"],val:e["Datas"][n]["YIELD"],type:"累计收益"}),a.push(e["Datas"][n]["YIELD"]);for(n=0;n<4;n++){var l=[];l=f(0==n?5:10*n,a);for(var u=0;u<e["Datas"].length;u++)0==n?t.push({time:e["Datas"][u]["PDATE"],val:l[u],type:"MA5"}):t.push({time:e["Datas"][u]["PDATE"],val:l[u],type:"MA"+10*n})}console.log(t),v(t)},error:function(e){console.log("err::"+JSON.stringify(e))}})}function v(e){var t=new r.a.Chart({id:"container",pixelRatio:window.devicePixelRatio});t.source(e,{time:{tickCount:4}}),t.legend({align:"center",itemWidth:!0}),t.tooltip({showCrosshairs:!0}),t.line().position("time*val").color("type").style("type",{lineDash:function(e){return null}}),t.render()}function f(e,t){for(var a=[],n=0,l=t.length;n<l;n++)if(n<e)a.push(0);else{for(var u=0,o=0;o<e;o++)u+=t[n-o];a.push((u/e).toFixed(1))}return a}var p={name:"App",components:{},data:function(){return{fundData:{code:"",name:"请选择基金",time:"n"},fund_years:[{value:"y",label:"1个月"},{value:"3y",label:"3个月"},{value:"6y",label:"6个月"},{value:"n",label:"1年"}],data:[{date:"2017-06-05",value:116},{date:"2017-06-06",value:129},{date:"2017-06-07",value:135},{date:"2017-06-08",value:86},{date:"2017-06-09",value:73},{date:"2017-06-10",value:85},{date:"2017-06-11",value:73},{date:"2017-06-12",value:68},{date:"2017-06-13",value:92},{date:"2017-06-14",value:130},{date:"2017-06-15",value:245},{date:"2017-06-16",value:139},{date:"2017-06-17",value:115},{date:"2017-06-18",value:111},{date:"2017-06-19",value:309},{date:"2017-06-20",value:206},{date:"2017-06-21",value:137},{date:"2017-06-22",value:128},{date:"2017-06-23",value:85},{date:"2017-06-24",value:94},{date:"2017-06-25",value:71},{date:"2017-06-26",value:106},{date:"2017-06-27",value:84},{date:"2017-06-28",value:93},{date:"2017-06-29",value:85},{date:"2017-06-30",value:73},{date:"2017-07-01",value:83},{date:"2017-07-02",value:125},{date:"2017-07-03",value:107},{date:"2017-07-04",value:82},{date:"2017-07-05",value:44},{date:"2017-07-06",value:72},{date:"2017-07-07",value:106},{date:"2017-07-08",value:107},{date:"2017-07-09",value:66},{date:"2017-07-10",value:91},{date:"2017-07-11",value:92},{date:"2017-07-12",value:113},{date:"2017-07-13",value:107},{date:"2017-07-14",value:131},{date:"2017-07-15",value:111},{date:"2017-07-16",value:64},{date:"2017-07-17",value:69},{date:"2017-07-18",value:88},{date:"2017-07-19",value:77},{date:"2017-07-20",value:83},{date:"2017-07-21",value:111},{date:"2017-07-22",value:57},{date:"2017-07-23",value:55},{date:"2017-07-24",value:60}]}},mounted:function(){this.showChart1(),document.body.addEventListener("touchmove",(function(e){e.preventDefault(),e.stopPropagation()}),{passive:!1})},methods:{showChart:function(){var e=new r.a.Chart({id:"mountNode",pixelRatio:window.devicePixelRatio});e.source(this.data,{value:{tickCount:5,min:0},date:{type:"timeCat",range:[0,1],tickCount:3}}),e.tooltip({custom:!0,showXTip:!0,showYTip:!0,snap:!0,crosshairsType:"xy",crosshairsStyle:{lineDash:[2],stroke:"rgba(255, 0, 0, 1)",lineWidth:2,fill:"#33b5e5"},xTipBackground:{radius:2,fill:"rgba(246, 122, 31, 1)"},yTipBackground:{radius:2,fill:"rgba(246, 122, 31, 1)"}}),e.axis("date",{label:function(e,t,a){var n={};return 0===t?n.textAlign="left":t===a-1&&(n.textAlign="right"),n}}),e.line().position("date*value"),e.render()},showChart1:function(){c(this.fundData)}}},h=p,m=(a("034f"),a("2877")),y=Object(m["a"])(h,l,u,!1,null,null,null),b=y.exports,g=a("b970"),D=(a("157a"),a("5c96")),w=a.n(D);a("0fae");n["default"].use(w.a),n["default"].use(g["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.c1252267.js.map