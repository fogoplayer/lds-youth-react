webpackJsonp([38],{163:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[n.state.windowLocation]&&e.data()[n.state.windowLocation][n.props.id];t&&n.setState({text:JSON.parse(JSON.stringify(t))})})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),n}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"render",value:function(){return s.a.createElement("div",{contentEditable:"true",className:"textArea "+(this.props.color?this.props.color+" lighten-4":"grey lighten-2"),id:this.props.id,color:"black",style:{display:"inline-block",width:"150px",fontSize:"18px",height:"26px",paddingBottom:"1.5px",textAlign:"center",marginBottom:"10px",border:"0px",borderBottom:"1px solid black"}},this.state.text)}}]),t}(s.a.Component);t.a=l},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),a=n(163),i=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Completion of Personal Progress"),r.a.createElement("p",null,"I have completed the requirements necessary to receive the Young Womanhood Recognition. As I continue to progress, I will keep the commandments, serve others, and develop and share my gifts and talents. As I do this, I will be prepared to strengthen my home and family and be worthy and prepared to receive the ordinances of the temple."),r.a.createElement("p",null,"Signature of Young Woman"),r.a.createElement(a.a,{id:"signature"}),r.a.createElement("p",null,"Date"),r.a.createElement(a.a,{id:"youngWomanSignatureDate"}))};t.default=i}});
//# sourceMappingURL=38.f5dfa91a.chunk.js.map