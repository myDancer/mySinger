webpackJsonp([0,1,5,7,14,15,16,17,18,19,20,21],{185:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),o=t.n(i),r=t(7),a=t(207),l=(t.n(a),function(n){return o.a.createElement("dl",{className:"bill-item"},o.a.createElement("dt",{className:"bill-top"},o.a.createElement("div",{className:"i-wrap"},o.a.createElement("img",{alt:"\u56fe\u7247",src:n.billItem.imgUrl}),o.a.createElement(r.b,{to:n.billItem.link,className:"msk"})),o.a.createElement("div",{className:"t-wrap"},o.a.createElement(r.b,{className:"title",to:n.billItem.link},n.billItem.billTitle),o.a.createElement("div",{className:"btn"},o.a.createElement(r.b,{className:"t-icn icn-play",to:n.billItem.link}),o.a.createElement(r.b,{className:"t-icn icn-collect",to:n.billItem.link})))),o.a.createElement("dd",null,o.a.createElement("ol",null,n.billItem.singList.map(function(n,e){return o.a.createElement("li",{key:n.link},o.a.createElement("span",{className:"nr"},e+1),o.a.createElement(r.b,{className:"nm",to:n.link},n.songName),o.a.createElement("div",{className:"oper"},o.a.createElement("button",{className:"init-icn icn-ply"}),o.a.createElement("button",{className:"init-icn icn-add"}),o.a.createElement("button",{className:"init-icn icn-colect"})))})),o.a.createElement("div",{className:"more"},o.a.createElement(r.b,{to:n.billItem.link},"\u67e5\u770b\u5168\u90e8 >"))))});e.default=l},189:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),o=t.n(i),r=t(185),a=t(215),l=(t.n(a),function(n){return o.a.createElement("div",{className:"billlist-wrap"},n.billList.map(function(n){return o.a.createElement(r.default,{key:n.link,billItem:n})}))});e.default=l},190:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),o=t.n(i),r=t(7),a=t(217),l=(t.n(a),function(n){var e=void 0;return n.toolbar.urlList&&(e=o.a.createElement("ul",{className:"tab"},n.toolbar.urlList.map(function(n){return o.a.createElement("li",{key:n.url},o.a.createElement(r.b,{className:"tab-a",to:n.url},n.name))}))),o.a.createElement("div",{className:"toolbar"},o.a.createElement(r.b,{className:"title",to:"/recomend"},n.toolbar.title),e,o.a.createElement("span",{className:"more"},o.a.createElement(r.b,{to:"/discover/playlist/"},"\u66f4\u591a"),o.a.createElement("i",{className:"icn-more"})))});e.default=l},191:function(n,e,t){"use strict";function i(n){return r.a.createElement("div",null,r.a.createElement("ul",{className:"songlist"},n.songList.map(function(n){return r.a.createElement("li",{className:"song-item",key:n.link},r.a.createElement("div",{className:"item"},r.a.createElement("img",{alt:"fengmian",src:n.imgUrl}),r.a.createElement(a.b,{className:"item-a",to:n.link}),r.a.createElement("div",{className:"bottom"},r.a.createElement(a.b,{className:"icn-play",to:n.link}),r.a.createElement("span",{className:"icn-headset"}),r.a.createElement("span",{className:"playnum"},n.playNum))),r.a.createElement("p",{className:"dec"},r.a.createElement(a.b,{className:"dec-a",to:n.link},n.title)))})))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=t(0),r=t.n(o),a=t(7),l=t(219);t.n(l)},192:function(n,e,t){"use strict";function i(){return r.a.createElement("div",{className:"login-wrap"},r.a.createElement("p",{className:"login-note"},"\u767b\u5f55\u7f51\u6613\u4e91\u97f3\u4e50\uff0c\u53ef\u4ee5\u4eab\u53d7\u65e0\u9650\u6536\u85cf\u7684\u4e50\u8da3\uff0c\u5e76\u4e14\u65e0\u9650\u540c\u6b65\u5230\u624b\u673a"),r.a.createElement(a.b,{className:"login-btn",to:""},"\u767b\u9646"))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=t(0),r=t.n(o),a=t(7),l=t(221);t.n(l)},193:function(n,e,t){"use strict";function i(n){return r.a.createElement("div",{className:"singer-list"},r.a.createElement("h3",{className:"header-h3"},r.a.createElement("span",{className:"header-fl"},"\u5165\u9a7b\u6b4c\u624b"),r.a.createElement(a.b,{className:"header-fr",to:"/singer"},"\u67e5\u770b\u5168\u90e8 > ")),r.a.createElement("ul",{className:"singer"},n.singerList.map(function(n){return r.a.createElement("li",{className:"singer-item",key:n.link},r.a.createElement(a.b,{to:n.link},r.a.createElement("div",{className:"item-l"},r.a.createElement("img",{alt:"\u5934\u50cf",src:n.avatar})),r.a.createElement("div",{className:"item-r"},r.a.createElement("h4",null,n.name),r.a.createElement("p",null,n.label))))})),r.a.createElement("div",null,r.a.createElement(a.b,{className:"besinger",to:"./besinger"},r.a.createElement("i",{className:"bs-btn"},"\u7533\u8bf7\u6210\u4e3a\u97f3\u4e50\u4eba"))))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=t(0),r=t.n(o),a=t(7),l=t(223);t.n(l)},194:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),o=t.n(i),r=t(7),a=t(225),l=(t.n(a),function(n){return o.a.createElement("div",{className:"newdisk"},o.a.createElement("div",{className:"inner"},o.a.createElement("a",{className:"disk-next l-btn",href:""},"\xa0"),o.a.createElement("div",{className:"n-disk"},o.a.createElement("ul",null,n.diskList.map(function(n){return o.a.createElement("li",{key:n.link},o.a.createElement("div",{className:"img-wrap"},o.a.createElement("img",{alt:"\u56fe\u7247",src:n.imgUrl}),o.a.createElement(r.b,{className:"bg-img",to:n.link}),o.a.createElement("div",{className:"play-img"})),o.a.createElement("p",null,o.a.createElement(r.b,{className:"disk-link-1 disk-link",to:n.link},n.title)),o.a.createElement("p",null,o.a.createElement(r.b,{className:"disk-link-2 disk-link",to:n.link},n.name)))}))),o.a.createElement("a",{className:"disk-next r-btn"},"\xa0")))});e.default=l},195:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),o=t.n(i),r=t(7),a=t(227),l=(t.n(a),function(n){return o.a.createElement("div",{className:"dj-wrap"},o.a.createElement("h3",{className:"hd-3"},"\u70ed\u95e8\u4e3b\u64ad"),o.a.createElement("ul",{className:"dj-ul"},n.djList.map(function(n){return o.a.createElement("li",{key:n.link},o.a.createElement("div",{className:"left-wrap"},o.a.createElement("img",{alt:"avater",src:n.imgUrl})),o.a.createElement("div",{className:"right-wrap"},o.a.createElement("p",null,o.a.createElement(r.b,{className:"r-name",to:n.link},n.name)),o.a.createElement("p",{className:"r-title"},n.title)))})))});e.default=l},196:function(n,e,t){"use strict";function i(){return r.a.createElement("div",{className:"download"},r.a.createElement("a",{href:"/down",className:"download-btn"},"\u4e0b\u8f7d\u5ba2\u6237\u7aef"),r.a.createElement("p",null,"PC \u5b89\u5353 iPhone WP iPad Mac \u516d\u5927\u5ba2\u6237\u7aef"))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=t(0),r=t.n(o),a=t(229);t.n(a)},199:function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function r(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a,l,s=t(0),c=t.n(s),p=t(26),d=t(190),u=t(191),m=t(192),f=t(193),h=t(194),b=t(195),g=t(189),x=t(64),v=t(235),w=(t.n(v),function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}()),y=(a=Object(p.b)(function(n){return{recommendObj:n.recommendReducer}},{fetchRecommend:x.a}))(l=function(n){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,n),w(e,[{key:"componentDidMount",value:function(){this.props.recommendObj.recommend.recommend.length||this.props.fetchRecommend()}},{key:"render",value:function(){var n=this.props.recommendObj.recommend,e=n.recommend,t=n.diskList,i=n.billList,o=n.singerList,r=n.djList,a={title:"\u70ed\u95e8\u63a8\u8350",urlList:[{url:"1",name:"\u534e\u8bed"},{url:"2",name:"\u6d41\u884c"},{url:"3",name:"\u6447\u6eda"},{url:"4",name:"\u6c11\u8c23"},{url:"5",name:"\u7535\u5b50"}]};return c.a.createElement("div",{className:"discover-module"},c.a.createElement("div",{className:"l-wrap"},c.a.createElement("div",{className:"l-wrap1"},c.a.createElement(d.default,{toolbar:a}),c.a.createElement(u.default,{songList:e})),c.a.createElement("div",{className:"l-wrap1"},c.a.createElement(d.default,{toolbar:{title:"\u65b0\u789f\u4e0a\u67b6"}}),c.a.createElement(h.default,{diskList:t})),c.a.createElement("div",{className:"l-wrap1"},c.a.createElement(d.default,{toolbar:{title:"\u699c\u5355"}}),c.a.createElement(g.default,{billList:i}))),c.a.createElement("div",{className:"r-wrap"},c.a.createElement(m.default,null),c.a.createElement(f.default,{singerList:o}),c.a.createElement(b.default,{djList:r})))}}]),e}(c.a.Component))||l;e.default=y},200:function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function r(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a,l,s=t(0),c=t.n(s),p=t(26),d=t(63),u=t(237),m=t(196),f=t(240),h=(t.n(f),function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}()),b=(a=Object(p.b)(function(n){return{swiperObj:n.swiper}},{fetchSwiperImg:d.a}))(l=function(n){function e(){var n,t,r,a;i(this,e);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return t=r=o(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(s))),r.onRef=function(n){r.child=n},r.leftButtonClick=function(){r.props.swiperObj.items.length&&r.child.prev()},r.rightButtonClick=function(){r.props.swiperObj.items.length&&r.child.next()},a=t,o(r,a)}return r(e,n),h(e,[{key:"componentDidMount",value:function(){this.props.swiperObj.items.length||this.props.fetchSwiperImg()}},{key:"render",value:function(){var n=this.props.swiperObj.items,e=void 0;return e=n.length?c.a.createElement(u.a,{images:n,onRef:this.onRef}):null,c.a.createElement("div",{className:"swiper"},c.a.createElement("div",{className:"swiper-content"},c.a.createElement("div",{className:"img-wrapper"},e,c.a.createElement(m.default,null)),c.a.createElement("a",{className:"banner-btn left-btn",onClick:this.leftButtonClick},">"),c.a.createElement("a",{className:"banner-btn right-btn",onClick:this.rightButtonClick},"<")))}}]),e}(c.a.Component))||l;e.default=b},204:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),o=t.n(i),r=t(200),a=t(199),l=t(248),s=(t.n(l),function(){return o.a.createElement("div",null,o.a.createElement(r.default,null),o.a.createElement(a.default,null))});e.default=s},207:function(n,e,t){var i=t(208);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},208:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,'.bill-item {\n  float: left;\n  width: 230px;\n  font-size: 12px;\n}\n.bill-item:last-child {\n  width: 228px;\n}\n.bill-item .bill-top {\n  height: 100px;\n  padding: 20px 0 0 19px;\n}\n.bill-item .bill-top .i-wrap {\n  float: left;\n  position: relative;\n}\n.bill-item .bill-top .i-wrap img {\n  width: 80px;\n  height: 80px;\n}\n.bill-item .bill-top .i-wrap .msk {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url("http://s2.music.126.net/style/web2/img/coverall.png");\n  background-position: -145px -57px;\n}\n.bill-item .bill-top .t-wrap {\n  float: left;\n  width: 116px;\n  margin: 6px 0 0 10px;\n}\n.bill-item .bill-top .t-wrap .title {\n  font-size: 14px;\n  color: #333;\n}\n.bill-item .bill-top .t-wrap .title:hover {\n  text-decoration: underline;\n}\n.bill-item .bill-top .t-wrap .btn {\n  margin-top: 10px;\n}\n.bill-item .bill-top .t-wrap .btn .t-icn {\n  display: block;\n  float: left;\n  width: 22px;\n  height: 22px;\n  margin-right: 10px;\n  text-indent: -9999px;\n  background: url("http://s2.music.126.net/style/web2/img/index/index.png");\n}\n.bill-item .bill-top .t-wrap .btn .icn-play {\n  background-position: -267px -205px;\n}\n.bill-item .bill-top .t-wrap .btn .icn-play:hover {\n  background-position: -267px -235px;\n}\n.bill-item .bill-top .t-wrap .btn .icn-collect {\n  background-position: -300px -205px;\n}\n.bill-item .bill-top .t-wrap .btn .icn-collect:hover {\n  background-position: -300px -235px;\n}\n.bill-item ol {\n  height: 319px;\n  margin-left: 50px;\n  line-height: 32px;\n}\n.bill-item ol li {\n  height: 32px;\n  color: #666;\n  position: relative;\n}\n.bill-item ol li:hover .oper {\n  display: block;\n}\n.bill-item ol li:nth-of-type(1),\n.bill-item ol li:nth-of-type(2),\n.bill-item ol li:nth-of-type(3) {\n  color: #c10d0c;\n}\n.bill-item ol li .nm {\n  float: left;\n  width: 170px;\n  height: 32px;\n  vertical-align: middle;\n  color: #000;\n  line-height: 32px;\n}\n.bill-item ol li .nm:hover {\n  text-decoration: underline;\n}\n.bill-item ol li .nr {\n  float: left;\n  position: relative;\n  width: 35px;\n  height: 32px;\n  margin-left: -35px;\n  text-align: center;\n  font-size: 16px;\n  vertical-align: middle;\n}\n.bill-item ol li .oper {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 8px;\n  vertical-align: middle;\n  width: 82px;\n}\n.bill-item ol li .oper .init-icn {\n  float: left;\n  width: 17px;\n  height: 17px;\n  margin-right: 10px;\n  outline: 0;\n  border: 0;\n  cursor: pointer;\n  background: url("http://s2.music.126.net/style/web2/img/index/index.png") no-repeat 0 9999px;\n}\n.bill-item ol li .oper .icn-ply {\n  background-position: -267px -268px;\n}\n.bill-item ol li .oper .icn-ply:hover {\n  background-position: -267px -288px;\n}\n.bill-item ol li .oper .icn-add {\n  background: url("http://s2.music.126.net/style/web2/img/icon.png") no-repeat 0 9999px;\n  background-position: 0 -700px;\n  margin-top: 2px;\n}\n.bill-item ol li .oper .icn-add:hover {\n  background-position: -22px -700px;\n}\n.bill-item ol li .oper .icn-colect {\n  background-position: -297px -268px;\n}\n.bill-item ol li .oper .icn-colect:hover {\n  background-position: -297px -288px;\n}\n.bill-item .more {\n  clear: both;\n  height: 32px;\n  margin-right: 32px;\n  text-align: right;\n  line-height: 32px;\n}\n.bill-item .more a {\n  color: #000;\n}\n.bill-item .more a:hover {\n  text-decoration: underline;\n}\n',""])},215:function(n,e,t){var i=t(216);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},216:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,".billlist-wrap {\n  height: 472px;\n  margin-top: 20px;\n  padding-left: 1px;\n  background: url(\"http://s2.music.126.net/style/web2/img/index/index_bill.png\") no-repeat;\n}\n.billlist-wrap:after {\n  clear: both;\n  content: '.';\n  height: 0;\n  visibility: hidden;\n  display: block;\n}\n",""])},217:function(n,e,t){var i=t(218);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},218:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,'.toolbar {\n  height: 33px;\n  padding: 0 10px 0 34px;\n  border-bottom: 2px solid #c10d0c;\n  font-size: 12px;\n  background: url("http://s2.music.126.net/style/web2/img/index/index.png") no-repeat 0 9999px;\n  background-position: -225px -156px;\n}\n.toolbar .title {\n  font-size: 20px;\n  font-weight: normal;\n  line-height: 28px;\n  float: left;\n  color: #333;\n}\n.toolbar .tab {\n  float: left;\n  margin: 7px 0 0 20px;\n}\n.toolbar .tab > li {\n  float: left;\n}\n.toolbar .tab > li:after {\n  content: \'|\';\n  margin: 0 10px;\n  color: #ccc;\n}\n.toolbar .tab > li .tab-a {\n  color: #666;\n}\n.toolbar .tab > li .tab-a:hover {\n  text-decoration: underline;\n}\n.toolbar .more {\n  float: right;\n  margin-top: 9px;\n}\n.toolbar .more a:hover {\n  text-decoration: underline;\n}\n.toolbar .more .icn-more {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin-left: 4px;\n  vertical-align: middle;\n  background: url("http://s2.music.126.net/style/web2/img/index/index.png") no-repeat 0 9999px;\n  background-position: 0 -240px;\n}\n',""])},219:function(n,e,t){var i=t(220);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},220:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,'.songlist {\n  margin: 20px 0 0 -42px;\n  font-size: 12px;\n}\n.songlist:after {\n  clear: both;\n  content: \'.\';\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.songlist .song-item {\n  float: left;\n  width: 140px;\n  height: 204px;\n  overflow: hidden;\n  padding: 0 0 30px 42px;\n  line-height: 1.4;\n  list-style: none;\n}\n.songlist .song-item .item {\n  position: relative;\n  display: block;\n  width: 140px;\n  height: 140px;\n  line-height: 1.4;\n}\n.songlist .song-item .item .item-a {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: url("http://s2.music.126.net/style/web2/img/coverall.png");\n  background-position: 0 0;\n}\n.songlist .song-item .item .bottom {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 27px;\n  background: url("http://s2.music.126.net/style/web2/img/coverall.png");\n  background-position: 0 -537px;\n  color: #ccc;\n}\n.songlist .song-item .item .bottom .icn-play {\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n  width: 16px;\n  height: 17px;\n  background: url("http://s2.music.126.net/style/web2/img/iconall.png") no-repeat;\n  background-position: 0 0;\n  float: right;\n}\n.songlist .song-item .item .bottom .icn-play:hover {\n  background-position: 0 -60px;\n}\n.songlist .song-item .item .bottom .icn-headset {\n  float: left;\n  width: 14px;\n  height: 11px;\n  background: url("http://s2.music.126.net/style/web2/img/iconall.png") no-repeat;\n  background-position: 0 -24px;\n  margin: 9px 5px 9px 10px;\n}\n.songlist .song-item .item .bottom .playnum {\n  margin-top: 7px;\n  display: inline-block;\n}\n.songlist .song-item .dec {\n  margin: 8px 0 3px;\n}\n.songlist .song-item .dec .dec-a {\n  color: #000;\n  font-size: 14px;\n}\n.songlist .song-item .dec .dec-a:hover {\n  font-size: 14px;\n  text-decoration: underline;\n}\n',""])},221:function(n,e,t){var i=t(222);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},222:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,'.login-wrap {\n  height: 126px;\n  background: url("http://s2.music.126.net/style/web2/img/index/index.png");\n  background-position: 0 0;\n  font-size: 12px;\n}\n.login-wrap .login-note {\n  width: 205px;\n  margin: 0 auto;\n  padding: 16px 0;\n  line-height: 22px;\n  color: #666;\n}\n.login-wrap .login-btn {\n  display: block;\n  width: 100px;\n  height: 31px;\n  line-height: 31px;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0 1px 0 #8a060b;\n  margin: 0 auto;\n  background: url("http://s2.music.126.net/style/web2/img/index/index.png") no-repeat 0 9999px;\n  background-position: 0 -195px;\n  text-decoration: none;\n}\n.login-wrap .login-btn:hover {\n  color: #fff;\n  background-position: -110px -195px;\n}\n',""])},223:function(n,e,t){var i=t(224);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},224:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,'.singer-list {\n  margin-top: 15px;\n  font-size: 12px;\n}\n.singer-list .header-h3 {\n  position: relative;\n  height: 23px;\n  margin: 0 20px;\n  border-bottom: 1px solid #ccc;\n  color: #333;\n}\n.singer-list .header-h3 .header-fl {\n  float: left;\n}\n.singer-list .header-h3 .header-fr {\n  float: right;\n  line-height: 12px;\n}\n.singer-list .header-h3 .header-fr:hover {\n  text-decoration: underline;\n}\n.singer-list .singer {\n  margin: 6px 0 14px 20px;\n}\n.singer-list .singer:after {\n  clear: both;\n  content: \'.\';\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.singer-list .singer .singer-item {\n  margin-top: 14px;\n  float: left;\n  width: 210px;\n  height: 62px;\n  background: #fafafa;\n  list-style: none;\n  cursor: pointer;\n}\n.singer-list .singer .singer-item .item-l {\n  float: left;\n  width: 62px;\n  height: 62px;\n}\n.singer-list .singer .singer-item .item-r {\n  float: left;\n  width: 133px;\n  height: 60px;\n  padding-left: 14px;\n  border: 1px solid #e9e9e9;\n  border-left: none;\n  line-height: 1.5;\n}\n.singer-list .singer .singer-item .item-r > h4 {\n  margin-top: 8px;\n  width: 90%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n  font-size: 14px;\n  color: #333;\n  font-weight: bold;\n}\n.singer-list .singer .singer-item .item-r > p {\n  width: 90%;\n  margin-top: 8px;\n  color: #666;\n}\n.singer-list .besinger {\n  background: url("http://s2.music.126.net/style/web2/img/button2.png");\n  background-position: right -100px;\n  margin-left: 20px;\n  border-radius: 4px;\n  color: #333;\n  display: inline-block;\n  height: 31px;\n  line-height: 31px;\n  overflow: hidden;\n  vertical-align: top;\n  text-align: center;\n  cursor: pointer;\n  padding: 0 5px 0 0;\n}\n.singer-list .besinger:hover {\n  background-position: right -182px;\n}\n.singer-list .besinger .bs-btn {\n  width: 170px;\n  font-weight: bold;\n  display: inline-block;\n  height: 31px;\n  line-height: 31px;\n  overflow: hidden;\n  vertical-align: top;\n  text-align: center;\n  cursor: pointer;\n  color: #333;\n  background: url("http://s2.music.126.net/style/web2/img/button2.png");\n  background-position: 0 -59px;\n  padding: 0 15px 0 20px;\n  font-style: normal;\n}\n.singer-list .besinger .bs-btn:hover {\n  background-position: 0 -141px;\n}\n',""])},225:function(n,e,t){var i=t(226);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},226:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,'.newdisk {\n  position: relative;\n  zoom: 1;\n  height: 186px;\n  margin: 20px 0 37px;\n  border: 1px solid #d3d3d3;\n}\n.newdisk .inner {\n  height: 184px;\n  padding-left: 16px;\n  background: #f5f5f5;\n  border: 1px solid #fff;\n}\n.newdisk .inner .disk-next {\n  position: absolute;\n  top: 71px;\n  width: 17px;\n  height: 17px;\n  background: url("http://s2.music.126.net/style/web2/img/index/index.png") no-repeat 0 9999px;\n  cursor: pointer;\n}\n.newdisk .inner .l-btn {\n  left: 4px;\n  background-position: -260px -75px;\n}\n.newdisk .inner .l-btn:hover {\n  background-position: -280px -75px;\n}\n.newdisk .inner .r-btn {\n  background-position: -300px -75px;\n}\n.newdisk .inner .r-btn:hover {\n  background-position: -320px -75px;\n}\n.newdisk .inner .n-disk {\n  float: left;\n  width: 645px;\n  height: 180px;\n  overflow: hidden;\n  position: relative;\n  zoom: 1;\n}\n.newdisk .inner .n-disk > ul {\n  position: absolute;\n  top: 0;\n  width: 645px;\n  margin: 28px 0 0 0;\n}\n.newdisk .inner .n-disk > ul > li {\n  float: left;\n  display: inline;\n  width: 118px;\n  height: 150px;\n  margin-left: 11px;\n  background: url("http://s2.music.126.net/style/web2/img/index/index.png") no-repeat;\n  background-position: -260px 100px;\n  font-size: 12px;\n}\n.newdisk .inner .n-disk > ul > li > p {\n  width: 90%;\n  line-height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n.newdisk .inner .n-disk > ul > li > p .disk-link {\n  font-size: 12px;\n}\n.newdisk .inner .n-disk > ul > li > p .disk-link:hover {\n  text-decoration: underline;\n}\n.newdisk .inner .n-disk > ul > li > p .disk-link-1 {\n  color: #000;\n}\n.newdisk .inner .n-disk > ul > li > p .disk-link-2 {\n  color: #666;\n}\n.newdisk .inner .n-disk > ul > li .bg-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 118px;\n  height: 100px;\n  background: url("http://s2.music.126.net/style/web2/img/coverall.png") no-repeat 0 9999px;\n  background-position: 0 -570px;\n}\n.newdisk .inner .n-disk > ul > li .play-img {\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n  left: 72px;\n  width: 22px;\n  height: 22px;\n  background: url("http://s2.music.126.net/style/web2/img/iconall.png");\n  background-position: 0 -85px;\n  cursor: pointer;\n}\n.newdisk .inner .n-disk > ul > li .play-img:hover {\n  background-position: 0 -110px;\n  display: block;\n}\n.newdisk .inner .n-disk .img-wrap {\n  position: relative;\n  margin-bottom: 7px;\n}\n',""])},227:function(n,e,t){var i=t(228);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},228:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,".dj-wrap {\n  margin-top: 30px;\n  font-size: 12px;\n}\n.dj-wrap .hd-3 {\n  position: relative;\n  height: 23px;\n  margin: 0 20px;\n  border-bottom: 1px solid #ccc;\n  color: #333;\n}\n.dj-wrap .dj-ul {\n  margin: 20px 0 0 20px;\n}\n.dj-wrap .dj-ul:after {\n  clear: both;\n  content: '.';\n  height: 0;\n  visibility: hidden;\n  display: block;\n}\n.dj-wrap .dj-ul .left-wrap {\n  float: left;\n  margin-right: 10px;\n}\n.dj-wrap .dj-ul .right-wrap {\n  float: left;\n}\n.dj-wrap .dj-ul .right-wrap .r-title {\n  color: #666;\n  line-height: 21px;\n}\n.dj-wrap .dj-ul .right-wrap .r-name {\n  line-height: 21px;\n  color: #333;\n}\n.dj-wrap .dj-ul .right-wrap .r-name:hover {\n  text-decoration: underline;\n}\n",""])},229:function(n,e,t){var i=t(230);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},230:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,'.download {\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  right: -1px;\n  width: 254px;\n  height: 336px;\n  background: url("http://s2.music.126.net/style/web2/img/index/download.png") no-repeat 0 0;\n}\n.download .download-btn {\n  display: block;\n  width: 215px;\n  height: 56px;\n  margin: 212px 0 0 19px;\n  background: url("http://s2.music.126.net/style/web2/img/index/download.png") no-repeat 0 0;\n  background-position: 0 9999px;\n  text-indent: -9999px;\n}\n.download .download-btn:hover {\n  background-position: 0 -340px;\n  text-decoration: none;\n}\n.download > p {\n  margin: 10px auto;\n  text-align: center;\n  color: #8d8d8d;\n  font-size: 12px;\n}\n',""])},235:function(n,e,t){var i=t(236);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},236:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,".discover-module {\n  width: 980px;\n  min-height: 700px;\n  margin: 0 auto;\n  background-color: #fff;\n  border: 1px solid #d3d3d3;\n  border-width: 0 1px;\n  background: url(\"http://s2.music.126.net/style/web2/img/frame/wrap1.png\") repeat-y 100% 100%;\n}\n.discover-module:after {\n  content: '.';\n  clear: both;\n  display: block;\n  visibility: hidden;\n  height: 0;\n}\n.discover-module .l-wrap {\n  float: left;\n  width: 100%;\n  margin-right: -250px;\n}\n.discover-module .l-wrap .l-wrap1 {\n  padding: 20px 20px 40px;\n  margin-right: 251px;\n}\n.discover-module .r-wrap {\n  position: relative;\n  float: right;\n  width: 250px;\n  zoom: 1;\n}\n",""])},237:function(n,e,t){"use strict";function i(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function r(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var a=t(0),l=t.n(a),s=t(238),c=t.n(s),p=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),d=function(n){function e(n){i(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.next=t.next.bind(t),t.prev=t.prev.bind(t),t.refCb=t.refCb.bind(t),t}return r(e,n),p(e,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"next",value:function(){this.reactSwipe.next()}},{key:"prev",value:function(){this.reactSwipe.prev()}},{key:"refCb",value:function(n){this.reactSwipe=n}},{key:"render",value:function(){var n={startSlide:0,disableScroll:!1,auto:4e3,speed:1500,continuous:!0};return l.a.createElement(c.a,{swipeOptions:n,ref:this.refCb},this.props.images.map(function(n){return l.a.createElement("div",{key:n},l.a.createElement("img",{src:n,alt:"\u56fe\u7247"}))}))}}]),e}(l.a.Component);e.a=d},238:function(n,e,t){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),s=t(2),c=i(s),p=t(0),d=i(p),u=t(239),m=i(u),f=t(15),h=i(f),b=function(n){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,n),l(e,[{key:"componentDidMount",value:function(){var n=this.props.swipeOptions;this.swipe=(0,m.default)(this.container,n)}},{key:"componentDidUpdate",value:function(n){var e=this.props,t=e.childCount,i=e.swipeOptions;n.childCount!==t&&(this.swipe.kill(),this.swipe=(0,m.default)(this.container,i))}},{key:"componentWillUnmount",value:function(){this.swipe.kill(),this.swipe=void 0}},{key:"next",value:function(){this.swipe.next()}},{key:"prev",value:function(){this.swipe.prev()}},{key:"slide",value:function(){var n;(n=this.swipe).slide.apply(n,arguments)}},{key:"getPos",value:function(){return this.swipe.getPos()}},{key:"getNumSlides",value:function(){return this.swipe.getNumSlides()}},{key:"render",value:function(){var n=this,e=this.props,t=e.id,i=e.className,o=e.style,r=e.children;return d.default.createElement("div",{ref:function(e){return n.container=e},id:t,className:"react-swipe-container "+i,style:o.container},d.default.createElement("div",{style:o.wrapper},d.default.Children.map(r,function(n){if(!n)return null;var e=n.props.style?(0,h.default)({},o.child,n.props.style):o.child;return d.default.cloneElement(n,{style:e})})))}}]),e}(p.Component);b.propTypes={swipeOptions:c.default.shape({startSlide:c.default.number,speed:c.default.number,auto:c.default.number,continuous:c.default.bool,disableScroll:c.default.bool,stopPropagation:c.default.bool,swiping:c.default.func,callback:c.default.func,transitionEnd:c.default.func}),style:c.default.shape({container:c.default.object,wrapper:c.default.object,child:c.default.object}),id:c.default.string,className:c.default.string,childCount:c.default.number},b.defaultProps={swipeOptions:{},style:{container:{overflow:"hidden",visibility:"hidden",position:"relative"},wrapper:{overflow:"hidden",position:"relative"},child:{float:"left",width:"100%",position:"relative",transitionProperty:"transform"}},className:"",childCount:0},e.default=b,n.exports=e.default},239:function(n,e){!function(e,t){"undefined"!==typeof n&&n.exports?n.exports=t():e.Swipe=t()}(this,function(){"use strict";return function(n,e){function t(){h=v.children,x=h.length,N=!(h.length<2)&&e.continuous,f.transitions&&N&&h.length<3&&(v.appendChild(h[0].cloneNode(!0)),v.appendChild(v.children[1].cloneNode(!0)),h=v.children),b=new Array(h.length),g=Math.round(n.getBoundingClientRect().width||n.offsetWidth),v.style.width=h.length*g+"px";for(var t=h.length;t--;){var i=h[t];i.style.width=g+"px",i.setAttribute("data-index",t),f.transitions&&(i.style.left=t*-g+"px",l(t,k>t?-g:k<t?g:0,0))}N&&f.transitions&&(l(r(k-1),-g,0),l(r(k+1),g,0)),f.transitions||(v.style.left=k*-g+"px"),n.style.visibility="visible"}function i(){N?a(k-1):k&&a(k-1)}function o(){N?a(k+1):k<h.length-1&&a(k+1)}function r(n){return(h.length+n%h.length)%h.length}function a(n,t){if(k!=n){if(f.transitions){var i=Math.abs(k-n)/(k-n);if(N){var o=i;i=-b[r(n)]/g,i!==o&&(n=-i*h.length+n)}for(var a=Math.abs(k-n)-1;a--;)l(r((n>k?n:k)-a-1),g*i,0);n=r(n),l(k,g*i,t||E),l(n,0,t||E),N&&l(r(n-i),-g*i,0)}else n=r(n),c(k*-g,n*-g,t||E);k=n,m(e.callback&&e.callback(k,h[k]))}}function l(n,e,t){s(n,e,t),b[n]=e}function s(n,e,t){var i=h[n],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=t+"ms",o.webkitTransform="translate("+e+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+e+"px)")}function c(n,t,i){if(!i)return void(v.style.left=t+"px");var o=+new Date,r=setInterval(function(){var a=+new Date-o;if(a>i)return v.style.left=t+"px",j&&p(),e.transitionEnd&&e.transitionEnd.call(event,k,h[k]),void clearInterval(r);v.style.left=(t-n)*(Math.floor(a/i*100)/100)+n+"px"},4)}function p(){clearTimeout(w),w=setTimeout(o,j)}function d(){j=0,clearTimeout(w)}var u=function(){},m=function(n){setTimeout(n||u,0)},f={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,transitions:function(n){var e=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var t in e)if(void 0!==n.style[e[t]])return!0;return!1}(document.createElement("swipe"))};if(n){var h,b,g,x,v=n.children[0];e=e||{};var w,y,k=parseInt(e.startSlide,10)||0,E=e.speed||300,N=e.continuous=void 0===e.continuous||e.continuous,j=e.auto||0,O={},_={},L={handleEvent:function(n){switch(n.type){case"touchstart":this.start(n);break;case"touchmove":this.move(n);break;case"touchend":m(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":m(this.transitionEnd(n));break;case"resize":m(t)}e.stopPropagation&&n.stopPropagation()},start:function(n){var e=n.touches[0];O={x:e.pageX,y:e.pageY,time:+new Date},y=void 0,_={},v.addEventListener("touchmove",this,!1),v.addEventListener("touchend",this,!1)},move:function(n){if(!(n.touches.length>1||n.scale&&1!==n.scale)&&!e.disableScroll){var t=n.touches[0];_={x:t.pageX-O.x,y:t.pageY-O.y},"undefined"==typeof y&&(y=!!(y||Math.abs(_.x)<Math.abs(_.y))),y||(n.preventDefault(),d(),N?(s(r(k-1),_.x+b[r(k-1)],0),s(k,_.x+b[k],0),s(r(k+1),_.x+b[r(k+1)],0)):(_.x=_.x/(!k&&_.x>0||k==h.length-1&&_.x<0?Math.abs(_.x)/g+1:1),s(k-1,_.x+b[k-1],0),s(k,_.x+b[k],0),s(k+1,_.x+b[k+1],0)),e.swiping&&e.swiping(-_.x/g))}},end:function(n){var t=+new Date-O.time,i=Number(t)<250&&Math.abs(_.x)>20||Math.abs(_.x)>g/2,o=!k&&_.x>0||k==h.length-1&&_.x<0;N&&(o=!1);var a=_.x<0;y||(i&&!o?(a?(N?(l(r(k-1),-g,0),l(r(k+2),g,0)):l(k-1,-g,0),l(k,b[k]-g,E),l(r(k+1),b[r(k+1)]-g,E),k=r(k+1)):(N?(l(r(k+1),g,0),l(r(k-2),-g,0)):l(k+1,g,0),l(k,b[k]+g,E),l(r(k-1),b[r(k-1)]+g,E),k=r(k-1)),e.callback&&e.callback(k,h[k])):N?(l(r(k-1),-g,E),l(k,0,E),l(r(k+1),g,E)):(l(k-1,-g,E),l(k,0,E),l(k+1,g,E))),v.removeEventListener("touchmove",L,!1),v.removeEventListener("touchend",L,!1),v.removeEventListener("touchforcechange",function(){},!1)},transitionEnd:function(n){parseInt(n.target.getAttribute("data-index"),10)==k&&(j&&p(),e.transitionEnd&&e.transitionEnd.call(n,k,h[k]))}};return t(),j&&p(),f.addEventListener?(f.touch&&(v.addEventListener("touchstart",L,!1),v.addEventListener("touchforcechange",function(){},!1)),f.transitions&&(v.addEventListener("webkitTransitionEnd",L,!1),v.addEventListener("msTransitionEnd",L,!1),v.addEventListener("oTransitionEnd",L,!1),v.addEventListener("otransitionend",L,!1),v.addEventListener("transitionend",L,!1)),window.addEventListener("resize",L,!1)):window.onresize=function(){t()},{setup:function(){t()},slide:function(n,e){d(),a(n,e)},prev:function(){d(),i()},next:function(){d(),o()},stop:function(){d()},getPos:function(){return k},getNumSlides:function(){return x},kill:function(){d(),v.style.width="",v.style.left="";for(var n=h.length;n--;){var e=h[n];e.style.width="",e.style.left="",f.transitions&&s(n,0,0)}f.addEventListener?(v.removeEventListener("touchstart",L,!1),v.removeEventListener("webkitTransitionEnd",L,!1),v.removeEventListener("msTransitionEnd",L,!1),v.removeEventListener("oTransitionEnd",L,!1),v.removeEventListener("otransitionend",L,!1),v.removeEventListener("transitionend",L,!1),window.removeEventListener("resize",L,!1)):window.onresize=null}}}}})},240:function(n,e,t){var i=t(241);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},241:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,'.swiper {\n  background-color: #808080;\n}\n.swiper-content {\n  position: relative;\n  margin: 0 auto;\n  width: 982px;\n}\n.img-wrapper {\n  width: 730px;\n  height: 336px;\n}\n.img-wrapper img {\n  width: 730px;\n  height: 336px;\n}\n.banner-btn {\n  cursor: pointer;\n  background: url("http://s2.music.126.net/style/web2/img/index/banner.png") 0 9999px no-repeat;\n}\n.left-btn {\n  display: block;\n  position: absolute;\n  top: 50%;\n  margin-top: -31px;\n  width: 37px;\n  height: 63px;\n  text-indent: -9999px;\n  left: -68px;\n  background-position: 0 -360px;\n}\n.left-btn:hover {\n  background-position: 0 -430px;\n}\n.right-btn {\n  right: -68px;\n  background-position: 0 -508px;\n  display: block;\n  position: absolute;\n  top: 50%;\n  margin-top: -31px;\n  width: 37px;\n  height: 63px;\n  text-indent: -9999px;\n}\n.right-btn:hover {\n  background-position: 0 -578px;\n}\n',""])},248:function(n,e,t){var i=t(249);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;t(6)(i,o);i.locals&&(n.exports=i.locals)},249:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,"",""])}});
//# sourceMappingURL=0.4280bc1b.chunk.js.map