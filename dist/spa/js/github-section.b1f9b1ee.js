(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["github-section"],{"202c":function(t,a,s){},d929:function(t,a,s){"use strict";var e=s("202c"),i=s.n(e);i.a},e028:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"container-label"},[t._v("\n        Git Repos\n    ")]),s("div",{staticClass:"container-body"},[s("q-carousel",{staticClass:"bg-white text-black shadow-1 rounded-borders no-shadow",attrs:{"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary",padding:"",arrows:"",height:"300px"},model:{value:t.slide,callback:function(a){t.slide=a},expression:"slide"}},t._l(t.repos,(function(a,e){return s("q-carousel-slide",{key:e,staticClass:"column no-wrap",attrs:{name:e}},[s("div",{staticClass:"row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"},[s("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[s("q-card-section",{staticClass:"card-head column"},[s("div",{staticClass:"text-h6 card-head-title col-12"},[s("span",{staticStyle:{margin:"auto"}},[t._v(t._s(a.name))])])]),s("q-card-section",[t._v("\n                            "+t._s(a.description||"N/A")+"\n                        ")]),s("q-separator",{attrs:{inset:""}}),s("q-card-section",{staticClass:"row"},[s("div",{staticClass:"col-auto",staticStyle:{display:"flex"}},[s("p",{staticStyle:{margin:"auto"}},[t._v("\n                                    "+t._s(a.created_at)+"\n                                ")])]),s("div",{staticClass:"card-links col-auto"},[s("div",{staticClass:"card-links-a"},[s("a",{attrs:{href:a.html_url,target:"_blank"}},[s("q-tooltip",[t._v("View code on github")]),s("q-icon",{attrs:{name:"code"}})],1)])])])],1)],1)])})),1)],1)])},i=[],r={props:["repos"],data:function(){return{slide:0}}},n=r,c=(s("d929"),s("2877")),o=s("eebe"),l=s.n(o),d=s("880c"),u=s("62cd"),p=s("f09f"),f=s("a370"),v=s("eb85"),C=s("05c0"),b=s("0016"),w=Object(c["a"])(n,e,i,!1,null,"f0ec7d82",null);a["default"]=w.exports;l()(w,"components",{QCarousel:d["a"],QCarouselSlide:u["a"],QCard:p["a"],QCardSection:f["a"],QSeparator:v["a"],QTooltip:C["a"],QIcon:b["a"]})}}]);