webpackJsonp([8],{203:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function i(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r,s,c=t(0),p=t.n(c),l=t(26),g=t(7),m=t(28),u=t(27),f=t(246),h=(t.n(f),function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}()),d=function(n){var e=[];return e=n.replace(/\[\d{2}[:.]\d{2}.\d{1,3}\]/g,"").split("\n"),console.log(e),e},b=(r=Object(l.b)(function(n){return{prepareObj:n.prepareListReducer}},{changeCurrent:m.a,fetchSong:u.a}))(s=function(n){function e(n){o(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.handleMouseOver=t.handleMouseOver.bind(t),t.handleMouseOut=t.handleMouseOut.bind(t),t.playMusic=t.playMusic.bind(t),t.extendsLyr=t.extendsLyr.bind(t),t.state={showbg:"ply",moreLyr:!1},t}return i(e,n),h(e,[{key:"extendsLyr",value:function(){this.state.moreLyr?this.setState({moreLyr:!1}):this.setState({moreLyr:!0})}},{key:"playMusic",value:function(){this.props.changeCurrent(this.props.songs[0]),this.props.fetchSong(this.props.match.params.id)}},{key:"handleMouseOver",value:function(){this.setState({showbg:"plyhover"})}},{key:"handleMouseOut",value:function(){this.setState({showbg:"ply"})}},{key:"render",value:function(){var n=this.props.songs,e=this.props.lrc,t=[],o="",a="";return e&&(t=d(e.lyric),o=t.slice(0,13).join("\n"),a=t.slice(13).join("\n")),p.a.createElement("div",{className:"song-info-wrap"},p.a.createElement("div",{className:"img-wrap"},p.a.createElement("div",{className:"img-cover"},p.a.createElement("img",{src:(n.length&&n[0].al.picUrl)+"?param=130y130",alt:"\u56fe\u7247"}),p.a.createElement("span",{className:"img-msk"})),p.a.createElement("div",{className:"out"},p.a.createElement("i",{className:"icn-music"}),p.a.createElement(g.b,{className:"out-link",to:"./3"},"\u751f\u6210\u5916\u94fe\u64ad\u653e\u5668"))),p.a.createElement("div",{className:"content"},p.a.createElement("div",{className:"head"},p.a.createElement("i",{className:"lab"}),p.a.createElement("div",{className:"title"},p.a.createElement("em",null,n.length&&n[0].name))),p.a.createElement("p",{className:"des"},"\u6b4c\u624b\uff1a",p.a.createElement("span",null,p.a.createElement(g.b,{to:"singer/123"},n.length&&n[0].ar[0].name))),p.a.createElement("p",{className:"des"},"\u6240\u5c5e\u4e13\u8f91\uff1a",p.a.createElement("span",null,p.a.createElement(g.b,{to:"album/123"},n.length&&n[0].al.name))),p.a.createElement("div",{className:"btn-group"},p.a.createElement("a",{className:"info-btn icn-blue",onClick:this.playMusic,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},p.a.createElement("i",{className:"btn-i icn-play"},p.a.createElement("em",{className:this.state.showbg}),"\u64ad\u653e")),p.a.createElement("a",{className:"info-btn icn-white"},p.a.createElement("i",{className:"btn-i icn-collect"},"\u6536\u85cf")),p.a.createElement("a",{className:"info-btn icn-white"},p.a.createElement("i",{className:"btn-i icn-share"},"\u5206\u4eab")),p.a.createElement("a",{className:"info-btn icn-white"},p.a.createElement("i",{className:"btn-i icn-download"},"\u4e0b\u8f7d")),p.a.createElement("a",{className:"info-btn icn-white"},p.a.createElement("i",{className:"btn-i icn-comment"},"(4704)"))),p.a.createElement("div",{className:"lyric-content"},o,p.a.createElement("div",{style:{display:this.state.moreLyr?"block":"none"}},a),p.a.createElement("button",{onClick:this.extendsLyr,className:"more"},this.state.moreLyr?"\u6536\u8d77":"\u5c55\u5f00",p.a.createElement("i",{className:"down "+(this.state.moreLyr?"up":"")})))))}}]),e}(p.a.Component))||s;e.default=Object(g.g)(b)},246:function(n,e,t){var o=t(247);"string"===typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0};a.transform=void 0;t(6)(o,a);o.locals&&(n.exports=o.locals)},247:function(n,e,t){e=n.exports=t(5)(void 0),e.push([n.i,'@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.song-info-wrap {\n  font-size: 12px;\n}\n.song-info-wrap:after {\n  clear: both;\n  content: \'.\';\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.song-info-wrap .img-wrap {\n  float: left;\n  width: 206px;\n  margin-right: -226px;\n  position: relative;\n  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;\n}\n.song-info-wrap .img-wrap .img-cover {\n  width: 198px;\n  height: 198px;\n  position: relative;\n  float: left;\n}\n.song-info-wrap .img-wrap .img-cover img {\n  width: 130px;\n  height: 130px;\n  margin: 34px;\n}\n.song-info-wrap .img-wrap .img-cover .img-msk {\n  position: absolute;\n  width: 206px;\n  height: 205px;\n  top: -4px;\n  left: -4px;\n  background: url("http://s2.music.126.net/style/web2/img/coverall.png");\n  background-position: -140px -580px;\n}\n.song-info-wrap .img-wrap .out {\n  float: left;\n  margin: 20px 0 0 46px;\n}\n.song-info-wrap .img-wrap .out .out-link {\n  text-decoration: underline;\n  color: #0c73c2;\n  margin: 10px 0;\n}\n.song-info-wrap .img-wrap .out .icn-music {\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n  display: inline-block;\n  vertical-align: middle;\n  background: url("http://s2.music.126.net/style/web2/img/icon.png") no-repeat 0 9999px;\n  background-position: -34px -863px;\n}\n.song-info-wrap .content {\n  float: right;\n  width: 414px;\n  font-size: 12px;\n  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;\n}\n.song-info-wrap .content .head {\n  word-wrap: break-word;\n}\n.song-info-wrap .content .head .lab {\n  float: left;\n  width: 54px;\n  height: 24px;\n  background: url("http://s2.music.126.net/style/web2/img/icon.png");\n  background-position: 0 -463px;\n}\n.song-info-wrap .content .head .title {\n  margin-left: 64px;\n  position: relative;\n  top: -6px;\n  font-size: 24px;\n  height: 33px;\n}\n.song-info-wrap .content .head .title em {\n  margin-right: 7px;\n  font-style: normal;\n  vertical-align: middle;\n}\n.song-info-wrap .content .des {\n  margin: 10px 0;\n  color: #999;\n}\n.song-info-wrap .content .des a {\n  color: #0c73c2;\n}\n.song-info-wrap .content .des a:hover {\n  text-decoration: underline;\n}\n.song-info-wrap .content .btn-group {\n  margin-bottom: 25px;\n  margin-right: -10px;\n}\n.song-info-wrap .content .btn-group:after {\n  clear: both;\n  content: \'.\';\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.song-info-wrap .content .btn-group .info-btn {\n  border: 0;\n  outline: 0;\n  margin-right: 6px;\n  float: left;\n  height: 31px;\n  line-height: 30px;\n  min-width: 23px;\n  cursor: pointer;\n  padding: 0 5px 0 0;\n  white-space: nowrap;\n  color: #333;\n  background: url("http://s2.music.126.net/style/web2/img/button2.png") no-repeat 0 9999px;\n}\n.song-info-wrap .content .btn-group .btn-i {\n  font-family: "simsun", "\\5B8B\\4F53";\n  font-style: normal;\n  float: left;\n  height: 31px;\n  line-height: 30px;\n  min-width: 23px;\n  cursor: pointer;\n  background: url("http://s2.music.126.net/style/web2/img/button2.png") no-repeat 0 9999px;\n}\n.song-info-wrap .content .btn-group .icn-blue {\n  background-position: right -428px;\n}\n.song-info-wrap .content .btn-group .icn-blue:hover {\n  color: #fff;\n  background-position: right -510px;\n}\n.song-info-wrap .content .btn-group .icn-white {\n  background-position: right -1020px;\n}\n.song-info-wrap .content .btn-group .icn-play {\n  color: #fff;\n  padding: 0 7px 0 8px;\n  background-position: 0 -387px;\n}\n.song-info-wrap .content .btn-group .icn-play:hover {\n  color: #fff;\n  background-position: 0 -469px;\n}\n.song-info-wrap .content .btn-group .icn-collect {\n  padding-left: 28px;\n  background-position: 0 -977px;\n}\n.song-info-wrap .content .btn-group .icn-collect:hover {\n  background-position: 0 -1063px;\n}\n.song-info-wrap .content .btn-group .icn-share {\n  padding-left: 28px;\n  background-position: 0 -1225px;\n}\n.song-info-wrap .content .btn-group .icn-share:hover {\n  background-position: 0 -1268px;\n}\n.song-info-wrap .content .btn-group .icn-download {\n  padding-left: 28px;\n  background-position: 0 -2761px;\n}\n.song-info-wrap .content .btn-group .icn-download:hover {\n  background-position: 0 -2805px;\n}\n.song-info-wrap .content .btn-group .icn-comment {\n  padding-left: 28px;\n  background-position: 0 -1465px;\n}\n.song-info-wrap .content .btn-group .icn-comment:hover {\n  background-position: 0 -1508px;\n}\n.song-info-wrap .content .btn-group .ply {\n  float: left;\n  width: 20px;\n  height: 18px;\n  margin: 6px 2px 2px 0;\n  background: url("http://s2.music.126.net/style/web2/img/button2.png");\n  background-position: 0 -1622px;\n  overflow: hidden;\n}\n.song-info-wrap .content .btn-group .plyhover {\n  float: left;\n  width: 20px;\n  height: 18px;\n  margin: 6px 2px 2px 0;\n  background: url("http://s2.music.126.net/style/web2/img/button2.png");\n  background-position: -28px -1622px;\n  overflow: hidden;\n}\n.song-info-wrap .content .lyric-content {\n  height: auto;\n  margin-top: 13px;\n  line-height: 23px;\n  color: #333;\n  white-space: pre-wrap;\n}\n.song-info-wrap .content .lyric-content .more {\n  outline: 0;\n  border: 0;\n  color: #0c73c2;\n  background: #fff;\n  cursor: pointer;\n  margin-top: 5px;\n}\n.song-info-wrap .content .lyric-content .more:hover {\n  text-decoration: underline;\n}\n.song-info-wrap .content .lyric-content .more .down {\n  background: url("http://s2.music.126.net/style/web2/img/icon.png") no-repeat;\n  width: 11px;\n  height: 8px;\n  background-position: -65px -520px;\n  display: inline-block;\n}\n.song-info-wrap .content .lyric-content .more .up {\n  background-position: -45px -520px;\n}\n',""])}});
//# sourceMappingURL=8.94589347.chunk.js.map