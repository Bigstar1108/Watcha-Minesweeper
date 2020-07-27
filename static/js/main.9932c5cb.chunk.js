(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{30:function(e,t,n){e.exports=n(49)},35:function(e,t,n){},36:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=(n(35),n(15)),s=n(1),l=n(8),u=function(e){var t=e.name,n=e.time;return r.a.createElement("div",{className:"AwardItem"},r.a.createElement("span",null,"\ud83c\udf89 ",r.a.createElement("b",null,"\uac78\ub9b0 \uc2dc\uac04:")," ",n,", ",r.a.createElement("b",null,"\uc774\ub984:")," ",t))},m=(n(36),function(){var e=Object(s.f)(),t=Object(a.useState)([]),n=Object(l.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("award"));if(null===e)c([]);else{var t=e.sort((function(e,t){return e.time>t.time?1:e.time<t.time?-1:0}));c(t.slice(0,10))}}),[]),r.a.createElement("div",{className:"MainContainer"},r.a.createElement("div",{className:"MainLogo"},r.a.createElement("span",null,"Minesweeper\ud83d\udca3"),r.a.createElement("button",{type:"button",onClick:function(){return e.push("/minesweeper")}},"\uac8c\uc784 \uc2dc\uc791!")),r.a.createElement("div",{className:"MainAwardBoard"},r.a.createElement("div",{className:"MainAwardTitle"},r.a.createElement("span",null,"\uc9c0\ub8b0\ucc3e\uae30 \uba85\uc608\uc758 \uc804\ub2f9")),0===o.length?r.a.createElement("span",null,"\uba85\uc608\uc758 \uc804\ub2f9\uc5d0 \uc544\ubb34\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4."):r.a.createElement(r.a.Fragment,null,o.map((function(e,t){return r.a.createElement(u,{id:t,key:t,name:e.name,time:e.time})})))))});m.defaultProps={awards:[]};var d=m;var f={};function p(e,t){return void 0===f["".concat(e).concat(t)]?"unValue":f["".concat(e).concat(t)].isState}var E=n(6),b=(n(46),function(e){var t=e.time,n=e.mines,a=e.handleRestartGame;return r.a.createElement("div",{className:"GameHeader"},r.a.createElement("span",null,"\ub0a8\uc740 \uc9c0\ub8b0 : ",n),r.a.createElement("span",null,"Time : ",t),r.a.createElement("button",{type:"button",onClick:function(){return a()}},"\ub2e4\uc2dc \uc2dc\uc791\ud558\uae30"))});b.defaultProps={mines:10,handleRestartGame:function(){return console.warn("handleRestartGame not defined")}};var v=b,h=function(){var e=Object(E.c)((function(e){return e.Minesweeper})),t=e.opened,n=e.boxs,o=e.isStopGame,c=Object(a.useState)(!1),i=Object(l.a)(c,2),s=i[0],u=i[1],m=Object(E.b)(),d=function(){return m({type:"FINISH_GAME"})},f=function(){return m({type:"START_TIME"})},b=function e(a){var r=parseInt(a[0],10),c=parseInt(a[1],10),i=Object.assign({},n),s=0;if(!0===i[a].isFirst&&!1===o)if(i[a].isFirst=!1,i[a].isState>0)i[a].text=i[a].isState,s++;else if(0===i[a].isState){i[a].classList="box opened",s++;for(var l=-1;l<=1;l++)for(var u=-1;u<=1;u++)0===l&&0===u||9!==p(r+l,c+u)&&"unValue"!==p(r+l,c+u)&&e("".concat(r+l).concat(c+u))}m(function(e,t){return{type:"UPDATE_BOX",obj:e,num:t}}(i,s)),t>=53&&d()},v=function(e){!1===o&&(""===n[e].text?m(function(e){return{type:"CREATE_FLAG",id:e}}(e)):"\u2691"===n[e].text&&function(e){m(function(e){return{type:"DELETE_FLAG",id:e}}(e))}(e))};Object(a.useEffect)((function(){if(s){f();var e=setInterval((function(){f()}),1e3);return(t>=53||!0===o)&&(console.log("stop"),clearInterval(e)),function(){return clearInterval(e)}}return clearInterval(null),function(){return clearInterval(null)}}),[s]);var h=function(e){var a,r;0===t&&!1===o&&u(!0),"\u2691"!==n[e].text&&!0===n[e].isFirst&&!1===o&&(0===n[e].isState&&b(e),n[e].isState>0&&n[e].isState<9&&(a=e,r=n[e].isState,m(function(e,t){return{type:"CLICK_NUMBER",id:e,num:t}}(a,r))),9===n[e].isState&&(u(!1),function(e){m(function(e){return{type:"GAME_OVER",id:e}}(e))}(e))),t>=53&&(u(!1),d())};return r.a.createElement("div",{className:"container"},Object.keys(n).sort((function(e,t){return parseInt(e,10)-parseInt(t,10)})).map((function(e){return r.a.createElement("span",{id:e,className:n[e].classList,key:e,onClick:function(){return h(e)},onContextMenu:function(t){t.preventDefault(),v(e)}},n[e].text)})))};h.defaultProps={opened:0,boxs:{},isStopGame:!1,toggleTimer:!1,handleCreateFlag:function(){return console.warn("handleCreateFlag not defined")},handleDeleteFlag:function(){return console.warn("handleDeleteFlag not defined")},handleClickNumber:function(){return console.warn("handleClickNumber not defined")},handleGameOver:function(){return console.warn("handelGameOver not defined")},handleFinishGame:function(){return console.warn("handelFinishGame not defined")},handleStartTime:function(){return console.warn("handleStartTime not defined")},handleUpdateBox:function(){return console.warn("handleUpdateBox not defined")}};var S=h,O=n(29),w=function(){var e=Object(E.c)((function(e){return e.Minesweeper})).time,t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],c=n[1],i=Object(s.f)();return r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),null===JSON.parse(localStorage.getItem("award"))){var n=[{name:o,time:e}];localStorage.setItem("award",JSON.stringify(n))}else{var a=JSON.parse(localStorage.getItem("award")),r=[{name:o,time:e}],c=[].concat(Object(O.a)(a),r);localStorage.setItem("award",JSON.stringify(c))}alert("\ub7ad\ud0b9\uc5d0 ".concat(o,"\ub2d8\uc774 \ub4f1\uc7ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),i.push("/Watcha-Minesweeper/")},className:"ModalContainer"},r.a.createElement("input",{value:o,onChange:function(e){c(e.target.value)},placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694!"}),r.a.createElement("button",{type:"submit"},"\ub7ad\ud0b9\uc5d0 \ub4f1\uc7ac\ud558\uae30"))};w.defaultProps={time:0,name:"",onChangeName:function(){return console.warn("onChange not defined")},onSubmit:function(){return console.warn("onSubmit not defined")}};var x=w,M=function(e){var t=e.popupText,n=e.handleCreateMines,o=Object(a.useState)(!1),c=Object(l.a)(o,2),i=c[0],s=c[1],u=function(){window.confirm("\ub7ad\ud0b9\uc5d0 \uae30\ub85d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")?s(!0):n()},m=null;return""!==t&&(m=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"popup-container"},r.a.createElement("span",{onClick:function(){return function(e){switch(e){case"\uc9c0\ub8b0\ucc3e\uae30\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?":case"\uc9c0\ub8b0 \ubc1c\uacac! \ub2e4\uc2dc \uc2dc\uc791\ud558\uae30":return s(!1),n(),null;case"\uc9c0\ub8b0 \ucc3e\uae30 \ud074\ub9ac\uc5b4! \ub7ad\ud0b9\uc5d0 \ub4f1\ub85d\ud574\ubcf4\uc138\uc694!":return s(!1),u(),null;default:return null}}(t)}},t)),i?r.a.createElement(x,null):null)),r.a.createElement("div",null,m)};M.defaultProps={Modal:!1,popupText:"",handleCreateMines:function(){return console.warn("handleCreateMines not defined")}};var T=M,g=function(){var e=Object(E.c)((function(e){return e.Minesweeper})),t=e.time,n=e.mines,o=e.popupText,c=Object(E.b)(),i=function(){var e=function(){for(var e=0;e<8;e++)for(var t=0;t<8;t++)f["".concat(e).concat(t)]={text:"",classList:"box",isFirst:!0,isState:0};for(var n,a,r=0;r<9;)n=Math.floor(8*Math.random()),a=Math.floor(8*Math.random()),0===f["".concat(n).concat(a)].isState&&(f["".concat(n).concat(a)].isState=9,r++);for(var o=0;o<8;o++)for(var c=0;c<8;c++)if(9===f["".concat(o).concat(c)].isState)for(var i=-1;i<=1;i++)for(var s=-1;s<=1;s++)0===i&&0===s||9!==p(o+i,c+s)&&"unValue"!==p(o+i,c+s)&&f["".concat(o+i).concat(c+s)].isState++;return f}();c({type:"CREATE_MINE",obj:e})};return Object(a.useEffect)((function(){i()}),[]),r.a.createElement("div",{className:"GameHome"},r.a.createElement(v,{time:t,mines:n,handleRestartGame:function(){return c({type:"RESTART_GAME"})}}),r.a.createElement(S,null),r.a.createElement(T,{popupText:o,handleCreateMines:i}))};g.defaultProps={time:0,mines:9,popupText:"",handleCreateMines:function(){return console.warn("handleCreateMines not defined")},handleRestartGame:function(){return console.warn("handleRestartGame not defined")}};var j=g,$=function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("a",{href:"https://github.com/Bigstar1108/Watcha-Minesweeper"},"Made By Bigstar1108(Github)"))},N=(n(47),function(){return r.a.createElement("div",{className:"rootDiv"},r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/Watcha-Minesweeper/",component:d}),r.a.createElement(s.a,{exact:!0,path:"minesweeper",component:j})),r.a.createElement($,null)))}),_=n(10),C=n(11),G=n(5),I=n.n(G),F={boxs:{},opened:0,popupText:"",mines:9,time:0,isStopGame:!1};var A=Object(_.b)({Minesweeper:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_MINE":return I()(e,{boxs:{$set:t.obj},popupText:{$set:""},opened:{$set:0},mines:{$set:9},time:{$set:0},isStopGame:{$set:!1}});case"UPDATE_BOX":return I()(e,{boxs:{$set:t.obj},opened:{$set:e.opened+t.num}});case"RESTART_GAME":return I()(e,{popupText:{$set:"\uc9c0\ub8b0\ucc3e\uae30\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"},isStopGame:{$set:!0}});case"CREATE_FLAG":return I()(e,{boxs:Object(C.a)({},t.id,{text:{$set:"\u2691"},isFirst:{$set:!1}}),mines:{$set:--e.mines}});case"DELETE_FLAG":return I()(e,{boxs:Object(C.a)({},t.id,{text:{$set:""},isFirst:{$set:!0}}),mines:{$set:++e.mines}});case"CLICK_NUMBER":return I()(e,{boxs:Object(C.a)({},t.id,{text:{$set:t.num},isFirst:{$set:!1}}),opened:{$set:++e.opened}});case"CLICK_EMPTY":return I()(e,{boxs:Object(C.a)({},t.id,{text:{$set:""},classList:{$set:"box opened"},isFirst:{$set:!1}}),opened:{$set:++e.opened}});case"GAME_OVER":return I()(e,{boxs:Object(C.a)({},t.id,{text:{$set:"\ud83d\udca3"},classList:{$set:"box"},isFirst:{$set:!1}}),popupText:{$set:"\uc9c0\ub8b0 \ubc1c\uacac! \ub2e4\uc2dc \uc2dc\uc791\ud558\uae30"},mines:{$set:--e.mines},isStopGame:{$set:!0}});case"FINISH_GAME":return I()(e,{popupText:{$set:"\uc9c0\ub8b0 \ucc3e\uae30 \ud074\ub9ac\uc5b4! \ub7ad\ud0b9\uc5d0 \ub4f1\ub85d\ud574\ubcf4\uc138\uc694!"},isStopGame:{$set:!0}});case"START_TIME":return I()(e,{time:{$set:++e.time}});default:return e}}}),R=Object(_.c)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(E.a,{store:R},r.a.createElement(N,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9932c5cb.chunk.js.map