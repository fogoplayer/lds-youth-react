webpackJsonp([39],{164:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[n.state.windowLocation]&&e.data()[n.state.windowLocation][n.props.id];t&&(document.getElementById(n.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return s.a.createElement("input",{id:this.props.id,type:"text",className:this.props.color+" lighten-4",onFocus:function(){firebase.auth().currentuser||window.beenThereDoneThat||(alert("Warning: you are not signed in. If you would like your work to be saved, sign in."),window.beenThereDoneThat=!0)},style:{width:"150px",height:"1em",fontSize:"1em",textAlign:"center"}})}}]),t}(s.a.Component);t.a=c},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(164),a=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Review"),r.a.createElement("p",null,"Near the end of your years as a teacher, talk with your parents or a priesthood leader about your experiences accomplishing your plans to administer priesthood ordinances, serve others, and invite all to come unto Christ. Discuss ways you were able to bless others through your priesthood service. Talk about how your experiences are helping you become a faithful priesthood servant."),r.a.createElement("p",null,"My Signature"),r.a.createElement(i.a,{id:"sign1"}),r.a.createElement("p",null,"Signature of Parent or Leader"),r.a.createElement(i.a,{id:"sign2"}))};t.default=a}});
//# sourceMappingURL=39.df068ccb.chunk.js.map