webpackJsonp([27],{163:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[n.state.windowLocation]&&e.data()[n.state.windowLocation][n.props.id];t&&(document.getElementById(n.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),n}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return l.a.createElement("div",{className:"input-field"},l.a.createElement("textArea",{id:this.props.id,type:"text",className:"materialize-textarea",placeholder:this.props.placeholder,onFocus:function(){firebase.auth().currentuser||window.beenThereDoneThat||(alert("Warning: you are not signed in. If you would like your work to be saved, sign in."),window.beenThereDoneThat=!0)}}))}}]),t}(l.a.Component);t.a=c},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),o=n(163),i=function(e){return a.a.createElement("div",null,a.a.createElement("h2",null,"Administer Priesthood Ordinances"),a.a.createElement("h4",null,"Learn"),a.a.createElement("p",null,"Read"," ",a.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/3-ne/18.1-11"},"3 Nephi 18:1\u201311")," ","and"," ",a.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/matt/26.26-28"},"Matthew 26:26\u201328"),". What do you learn from these verses about your duty to administer the sacrament?"),a.a.createElement(o.a,{id:"text1"}),a.a.createElement("p",null,"Thoughtfully read the sacrament prayers (see"," ",a.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/20.77"},"D&C 20:77"),","," ",a.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/20.79"},"79"),"). Write down your thoughts about the meaning of the covenants and sacred words in these prayers."),a.a.createElement(o.a,{id:"text2"}),a.a.createElement("p",null,"Write your answers to these questions:"),a.a.createElement("ol",null,a.a.createElement("li",null,"As you officiate at the sacrament table, what can you do to set a good example for other Aaronic Priesthood holders?"),a.a.createElement("li",null," ","What can you do to help make the sacrament a more meaningful experience for the members of the congregation?")),a.a.createElement(o.a,{id:"text3"}),a.a.createElement("p",null,"Attend a baptismal service, and share with a parent or quorum leader what you learn about the ordinance of baptism."),a.a.createElement("h2",null,"Act"),a.a.createElement("p",null,"My plan to set a good example for other Aaronic Priesthood holders as I bless the sacrament:"),a.a.createElement(o.a,{id:"text4"}),a.a.createElement("p",null,"My plan to help make the sacrament a more meaningful experience for the members of the congregation:"),a.a.createElement(o.a,{id:"text5"}),a.a.createElement("h2",null,"Share"),a.a.createElement("p",null,"After following through with your plans, discuss with members of your quorum how your experiences have influenced your feelings about the sacrament and the Savior."))};t.default=i}});
//# sourceMappingURL=27.f67629ef.chunk.js.map