webpackJsonp([2],{159:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),l=r.n(i),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),c=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={text:r.props.placeholder?r.props.placeholder:"",windowLocation:window.location.pathname.substring(1)},r}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()});try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+window.location.pathname+"/"+this.props.id).once("value").then(function(t){t.val()&&e.setState({text:JSON.parse(JSON.stringify(t.val()))})})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"componentWillUnmount",value:function(){var e={};e[this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+this.state.windowLocation+"/").update(e)}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"render",value:function(){return l.a.createElement("div",{contentEditable:"true",className:"textArea",id:this.props.id,color:this.props.color?this.props.color:"black",style:{display:"inline-block",width:"calc(100% - 2px)",border:"1px solid black",minHeight:"28px",marginBottom:"11px"}},this.state.text)}}]),t}(l.a.Component);t.a=c},160:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),l=r.n(i),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),c=function(e){function t(e){a(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={text:r.props.placeholder?r.props.placeholder:"",windowLocation:window.location.pathname.substring(1)},r}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()});try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+window.location.pathname+"/"+this.props.id).once("value").then(function(t){t.val()&&e.setState({text:JSON.parse(JSON.stringify(t.val()))})})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"componentWillUnmount",value:function(){var e={};e[this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.database().ref("/users/"+firebase.auth().currentUser.uid+"/"+this.state.windowLocation+"/").update(e)}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}},{key:"render",value:function(){return l.a.createElement("div",{contentEditable:"true",className:"textArea "+(this.props.color?this.props.color+" lighten-4":"grey lighten-2"),id:this.props.id,color:"black",style:{display:"inline-block",width:"150px",fontSize:"18px",height:"26px",paddingBottom:"1.5px",textAlign:"center",marginBottom:"10px",border:"0px",borderBottom:"1px solid black"}},this.state.text)}}]),t}(l.a.Component);t.a=c},88:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),n=r.n(a),o=r(160),i=r(159),l=function(e){return n.a.createElement("div",null,n.a.createElement("h2",{className:"purple-text"},"Integrity"),n.a.createElement("h5",null,n.a.createElement("em",null,n.a.createElement("p",null,"Till I die I will not remove mine integrity from me (",n.a.createElement("a",{href:"https://lds.org/scriptures/ot/job/27.5"},"Job 27:5"),")."),n.a.createElement("p",null,"I will have the moral courage to make my actions consistent with my knowledge of right and wrong."))),n.a.createElement("h4",{className:"purple-text"},"Required Value Experiences"),n.a.createElement("p",null,"Complete the following three required value experiences. Have your parent or leader sign and date each experience after you finish."),n.a.createElement("ol",null,n.a.createElement("li",null,"Integrity is the willingness and desire to live by our beliefs and standards. Read"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/bofm/moro/10.30-33"},"Moroni 10:30-33")," ",'and think about what it means to "deny yourselves of all ungodliness." Read the pamphlet'," ",n.a.createElement("a",{href:"https://lds.org/youth/for-the-strength-of-youth"},"For the Strength of Youth"),". Reflect on how the Lord's standards differ from the world's standards. Record in your journal appropriate standards for behavior, dress, and conversation, as well as literature, movies, television, Internet, music, cell phones, and other media. Also write your plan to stay morally clean and worthy to attend the temple. After keeping your standards for at least one month, record your feelings in your journal and continue to keep your commitment.",n.a.createElement(o.a,{color:"purple",id:"integritySignoff1"}),n.a.createElement(i.a,{id:"integrityGoal1"})),n.a.createElement("li",null,"Conduct a self-assessment of your personal integrity. Ask yourself the following questions: Do I avoid gossip, inappropriate jokes, swearing and profanity, and being light-minded about sacred subjects? Am I completely truthful, morally clean, honest, dependable, and trustworthy in my schoolwork and other activities? Pray daily for strength and for the guidance of the Holy Ghost to help you live with integrity. Write in your journal the things you can do to improve your personal integrity and at least one new habit you want to develop.",n.a.createElement(o.a,{color:"purple",id:"integritySignoff2"}),n.a.createElement(i.a,{id:"integrityGoal2"})),n.a.createElement("li",null,"The Savior is the perfect example of integrity; He did what He promised the Father He would do. Read"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/bofm/3-ne/11.10-11"},"3 Nephi 11:10-11"),". Study the lives of other individuals in the scriptures who lived with integrity. Read"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/ot/gen/39"},"Genesis 39"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/ot/esth/1"},"the book of Esther"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/ot/job/2.3"},"Job 2:3"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/ot/job/27.3-6"},"27:3-6"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/ot/dan/3"},"Daniel 3")," and"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/ot/dan/6"},"6"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/nt/acts/26"},"Acts 26"),";"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/dc-testament/dc/124.15"},"Doctrine and Covenants 124:15"),"; and"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/pgp/js-h/1.21-25"},"Joseph Smith-History 1:21-25"),". In your journal identify the ways these people demonstrated integrity. Think of a time when you had the courage to show integrity, especially when it was not easy or popular. Share your experience and your feelings about it in a testimony meeting or lesson or with a parent or leader.",n.a.createElement(o.a,{color:"purple",id:"integritySignoff3"}),n.a.createElement(i.a,{id:"integrityGoal3"}))),n.a.createElement("h4",{className:"purple-text"},"Additional Value Experiences"),n.a.createElement("p",null,"Complete three additional value experiences. You may select from the following options or write up to two of your own. Your parent or leader must approve those you write yourself before you begin. Have your parent or leader sign and date each experience after you finish."),n.a.createElement("ol",{start:"4"},n.a.createElement("li",null,"RLook up the word integrity in a dictionary. Interview your mother, grandmother, or another woman you respect about her understanding and application of the word. Make a list of ways you can ake your actions consistent with your knowledge of right and wrong, and record in your journal what it means to you to have integrity.",n.a.createElement(o.a,{color:"purple",id:"integritySignoff4"}),n.a.createElement(i.a,{id:"integrityGoal4"})),n.a.createElement("li",null,"Learn about standing as a witness. Read"," ",n.a.createElement("a",{href:"https://lds.org/scriptures/bofm/mosiah/18.9"},"Mosiah 18:9"),'. Then recor in your journal how you can personally "stand as [a witness] of God at all times and in all things, and in all places." Choose a personal behavior that you need to improve so you can be a better example. Develop integrity in your life as you practice your new behavior for three weeks. Record your progress in your journal.',n.a.createElement(o.a,{color:"purple",id:"integritySignoff5"}),n.a.createElement(i.a,{id:"integrityGoal5"})),n.a.createElement("li",null,"Living the law of the fast is an opportunity to practice integrity. On a designated fast Sunday, abstain from food and drink for two consecutive meals and contribute to your family's fast offering. Have a specific purpose in mind as you fast. You might fast for a sick friend, to overcome a bad habit, to obtain a special blessing for yourself or someone else, or to give thanks. Begin and close your fast with a prayer.",n.a.createElement(o.a,{color:"purple",id:"integritySignoff6"})),n.a.createElement("li",null,'List the issues, trends, and problems that weaken the family. Read the First Presidency message, "',n.a.createElement("a",{href:"proclamationToTheWorld.html"},"The Family: A Proclamation to the World"),'", and the'," ",n.a.createElement("a",{href:"https://lds.org/youth/for-the-strength-of-youth/family"},"section on family in For the Strength of Youth"),". Then research in the Church magazines the counsel of those whom we sustain as prophets, seers, and revelators. Write in your journal your plan to strengthen your present family and the values and traditions you want to establish with your future family.",n.a.createElement(o.a,{color:"purple",id:"integritySignoff7"}),n.a.createElement(i.a,{id:"integrityGoal7"}))),n.a.createElement("h4",{className:"purple-text"},"Personalized Value Experiences"),n.a.createElement("ol",{start:"8"},n.a.createElement("li",null,n.a.createElement(i.a,{id:"integrityGoal8"}),n.a.createElement(o.a,{color:"purple",id:"integritySignoff8"})),n.a.createElement("li",null,n.a.createElement(i.a,{id:"integrityGoal9"}),n.a.createElement(o.a,{color:"purple",id:"integritySignoff9"}))),n.a.createElement("h4",{className:"purple-text"},"Value Project"),n.a.createElement("p",null,"After you have completed six integrity value experiences, create a project that will help you practice what you have learned. This should be a significant effort that will take at least ten hours to complete. Prayerfully seek the guidance of the Holy Ghost to select a meaningful project."),n.a.createElement("p",null,"Have your parent or leader approve the project before you begin. Write an evaluation after you finish. Below are some ideas for a value project."),n.a.createElement("ul",null,n.a.createElement("li",null,"Record examples of ways family members have demonstrated the quality of integrity in their lives. "),n.a.createElement("li",null,"Having integrity means keeping your commitments. Identify and keep your commitments to others as you participate as a member of a team or organization or in a leadership position in your school or community. "),n.a.createElement("li",null,"Using 1 Timothy 4:12 as your guide, organize and carry out an activity that will help you practice being \u201can example of the believers.\u201d "),n.a.createElement("li",null,"Making and keeping temple covenants requires integrity. Prepare to make temple covenants by making and wearing an item of clothing that conforms with standards of modest dress as explained in the pamphlet For the Strength of Youth and in the words of living prophets. "),n.a.createElement("li",null,"In talks given by General Authorities, research the topics of integrity and honesty. Learn why these principles are critical to your happiness and temple preparation. Create an object (such as a picture, a book of quotations, or a hand-stitched item) that will remind you each day of your commitment to be honest and true at all times and known for your personal integrity")),n.a.createElement("p",null,n.a.createElement(i.a,{id:"integrityGoalVP"})),n.a.createElement(o.a,{color:"purple",id:"integritySignoff"}))};t.default=l}});
//# sourceMappingURL=2.25ff6d80.chunk.js.map