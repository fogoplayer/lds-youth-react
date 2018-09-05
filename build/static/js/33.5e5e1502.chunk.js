webpackJsonp([33],{159:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)},n}return o(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()});try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+window.location.pathname+"/"+this.props.id).once("value").then(function(t){t.val()&&e.setState({text:JSON.parse(JSON.stringify(t.val()))})})}catch(e){console.error(e)}}},{key:"componentWillUnmount",value:function(){var e={};e[this.props.id]=document.getElementById(this.props.id).innerHTML,console.log(window.location.pathname),console.info("/users/"+firebase.auth().currentUser.uid+"/"+this.state.windowLocation+"/");try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+this.state.windowLocation+"/").update(e)}catch(e){console.error(e)}}},{key:"render",value:function(){return s.a.createElement("div",{contentEditable:"true",className:"textArea",id:this.props.id,color:this.props.color?this.props.color:"black",style:{display:"inline-block",width:"calc(100% - 2px)",border:"1px solid black",minHeight:"28px",marginBottom:"11px"}},this.state.text)}}]),t}(s.a.Component);t.a=c},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),o=n(159),i=function(e){return a.a.createElement("div",null,a.a.createElement("h2",null,"Administer Priesthood Ordinances"),a.a.createElement("h4",null,"Learn"),a.a.createElement("p",null,"Read"," ",a.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/20.76-79"},"Doctrine and Covenants 20:76\u201379"),". What do the sacramental bread and water represent? Read",a.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/luke/22.19-20"},"Luke 22:19\u201320")," ","and"," ",a.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/3-ne/18.1-11"},"3 Nephi 18:1\u201311"),". Whom do you represent when you pass the sacrament?"),a.a.createElement(o.a,{id:"deaconPDAdminister1"}),a.a.createElement("p",null,"Ask your parents or your quorum leaders the following questions, and write their answers:"),a.a.createElement("ol",null,a.a.createElement("li",null,"What does the ordinance of the sacrament mean to you?"),a.a.createElement("li",null,"What can I do as a deacon to help you have a meaningful experience with the sacrament?")),a.a.createElement(o.a,{id:"deaconPDAdminister2"}),a.a.createElement("p",null,"After counseling with your quorum, write in the next section what you will do to pass the sacrament in a way that shows reverence for the Savior and His Atonement and encourages others to show the same reverence. Also write what you will do to have a more meaningful experience when you partake of the sacrament."),a.a.createElement("h4",null,"Act"),a.a.createElement("p",null,"Several things I will do to show reverence when I pass the sacrament and to encourage others to show the same reverence:"),a.a.createElement(o.a,{id:"deaconPDAdminister3"}),a.a.createElement("p",null,"What I will do to have a more meaningful experience when I partake of the sacrament:"),a.a.createElement(o.a,{id:"deaconPDAdminister4"}),a.a.createElement("h4",null,"Share"),a.a.createElement("p",null,"After following through with your plan, discuss with members of your quorum how your experiences with the sacrament have helped you become more reverent."))};t.default=i}});
//# sourceMappingURL=33.5e5e1502.chunk.js.map