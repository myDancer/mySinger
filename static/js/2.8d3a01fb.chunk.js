webpackJsonp([2,10],{184:function(e,t,n){"use strict";function i(){return r.a.createElement("div",{className:"download"},r.a.createElement("a",{href:"/down",className:"download-btn"},"\u4e0b\u8f7d\u5ba2\u6237\u7aef"),r.a.createElement("p",null,"PC \u5b89\u5353 iPhone WP iPad Mac \u516d\u5927\u5ba2\u6237\u7aef"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=n(0),r=n.n(o),a=n(204);n.n(a)},186:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,s,l=n(0),u=n.n(l),c=n(59),p=n(60),d=n(208),f=n(184),h=n(211),v=(n.n(h),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),b=(a=Object(c.b)(function(e){return{swiperObj:e.swiper}},{fetchSwiperImg:p.a}))(s=function(e){function t(){var e,n,r,a;i(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.onRef=function(e){r.child=e},r.leftButtonClick=function(){r.props.swiperObj.items.length&&r.child.prev()},r.rightButtonClick=function(){r.props.swiperObj.items.length&&r.child.next()},a=n,o(r,a)}return r(t,e),v(t,[{key:"componentDidMount",value:function(){this.props.swiperObj.items.length||this.props.fetchSwiperImg()}},{key:"render",value:function(){var e=this.props.swiperObj.items,t=void 0;return t=e.length?u.a.createElement(d.a,{images:e,onRef:this.onRef}):null,u.a.createElement("div",{className:"swiper"},u.a.createElement("div",{className:"swiper-content"},u.a.createElement("div",{className:"img-wrapper"},t,u.a.createElement(f.default,null)),u.a.createElement("a",{className:"banner-btn left-btn",onClick:this.leftButtonClick},">"),u.a.createElement("a",{className:"banner-btn right-btn",onClick:this.rightButtonClick},"<")))}}]),t}(u.a.Component))||s;t.default=b},204:function(e,t,n){var i=n(205);"string"===typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0};o.transform=void 0;n(6)(i,o);i.locals&&(e.exports=i.locals)},205:function(e,t,n){t=e.exports=n(5)(void 0),t.push([e.i,'.download {\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  right: -1px;\n  width: 254px;\n  height: 336px;\n  background: url("http://s2.music.126.net/style/web2/img/index/download.png") no-repeat 0 0;\n}\n.download .download-btn {\n  display: block;\n  width: 215px;\n  height: 56px;\n  margin: 212px 0 0 19px;\n  background: url("http://s2.music.126.net/style/web2/img/index/download.png") no-repeat 0 0;\n  background-position: 0 9999px;\n  text-indent: -9999px;\n}\n.download .download-btn:hover {\n  background-position: 0 -340px;\n  text-decoration: none;\n}\n.download > p {\n  margin: 10px auto;\n  text-align: center;\n  color: #8d8d8d;\n  font-size: 12px;\n}\n',""])},208:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),l=n(209),u=n.n(l),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),p=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.next=n.next.bind(n),n.prev=n.prev.bind(n),n.refCb=n.refCb.bind(n),n}return r(t,e),c(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"next",value:function(){this.reactSwipe.next()}},{key:"prev",value:function(){this.reactSwipe.prev()}},{key:"refCb",value:function(e){this.reactSwipe=e}},{key:"render",value:function(){var e={startSlide:0,disableScroll:!1,auto:4e3,speed:1500,continuous:!0};return s.a.createElement(u.a,{swipeOptions:e,ref:this.refCb},this.props.images.map(function(e){return s.a.createElement("div",{key:e},s.a.createElement("img",{src:e,alt:"\u56fe\u7247"}))}))}}]),t}(s.a.Component);t.a=p},209:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(2),u=i(l),c=n(0),p=i(c),d=n(210),f=i(d),h=n(12),v=i(h),b=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props.swipeOptions;this.swipe=(0,f.default)(this.container,e)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.childCount,i=t.swipeOptions;e.childCount!==n&&(this.swipe.kill(),this.swipe=(0,f.default)(this.container,i))}},{key:"componentWillUnmount",value:function(){this.swipe.kill(),this.swipe=void 0}},{key:"next",value:function(){this.swipe.next()}},{key:"prev",value:function(){this.swipe.prev()}},{key:"slide",value:function(){var e;(e=this.swipe).slide.apply(e,arguments)}},{key:"getPos",value:function(){return this.swipe.getPos()}},{key:"getNumSlides",value:function(){return this.swipe.getNumSlides()}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,i=t.className,o=t.style,r=t.children;return p.default.createElement("div",{ref:function(t){return e.container=t},id:n,className:"react-swipe-container "+i,style:o.container},p.default.createElement("div",{style:o.wrapper},p.default.Children.map(r,function(e){if(!e)return null;var t=e.props.style?(0,v.default)({},o.child,e.props.style):o.child;return p.default.cloneElement(e,{style:t})})))}}]),t}(c.Component);b.propTypes={swipeOptions:u.default.shape({startSlide:u.default.number,speed:u.default.number,auto:u.default.number,continuous:u.default.bool,disableScroll:u.default.bool,stopPropagation:u.default.bool,swiping:u.default.func,callback:u.default.func,transitionEnd:u.default.func}),style:u.default.shape({container:u.default.object,wrapper:u.default.object,child:u.default.object}),id:u.default.string,className:u.default.string,childCount:u.default.number},b.defaultProps={swipeOptions:{},style:{container:{overflow:"hidden",visibility:"hidden",position:"relative"},wrapper:{overflow:"hidden",position:"relative"},child:{float:"left",width:"100%",position:"relative",transitionProperty:"transform"}},className:"",childCount:0},t.default=b,e.exports=t.default},210:function(e,t){!function(t,n){"undefined"!==typeof e&&e.exports?e.exports=n():t.Swipe=n()}(this,function(){"use strict";return function(e,t){function n(){v=y.children,w=v.length,O=!(v.length<2)&&t.continuous,h.transitions&&O&&v.length<3&&(y.appendChild(v[0].cloneNode(!0)),y.appendChild(y.children[1].cloneNode(!0)),v=y.children),b=new Array(v.length),m=Math.round(e.getBoundingClientRect().width||e.offsetWidth),y.style.width=v.length*m+"px";for(var n=v.length;n--;){var i=v[n];i.style.width=m+"px",i.setAttribute("data-index",n),h.transitions&&(i.style.left=n*-m+"px",s(n,E>n?-m:E<n?m:0,0))}O&&h.transitions&&(s(r(E-1),-m,0),s(r(E+1),m,0)),h.transitions||(y.style.left=E*-m+"px"),e.style.visibility="visible"}function i(){O?a(E-1):E&&a(E-1)}function o(){O?a(E+1):E<v.length-1&&a(E+1)}function r(e){return(v.length+e%v.length)%v.length}function a(e,n){if(E!=e){if(h.transitions){var i=Math.abs(E-e)/(E-e);if(O){var o=i;i=-b[r(e)]/m,i!==o&&(e=-i*v.length+e)}for(var a=Math.abs(E-e)-1;a--;)s(r((e>E?e:E)-a-1),m*i,0);e=r(e),s(E,m*i,n||k),s(e,0,n||k),O&&s(r(e-i),-m*i,0)}else e=r(e),u(E*-m,e*-m,n||k);E=e,f(t.callback&&t.callback(E,v[E]))}}function s(e,t,n){l(e,t,n),b[e]=t}function l(e,t,n){var i=v[e],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=n+"ms",o.webkitTransform="translate("+t+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+t+"px)")}function u(e,n,i){if(!i)return void(y.style.left=n+"px");var o=+new Date,r=setInterval(function(){var a=+new Date-o;if(a>i)return y.style.left=n+"px",T&&c(),t.transitionEnd&&t.transitionEnd.call(event,E,v[E]),void clearInterval(r);y.style.left=(n-e)*(Math.floor(a/i*100)/100)+e+"px"},4)}function c(){clearTimeout(g),g=setTimeout(o,T)}function p(){T=0,clearTimeout(g)}var d=function(){},f=function(e){setTimeout(e||d,0)},h={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(void 0!==e.style[t[n]])return!0;return!1}(document.createElement("swipe"))};if(e){var v,b,m,w,y=e.children[0];t=t||{};var g,x,E=parseInt(t.startSlide,10)||0,k=t.speed||300,O=t.continuous=void 0===t.continuous||t.continuous,T=t.auto||0,_={},j={},P={handleEvent:function(e){switch(e.type){case"touchstart":this.start(e);break;case"touchmove":this.move(e);break;case"touchend":f(this.end(e));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":f(this.transitionEnd(e));break;case"resize":f(n)}t.stopPropagation&&e.stopPropagation()},start:function(e){var t=e.touches[0];_={x:t.pageX,y:t.pageY,time:+new Date},x=void 0,j={},y.addEventListener("touchmove",this,!1),y.addEventListener("touchend",this,!1)},move:function(e){if(!(e.touches.length>1||e.scale&&1!==e.scale)&&!t.disableScroll){var n=e.touches[0];j={x:n.pageX-_.x,y:n.pageY-_.y},"undefined"==typeof x&&(x=!!(x||Math.abs(j.x)<Math.abs(j.y))),x||(e.preventDefault(),p(),O?(l(r(E-1),j.x+b[r(E-1)],0),l(E,j.x+b[E],0),l(r(E+1),j.x+b[r(E+1)],0)):(j.x=j.x/(!E&&j.x>0||E==v.length-1&&j.x<0?Math.abs(j.x)/m+1:1),l(E-1,j.x+b[E-1],0),l(E,j.x+b[E],0),l(E+1,j.x+b[E+1],0)),t.swiping&&t.swiping(-j.x/m))}},end:function(e){var n=+new Date-_.time,i=Number(n)<250&&Math.abs(j.x)>20||Math.abs(j.x)>m/2,o=!E&&j.x>0||E==v.length-1&&j.x<0;O&&(o=!1);var a=j.x<0;x||(i&&!o?(a?(O?(s(r(E-1),-m,0),s(r(E+2),m,0)):s(E-1,-m,0),s(E,b[E]-m,k),s(r(E+1),b[r(E+1)]-m,k),E=r(E+1)):(O?(s(r(E+1),m,0),s(r(E-2),-m,0)):s(E+1,m,0),s(E,b[E]+m,k),s(r(E-1),b[r(E-1)]+m,k),E=r(E-1)),t.callback&&t.callback(E,v[E])):O?(s(r(E-1),-m,k),s(E,0,k),s(r(E+1),m,k)):(s(E-1,-m,k),s(E,0,k),s(E+1,m,k))),y.removeEventListener("touchmove",P,!1),y.removeEventListener("touchend",P,!1),y.removeEventListener("touchforcechange",function(){},!1)},transitionEnd:function(e){parseInt(e.target.getAttribute("data-index"),10)==E&&(T&&c(),t.transitionEnd&&t.transitionEnd.call(e,E,v[E]))}};return n(),T&&c(),h.addEventListener?(h.touch&&(y.addEventListener("touchstart",P,!1),y.addEventListener("touchforcechange",function(){},!1)),h.transitions&&(y.addEventListener("webkitTransitionEnd",P,!1),y.addEventListener("msTransitionEnd",P,!1),y.addEventListener("oTransitionEnd",P,!1),y.addEventListener("otransitionend",P,!1),y.addEventListener("transitionend",P,!1)),window.addEventListener("resize",P,!1)):window.onresize=function(){n()},{setup:function(){n()},slide:function(e,t){p(),a(e,t)},prev:function(){p(),i()},next:function(){p(),o()},stop:function(){p()},getPos:function(){return E},getNumSlides:function(){return w},kill:function(){p(),y.style.width="",y.style.left="";for(var e=v.length;e--;){var t=v[e];t.style.width="",t.style.left="",h.transitions&&l(e,0,0)}h.addEventListener?(y.removeEventListener("touchstart",P,!1),y.removeEventListener("webkitTransitionEnd",P,!1),y.removeEventListener("msTransitionEnd",P,!1),y.removeEventListener("oTransitionEnd",P,!1),y.removeEventListener("otransitionend",P,!1),y.removeEventListener("transitionend",P,!1),window.removeEventListener("resize",P,!1)):window.onresize=null}}}}})},211:function(e,t,n){var i=n(212);"string"===typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0};o.transform=void 0;n(6)(i,o);i.locals&&(e.exports=i.locals)},212:function(e,t,n){t=e.exports=n(5)(void 0),t.push([e.i,'.swiper {\n  background-color: #808080;\n}\n.swiper-content {\n  position: relative;\n  margin: 0 auto;\n  width: 982px;\n}\n.img-wrapper {\n  width: 730px;\n  height: 336px;\n}\n.img-wrapper img {\n  width: 730px;\n  height: 336px;\n}\n.banner-btn {\n  cursor: pointer;\n  background: url("http://s2.music.126.net/style/web2/img/index/banner.png") 0 9999px no-repeat;\n}\n.left-btn {\n  display: block;\n  position: absolute;\n  top: 50%;\n  margin-top: -31px;\n  width: 37px;\n  height: 63px;\n  text-indent: -9999px;\n  left: -68px;\n  background-position: 0 -360px;\n}\n.left-btn:hover {\n  background-position: 0 -430px;\n}\n.right-btn {\n  right: -68px;\n  background-position: 0 -508px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  margin-top: -31px;\n  width: 37px;\n  height: 63px;\n  text-indent: -9999px;\n}\n.right-btn:hover {\n  background-position: 0 -578px;\n}\n',""])}});
//# sourceMappingURL=2.8d3a01fb.chunk.js.map