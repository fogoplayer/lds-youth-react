webpackJsonp([21],{163:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[n.state.windowLocation]&&e.data()[n.state.windowLocation][n.props.id];t&&(document.getElementById(n.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),n}return o(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return s.a.createElement("div",{className:"input-field"},s.a.createElement("textArea",{id:this.props.id,type:"text",className:"materialize-textarea",placeholder:this.props.placeholder,onFocus:function(){firebase.auth().currentuser||window.beenThereDoneThat||(alert("Warning: you are not signed in. If you would like your work to be saved, sign in."),window.beenThereDoneThat=!0)}}))}}]),t}(s.a.Component);t.a=c},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),o=n(163),i=function(e){return a.a.createElement("div",null,a.a.createElement("h2",null,"Administer Priesthood Ordinances"),a.a.createElement("h4",null,"Learn"),a.a.createElement("p",null,"Read"," ",a.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/38.42"},"Doctrine and Covenants 38:42"),". The command \u201cBe ye clean that bear the vessels of the Lord\u201d has special meaning as you fulfill your duty to prepare the sacrament. Anciently a group of priests carried vessels\u2014 bowls or basins\u2014to be used in the temple (see"," ",a.a.createElement("a",{href:"https://www.lds.org/scriptures/ot/ezra/1.5-11"},"Ezra 1:5\u201311"),"). Today you handle vessels that contain the sacramental bread and water in remembrance of the Atonement of Jesus Christ."),a.a.createElement("p",null,"Read"," ",a.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/matt/26.26-28"},"Matthew 26:26\u201328"),". On the next page, write your answers to these questions:"),a.a.createElement("ol",null,a.a.createElement("li",null,"What can you do to prepare the sacrament in a reverent and dignified manner (even though most people will not see you perform this duty)?"),a.a.createElement("li",null,"How can you set a good example for the deacons when you are asked to pass the sacrament?")),a.a.createElement("h4",null,"Act"),a.a.createElement("p",null,"My plan to prepare the sacrament in a reverent and dignified manner:"),a.a.createElement(o.a,{id:"text1"}),a.a.createElement("p",null,"My plan to set a good example for deacons when I am asked to pass the sacrament:"),a.a.createElement(o.a,{id:"text2"}),a.a.createElement("h4",null,"Share"),a.a.createElement("p",null,"After following through with your plan, discuss with members of your quorum how your experiences have infl uenced your feelings about the sacrament and the Savior."))};t.default=i}});
//# sourceMappingURL=21.548ddc54.chunk.js.map