webpackJsonp([0],{163:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[n.state.windowLocation]&&e.data()[n.state.windowLocation][n.props.id];t&&(document.getElementById(n.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return s.a.createElement("div",{className:"input-field"},s.a.createElement("textArea",{id:this.props.id,type:"text",className:"materialize-textarea",placeholder:this.props.placeholder,onFocus:function(){firebase.auth().currentuser||window.beenThereDoneThat||(alert("Warning: you are not signed in. If you would like your work to be saved, sign in."),window.beenThereDoneThat=!0)}}))}}]),t}(s.a.Component);t.a=c},164:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),s=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[n.state.windowLocation]&&e.data()[n.state.windowLocation][n.props.id];t&&(document.getElementById(n.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return s.a.createElement("input",{id:this.props.id,type:"text",className:this.props.color+" lighten-4",onFocus:function(){firebase.auth().currentuser||window.beenThereDoneThat||(alert("Warning: you are not signed in. If you would like your work to be saved, sign in."),window.beenThereDoneThat=!0)},style:{width:"150px",height:"1em",fontSize:"1em",textAlign:"center"}})}}]),t}(s.a.Component);t.a=c},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),a=n(164),i=n(163),s=function(e){return r.a.createElement("div",null,r.a.createElement("h2",{className:"yellow-text text-darken-2"},"Virtue"),r.a.createElement("h5",null,r.a.createElement("em",null,r.a.createElement("p",null,"Who can find a virtuous woman? for her price is far above rubies (",r.a.createElement("a",{href:"https://lds.org/scriptures/ot/prov/31.10"},"Proverbs 31:10"),")."),r.a.createElement("p",null,"I will prepare to enter the temple and remain pure and worthy."),r.a.createElement("p",null,"My thoughts and actions will be based on high moral standards."))),r.a.createElement("h4",{className:"yellow-text text-darken-2"},"Required Value Experiences"),r.a.createElement("p",null,"Complete the following three required value experiences. Have your parent or leader sign and date each experience after you finish."),r.a.createElement("ol",null,r.a.createElement("li",null,"Virtue is a pattern of thought and behavior based on high moral standards. It includes chastity and purity. The power to create mortal life is an exalted power God has given His children. He has commanded that this power be used only between a man and a woman, lawfully wedded as husband and wife. Study the meaning and importance of chastity and virtue by reading"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/bofm/jacob/2.28"},"Jacob 2:28"),";"," ",r.a.createElement("a",{href:"proclamationToTheWorld.html"},"The Family: A Proclamation to the World"),"; and the"," ",r.a.createElement("a",{href:"https://lds.org/youth/for-the-strength-of-youth/sexual-purity"},"section on sexual purity in For the Strength of Youth"),". Also read"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/pgp/a-of-f/1.13"},"Article of Faith number thirteen")," ","and"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/ot/prov/31.10-31"},"Proverbs 31:1031"),". In your journal write the promised blessings of being sexually clean and pure and your commitment to be chaste.",r.a.createElement(a.a,{color:"yellow",id:"sign1"}),r.a.createElement(i.a,{id:"text1"})),r.a.createElement("li",null,"Virtuous living at all times and in all things, and in all places qualifies you for the constant companionship of the Holy Ghost. When you are baptized and confirmed, you are given the gift of the Holy Ghost to guide all aspects of your life. Since the Holy Ghost does not dwell in unclean tabernacles, living a virtuous life is a prerequisite to having the companionship of the Holy Ghost and receiving the blessings of temple ordinances. Read the following scripture references and identify the promised blessings:"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/nt/john/14.26-27"},"John 14:2627"),";"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/nt/john/15.26"},"15:26"),";"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/bofm/2-ne/32.1-5"},"2 Nephi 32:15"),"; and"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/dc-testament/dc/45.57-59"},"Doctrine and Covenants 45:5759"),";"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/dc-testament/dc/88.3-4"},"88:34"),";"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/dc-testament/dc/121.45-46"},"121:4546"),". In your journal record what you have learned, and write about a time when you felt the guidance of the Holy Ghost.",r.a.createElement(a.a,{color:"yellow",id:"sign2"}),r.a.createElement(i.a,{id:"text2"})),r.a.createElement("li",null,"Prepare to be worthy to enter the temple and to participate in temple ordinances. Read"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/bofm/alma/5"},"Alma chapter 5"),". Make a list of the questions Alma asks. Answer the questions for yourself, and make a list of the things you can and will do to prepare yourself to be pure and worthy to enter the temple and receive all the blessings our Heavenly Father has promised His beloved daughters.",r.a.createElement(a.a,{color:"yellow",id:"sign3"}),r.a.createElement(i.a,{id:"text3"})),r.a.createElement("li",null,"Because the Savior loves you and has given His life for you, you can repent. Repentance is an act of faith in Jesus Christ. Read"," ",r.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/moro/10.32-33"},"Moroni 10:32-33"),", the"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/bofm/enos"},"book of Enos"),", and the"," ",r.a.createElement("a",{href:"https://lds.org/youth/for-the-strength-of-youth/repentance"},"section on repentance in For the Strength of Youth"),". The Savior's atoning sacrifice has made it possible for you to be forgiven of your sins. Read the sacrament prayers in"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/dc-testament/dc/20.77"},"Doctrine and Covenants 20:77"),", ",r.a.createElement("a",{href:"https://lds.org/scriptures/dc-testament/dc/20.79"},"79"),". Determine to partake worthily of the sacrament each week and fill your life with virtuous activities that will bring spiritual power. As you do this, you will grow stronger in your ability to resist temptation, keep the commandments, and become more like Jesus Christ. Determine what you can do daily to remain pure and worthy, and write your plan in your journal.",r.a.createElement(a.a,{color:"yellow",id:"sign4"}),r.a.createElement(i.a,{id:"text4"}))),r.a.createElement("h4",{className:"yellow-text text-darken-2"},"Value Project"),r.a.createElement("p",null,"You may begin this required value project at any time."),r.a.createElement("p",null,"The Savior chose to live a virtuous life. Follow His admonition to learn of me (",r.a.createElement("a",{href:"https://lds.org/scriptures/dc-testament/dc/19.23"},"D&C 19:23"),") by reading the entire"," ",r.a.createElement("a",{href:"https://lds.org/scriptures/bofm/"},"Book of Mormon: Another Testament of Jesus Christ"),". Liken the scriptures to your life and circumstances. As you read, record your thoughts regularly in your journal. Note the example of the Savior. What did He and those who followed Him do to live virtuous lives? At the completion of your reading, record your testimony."),r.a.createElement("h5",{className:"yellow-text text-darken-2"},"My Testimony of the Book of Mormon"),"====",r.a.createElement("p",null,r.a.createElement("i",null,"\u201cAnd when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true; and if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost\u201d (",r.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/moro/10.4"},"Moroni 10:4"),").")),r.a.createElement(i.a,{id:"virtueTestimony"}),r.a.createElement("p",null,"Signature of parent or leader"),r.a.createElement(a.a,{color:"yellow",id:"virtueSignature"}),r.a.createElement("p",null,"Date\xa0",r.a.createElement(a.a,{color:"yellow",id:"virtueDate"})," Hours Spent\xa0",r.a.createElement(a.a,{color:"yellow",id:"virtueHoursSpent"})))};t.default=s}});
//# sourceMappingURL=0.05e5a65f.chunk.js.map