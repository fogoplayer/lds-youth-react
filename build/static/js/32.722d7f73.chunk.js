webpackJsonp([32],{159:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)},n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()});try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+window.location.pathname+"/"+this.props.id).once("value").then(function(t){t.val()&&e.setState({text:JSON.parse(JSON.stringify(t.val()))})})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"componentWillUnmount",value:function(){var e={};e[this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+this.state.windowLocation+"/").update(e)}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"render",value:function(){return l.a.createElement("div",{contentEditable:"true",className:"textArea",id:this.props.id,color:this.props.color?this.props.color:"black",style:{display:"inline-block",width:"calc(100% - 2px)",border:"1px solid black",minHeight:"28px",marginBottom:"11px"}},this.state.text)}}]),t}(l.a.Component);t.a=c},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),a=n(159),i=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Invite All to Come Unto Christ"),r.a.createElement("h4",null,"Learn"),r.a.createElement("p",null,"Read"," ",r.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/20.59"},"Doctrine and Covenants 20:59"),". What does the phrase \u201ccome unto Christ\u201d mean to you? Share your thoughts and feelings with a quorum leader or your parents, and ask what the phrase means to them."),r.a.createElement("p",null,"Contrast the missionary stories of Ammon (",r.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/alma/17"},"Alma 17\u201319"),") and Corianton (",r.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/alma/39.1-11"},"Alma 39:1\u201311"),"). What influence did their actions have on the people they taught? Consider ways you can set a good example that can help people come unto Christ."),r.a.createElement("p",null,"Think about family members and friends whom you could invite to come unto Christ. Write down their names and what you will do to help them (such as inviting them to a Church activity or giving them a copy of the Book of Mormon or a Church magazine)."),r.a.createElement("h4",null,"Act"),r.a.createElement("p",null,"Ways I will set a good example for others:"),r.a.createElement(a.a,{id:"deaconPDInvite1"}),r.a.createElement("p",null,"Names of people and how I will help them come unto Christ:"),r.a.createElement(a.a,{id:"deaconPDInvite2"}),r.a.createElement("h4",null,"Share"),r.a.createElement("p",null,"Write down in a journal or a notebook the experiences you have as you invite others to come unto Christ. Also write down ways you feel you are becoming a better missionary. Consider sharing your experiences with others."))};t.default=i}});
//# sourceMappingURL=32.722d7f73.chunk.js.map