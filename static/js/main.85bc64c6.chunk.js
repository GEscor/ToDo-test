(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),s=(a(15),a(6)),o=a(1),c=a(2),d=a(4),m=a(3),u=a(5),h=(a(16),localStorage.getItem("taskList")?JSON.parse(localStorage.getItem("taskList")):[{id:1,taskName:"\u043a\u0443\u043f\u0438\u0442\u044c \u0435\u0434\u044b",description:"\u0445\u043b\u0435\u0431, \u043c\u0430\u0441\u043b\u043e, \u043c\u043e\u043b\u043e\u043a\u043e, \u0432\u0430\u0444\u043b\u0438",priority:"med",endTime:"20:20",endDate:""},{id:2,taskName:"\u043f\u043e\u0433\u0443\u043b\u044f\u0442\u044c \u0441 \u0441\u043e\u0431\u0430\u043a\u043e\u0439",description:"",priority:"high",endTime:"",endDate:"2019-07-17"},{id:3,taskName:"\u0443\u0431\u043e\u0440\u043a\u0430 \u0434\u043e\u043c\u0430",description:"\u043f\u043e\u043c\u044b\u0442\u044c \u043f\u043e\u043b\u044b, \u043f\u0440\u043e\u0442\u0435\u0440\u0435\u0442\u044c \u043f\u044b\u043b\u044c, \u0432\u044b\u043a\u0438\u043d\u0443\u0442\u044c \u043c\u0443\u0441\u043e\u0440",priority:"low",endTime:"",endDate:""},{id:4,taskName:"\u043f\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443",description:"",priority:"med",endTime:"16:30",endDate:"2019-07-25"}]),p=[],k=function(e){var t=e.taskName,a=e.description,n=e.priority,r=e.endTime,l=e.endDate;return i.a.createElement("form",{className:"new-task"},i.a.createElement("h2",null,"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"),i.a.createElement("input",{className:"task-name "+n,id:"task-name",onChange:function(t){return e.onNameChange(t)},type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",autoComplete:"off",value:t}),i.a.createElement("input",{className:"task-description "+n,id:"task-description",onChange:function(t){return e.onDescriptionChange(t)},placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",autoComplete:"off",value:a}),i.a.createElement("label",{className:"task-time "+n},"\u0412\u0440\u0435\u043c\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",i.a.createElement("input",{className:"clock",id:"clock",onChange:function(t){return e.onTimeChange(t)},type:"time",value:r})),i.a.createElement("label",{className:"task-date "+n},"\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f",i.a.createElement("input",{className:"calendar",id:"calendar",onChange:function(t){return e.onDateChange(t)},type:"date",min:"2019-07-17",max:"2100-12-31",value:l})),i.a.createElement("label",{className:"task-radio low"},i.a.createElement("input",{onChange:function(){return e.onPriorityClick("low")},type:"radio",name:"priority",value:"low",checked:"low"===n}),"\u041e\u0431\u044b\u0447\u043d\u0430\u044f"),i.a.createElement("label",{className:"task-radio med"},i.a.createElement("input",{onChange:function(){return e.onPriorityClick("med")},type:"radio",name:"priority",value:"med",checked:"med"===n}),"\u0412\u0430\u0436\u043d\u0430\u044f"),i.a.createElement("label",{className:"task-radio high"},i.a.createElement("input",{onChange:function(){return e.onPriorityClick("high")},type:"radio",name:"priority",value:"high",checked:"high"===n}),"\u041e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u0430\u044f"),i.a.createElement("button",{className:"add",onClick:function(t){return e.onButtonClick(t)},disabled:!t.trim()},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={visible:!1},a.handleTaskClick=function(){a.setState(function(e){return{visible:!e.visible}})},a.handleDoneClick=function(){a.setState(function(e){return{visible:!e.visible}});var e=a.props.data,t=e.id,n=e.taskName,i=e.description,r=e.priority,l=e.endTime,s=e.endDate;a.props.onTaskComplete({id:t,taskName:n,description:i,priority:r,endTime:l,endDate:s})},a.handleModifyClick=function(){a.setState(function(e){return{visible:!e.visible}});var e=a.props.data,t=e.id,n=e.taskName,i=e.description,r=e.priority,l=e.endTime,s=e.endDate;a.props.onTaskModify({id:t,taskName:n,description:i,priority:r,endTime:l,endDate:s})},a.handleDelClick=function(){a.setState(function(e){return{visible:!e.visible}});var e=a.props.data,t=e.id,n=e.taskName,i=e.description,r=e.priority,l=e.endTime,s=e.endDate;a.props.onTaskDelete({id:t,taskName:n,description:i,priority:r,endTime:l,endDate:s})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.taskName,a=e.description,n=e.priority,r=e.endTime,l=e.endDate,s=e.failed,o=l?l[8]+l[9]+"-"+l[5]+l[6]+"-"+l[0]+l[1]+l[2]+l[3]:null,c=this.state.visible;return i.a.createElement("li",{className:s?"task failed":"task "+n,onClick:this.handleTaskClick,title:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0437\u0430\u0434\u0430\u0447\u0443 \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},i.a.createElement("button",{className:"done",onClick:this.handleDoneClick,disabled:s},"\u0413\u043e\u0442\u043e\u0432\u043e"),i.a.createElement("span",{className:"name"},t),i.a.createElement("span",{className:"end-time"},r),i.a.createElement("span",{className:"end-date"},o),c&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"description"},a||"\u041d\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f"),i.a.createElement("button",{className:"modify",onClick:this.handleModifyClick},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),i.a.createElement("button",{className:"delete",onClick:this.handleDelClick},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}}]),t}(i.a.Component),g=function(e){return i.a.createElement("div",{className:"task-list"},i.a.createElement("h2",null,"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"),i.a.createElement("ul",null,function(e){var t=e.data;return t.length?t.map(function(t){return i.a.createElement(f,{key:t.id,data:t,onTaskComplete:e.onTaskComplete,onTaskModify:e.onTaskModify,onTaskDelete:e.onTaskDelete})}):i.a.createElement("li",{className:"empty"},i.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u043d\u0435\u0442"))}(e)))},v=function(e){return i.a.createElement("div",{className:"task-list"},i.a.createElement("h2",null,"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"),i.a.createElement("ul",null,function(e){var t=e.data;return t.length?t.map(function(e){return i.a.createElement("li",{className:"task passed",key:e.id},i.a.createElement("span",{style:{width:110}}),i.a.createElement("span",{className:"name"},e.taskName),i.a.createElement("span",{className:"end-time"},e.doneTime),i.a.createElement("span",{className:"end-date"},e.doneDate))}):i.a.createElement("li",{className:"empty"},i.a.createElement("p",null,"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447 \u043d\u0435\u0442"))}(e)))},y=function(e){return i.a.createElement("div",{className:"filter-field"},i.a.createElement("h2",null,"\u0424\u0438\u043b\u044c\u0442\u0440"),i.a.createElement("label",{className:"filter all"},i.a.createElement("input",{type:"radio",name:"filter",value:"all",checked:"all"===e.filter,onChange:function(){return e.onFilterChange("all")}}),"\u0412\u0441\u0435"),i.a.createElement("label",{className:"filter low"},i.a.createElement("input",{type:"radio",name:"filter",value:"low",checked:"low"===e.filter,onChange:function(){return e.onFilterChange("low")}}),"\u041e\u0431\u044b\u0447\u043d\u044b\u0435"),i.a.createElement("label",{className:"filter med"},i.a.createElement("input",{type:"radio",name:"filter",value:"med",checked:"med"===e.filter,onChange:function(){return e.onFilterChange("med")}}),"\u0412\u0430\u0436\u043d\u044b\u0435"),i.a.createElement("label",{className:"filter high"},i.a.createElement("input",{type:"radio",name:"filter",value:"high",checked:"high"===e.filter,onChange:function(){return e.onFilterChange("high")}}),"\u041e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u044b\u0435"))},T=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(d.a)(this,Object(m.a)(t).call(this,e));var n=new Date,i=(n.getHours()<10?"0"+n.getHours():n.getHours())+":"+(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes()),r=(n.getDate()<10?"0"+n.getDate():n.getDate())+"-"+(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-"+n.getFullYear();return a.state={currentTime:i,currentDate:r,seconds:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"tick",value:function(){var e=new Date,t=(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()),a=(e.getDate()<10?"0"+e.getDate():e.getDate())+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+e.getFullYear();this.setState(function(e){return{currentTime:t,currentDate:a,seconds:e.seconds+1}}),this.props.onTimerTick({time:t,date:a})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return i.a.createElement("div",{className:"timer"},i.a.createElement("span",null,this.state.currentTime),i.a.createElement("span",null,this.state.currentDate))}}]),t}(i.a.Component),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={id:"",taskName:"",description:"",priority:"med",endTime:"",endDate:"",tasks:h,donetasks:p,filter:"all",currentTime:"",currentDate:""},a.handleTimerTick=function(e){var t=e.time,n=e.date;a.setState({currentTime:t,currentDate:n})},a.handleNameChange=function(e){a.setState({taskName:e.currentTarget.value})},a.handleDescriptionChange=function(e){a.setState({description:e.currentTarget.value})},a.handleTimeChange=function(e){a.setState({endTime:e.currentTarget.value})},a.handleDateChange=function(e){a.setState({endDate:e.currentTarget.value})},a.handlePriorityClick=function(e){a.setState({priority:e})},a.handleButtonClick=function(e){e.preventDefault();var t=[{id:+new Date,taskName:a.state.taskName,description:a.state.description,priority:a.state.priority,endTime:a.state.endTime,endDate:a.state.endDate}].concat(Object(s.a)(a.state.tasks));a.setState({id:"",taskName:"",description:"",priority:"med",endTime:"",endDate:"",tasks:t})},a.handleCompleteTask=function(e){var t=a.state.tasks.filter(function(t){return t.id!==e.id});e.doneTime=a.state.currentTime,e.doneDate=a.state.currentDate;var n=[e].concat(Object(s.a)(a.state.donetasks));a.setState({tasks:t,donetasks:n})},a.handleModifyTaks=function(e){var t=a.state.tasks.filter(function(t){return t.id!==e.id});a.setState({id:e.id,taskName:e.taskName,description:e.description,priority:e.priority,endTime:e.endTime,endDate:e.endDate,tasks:t})},a.handleDeleteTask=function(e){var t=a.state.tasks.filter(function(t){return t.id!==e.id});a.setState({tasks:t})},a.handleFilterSelect=function(e){a.setState({filter:e})},a.filteredTasks=function(){localStorage.setItem("taskList",JSON.stringify(a.state.tasks));var e=a.state.tasks.map(function(e){var t=e;return e.endDate&&Date.parse(e.endDate+" "+e.endTime)<Date.parse(new Date)?(t.failed=!0,t):(t.failed=!1,t)});return"all"===a.state.filter?e:e.filter(function(e){return e.priority===a.state.filter})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.filteredTasks();return i.a.createElement("div",{className:"app"},i.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"),i.a.createElement(T,{onTimerTick:this.handleTimerTick}),i.a.createElement(k,{taskName:this.state.taskName,description:this.state.description,priority:this.state.priority,endTime:this.state.endTime,endDate:this.state.endDate,onNameChange:this.handleNameChange,onDescriptionChange:this.handleDescriptionChange,onTimeChange:this.handleTimeChange,onDateChange:this.handleDateChange,onPriorityClick:this.handlePriorityClick,onButtonClick:this.handleButtonClick}),i.a.createElement(y,{filter:this.state.filter,onFilterChange:this.handleFilterSelect}),i.a.createElement(g,{data:e,onTaskComplete:this.handleCompleteTask,onTaskModify:this.handleModifyTaks,onTaskDelete:this.handleDeleteTask}),i.a.createElement(v,{data:this.state.donetasks}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.85bc64c6.chunk.js.map