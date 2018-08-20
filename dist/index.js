!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define(["vue"],n):"object"==typeof exports?exports.Modal=n(require("vue")):e.Modal=n(e.vue)}(this,function(e){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"smv-modal",props:{theme:{type:String,default:"#8b80f9"},animations:{type:Object,default:function(){return{type:"shutter",duration:300}}},content:[String,Object],title:{type:String,default:""},okText:{type:String,default:"ok"},cancelText:{type:String,default:"cancel"},className:{type:String,default:""},comp:{type:Function,default:null},closeBtn:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},confirmOnEnter:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},maskStyle:{type:Object,default:function(){}},modalStyle:{type:Object,default:function(){return{width:"360px"}}}},data:function(){return{visible:!1,$content:null}},mounted:function(){this.$refs.content&&(this.$content=this.$refs.content)},watch:{visible:function(e){var n=this;e&&this.$nextTick(function(){return n.$el.focus()})}},computed:{style:function(){return{animationDuration:this.animations.duration+"ms"}},modalContainerStyl:function(){return Object.assign({animationDuration:this.animations.duration+"ms"},this.modalStyle)}},methods:{setVisible:function(e){this.visible=e},onModalSubmit:function(){var e=void 0;this.$refs.content&&(e=this.$refs.content.form),this.$emit("submitModal",{type:"submit",form:e}),this.visible=!1},onEnter:function(){this.confirmOnEnter&&this.onModalSubmit()},onCancel:function(){this.visible&&(this.$emit("hideModal",{type:"hide",trigger:"cancel"}),this.visible=!1)},onClose:function(){this.visible&&(this.$emit("hideModal",{type:"hide",trigger:"close"}),this.visible=!1)},onEsc:function(){this.visible&&this.closeOnEsc&&(this.$emit("hideModal",{type:"hide",trigger:"esc"}),this.visible=!1)},onClickMask:function(){this.maskClosable&&(this.$emit("hideModal",{type:"hide",trigger:"mask"}),this.visible=!1)}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(t(2)),r=t(13);o.default.install=r.install,o.default.version="__VERSION__",n.default=o.default},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(t(3)),r=t(11);n.default=function(e){var n=(0,r.CompFactory)(o.default),t=null,i=Object.assign({content:""},e);switch((0,r.getContentType)(e.content)){case"sfc":i.comp=(0,r.CompFactory)(e.content);break;case"vnode":i.comp=(0,r.VnodeFactory)(e.content);break;case"string":i.content=e.content}return(t=new n({propsData:i})).$mount(),t.show=function(){if(!(0,r.isSSR)()){if(t._isDestroyed)throw new Error("Can't show modal, because modal was destroyed.");return t.setVisible(!0),t.$off(),new Promise(function(e,n){t.$on("submitModal",function(n){e(n)}),t.$on("hideModal",function(e){n(e)})})}},t.hide=function(){t.setVisible(!1)},t.destroy=function(){t.$content&&t.$content.$destroy(),t.$destroy(),document.body.removeChild(t.$el)},document.body.appendChild(t.$el),t}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);var a=t(10),s=!1;var l=function(e){s||t(4)},c=t(9)(r.a,a.a,!1,l,null,null);c.options.__file="src\\modal\\main.vue",n.default=c.exports},function(e,n,t){var o=t(5);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(7)("a3c08fc0",o,!1,{})},function(e,n,t){(e.exports=t(6)(!1)).push([e.i,'\n@charset "UTF-8";\n/* make slide [up, down, left, right] animation */\n.smv-modal,\n.smv-modal-mask {\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n}\n.smv-modal {\n  position: fixed;\n  font-size: 14px;\n  color: #606266;\n  line-height: 1.5;\n  font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n.smv-modal-mask {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.3);\n}\n.smv-header {\n  padding-bottom: 16px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #303133;\n}\n.smv-content {\n  padding-bottom: 16px;\n}\n.smv-modal-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20%;\n  margin: auto;\n  z-index: 101;\n  padding: 16px;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.smv-footer {\n  text-align: right;\n}\n.smv-footer .btn {\n    display: inline-block;\n    border-radius: 4px;\n    text-align: center;\n    line-height: 1;\n    padding: 6px 12px;\n    cursor: pointer;\n    transition: all ease 0.4s;\n}\n.smv-footer .smv-modal-confirm {\n    color: white;\n    background: #8b80f9;\n    border: 1px solid #8b80f9;\n}\n.smv-footer .smv-modal-confirm:hover {\n      border: 1px solid #7568f8;\n      background: #7568f8;\n}\n.smv-footer .smv-modal-cancel {\n    background: white;\n    border: 1px solid #8b80f9;\n    margin-right: 16px;\n    color: #8b80f9;\n}\n.smv-footer .smv-modal-cancel:hover {\n      background: #fafafa;\n}\n.smv-modal-close {\n  position: relative;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  z-index: 9999;\n  display: inline-block;\n}\n.smv-modal-close:before, .smv-modal-close:after {\n    position: absolute;\n    content: \'\';\n    height: 2px;\n    width: 100%;\n    top: 50%;\n    left: 0;\n    margin-top: -1px;\n    background: #999;\n    border-radius: 100%;\n    -webkit-transition: background 0.2s;\n    transition: background 0.2s;\n}\n.smv-modal-close:hover:before, .smv-modal-close:hover:after {\n    background: #7568f8;\n}\n.smv-modal-close:before {\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n.smv-modal-close:after {\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n}\n\n/* 覆盖 close icon 位置 */\n.smv-modal-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n/* only implement fade and shutter by default */\n@-webkit-keyframes smv-modal-fade-enter {\nfrom {\n    opacity: 0;\n}\n}\n@keyframes smv-modal-fade-enter {\nfrom {\n    opacity: 0;\n}\n}\n.smv-modal-fade-enter-active {\n  -webkit-animation: smv-modal-fade-enter both ease-in;\n  animation: smv-modal-fade-enter both ease-in;\n}\n@-webkit-keyframes smv-modal-fade-leave {\nto {\n    opacity: 0;\n}\n}\n@keyframes smv-modal-fade-leave {\nto {\n    opacity: 0;\n}\n}\n.smv-modal-fade-leave-active {\n  -webkit-animation: smv-modal-fade-leave both ease-out;\n  animation: smv-modal-fade-leave both ease-out;\n}\n@-webkit-keyframes smv-modal-shutter-enter {\nfrom {\n    -webkit-transform: scale3d(0, 1, 1);\n    transform: scale3d(0, 1, 1);\n}\n}\n@keyframes smv-modal-shutter-enter {\nfrom {\n    -webkit-transform: scale3d(0, 1, 1);\n    transform: scale3d(0, 1, 1);\n}\n}\n.smv-modal-shutter-enter-active {\n  -webkit-animation: smv-modal-shutter-enter both cubic-bezier(0.4, 0, 0, 1.5);\n  animation: smv-modal-shutter-enter both cubic-bezier(0.4, 0, 0, 1.5);\n}\n@-webkit-keyframes smv-modal-shutter-leave {\n60% {\n    -webkit-transform: scale3d(0.01, 1, 1);\n    transform: scale3d(0.01, 1, 1);\n}\nto {\n    -webkit-transform: scale3d(0, 1, 0.1);\n    transform: scale3d(0, 1, 0.1);\n}\n}\n@keyframes smv-modal-shutter-leave {\n60% {\n    -webkit-transform: scale3d(0.01, 1, 1);\n    transform: scale3d(0.01, 1, 1);\n}\nto {\n    -webkit-transform: scale3d(0, 1, 0.1);\n    transform: scale3d(0, 1, 0.1);\n}\n}\n.smv-modal-shutter-leave-active {\n  -webkit-animation: smv-modal-shutter-leave both;\n  animation: smv-modal-shutter-leave both;\n}\n',""])},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[t].concat(i).concat([r]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=t(8),i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,c=!1,d=function(){},u=null,f="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var n=0;n<e.length;n++){var t=e[n],o=i[t.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](t.parts[r]);for(;r<t.parts.length;r++)o.parts.push(h(t.parts[r]));o.parts.length>t.parts.length&&(o.parts.length=t.parts.length)}else{var a=[];for(r=0;r<t.parts.length;r++)a.push(h(t.parts[r]));i[t.id]={id:t.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function h(e){var n,t,o=document.querySelector("style["+f+'~="'+e.id+'"]');if(o){if(c)return d;o.parentNode.removeChild(o)}if(m){var r=l++;o=s||(s=v()),n=y.bind(null,o,r,!1),t=y.bind(null,o,r,!0)}else o=v(),n=function(e,n){var t=n.css,o=n.media,r=n.sourceMap;o&&e.setAttribute("media",o);u.ssrId&&e.setAttribute(f,n.id);r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,o),t=function(){o.parentNode.removeChild(o)};return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else t()}}e.exports=function(e,n,t,o){c=t,u=o||{};var a=r(e,n);return p(a),function(n){for(var t=[],o=0;o<a.length;o++){var s=a[o];(l=i[s.id]).refs--,t.push(l)}n?p(a=r(e,n)):a=[];for(o=0;o<t.length;o++){var l;if(0===(l=t[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}};var b=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function y(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e,n){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=i[0],s={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}},function(e,n){e.exports=function(e,n,t,o,r,i){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var c,d="function"==typeof s?s.options:s;if(n&&(d.render=n.render,d.staticRenderFns=n.staticRenderFns,d._compiled=!0),t&&(d.functional=!0),r&&(d._scopeId=r),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):o&&(c=o),c){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(e,n){return c.call(n),f(e,n)}):d.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:s,options:d}}},function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:"smv-modal-fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"smv-modal",class:[e.className],style:e.style,attrs:{tabindex:"-1"},on:{keyup:[function(n){return"button"in n||!e._k(n.keyCode,"enter",13,n.key,"Enter")?e.onEnter(n):null},function(n){return"button"in n||!e._k(n.keyCode,"esc",27,n.key,"Escape")?e.onEsc(n):null}]}},[e.mask?t("div",{staticClass:"smv-modal-mask",style:e.maskStyle,on:{click:e.onClickMask}}):e._e(),t("transition",{attrs:{name:"smv-modal-"+e.animations.type}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"smv-modal-container",style:e.modalContainerStyl},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],staticClass:"smv-header"},[t("div",{staticClass:"title"},[e._v(e._s(e.title))]),e.closeBtn?t("span",{staticClass:"smv-modal-close",on:{click:e.onClose}}):e._e()]),t("div",{staticClass:"smv-content"},[e.comp?t(e.comp,{ref:"content",tag:"component"}):t("div",{staticClass:"text"},[e._v(" "+e._s(e.content))])],1),t("div",{staticClass:"smv-footer"},[t("div",{staticClass:"btn smv-modal-cancel",on:{click:e.onCancel}},[e._v(e._s(e.cancelText))]),t("div",{staticClass:"btn smv-modal-confirm",on:{click:e.onModalSubmit}},[e._v(e._s(e.okText))])])])])],1)])};o._withStripped=!0;var r={render:o,staticRenderFns:[]};n.a=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CompFactory=n.VnodeFactory=n.getContentType=n.isSFC=n.isVnode=n.isSSR=n.getType=n.hasOwn=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(t(12));var r=n.hasOwn=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i=n.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},a=(n.isSSR=function(){return o.default.prototype.$isServer},n.isVnode=function(e){return e&&r(e,"componentOptions")}),s=n.isSFC=function(e){return"Function"===i(e.render)||/\.vue/.test(e.__file)};n.getContentType=function(e){if(!e||"String"===i(e))return"string";if(s(e))return"sfc";if(a(e))return"vnode";throw new TypeError("Error in Modal(options), expected [options.content] to be SFC, VNode or String, but got ["+i(e)+"]")},n.VnodeFactory=function(e){return o.default.extend({name:"smv-modal-content",_xname:"smv-modal-content",functional:!0,render:function(n){return e}})},n.CompFactory=function(e){var n=o.default.extend(e);return n._xname=""+e.name,n}},function(n,t){n.exports=e},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.install=function e(n,t){if(e.installed)return;e.installed=!0}}])});