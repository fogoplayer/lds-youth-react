webpackJsonp([6],{163:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[n.state.windowLocation]&&e.data()[n.state.windowLocation][n.props.id];t&&(document.getElementById(n.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return l.a.createElement("div",{className:"input-field"},l.a.createElement("textArea",{id:this.props.id,type:"text",className:"materialize-textarea",placeholder:this.props.placeholder,onFocus:function(){firebase.auth().currentuser||window.beenThereDoneThat||(alert("Warning: you are not signed in. If you would like your work to be saved, sign in."),window.beenThereDoneThat=!0)}}))}}]),t}(l.a.Component);t.a=u},164:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={text:n.props.placeholder?n.props.placeholder:"",windowLocation:window.location.pathname.substring(1)};return function e(){try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get().then(function(e){var t=!!e.data()[n.state.windowLocation]&&e.data()[n.state.windowLocation][n.props.id];t&&(document.getElementById(n.props.id).value=JSON.parse(JSON.stringify(t)))})}catch(t){"Cannot read property 'uid' of null"!==t.message?console.error(t):firebase.auth().onAuthStateChanged(function(t){t&&e()})}}(),n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.componentWillUnmount()}),document.getElementById(this.props.id).addEventListener("onblur",function(){e.componentWillUnmount()})}},{key:"componentWillUnmount",value:function(){if(document.getElementById(this.props.id)){var e={};e[this.state.windowLocation]={},e[this.state.windowLocation][this.props.id]=document.getElementById(this.props.id).innerHTML;try{firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set(e,{merge:!0})}catch(e){"Cannot read property 'uid' of null"!==e.message&&console.error(e)}}}},{key:"render",value:function(){return l.a.createElement("input",{id:this.props.id,type:"text",className:this.props.color+" lighten-4",onFocus:function(){firebase.auth().currentuser||window.beenThereDoneThat||(alert("Warning: you are not signed in. If you would like your work to be saved, sign in."),window.beenThereDoneThat=!0)},style:{width:"150px",height:"1em",fontSize:"1em",textAlign:"center"}})}}]),t}(l.a.Component);t.a=u},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),a=n(6),i=n(164),l=n(163),s=function(e){return o.a.createElement("div",null,o.a.createElement("h2",{className:"blue-text"},"Divine Nature"),o.a.createElement("h5",null,o.a.createElement("em",null,o.a.createElement("p",null,"Be partakers of the divine nature... Giving all diligence, add to your faith virtue; and to virtue knowledge; and to knowledge temperance; and to temperance patience; and to patience godliness; and to godliness brotherly kindness; and to brotherly kindness charity (",o.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/2-pet/1.4-7"},"2 Peter 1:4-7"),")."),o.a.createElement("p",null,"I have inherited divine qualities, which I will strive to develop."))),o.a.createElement("h4",{className:"blue-text"},"Required Value Experiences"),o.a.createElement("p",null,"Complete the following three required value experiences. Have your parent or leader sign and date each experience after you finish."),o.a.createElement("ol",null,o.a.createElement("li",null,'What are some of the divine qualities of a daughter of God? Read \\"',o.a.createElement("a",{href:"/personal-progress/proclamationToTheWorld.html"},"The Family: A Proclamation to the World"),'";'," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/2-pet/1"},"2 Peter 1"),";"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/alma/7.23-24"},"Alma 7:23-24"),"; and"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/121.45"},"Doctrine and Covenants 121:45"),". In your own words, list the divine qualities discussed in your reading. Think about how you can discover and develop each of these qualities. Record your ideas in your journal.",o.a.createElement(i.a,{color:"blue",id:"sign1"}),o.a.createElement(l.a,{id:"text1"})),o.a.createElement("li",null,"As a young woman you are blessed with divine feminine qualities. Increase your understanding of and appreciation for womanhood. Read"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/ot/prov/31.10-31"},"Proverbs 31:10-31")," ",'and two talks on womanhood from a conference issue of the Church magazines. Review what \\"',o.a.createElement("a",{href:"/personal-progress/proclamationToTheWorld.html"},"The Family: A Proclamation to the World"),'\\" says about being a wife and a mother. Then ask your mother or another mother you admire what she thinks are important attributes for being a mother. List the attributes in your journal. Then choose one of those attributes and strive to develop it. After two weeks report your success to a parent or leader.',o.a.createElement(i.a,{color:"blue",id:"sign2"}),o.a.createElement(l.a,{id:"text2"})," "),o.a.createElement("li",null,"Make your home life better. For two weeks make a special effort to strengthen your relationship with a family member by showing love through your actions. Refrain from judging, criticizing, or speaking unkindly, and watch for positive qualities in that family member. Write notes of encouragement, pray for this family member, find ways to be helpful, and verbally express your love. Share your experiences and the divine qualities you've discovered with that family member or with a parent or leader.",o.a.createElement(i.a,{color:"blue",id:"sign3"}))),o.a.createElement("h4",{className:"blue-text"},"Additional Value Experiences"),o.a.createElement("p",null,"Complete three additional value experiences. You may select from the following options or write up to two of your own. Your parent or leader must approve those you write yourself before you begin. Have your parent or leader sign and date each experience after you finish."),o.a.createElement("ol",{start:"4"},o.a.createElement("li",null,"Memorize the sacrament prayers in"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/20.77"},"Doctrine and Covenants 20:77"),","," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/20.79"},"79"),". During the sacrament, listen carefully to the prayers and think about what it means to take upon yourself the name of Jesus Christ and how doing this should affect your actions and decisions. Practice keeping your baptismal covenants. Begin by doing something each day to recognize and further develop your divine qualities and to help you always remember the Lord Jesus Christ. After two weeks record your experience in your journal.",o.a.createElement(i.a,{color:"blue",id:"sign4"}),o.a.createElement(l.a,{id:"text4"})),o.a.createElement("li",null,"Obedience is an attribute of the Savior. Strive to be more obedient to your parents. Read"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/luke/2.40-51"},"Luke 2:40-51")," ","and ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/john/6.38"},"John 6:38"),". Develop a pattern of obedience as you make a special effort to treat your parents with respect and kindness and do what your parents ask you to do without having to be reminded. After two weeks record in your journal how being more obedient motivated you to want to continue doing so and how it has helped you understand your divine nature and the divine roles of mothers and fathers.",o.a.createElement(i.a,{color:"blue",id:"sign5"}),o.a.createElement(l.a,{id:"text5"})),o.a.createElement("li",null,"Develop your divine qualities. Read"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/matt/5.9"},"Matthew 5:9"),";"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/john/15.12"},"John 15:12"),";"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/gal/5.22-23"},"Galatians 5:22-23"),";"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/col/3.12-17"},"Colossians 3:12-17"),";"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/nt/1-jn/4.21"},"1 John 4:21"),"; and"," ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/bofm/moro/7.44-48"},"Moroni 7:44-48"),". Memorize your favorite verse from one of these passages. Identify the divine qualities mentioned in all these scriptures and list them in your journal. Select one quality, and for two weeks strive to make it a part of your daily life. Record your progress and experiences in your journal.",o.a.createElement(i.a,{color:"blue",id:"sign6"}),o.a.createElement(l.a,{id:"text6"})),o.a.createElement("li",null,"Learn the definition of the word peacemaker. Then find and read five scriptures that teach about peacemakers. Become an example of a peacemaker in your home and at school as you refrain from criticizing, complaining, or speaking unkindly to or about others. Pray each morning and evening to Heavenly Father for help to do this. After two weeks write in your journal what new habits you want to develop, how being a peacemaker is part of your divine nature, and how you will continue to be a peacemaker.",o.a.createElement(i.a,{color:"blue",id:"sign7"}),o.a.createElement(l.a,{id:"text7"}))),o.a.createElement("h4",{className:"blue-text"},"Personalized Value Experiences"),o.a.createElement("ol",{start:"8"},o.a.createElement("li",null,o.a.createElement(l.a,{id:"text8"}),o.a.createElement(i.a,{color:"blue",id:"sign8"})),o.a.createElement("li",null,o.a.createElement(l.a,{id:"text9"}),o.a.createElement(i.a,{color:"blue",id:"sign9"}))),o.a.createElement("h4",{className:"blue-text"},"Value Project"),o.a.createElement("p",null,"After you have completed six divine nature value experiences, create a project that will help you practice what you have learned. This should be a significant effort that will take at least ten hours to complete. Prayerfully seek the guidance of the Holy Ghost to select a meaningful project."),o.a.createElement("p",null,"Have your parent or leader approve the project before you begin. Write an evaluation after you finish. Below are some ideas for a value project."),o.a.createElement("ul",null,o.a.createElement("li",null,"Develop a skill you could use in your future home, such as cooking, sewing, making repairs, organizing, or designing. Teach that skill to someone, and explain how establishing a house of order (see ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/109.8"}," D&C 109:8 "),") is one of your divine roles."),o.a.createElement("li",null,"For an extended period of time, serve someone in need, such as a young mother, a person with disabilities, or an elderly person. Record in your journal how your service has helped you recognize the divine nature in yourself and in others."),o.a.createElement("li",null,'List the divine attributes and roles of women as taught in "',o.a.createElement(a.b,{to:"/personal-progress/the-family"},"The Family: A Proclamation to the World"),'", and carry out a project that helps you learn more about one of those roles.'),o.a.createElement("li",null,"Using an artistic skill or handicraft you have learned, make something for your current or future home. Record in your journal how being creative is part of your divine nature and how sharing your creativity has blessed others."),o.a.createElement("li",null,"Working in harmony with others is a divine attribute (see ",o.a.createElement("a",{href:"https://www.lds.org/scriptures/dc-testament/dc/38.27"},"D&C 38:27"),"). Carry out a project that will promote unity in your extended family, your school, or your community. Record in your journal how you can make a difference when you work in unity with others.")),o.a.createElement(l.a,{id:"textVP"}),o.a.createElement(i.a,{color:"blue",id:"signVP"}),"  ")};t.default=s}});
//# sourceMappingURL=6.a28e9f18.chunk.js.map