import {useState} from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'


const Todo = () => {
  const [tasks, setTasks] = useState([
    {id: 'task - 1', title:"сделать дз", isDone:false},
    {id: 'task - 2', title:"сделать сайт на реакте", isDone:true},

  ])

  const [newTaskTitle, setNewTaskTitle] = useState('')



  // const [value, setValue] = useState(initialValue)  // принимает два значение певрое само значание, второе функция с помощью которой обновляеться само значение
  // setCount делает две вещи:
  // 1. Записывает новое значение в ячейку
  // 2. Говорит React «перерисуй этот компонент»
  const deleteAllTasks = () => {
    const isConfirmed = confirm ('are you sure, you want to delete all?')

    if (isConfirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
   setTasks(
    tasks.filter((task) => task.id !== taskId)
   )
  }

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {...task, isDone}
        }

        return task
      })
    )
  }

  const filterTasks = (text) => {
    console.log(`Поиск: ${text}`)
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title:newTaskTitle,
        isDone: false,
      }
      setTasks([...tasks, newTask])
      setNewTaskTitle('')
    }
  }
  
    return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
       addTask = {addTask}
       newTaskTitle = {newTaskTitle}
       setNewTaskTitle = {setNewTaskTitle}
      />
      <SearchTaskForm  onSearchInput = {filterTasks}/>
      <TodoInfo 
        total = {tasks.length}
        done={tasks.filter(({isDone}) => isDone).length }
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
       tasks={tasks}
       onDeleteTaskButtonClick={deleteTask}
       onTaskCompleteChange = {toggleTaskComplete}
      />
    </div>
    )
}

export default Todo