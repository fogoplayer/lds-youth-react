webpackJsonp([4],{162:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),l=r.n(i),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),c=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={text:r.props.placeholder?r.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[r.state.windowLocation]&&e.data()[r.state.windowLocation][r.props.id];t&&(document.getElementById(r.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),r}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return l.a.createElement("div",{className:"input-field"},l.a.createElement("textArea",{id:this.props.id,type:"text",className:"materialize-textarea",placeholder:this.props.placeholder}))}}]),t}(l.a.Component);t.a=c},163:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),l=r.n(i),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),c=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={text:r.props.placeholder?r.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[r.state.windowLocation]&&e.data()[r.state.windowLocation][r.props.id];t&&(document.getElementById(r.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),r}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return l.a.createElement("input",{id:this.props.id,type:"text",className:this.props.color+" lighten-4",style:{width:"150px",height:"1em",fontSize:"1em",textAlign:"center"}})}}]),t}(l.a.Component);t.a=c},87:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),n=r.n(a),o=r(163),i=r(162),l=function(e){return n.a.createElement("div",null,n.a.createElement("h2",{className:"yellow-text text-darken-1"},"Good Works"),n.a.createElement("h5",null,n.a.createElement("em",null,n.a.createElement("p",null,"Seek learning, even by study and also by faith (",n.a.createElement("a",{href:"https://lds.org/scriptures/dc-testament/dc/88.118"},"D&C 88:118"),")."),n.a.createElement("p",null,"I will continually seek opportunities for learning and growth."))),n.a.createElement("h4",{className:"yellow-text text-darken-1"},"Required Value Experiences"),n.a.createElement("p",null,"Complete the following three required value experiences. Have your parent or leader sign and date each experience after you finish."),n.a.createElement("ol",null,n.a.createElement("li",null,"Learn why service is a fundamental principle of the gospel. Read"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/nt/matt/5.13-16"},"Matthew 5:13-16"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/nt/matt/25.34-40"},"25:34-40"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/nt/gal/6.9-10"},"Galatians 6:9-10"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/nt/james/1.22-27"},"James 1:22-27"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/bofm/mosiah/2.17"},"Mosiah 2:17"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/bofm/mosiah/4.26"},"4:26"),"; and"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/bofm/3-ne/13.1-4"},"3 Nephi 13:1-4"),". Others often give service you may not notice, such as preparing meals, reading to or listening to younger children, repairing clothing, or helping a brother or sister. For two weeks record in your journal the quiet acts of service your family members and others perform. Acknowledge their service in some meaningful way.",n.a.createElement(o.a,{color:"yellow",id:"sign1"}),n.a.createElement(i.a,{id:"text1"})),n.a.createElement("li",null,"Service is an essential principle of family living. Help plan your family's menus, obtain the food, and prepare part of the meals for two weeks. During that time help your family gather to share mealtimes. Report to your class what you have learned.",n.a.createElement(o.a,{color:"yellow",id:"sign2"})),n.a.createElement("li",null,"Read"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/bofm/mosiah/18.7-10"},"Mosiah 18:7-10"),", and in your journal list three ways you can comfort others or help them bear their burdens. Do the things on your list, and tell a family member or leader about the experience and how your attitude and understanding have changed.",n.a.createElement(o.a,{color:"yellow",id:"sign3"}),n.a.createElement(i.a,{id:"text2"}))),n.a.createElement("h4",{className:"yellow-text text-darken-1"},"Additional Value Experiences"),n.a.createElement("p",null,"Complete three additional value experiences. You may select from the following options or write up to two of your own. Your parent or leader must approve those you write yourself before you begin. Have your parent or leader sign and date each experience after you finish."),n.a.createElement("ol",{start:"4"},n.a.createElement("li",null,"Teach a lesson about service in family home evening or in another setting. Use pictures, music, examples, or demonstrations in your lesson. You may want to use the manual"," ",n.a.createElement("a",{href:"https://www.lds.org/manual/teaching-no-greater-call-a-resource-guide-for-gospel-teaching"},"Teaching, No Greater Call")," ","as a resource.",n.a.createElement(o.a,{color:"yellow",id:"sign4"})),n.a.createElement("li",null,"Read"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/dc-testament/dc/58.26-28"},"Doctrine and Covenants 58:26-28"),". Think of ways a young woman, as well as a wife and mother, could apply this scripture in her family. Develop a pattern of service in your life by choosing a family member you can help. Serve that person for at least a month. Record in your journal your actions and feelings about how this improved your relationship with that person.",n.a.createElement(o.a,{color:"yellow",id:"sign5"}),n.a.createElement("div",{contextmenu:"true",className:"textArea",id:"text5"})),n.a.createElement("li",null,"Spend at least three hours giving service outside your family. Ask your ward or branch Relief Society president or a community leader for suggestions for service. For example, you might take care of children while parents attend the temple; collect, make, or recondition toys or games for a nursery; accept an assignment to clean the meetinghouse; or perform errands for or read to a homebound person or others in need. Record in your journal the reactions of the person you served and possible goals for future service opportunities.",n.a.createElement(o.a,{color:"yellow",id:"sign6"}),n.a.createElement(i.a,{id:"text6"})),n.a.createElement("li",null,"Through your good works, others will see your example and may want to know more about the gospel. Pray for a missionary experience. Read"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/nt/matt/24.14"},"Matthew 24:14"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/nt/matt/28.19"},"28:19"),"; and"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/dc-testament/dc/88.81"},"Doctrine and Covenants 88:81"),". Invite a friend who is not a member of the Church or one who is less active to go with you to a Church meeting or activity. Introduce your friend to others, and make sure he or she is involved. Share your testimony of the gospel, and invite him or her to come again.",n.a.createElement(o.a,{color:"yellow",id:"sign7"}))),n.a.createElement("h4",{className:"yellow-text text-darken-1"},"Personalized Value Experiences"),n.a.createElement("ol",{start:"8"},n.a.createElement("li",null,n.a.createElement(i.a,{id:"text8"}),n.a.createElement(o.a,{color:"yellow",id:"sign8"})),n.a.createElement("li",null,n.a.createElement(i.a,{id:"text9"}),n.a.createElement(o.a,{color:"yellow",id:"sign9"}))),n.a.createElement("h4",{className:"yellow-text text-darken-1"},"Value Project"),n.a.createElement("p",null,"After you have completed six good works value experiences, create a project that will help you practice what you have learned. This should be a significant effort that will take at least ten hours to complete. Prayerfully seek the guidance of the Holy Ghost to select a meaningful project."),n.a.createElement("p",null,"Have your parent or leader approve the project before you begin. Write an evaluation after you finish. Below are some ideas for a value project."),n.a.createElement("ul",null,n.a.createElement("li",null,"Help plan and participate in a project to clean or beautify your community. "),n.a.createElement("li",null,"Prepare to be a homemaker by collecting recipes, shopping for food, and preparing meals for your family. "),n.a.createElement("li",null,"Work with a family member to gather the names of some deceased relatives who were not members of the Church. Identify their birth and death dates and prepare their names to be taken to the temple. Help plan a temple trip and do baptisms for those relatives. "),n.a.createElement("li",null,"Prepare to serve others by receiving training for a skill to use in emergency situations, such as first aid, resuscitation, or lifesaving skills. "),n.a.createElement("li",null,"Serve others. Volunteer in the community, gather items to meet humanitarian needs, spend extended time assisting with child or elderly care, or tutor in school or in your community.")),n.a.createElement("p",null,n.a.createElement(i.a,{id:"textVP"})),n.a.createElement(o.a,{color:"yellow",id:"signVP"}))};t.default=l}});
//# sourceMappingURL=4.344c0f52.chunk.js.map