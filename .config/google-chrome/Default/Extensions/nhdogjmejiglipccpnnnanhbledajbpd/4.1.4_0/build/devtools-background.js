!function(e){var n={};function o(t){if(n[t])return n[t].exports;var u=n[t]={i:t,l:!1,exports:{}};return e[t].call(u.exports,u,u.exports,o),u.l=!0,u.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=145)}({145:function(e,n){let o,t=!1,u=!1,r=!1,s=0;chrome.devtools.network.onNavigated.addListener(i);const c=setInterval(i,1e3);function i(){r||s++>10||(t=!1,u=!1,chrome.devtools.inspectedWindow.eval("!!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue)",function(e){e&&!r&&(clearInterval(c),r=!0,chrome.devtools.panels.create("Vue","icons/128.png","devtools.html",e=>{e.onShown.addListener(l),e.onHidden.addListener(d)}))}))}function a(){o&&o(),o=null}function l(){chrome.runtime.sendMessage("vue-panel-shown"),u=!0,t&&a()}function d(){chrome.runtime.sendMessage("vue-panel-hidden"),u=!1}function v(e,n="normal"){const o=`(function() {\n    __VUE_DEVTOOLS_TOAST__(\`${e}\`, '${n}');\n  })()`;chrome.devtools.inspectedWindow.eval(o,function(e,n){n&&console.log(n)})}i(),chrome.runtime.onMessage.addListener(e=>{"vue-panel-load"===e?(a(),t=!0):e.vueToast?v(e.vueToast.message,e.vueToast.type):e.vueContextMenu&&function({id:e}){if("vue-inspect-instance"===e){const e="window.__VUE_DEVTOOLS_CONTEXT_MENU_HAS_TARGET__";chrome.devtools.inspectedWindow.eval(e,function(e,n){n&&console.log(n),void 0!==e&&e?function(e,n=null){r&&t&&u?e():(o=e,n&&v(n))}(()=>{chrome.runtime.sendMessage("vue-get-context-menu-target")},"Open Vue devtools to see component details"):(o=null,v("No Vue component was found","warn"))})}}(e.vueContextMenu)})}});