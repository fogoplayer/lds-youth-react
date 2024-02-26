webpackJsonp([31],{163:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[n.state.windowLocation]&&e.data()[n.state.windowLocation][n.props.id];t&&(document.getElementById(n.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return s.a.createElement("div",{className:"input-field"},s.a.createElement("textArea",{id:this.props.id,type:"text",className:"materialize-textarea",placeholder:this.props.placeholder,onFocus:function(){firebase.auth().currentuser||window.beenThereDoneThat||(alert("Warning: you are not signed in. If you would like your work to be saved, sign in."),window.beenThereDoneThat=!0)}}))}}]),t}(s.a.Component);t.a=l},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),a=n(163),i=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Serve Others"),r.a.createElement("h4",null,"Learn"),r.a.createElement("p",null,"Write down what you learn about serving others from the following scriptures:"," ",r.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/james/1.27"},"James 1:27"),","," ",r.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/mosiah/2.17"},"Mosiah 2:17"),", and"," ",r.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/mosiah/18.8-10"},"Mosiah 18:8\u201310"),". Talk with a parent or quorum leader about the relationship between being a priesthood holder and serving others"),r.a.createElement(a.a,{id:"text1"}),r.a.createElement("p",null,"Discuss with members of your quorum the opportunities you have to serve others (ask your bishop or quorum leaders for ideas). As an Aaronic Priesthood holder, you serve others by assisting your bishop or branch president in \u201cadministering temporal things\u201d (",r.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/107.68"},"D&C 107:68"),"). This may include caring for the poor and needy, cleaning the meetinghouse and grounds, gathering fast offerings, and fulfilling assignments from your quorum president. It could also include service projects you decide to do on your own"),r.a.createElement("p",null,"List some specific things your quorum will do to give service. Also plan several things you will do on your own to give service, including service to members of your family"),r.a.createElement("h4",null,"Act"),r.a.createElement("p",null,"My quorum\u2019s plan to give service:"),r.a.createElement(a.a,{id:"text1"}),r.a.createElement("p",null,"My personal plan to give service: "),r.a.createElement(a.a,{id:"text2"}),r.a.createElement("h4",null,"Share"),r.a.createElement("p",null,"Share with a parent or quorum members some of your experiences serving others. For example, you could talk about how your service has affected you and the people you have served."))};t.default=i}});
//# sourceMappingURL=31.790204ee.chunk.js.map