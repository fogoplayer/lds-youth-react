webpackJsonp([20],{159:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(0),l=o.n(i),s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={text:o.props.placeholder?o.props.placeholder:"",windowLocation:window.location.pathname.substring(1)},o}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()});try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+window.location.pathname+"/"+this.props.id).once("value").then(function(t){t.val()&&e.setState({text:JSON.parse(JSON.stringify(t.val()))})})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"componentWillUnmount",value:function(){var e={};e[this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+this.state.windowLocation+"/").update(e)}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"render",value:function(){return l.a.createElement("div",{contentEditable:"true",className:"textArea",id:this.props.id,color:this.props.color?this.props.color:"black",style:{display:"inline-block",width:"calc(100% - 2px)",border:"1px solid black",minHeight:"28px",marginBottom:"11px"}},this.state.text)}}]),t}(l.a.Component);t.a=c},61:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),r=o.n(n),a=o(159),i=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Invite All to Come Unto Christ"),r.a.createElement("h4",null,"Learn"),r.a.createElement("p",null,"Read"," ",r.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/20.53"},"Doctrine and Covenants 20:53"),". As part of your duty to \u201cwatch over the church always, and be with and strengthen them,\u201d you will now have the opportunity to serve as a home teacher. Discuss with your quorum president, your parents, or your home teaching companion what you could do to become a good home teacher."),r.a.createElement("p",null,"Read"," ",r.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/alma/17.2-3"},"Alma 17:2\u20133"),","," ",r.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/alma/17.9"},"9"),", and write what the sons of Mosiah did to prepare themselves for missionary service. Consider ways you can follow their example."),r.a.createElement(a.a,{id:"teacherPDInvite1"}),r.a.createElement("p",null,"Continue your efforts to share the gospel. Think about family members and friends whom you could invite to come unto Christ. Write their names and what you will do to help them (such as inviting them to a Church activity or giving them a copy of the Book of Mormon or a Church magazine)."),r.a.createElement("h4",null,"Act"),r.a.createElement("p",null,"My plan to become a good home teacher:"),r.a.createElement(a.a,{id:"teacherPDInvite2"}),r.a.createElement("p",null,"Names of people and how I will help them come unto Christ:"),r.a.createElement(a.a,{id:"teacherPDInvite3"}),r.a.createElement("h4",null,"Share"),r.a.createElement("p",null,"After following through with your plans, share with a parent or quorum leaders the experiences you have had serving as a home teacher and sharing the gospel. Talk about how these experiences are helping you prepare to become a full-time missionary."))};t.default=i}});
//# sourceMappingURL=20.45d1c637.chunk.js.map