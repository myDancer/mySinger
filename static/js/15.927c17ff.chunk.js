webpackJsonp([15],{191:function(n,t,e){"use strict";function i(n){return s.a.createElement("div",null,s.a.createElement("ul",{className:"songlist"},n.songList.map(function(n){return s.a.createElement("li",{className:"song-item",key:n.link},s.a.createElement("div",{className:"item"},s.a.createElement("img",{alt:"fengmian",src:n.imgUrl}),s.a.createElement(a.b,{className:"item-a",to:n.link}),s.a.createElement("div",{className:"bottom"},s.a.createElement(a.b,{className:"icn-play",to:n.link}),s.a.createElement("span",{className:"icn-headset"}),s.a.createElement("span",{className:"playnum"},n.playNum))),s.a.createElement("p",{className:"dec"},s.a.createElement(a.b,{className:"dec-a",to:n.link},n.title)))})))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var o=e(0),s=e.n(o),a=e(7),l=e(219);e.n(l)},219:function(n,t,e){var i=e(220);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0};o.transform=void 0;e(6)(i,o);i.locals&&(n.exports=i.locals)},220:function(n,t,e){t=n.exports=e(5)(void 0),t.push([n.i,'.songlist {\n  margin: 20px 0 0 -42px;\n  font-size: 12px;\n}\n.songlist:after {\n  clear: both;\n  content: \'.\';\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.songlist .song-item {\n  float: left;\n  width: 140px;\n  height: 204px;\n  overflow: hidden;\n  padding: 0 0 30px 42px;\n  line-height: 1.4;\n  list-style: none;\n}\n.songlist .song-item .item {\n  position: relative;\n  display: block;\n  width: 140px;\n  height: 140px;\n  line-height: 1.4;\n}\n.songlist .song-item .item .item-a {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: url("http://s2.music.126.net/style/web2/img/coverall.png");\n  background-position: 0 0;\n}\n.songlist .song-item .item .bottom {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 27px;\n  background: url("http://s2.music.126.net/style/web2/img/coverall.png");\n  background-position: 0 -537px;\n  color: #ccc;\n}\n.songlist .song-item .item .bottom .icn-play {\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n  width: 16px;\n  height: 17px;\n  background: url("http://s2.music.126.net/style/web2/img/iconall.png") no-repeat;\n  background-position: 0 0;\n  float: right;\n}\n.songlist .song-item .item .bottom .icn-play:hover {\n  background-position: 0 -60px;\n}\n.songlist .song-item .item .bottom .icn-headset {\n  float: left;\n  width: 14px;\n  height: 11px;\n  background: url("http://s2.music.126.net/style/web2/img/iconall.png") no-repeat;\n  background-position: 0 -24px;\n  margin: 9px 5px 9px 10px;\n}\n.songlist .song-item .item .bottom .playnum {\n  margin-top: 7px;\n  display: inline-block;\n}\n.songlist .song-item .dec {\n  margin: 8px 0 3px;\n}\n.songlist .song-item .dec .dec-a {\n  color: #000;\n  font-size: 14px;\n}\n.songlist .song-item .dec .dec-a:hover {\n  font-size: 14px;\n  text-decoration: underline;\n}\n',""])}});
//# sourceMappingURL=15.927c17ff.chunk.js.map