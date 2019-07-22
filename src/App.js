import React from 'react';
import './App.css';

const currentTasks = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')): [];
const finishedTasks = [];
//Блок ввода для новой задачи
const NewTask = (props) => {
  const taskName = props.taskName
  const description = props.description
  const priority = props.priority
  const endTime = props.endTime
  const endDate = props.endDate
  return (
    <form className="new-task">
      <h2>Новая задача</h2>
      <input
        className={"task-name " + priority}
        id="task-name"
        onChange={(e) => props.onNameChange(e)}
        type="text"
        placeholder="Название задачи"
        autoComplete="off"
        value={taskName}
      />
      <input
        className={"task-description " + priority} 
        id="task-description"
        onChange={(e) => props.onDescriptionChange(e)}
        placeholder="Описание задачи"
        autoComplete="off"
        value={description}
      /> 
      <label className={"task-time " + priority}>
        Время окончания
        <input 
          className="clock"
          id="clock"
          onChange={(e) => props.onTimeChange(e)}
          type="time"
          value={endTime}
        />
      </label>
      <label className={"task-date " + priority}>
        Дата окончания
        <input 
          className="calendar"
          id="calendar"
          onChange={(e) => props.onDateChange(e)}
          type="date"
          min= "2019-07-17"
          max="2100-12-31"
          value={endDate}
        />
      </label>
      <label className="task-radio low"><input
        onChange={() => props.onPriorityClick('low')}
        type="radio"
        name="priority"
        value="low"
        checked={priority === "low"}
      />Обычная</label>
      <label className="task-radio med"><input
        onChange={() => props.onPriorityClick('med')}
        type="radio"
        name="priority"
        value="med"
        checked={priority === "med"}
      />Важная</label>
      <label className="task-radio high"><input
        onChange={() => props.onPriorityClick('high')}
        type="radio"
        name="priority"
        value="high"
        checked={priority === "high"}
      />Очень важная</label>
      <button 
        className='add' 
        onClick={(e) => props.onButtonClick(e)} 
        disabled={taskName.trim() ? false : true}
      >Добавить</button>
    </form> 
  )
}
//Одиночная задача из списка
class Task extends React.Component {
  state = {
      visible: false,
  }
  handleTaskClick = () => {
    this.setState(prevState => ({visible: !prevState.visible}))
  }
  
  handleDoneClick = () => {
    this.setState(prevState => ({visible: !prevState.visible}))
    const {id, taskName, description, priority, endTime, endDate} = this.props.data
    this.props.onTaskComplete({id, taskName, description, priority, endTime, endDate})
  }
  handleModifyClick = () => {
    this.setState(prevState => ({visible: !prevState.visible}))
    const {id, taskName, description, priority, endTime, endDate} = this.props.data
    this.props.onTaskModify({id, taskName, description, priority, endTime, endDate})
  }
  handleDelClick = () => {
    this.setState(prevState => ({visible: !prevState.visible}))
    const {id, taskName, description, priority, endTime, endDate} = this.props.data
    this.props.onTaskDelete({id, taskName, description, priority, endTime, endDate})
  }
  render() {
    const {taskName, description, priority, endTime, endDate, failed } = this.props.data
    const ddmmyyyy = endDate ? endDate[8]+endDate[9]+'-'+endDate[5]+endDate[6]+'-'+endDate[0]+endDate[1]+endDate[2]+endDate[3] : null
    const {visible} = this.state
    return (
      <li className={(failed) ? 'task failed' : 'task ' + priority} onClick={this.handleTaskClick} title="Нажмите на задачу чтобы увидеть полное описание">
        <button className="done" onClick={this.handleDoneClick} disabled={failed}>Готово</button>
        <span className="name">{taskName}</span>
        <span className="end-time">{endTime}</span>
        <span className="end-date">{ddmmyyyy}</span>
        {
          visible && 
          <React.Fragment>
            <span className="description">
              {  description ?  description : 'Нет описания' }
            </span>
            <button className="modify" onClick={this.handleModifyClick}>Редактировать</button>
            <button className="delete" onClick={this.handleDelClick} >Удалить</button>
          </React.Fragment>
        }
      </li>
    )
  }
}
//Список текущих задач
const TaskList = (props) => {
  const renderTasks = (props) => {
    const {data} = props
    let taskTemplate = null
    if (data.length) {
      taskTemplate = data.map(function(item) {
          return (
            <Task key={item.id} data={item} onTaskComplete={props.onTaskComplete} onTaskModify={props.onTaskModify} onTaskDelete={props.onTaskDelete}/> 
          )   
      })
    } else {
      taskTemplate = <li className="empty"><p>Текущих задач нет</p></li>
    }
    return taskTemplate
  }
  return (
    <div className="task-list">
      <h2>Текущие задачи</h2>
      <ul>
        {renderTasks(props)}
      </ul>
    </div>
  )
}  
//Список завершенных задач
const TasksFinished = (props) => {
  const renderTasks = (props) => {
    const {data} = props
    let taskTemplate = null
    if (data.length) {
        taskTemplate = data.map(function(item) {
            return (
              <li className='task passed' key={item.id}>
                <span style={{width: 110}}></span>
                <span className="name">{item.taskName}</span>
                <span className="end-time">{item.doneTime}</span>
                <span className="end-date">{item.doneDate}</span>
              </li>
            )   
        }) 
    } else {
        taskTemplate = <li className="empty"><p>Завершенных задач нет</p></li>
    }
    return taskTemplate
  }
  return (
    <div className="task-list">
        <h2>Завершенные задачи</h2>
        <ul>
          {renderTasks(props)}
        </ul>
    </div>
  ) 
}
// блок выбора филтра отображения задач
const Filter = (props) => {
  return (
    <div className="filter-field">
      <h2>Фильтр</h2>
      <label className="filter all"><input
        type="radio"
        name="filter"
        value="all"
        checked={props.filter === 'all'}
        onChange={() => props.onFilterChange('all')}
      />Все</label>
      <label className="filter low"><input
        type="radio"
        name="filter"
        value="low"
        checked={props.filter === 'low'}
        onChange={() => props.onFilterChange('low')}
      />Обычные
      </label>
      <label className="filter med"><input
        type="radio"
        name="filter"
        value="med"
        checked={props.filter === 'med'}
        onChange={() => props.onFilterChange('med')}
      />Важные
      </label>
      <label className="filter high"><input
        type="radio"
        name="filter"
        value="high"
        checked={props.filter === 'high'}
        onChange={() => props.onFilterChange('high')}
      />Очень важные
      </label>
    </div>
  )
}
//встроенный таймер, взято из учебника по ReactJs
class Timer extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date()
    const hrs = today.getHours() < 10 ? '0'+ today.getHours() : today.getHours()
    const mins = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
    const time = hrs + ":" + mins
    const dd = today.getDate() < 10 ? '0'+ today.getDate() : today.getDate() 
    const mm = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1
    const yyyy = today.getFullYear()
    const date = dd + '-' + mm + '-' + yyyy
    this.state = ({currentTime: time, currentDate: date, seconds: 0})
  } 
  tick() {
    const today = new Date()
    const hrs = today.getHours() < 10 ? '0'+ today.getHours() : today.getHours()
    const mins = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
    const time = hrs + ":" + mins
    const dd = today.getDate() < 10 ? '0'+ today.getDate() : today.getDate() 
    const mm = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1
    const yyyy = today.getFullYear()
    const date = dd + '-' + mm + '-' + yyyy
    this.setState(prevState => ({currentTime: time, currentDate: date, seconds: prevState.seconds + 1}));
    this.props.onTimerTick({time, date})
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="timer">
        <span>{this.state.currentTime}</span>
        <span>{this.state.currentDate}</span>
      </div>
    );
  }
}
class App extends React.Component {
  state = {
    id: '',
    taskName: '',
    description: '',
    priority: 'med',
    endTime: '',
    endDate: '',
    tasks: currentTasks,
    donetasks: finishedTasks,
    filter: 'all',
    currentTime:'',
    currentDate:''
  }
  handleTimerTick = (data) => {
    const {time, date} = data
    this.setState({currentTime: time, currentDate: date})
  }
  //можно рефакторить функции отслеживания изменений инпутов
  handleNameChange = (e) => {
    this.setState({taskName: e.currentTarget.value})
  }
  handleDescriptionChange = (e) => {
    this.setState({description: e.currentTarget.value})
  }
  handleTimeChange = (e) => {
    this.setState({endTime: e.currentTarget.value})
  }
  handleDateChange = (e) => {
    this.setState({endDate: e.currentTarget.value})
  }
  
  handlePriorityClick = (mode) => {
    this.setState({priority: mode})
  }
  handleButtonClick = (e) => {
    e.preventDefault()
    const data = {
      id: +new Date(),
      taskName: this.state.taskName,
      description: this.state.description,
      priority: this.state.priority,
      endTime: this.state.endTime,
      endDate: this.state.endDate
    }
    const nextTasks = [data, ...this.state.tasks]
    this.setState({
      id: '',
      taskName: '',
      description: '',
      priority: 'med',
      endTime: '',
      endDate: '', 
      tasks: nextTasks})
  }
  handleCompleteTask = (data) => {
    const newList = this.state.tasks.filter((item)=>{
      return item.id !== data.id
    })
    data.doneTime = this.state.currentTime
    data.doneDate = this.state.currentDate
    const doneTasks = [data, ...this.state.donetasks]
    this.setState({tasks: newList, donetasks: doneTasks})
  }
  handleModifyTaks = (data) => {
    const newList = this.state.tasks.filter((item)=>{
      return item.id !== data.id
    })
    this.setState({
      id: data.id,
      taskName: data.taskName,
      description: data.description,
      priority: data.priority,
      endTime: data.endTime,
      endDate: data.endDate,
      tasks: newList
    })
  }
  handleDeleteTask = (data) => {
    const newList = this.state.tasks.filter((item) => {
      return item.id !== data.id
    })
    this.setState ({tasks: newList})
  }
  handleFilterSelect = (mode) => {
    this.setState ({filter: mode})
  }
  //Обновляет список задач при фильтрации и сверяет срок выполнения задачи
  filteredTasks = () => {
    localStorage.setItem('taskList', JSON.stringify(this.state.tasks))
    let list = this.state.tasks.map((item) => {
      let elem = item
      if (!item.endDate){
        elem.failed = false
        return elem
      } else {
        const date = Date.parse(item.endDate +" "+ item.endTime)
        const curdate = Date.parse(new Date())
        if (date < curdate) {
          elem.failed = true
          return elem
        } else {  
          elem.failed = false
          return elem
        }
      }
    })
    if (this.state.filter === 'all') {
      return list/*this.state.tasks*/
    } else {
      return list.filter((item) => {
        return item.priority === this.state.filter
      })  
    }
  }

  render() {
    const filteredList = this.filteredTasks()
    return (
      <div className="app">
        <h1>Список задач</h1>
        <Timer onTimerTick={this.handleTimerTick}/>
        <NewTask
          taskName={this.state.taskName}
          description={this.state.description}
          priority={this.state.priority}
          endTime={this.state.endTime}
          endDate={this.state.endDate} 
          onNameChange={this.handleNameChange}
          onDescriptionChange={this.handleDescriptionChange}
          onTimeChange={this.handleTimeChange}
          onDateChange={this.handleDateChange}
          onPriorityClick={this.handlePriorityClick}
          onButtonClick={this.handleButtonClick}
        />
        <Filter filter={this.state.filter} onFilterChange={this.handleFilterSelect}/>
        <TaskList data={filteredList} onTaskComplete={this.handleCompleteTask} onTaskModify={this.handleModifyTaks} onTaskDelete={this.handleDeleteTask}/>
        <TasksFinished data={this.state.donetasks}/>
      </div>
    );
  }
}

export default App;
