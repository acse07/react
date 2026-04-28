import {useState, useEffect} from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'


const Todo = () => {
  const [tasks, setTasks] = useState( () => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return [
      {id: 'task-1', title:'Купить ноут', isDone:false},
      {id: 'task-2', title:'Закончить реакт', isDone:true}

    ]
  })

  const [newTaskTitle, setNewTaskTitle] = useState('')

  const [searchQuery, setSearchQuery] = useState('')



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


  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title:newTaskTitle,
        isDone: false,
      }


      setTasks([...tasks, newTask])
      setNewTaskTitle('')
      setSearchQuery('')
    }
  }


    useEffect(() => {
      console.log('Сохраняем данные в localStorage, т.к. изменился tasks:', tasks)
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const clearSearchQuery = searchQuery.trim().toLowerCase()
    const filteredTasks = clearSearchQuery.length > 0
      ? tasks.filter(({ title}) => title.toLowerCase().includes(clearSearchQuery))
      : null 

  
    return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
       addTask = {addTask}
       newTaskTitle = {newTaskTitle}
       setNewTaskTitle = {setNewTaskTitle}
      />
      <SearchTaskForm
        searchQuery = {searchQuery}
        setSearchQuery = {setSearchQuery}
      />
      <TodoInfo 
        total = {tasks.length}
        done={tasks.filter(({isDone}) => isDone).length }
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
      filteredTasks = {filteredTasks}
       tasks={tasks}
       onDeleteTaskButtonClick={deleteTask}
       onTaskCompleteChange = {toggleTaskComplete}
      />
    </div>
    )
}

export default Todo