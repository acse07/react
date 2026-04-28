import Field from './Field'



const SearchTaskForm = (props) => {
  const {
    searchQuery,
    setSearchQuery
  } = props
    return (
      <form
       className="todo__form"
       onSubmit={(event) => {
        event.preventDefault()
       }}
      >
        <Field
          onInput= {(event) => setSearchQuery(event.target.value)}
          className = "todo__field"
          label = "Search Task"
          id = "search-task"
          type = "search"
          value = {searchQuery}
         />
      </form>
    )
}


export default SearchTaskForm