(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(29),l=a(27),o=a(14),i=a(15),r=a(17),c=a(16),s=a(18),m=a(1),d=a.n(m),u=a(9),p=a.n(u),h=(a(36),a(38),a(40),a(2)),g=(a(98),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleDelete=function(e){var t=a.state.events.filter(function(t){return t.id!==e});a.setState({events:t})},a.toggleModal=function(){a.setState({modal:!a.state.modal})},a.handleInputChange=function(e){return function(t){var n=t;a.setState(Object(l.a)({},e,n))}},a.addEvent=function(){var e=Object(n.a)(a.state.events);e.push({id:e.length?e[e.length-1].id+1:1,time:a.state.time,title:a.state.title,location:a.state.location,description:a.state.description,value:a.var>5?"Its's grater then 5":"Its lower or equal 5"}),a.setState({events:e}),a.setState({time:"",title:"",location:"",description:""})},a.state={modal:!1,events:[{id:1,time:"10:00",title:"Breakfast with Simon",location:"Lounge Caffe",description:"Discuss Q3 targets"},{id:2,time:"10:30",title:"Daily Standup Meeting (recurring)",location:"Warsaw Spire Office"},{id:3,time:"11:00",title:"Call with HRs"},{id:4,time:"11:00",title:"Lunch with Timothy",location:"Canteen",description:"Project evaluation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a"}]},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(h.MDBContainer,null,d.a.createElement(h.MDBRow,null,d.a.createElement(h.MDBCol,{md:"9",className:"mb-r"},d.a.createElement("h2",{className:"text-uppercase my-3"},"Today:"),d.a.createElement("div",{id:"schedule-items"},this.state.events.map(function(t){return d.a.createElement(E,{key:t.id,id:t.id,time:t.time,title:t.title,location:t.location,description:t.description,onDelete:e.handleDelete})})),d.a.createElement(h.MDBRow,{className:"mb-4"},d.a.createElement(h.MDBCol,{xl:"3",md:"6",className:"mx-auto text-center"},d.a.createElement(h.MDBBtn,{color:"info",rounded:!0,onClick:this.toggleModal},"Add Event")))),d.a.createElement(h.MDBCol,{md:"3"},d.a.createElement("h3",{className:"text-uppercase my-3"},"Schedule"),d.a.createElement("h6",{className:"my-3"},"It's going to be busy that today. You have"," ",d.a.createElement("b",null,this.state.events.length," events ")," today."),d.a.createElement("h1",{className:"my-3"},d.a.createElement(h.MDBRow,null,d.a.createElement(h.MDBCol,{xs:"3",className:"text-center"},d.a.createElement(h.MDBIcon,{icon:"sun",fixed:!0})),d.a.createElement(h.MDBCol,{xs:"9"},"Sunny")),d.a.createElement(h.MDBRow,null,d.a.createElement(h.MDBCol,{xs:"3",className:"text-center"},d.a.createElement(h.MDBIcon,{icon:"thermometer-three-quarters",fixed:!0})),d.a.createElement(h.MDBCol,{xs:"9"},"23\xb0C"))),d.a.createElement("p",null,"Don't forget your sunglasses. Today will dry and sunny, becoming warm in the afternoon with temperatures of between 20 and 25 degrees.")))),d.a.createElement(h.MDBModal,{isOpen:this.state.modal,toggle:this.toggleModal},d.a.createElement(h.MDBModalHeader,{className:"text-center",titleClass:"w-100 font-weight-bold",toggle:this.toggleModal},"Add new event"),d.a.createElement(h.MDBModalBody,null,d.a.createElement("form",{className:"mx-3 grey-text"},d.a.createElement(h.MDBInput,{name:"time",label:"Time",icon:"clock",hint:"12:30",group:!0,type:"text",getValue:this.handleInputChange("time")}),d.a.createElement(h.MDBInput,{name:"title",label:"Title",icon:"edit",hint:"Briefing",group:!0,type:"text",getValue:this.handleInputChange("title")}),d.a.createElement(h.MDBInput,{name:"location",label:"Location (optional)",icon:"map",group:!0,type:"text",getValue:this.handleInputChange("location")}),d.a.createElement(h.MDBInput,{name:"description",label:"Description (optional)",icon:"sticky-note",group:!0,type:"textarea",getValue:this.handleInputChange("description")}))),d.a.createElement(h.MDBModalFooter,{className:"justify-content-center"},d.a.createElement(h.MDBBtn,{color:"info",onClick:function(){e.toggleModal(),e.addEvent()}},"Add"))))}}]),t}(m.Component)),E=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"media mt-1"},d.a.createElement("h3",{className:"h3-responsive font-weight-bold mr-3"},this.props.time),d.a.createElement("div",{className:"media-body mb-3 mb-lg-3"},d.a.createElement(h.MDBBadge,{color:"danger",className:"ml-2 float-right",onClick:function(){return e.props.onDelete(e.props.id)}},"-"),d.a.createElement("h6",{className:"mt-0 font-weight-bold"},this.props.title," ")," ",d.a.createElement("hr",{className:"hr-bold my-2"}),this.props.location&&d.a.createElement(d.a.Fragment,null,d.a.createElement("p",{className:"font-smaller mb-0"},d.a.createElement(h.MDBIcon,{icon:"location-arrow"})," ",this.props.location)))),this.props.description&&d.a.createElement("p",{className:"p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5"},this.props.description))}}]),t}(m.Component);p.a.render(d.a.createElement(g,null),document.getElementById("root"))},98:function(e,t,a){}},[[30,2,1]]]);
//# sourceMappingURL=main.3075cf79.chunk.js.map