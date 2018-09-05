webpackJsonp([35],{160:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)},n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()});try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+window.location.pathname+"/"+this.props.id).once("value").then(function(t){console.warn(t.val()),t.val()&&e.setState({text:JSON.parse(JSON.stringify(t.val()))})})}catch(e){console.error(e)}}},{key:"componentWillUnmount",value:function(){var e={};e[this.props.id]=document.getElementById(this.props.id).innerHTML,console.log(window.location.pathname),console.info("/users/"+firebase.auth().currentUser.uid+"/"+this.state.windowLocation+"/");try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+this.state.windowLocation+"/").update(e)}catch(e){console.error(e)}}},{key:"render",value:function(){return l.a.createElement("div",{contentEditable:"true",className:"textArea "+(this.props.color?this.props.color+" lighten-4":"grey lighten-2"),id:this.props.id,color:"black",style:{display:"inline-block",width:"150px",fontSize:"18px",height:"26px",paddingBottom:"1.5px",textAlign:"center",marginBottom:"10px",border:"0px",borderBottom:"1px solid black"}},this.state.text)}}]),t}(l.a.Component);t.a=u},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),a=n(160),i=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"What Do I Do When I Complete Personal Progress?"),r.a.createElement("p",null,"Completing the Personal Progress program is a significant step in strengthening your faith and testimony and preparing for temple covenants. You have learned how to make commitments, carry them out, and report your progress. This process should continue as you remain on the path to the temple and continue to develop qualities that will help you throughout your life. You may continue your progress by earning an Honor Bee or by beginning Personal Progress again."),r.a.createElement("h4",null,"Earn an Honor Bee"),r.a.createElement("p",null,"The Honor Bee charm was historically given to young women who were willing to do more than was required. To continue your progress, you may earn an Honor Bee to accompany your Young Womanhood Recognition medallion. You may earn an Honor Bee charm after completing both of the following requirements:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Read the ",r.a.createElement("a",{href:"https://lds.org/scriptures/bofm/"},"Book of Mormon")," ","again. A daily habit of scripture study will strengthen your faith and help you receive personal inspiration and guidance throughout your life. If you read just five minutes a day, you can complete the entire Book of Mormon in one year.",r.a.createElement(a.a,{id:"honorBeeSignoff1"})),r.a.createElement("li",null,"Serve others for a total of 40 hours. Where possible, some of these hours should include mentoring another young woman with her Personal Progress. This should be done under the direction of the ward or branch Young Women presidency. As you help another young woman, you may want to:",r.a.createElement("ol",null,r.a.createElement("li",null,"Be her friend."),r.a.createElement("li",null,"Be an example of a righteous daughter of God."),r.a.createElement("li",null,"Encourage her to work with her parents in selecting appropriate value experiences and projects."),r.a.createElement("li",null,"Help her follow through with value experiences and projects."),r.a.createElement("li",null,"Help her keep records of value experiences and projects."),r.a.createElement("li",null,"Help her understand the gospel principles that the value experiences and projects teach."),r.a.createElement("li",null,"Encourage her to read the"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/bofm/"},"Book of Mormon"),", and discuss with her what she is reading."),r.a.createElement("li",null,"Encourage her to share value experiences and projects with her family.")),r.a.createElement(a.a,{id:"goodWorksSignoff2"}))),r.a.createElement("h4",null,"Begin Personal Progress Again"),r.a.createElement("p",null,"You may begin the entire Personal Progress program again and earn a second Young Womanhood Recognition medallion."))};t.default=i}});
//# sourceMappingURL=35.d972fd60.chunk.js.map