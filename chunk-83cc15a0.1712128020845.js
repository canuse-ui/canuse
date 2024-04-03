(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83cc15a0"],{"2b2d":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"canuse"},[e("ul",[e("li",[e("div",{staticClass:"fz-24"},[t._v("骨架屏 Skeleton")]),e("div",{staticClass:"bcl-white p-20 boxshadow mb-20"},[e("div",{staticClass:"title"},[t._v("引入")]),e("div",[e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"javascript"},[t._v("\n            "+t._s(t.html1)+"\n          ")])])])])]),e("li",[e("div",{staticClass:"fz-24"},[t._v("代码演示")]),t._l(t.htmlJS,(function(s,n){return e("div",{key:n,staticClass:"bcl-white p-20 boxshadow mb-20"},[e("div",{staticClass:"title"},[t._v(t._s(s.title))]),e("div",[e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"html"},[t._v("\n            "+t._s(s.html)+"\n          ")])]),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"mt-10"},[e("code",{staticClass:"javascript"},[t._v("\n            "+t._s(s.javascript)+"\n          ")])])])])}))],2),e("li",[e("div",{staticClass:"fz-24"},[t._v("API")]),e("div",{staticClass:"bcl-white p-20 boxshadow mb-20"},[e("div",{staticClass:"title"},[t._v("Props")]),e("ul",{staticClass:"canuse-table canuse-table--border"},[t._m(0),t._l(t.paramsList,(function(s,n){return e("li",{key:n,staticClass:"tr",staticStyle:{"text-align":"left",margin:"0",color:"#34495e"}},[e("div",{staticClass:"td",staticStyle:{margin:"10px 5px"}},[t._v(t._s(s.params))]),e("div",{staticClass:"td",staticStyle:{flex:"2"}},[t._v(t._s(s.intro))]),e("div",{staticClass:"td",staticStyle:{color:"#4fc08d"}},[t._v(t._s(s.type))]),e("div",{staticClass:"td"},[t._v(t._s(s.default))])])}))],2)])])])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"th",staticStyle:{"text-align":"left",margin:"0"}},[e("div",{staticClass:"td",staticStyle:{margin:"10px 5px"}},[t._v("参数")]),e("div",{staticClass:"td",staticStyle:{flex:"2"}},[t._v("说明")]),e("div",{staticClass:"td"},[t._v("类型")]),e("div",{staticClass:"td"},[t._v("默认值")])])}],i={data:function(){return{html1:'import skeleton from "@/canuse-ui/component/exhibition/skeleton";\n\n            components: {\n              "canuse-skeleton": skeleton,\n            },',htmlJS:[{title:"基础",html:' // 组件引用\n              <youxue-skeleton \n                ref="skeleton" \n                v-if="showSkeleton" \n                loading="chiaroscuro" \n                selector="skeleton" \n                bgcolor="#FFF">\n              </youxue-skeleton>\n              \n              \n\n              // 生效部分 主要添加类  .skeleton-rect(方块) | .skeleton-radius(圆形)\n              // For Example\n\n              // 父级节点添加\n                class="skeleton" :style="{visibility: showSkeleton ? \'hidden\' : \'visible\'}"\n              <div class="box box-between box-column-center cl-white skeleton" :style="{visibility: showSkeleton ? \'hidden\' : \'visible\'}">\n                <div class="box box-column-center">\n                  <image\n                    src=""\n                    class="youxue-avatar youxue-avatar--large radius-circle border skeleton-radius"\n                  >skeleton-radius</image>\n                  <span class="fz-15 ml-10 font-bold skeleton-rect">skeleton-rect</span>\n                </div>\n\n                <div class="box box-column">\n                  <span class="fz-11 skeleton-rect">skeleton-rect</span>\n                  <span class="fz-19 font-bold skeleton-rect">skeleton-rect</span>\n                </div>\n              </div>',javascript:'  // js部分\n              export default {\n                data() {\n                    return {\n                        // 骨架屏显示隐藏  如果多个页面需要用到， 就Vue.minix(template)， \n                        // 放在template里面的变量全局调用即可\n                        showSkeleton: true  \n                    };\n                },\n\n                components: {\n                    "youxue-skeleton": youxueSkeleton\n                },\n\n                /**\n                 *  调用生命周期可根据具体业务场景来调用\n                 *  页面载入完成后调用子组件的方法生成预加载效果\n                 */\n                mounted () {\n                  this.$nextTick(() => {\n                    this.$refs.skeleton.attachedAction();\n                    this.$refs.skeleton.readyAction();\n\n                    // 再调数据接口后可再关闭骨架屏\n                    setTimeout(() => {\n                        this.showSkeleton = false;\n                    }, 2000);\n                  })\n                }\n              }'}],paramsList:[{params:"v-if",intro:"是否显示骨架屏",type:"boolean",default:"false"},{params:"bgcolor",intro:"背景色",type:"string",default:"#fff"},{params:"selector",intro:"选择器类名前缀",type:"string",default:"skeleton"},{params:"loading",intro:"闪烁动画效果，可选值： spin、 chiaroscuro",type:"string",default:"chiaroscuro"}]}}},l=i,o=(e("5ab2"),e("2877")),c=Object(o["a"])(l,n,a,!1,null,"8f3e85a8",null);s["default"]=c.exports},3008:function(t,s,e){},"5ab2":function(t,s,e){"use strict";var n=e("3008"),a=e.n(n);a.a}}]);