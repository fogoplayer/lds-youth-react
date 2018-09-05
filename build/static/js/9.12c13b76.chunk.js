webpackJsonp([9],{159:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(0),l=o.n(i),s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={text:o.props.placeholder?o.props.placeholder:"",windowLocation:window.location.pathname.substring(1)},o}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()});try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+window.location.pathname+"/"+this.props.id).once("value").then(function(t){t.val()&&e.setState({text:JSON.parse(JSON.stringify(t.val()))})})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"componentWillUnmount",value:function(){var e={};e[this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+this.state.windowLocation+"/").update(e)}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"render",value:function(){return l.a.createElement("div",{contentEditable:"true",className:"textArea",id:this.props.id,color:this.props.color?this.props.color:"black",style:{display:"inline-block",width:"calc(100% - 2px)",border:"1px solid black",minHeight:"28px",marginBottom:"11px"}},this.state.text)}}]),t}(l.a.Component);t.a=u},160:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(0),l=o.n(i),s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={text:o.props.placeholder?o.props.placeholder:"",windowLocation:window.location.pathname.substring(1)},o}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()});try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+window.location.pathname+"/"+this.props.id).once("value").then(function(t){t.val()&&e.setState({text:JSON.parse(JSON.stringify(t.val()))})})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"componentWillUnmount",value:function(){var e={};e[this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+this.state.windowLocation+"/").update(e)}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"render",value:function(){return l.a.createElement("div",{contentEditable:"true",className:"textArea "+(this.props.color?this.props.color+" lighten-4":"grey lighten-2"),id:this.props.id,color:"black",style:{display:"inline-block",width:"150px",fontSize:"18px",height:"26px",paddingBottom:"1.5px",textAlign:"center",marginBottom:"10px",border:"0px",borderBottom:"1px solid black"}},this.state.text)}}]),t}(l.a.Component);t.a=u},48:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),r=o.n(n),a=o(159),i=o(160),l=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Preparing to Recieve the Melchizedek Priesthood"),r.a.createElement("p",{id:"learn"},"During your years as a priest, use the steps on the following pages to create a project that will help you prepare to receive the Melchizedek Priesthood and serve a full-time mission. This project builds on what you have accomplished throughout your years as an Aaronic Priesthood holder. It should be challenging and should include a significant time commitment. It should also be based on your own needs and circumstances."),r.a.createElement("h4",null,"Step One: Learn"),r.a.createElement("p",null,"When you receive the Melchizedek Priesthood, you enter into the oath and covenant of the priesthood. To learn about this oath and covenant, read"," ",r.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/84.33-44"},"Doctrine and Covenants 84:33\u201344")," ","and \u201c",r.a.createElement("a",{href:"https://www.lds.org/manual/true-to-the-faith/melchizedek-priesthood"},"Melchizedek Priesthood"),"\u201d in True to the Faith. Then, with help from your bishop or your parents, plan a time when you can teach others what you have learned (for example, in priests quorum meeting, sacrament meeting, or family home evening)."),r.a.createElement("p",null,"One important duty of the Melchizedek Priesthood is to preach the gospel (see"," ",r.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/53.2"},"D&C 53:3"),"). To prepare for this duty, find out what will be required of you when you serve a full-time mission. Consider the following:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Personal worthiness and testimony."),r.a.createElement("li",null,"Gospel knowledge."),r.a.createElement("li",null,"Christlike attributes."),r.a.createElement("li",null,"Work habits and physical health.")),r.a.createElement("p",null,"To learn about the requirements for missionary service, use the following sources: your parents, your bishop, returned missionaries, the Missionary Handbook, Preach My Gospel, and talks by General Authorities (some of these talks can be found at"," ",r.a.createElement("a",{href:"https://dutytogod.lds.org/"},"dutytogod.lds.org"),"). Write down what you learn."),r.a.createElement("h4",null,"Step 2: Create a Project"),r.a.createElement("p",null,"Create a project that will help you apply what you\u2019ve learned. It should include two parts: (1) preparation to receive the Melchizedek Priesthood and (2) preparation for a full-time mission. Have a parent or leader approve your project before you begin working on it. Here are some examples of things you could include in each part of your project:"),r.a.createElement("h5",null,"Examples-Melchizedek Priesthood"),r.a.createElement("ol",null,r.a.createElement("li",null,"Read the entire Book of Mormon. In a journal, write what you learn from your study and write specific examples from your life that show how consistent scripture study gives you power to resist temptation."),r.a.createElement("li",null,"Interview three Melchizedek Priesthood holders (such as your father or the elders quorum president in your ward). Ask them questions such as the following, and write their answers:",r.a.createElement("ol",null,r.a.createElement("li",null,"What are the duties of an elder?"),r.a.createElement("li",null,"What is the difference between having the authority of the priesthood and holding priesthood keys?"),r.a.createElement("li",null,"What would you recommend I do to understand and prepare to receive the Melchizedek Priesthood?"),r.a.createElement("li",null,"What experiences have you had in which you were able to serve others by exercising the Melchizedek Priesthood?"),r.a.createElement("li",null,"How has holding the Melchizedek Priesthood blessed your life?"),r.a.createElement("li",null,"How do you perform the ordinances of the Melchizedek Priesthood (such as consecrating oil, administering to the sick, and bestowing the gift of the Holy Ghost)?")))),r.a.createElement("h5",null,"Examples-Full-Time Mission"),r.a.createElement("ol",null,r.a.createElement("li",null,"Find examples of missionaries in the scriptures (such as the Savior, Enoch, Ammon, and Samuel the Lamanite). Identify what made them effective, the promises they received, and the effect their work had on the people they served. Make a list of what you find. Share your list with a returned missionary. Ask him or her to share experiences from his or her mission that illustrate these principles and attributes."),r.a.createElement("li",null,"Practice teaching some of the lessons in"," ",r.a.createElement("a",{href:"https://www.lds.org/manual/preach-my-gospel-a-guide-to-missionary-service/what-do-i-study-and-teach"},"chapter 3 of Preach My Gospel"),". Schedule regular opportunities to go teaching with the full-time missionaries in your area, and be prepared to help the missionaries teach."),r.a.createElement("li",null,"Interview three returned missionaries. Ask them questions such as the following, and write their answers:",r.a.createElement("ol",null,r.a.createElement("li",null,"What would you recommend I do to prepare for a fulltime mission?"),r.a.createElement("li",null,"What qualities make a missionary effective, and what can I do to develop those qualities?"),r.a.createElement("li",null,"How is your life different now because you served a mission?"))),r.a.createElement("li",null,"Refer to"," ",r.a.createElement("a",{href:"/LDSYouth/dutyToGod/priest/melchizedek.html#learn"},"what you wrote")," ","about the requirements for missionary service, and make a plan to improve in each area (personal worthiness and testimony, gospel knowledge, Christlike attributes, and work habits and physical health).")),r.a.createElement("h5",null,"My Project"),r.a.createElement("p",null,"Melchizedek Priesthood"),r.a.createElement(a.a,{id:"melchizedek1"}),r.a.createElement("p",null,"Full-Time Mission"),r.a.createElement(a.a,{id:"melchizedek2"}),r.a.createElement("p",null,"Approval of a Parent or Leader"),r.a.createElement(i.a,{id:"melchizedekSignoff1"}),r.a.createElement("p",null,"Estimated Date of Completion"),r.a.createElement(i.a,{id:"melchizedekSignoff2"}),r.a.createElement("p",null,"My Signature"),r.a.createElement(i.a,{id:"melchizedekSignoff3"}),r.a.createElement("p",null,"Date Completed"),r.a.createElement(i.a,{id:"melchizedekSignoff4"}),r.a.createElement("h4",null,"Step 3: Report Your Experiences"),r.a.createElement("p",null,"In the space below, write what you have learned from carrying out your project and how it has helped you become a better disciple of Jesus Christ. Report on what you learned to your family or quorum members."))};t.default=l}});
//# sourceMappingURL=9.12c13b76.chunk.js.map