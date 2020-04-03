(this["webpackJsonpreact-pomodoro-clock"]=this["webpackJsonpreact-pomodoro-clock"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(7),r=a.n(i),c=(a(13),a(2)),o=a(3),l=a(4),u=a(5),m=function(e){return n.a.createElement("header",null," ",e.text," ")},p=function(e){return n.a.createElement("footer",null," ",e.text," ")},h=a(1),d=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={counter:s.props.value},s.increment=s.increment.bind(Object(h.a)(s)),s.decrement=s.decrement.bind(Object(h.a)(s)),s}return Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.reset&&(this.setState({counter:e.value}),e.resetBack())}},{key:"increment",value:function(){this.state.counter>=60||(this.setState((function(e){return{counter:e.counter++}})),this.props.getTime({type:this.props.type,time:this.state.counter+1}))}},{key:"decrement",value:function(){this.state.counter<=1||(this.setState((function(e){return{counter:e.counter--}})),this.props.getTime({type:this.props.type,time:this.state.counter-1}))}},{key:"render",value:function(){return n.a.createElement("div",{className:this.props.controlClass+" control"},n.a.createElement("div",{id:this.props.id},this.props.text),n.a.createElement("div",{onChange:this.sendValue,id:this.props.valueID},this.state.counter),n.a.createElement("button",{onClick:this.increment,id:this.props.btn1ID},n.a.createElement("i",{className:"fas fa-arrow-alt-circle-up fa-2x icon"})),n.a.createElement("button",{onClick:this.decrement,id:this.props.btn2ID},n.a.createElement("i",{className:"fas fa-arrow-alt-circle-down fa-2x icon"})))}}]),a}(n.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={},s.togglePlay=s.togglePlay.bind(Object(h.a)(s)),s.reset=s.reset.bind(Object(h.a)(s)),s}return Object(o.a)(a,[{key:"togglePlay",value:function(){this.props.togglePlay()}},{key:"reset",value:function(){this.props.reset()}},{key:"render",value:function(){return n.a.createElement("div",{className:"display"},n.a.createElement("div",{id:"timer-label"},this.props.displayText),n.a.createElement("div",{id:"time-left"},this.props.timeLeft),n.a.createElement("div",{className:"disp-btn"},n.a.createElement("button",{onClick:this.togglePlay,id:"start_stop"},this.props.pause?n.a.createElement("i",{class:"fas fa-pause-circle fa-2x icon"}):n.a.createElement("i",{class:"fas fa-play-circle fa-2x icon"})),n.a.createElement("button",{onClick:this.reset,id:"reset"},n.a.createElement("i",{className:"fas fa-undo fa-2x icon"}))))}}]),a}(n.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={minLeft:25,secLeft:0,sessValue:25,brkValue:5,reset:!1,play:!1,pause:!1,session:!0,displayText:"Session",idVar:"",flipped:!1},s.timeLeftString=s.timeLeftString.bind(Object(h.a)(s)),s.getTime=s.getTime.bind(Object(h.a)(s)),s.togglePlay=s.togglePlay.bind(Object(h.a)(s)),s.reset=s.reset.bind(Object(h.a)(s)),s.resetBack=s.resetBack.bind(Object(h.a)(s)),s.startTimer=s.startTimer.bind(Object(h.a)(s)),s.stopTimer=s.stopTimer.bind(Object(h.a)(s)),s.playSound=s.playSound.bind(Object(h.a)(s)),s.rewind=s.rewind.bind(Object(h.a)(s)),s}return Object(o.a)(a,[{key:"timeLeftString",value:function(){return(this.state.minLeft<10?"0"+this.state.minLeft:this.state.minLeft)+":"+(this.state.secLeft<10?"0"+this.state.secLeft:this.state.secLeft)}},{key:"getTime",value:function(e){"S"===e.type?this.setState({minLeft:e.time,secLeft:0,sessValue:e.time}):"B"===e.type&&this.setState({brkValue:e.time})}},{key:"togglePlay",value:function(){this.state.play?(this.stopTimer(),this.setState({play:!1})):(this.startTimer(),this.setState({play:!0}))}},{key:"startTimer",value:function(){var e=this,t=this.state.secLeft,a=this.state.minLeft;this.state.pause||(a=this.state.session?this.state.sessValue:this.state.brkValue),this.setState({idVar:setInterval((function(){e.state.flipped?e.setState((function(e){return{flipped:!1}})):(0===t&&(t=60,a--),t--),t<=0&&a<=0?(e.setState((function(e){return{secLeft:0,minLeft:0,session:!e.session,flipped:!0}})),e.state.session?(a=e.state.sessValue,e.setState((function(e){return{displayText:"Session"}}))):(a=e.state.brkValue,e.setState((function(e){return{displayText:"Break"}}))),e.playSound()):e.setState({secLeft:t,minLeft:a})}),1e3)})}},{key:"stopTimer",value:function(){clearInterval(this.state.idVar),this.setState((function(e){return{pause:!0}}))}},{key:"reset",value:function(){this.setState({minLeft:25,secLeft:0,sessValue:25,brkValue:5,reset:!0,displayText:"Session",idVar:"",pause:!1,play:!1,session:!0}),this.stopTimer(),this.rewind()}},{key:"resetBack",value:function(){this.setState({reset:!1})}},{key:"playSound",value:function(){var e=document.getElementById("beep");e.currentTime=0,e.play()}},{key:"rewind",value:function(){var e=document.getElementById("beep");e.pause(),e.currentTime=0}},{key:"render",value:function(){return n.a.createElement("div",{id:"pomodoro"},n.a.createElement(d,{controlClass:"BreakControl",id:"break-label",text:"Break Length",valueID:"break-length",value:this.state.brkValue,reset:this.state.reset,resetBack:this.resetBack,type:"B",getTime:this.getTime,btn1ID:"break-increment",btn2ID:"break-decrement",running:this.state.play}),n.a.createElement(f,{timeLeft:this.timeLeftString(),reset:this.reset,pause:this.state.play,togglePlay:this.togglePlay,displayText:this.state.displayText}),n.a.createElement(d,{controlClass:"SessionControl",id:"session-label",text:"Session Length",valueID:"session-length",value:this.state.sessValue,reset:this.state.reset,resetBack:this.resetBack,type:"S",getTime:this.getTime,btn1ID:"session-increment",btn2ID:"session-decrement",running:this.state.play}),n.a.createElement("audio",{id:"beep",src:"http://research.spa.aalto.fi/publications/papers/dafx13-impact/sounds/out_L.wav"}))}}]),a}(n.a.Component),y=(a(14),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(m,{text:"FCC: Front End Libraries - Project 5, Pomodoro Clock"}),n.a.createElement(b,null),n.a.createElement(p,{text:"\xa9 2020 Mahmoud Mheisen"}))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e98a0491.chunk.js.map