import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'


const Todo = () => {

  const tasks = [
    {id: 'task - 1', title:"сделать дз", isDone:false},
    {id: 'task - 2', title:"сделать сайт на реакте", isDone:true},

  ]

  const deleteAllTasks = () => {
     console.log('Удаляем все задачи')
  }

  const deleteTask = (taskId) => {
    console.log("Task deleted:", taskId)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Задача ${taskId} ${isDone ? 'выполнена' : 'не выполнена'}`)
  }

  const filterTasks = (text) => {
    console.log(`Поиск: ${text}`)
  }

  const addTask = () => {
    console.log('Задача добавлена')
  }
  
    return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask = {addTask}/>
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