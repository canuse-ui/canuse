(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9a25e10"],{2888:function(i,t,s){"use strict";var l=s("c309"),e=s.n(l);e.a},"5dc8":function(i,t,s){"use strict";s.r(t);var l=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"canuse"},[s("ul",[s("li",[s("div",{staticClass:"fz-24"},[i._v("表格 Table")]),s("div",{staticClass:"bcl-white p-20 boxshadow"},[s("div",{staticClass:"title"},[i._v("基础")]),s("div",[s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("code",{staticClass:"html"},[i._v("\n            "+i._s(i.html1)+"\n          ")])])]),s("div",{staticClass:"title"},[i._v("底部边框")]),s("div",[s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("code",{staticClass:"html"},[i._v("\n            "+i._s(i.html2)+"\n          ")])])]),s("div",{staticClass:"title"},[i._v("斑马线")]),s("div",[s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("code",{staticClass:"html"},[i._v("\n            "+i._s(i.html3)+"\n          ")])])]),s("div",{staticClass:"title"},[i._v("设置指定列宽度")]),s("div",[s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("code",{staticClass:"html"},[i._v("\n            // 表列同步设置flex或者width就行，默认flex：1（设置width时要将flex设为none）\n            "+i._s(i.html4)+"\n          ")])])]),s("div",{staticClass:"title"},[i._v("表头粘性定位")]),s("div",[s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("code",{staticClass:"html"},[i._v("\n            "+i._s(i.html5)+"\n          ")])])])])])])])},e=[],a={data:function(){return{html1:'<ul class="canuse-table">\n              // 表头\n              <li class="th">\n                <div class="td">姓名</div>\n                <div class="td">年龄</div>\n                <div class="td">性别</div>\n                <div class="td">所在的地区</div>\n                <div class="td">兴趣</div>\n              </li>\n\n              // 表行\n              <li class="tr" v-for="(item, index) in list" :key="index">\n                <div class="td">{{ item.name }}</div>\n                <div class="td">{{ item.age }}</div>\n                <div class="td">{{ item.sex }}</div>\n                <div class="td">{{ item.provice }}</div>\n                <div class="td">{{ item.hobby }}</div>\n              </li>\n            </ul>',html2:'<ul class="canuse-table canuse-table--border"></ul>',html3:'<ul class="canuse-table canuse-table--stripe"></ul>',html4:'<ul class="canuse-table">\n                <li class="th">\n                  <div class="td" style="flex: 2;">所在的地区</div>\n                  <div class="td" style="width: 100px; flex: none;">兴趣</div>\n                </li>\n                <li class="tr" v-for="(item, index) in list" :key="index">\n                  <div class="td" style="flex: 2;">{{ item.provice }}</div>\n                  <div class="td" style="width: 100px; flex: none;">{{ item.hobby }}</div>\n                </li>\n              </ul>',html5:'<ul class="canuse-table">\n              // 表头设置.sticky类名即可，参考链接在下面\n              <li class="th sticky"></li>\n            </ul>'}},created:function(){console.log("production")}},n=a,d=(s("2888"),s("2877")),c=Object(d["a"])(n,l,e,!1,null,"df2cb59e",null);t["default"]=c.exports},c309:function(i,t,s){}}]);