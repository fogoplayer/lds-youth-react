webpackJsonp([25],{163:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(0),s=o.n(i),l=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=function(e){function t(e){r(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));o.state={text:o.props.placeholder?o.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[o.state.windowLocation]&&e.data()[o.state.windowLocation][o.props.id];t&&(document.getElementById(o.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),o}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return s.a.createElement("div",{className:"input-field"},s.a.createElement("textArea",{id:this.props.id,type:"text",className:"materialize-textarea",placeholder:this.props.placeholder,onFocus:function(){firebase.auth().currentuser||window.beenThereDoneThat||(alert("Warning: you are not signed in. If you would like your work to be saved, sign in."),window.beenThereDoneThat=!0)}}))}}]),t}(s.a.Component);t.a=u},53:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),n=o.n(r),a=o(163),i=function(e){return n.a.createElement("div",null,n.a.createElement("h2",null,"Serve Others"),n.a.createElement("h4",null,"Learn"),n.a.createElement("p",null,"Think about the service you have performed in your years as a deacon and teacher, and answer the following questions:"),n.a.createElement("ol",null,n.a.createElement("li",null,"How did your attitude affect the service you gave? (Review the phrases you wrote as a"," ",n.a.createElement("a",{href:"/LDSYouth/dutyToGod/teacher/teacherPDServe.html"},"teacher"),".)"),n.a.createElement("li",null,"How does service help you become less self-centered and more aware of others\u2019 needs?"),n.a.createElement("li",null,"How were the people you served affected by your service?"),n.a.createElement("li",null,"What can you do as a priest to give more effective service?")),n.a.createElement("p",null,"Read"," ",n.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/matt/22.36-40"},"Matthew 22:36\u201340"),","," ",n.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/john/13.34-35"},"John 13:34\u201335"),", and"," ",n.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/mosiah/2.17"},"Mosiah 2:17"),", looking for reasons we serve others. Discuss with your quorum the opportunities you have to serve others (ask your bishop or quorum leaders for ideas). List some specific things your quorum will do to give service. Also plan several things you will do on your own to serve your family and others."),n.a.createElement("h2",null,"Act"),n.a.createElement("p",null,"My quorum\u2019s plan to give service:"),n.a.createElement(a.a,{id:"text1"}),n.a.createElement("p",null,"My personal plan to give service: "),n.a.createElement(a.a,{id:"text2"}),n.a.createElement("h2",null,"Share"),n.a.createElement("p",null,"Share with a parent or quorum members some of your experiences serving others. For example, you could talk about how your service has affected the people you have served and how your attitude has affected your experiences. Talk about how these experiences are helping you become more Christlike."))};t.default=i}});
//# sourceMappingURL=25.dfeffb3f.chunk.js.map