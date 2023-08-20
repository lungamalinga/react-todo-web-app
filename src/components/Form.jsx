

import styles from '../Style.module.css'

const Form = ({ todo, setTodo, todoList, setTodoList }) => {

    const handleChange = ( event ) => {
        setTodo(event.target.value)
    }

    const handleSubmit = ( event ) => {
        event.preventDefault() // prevent page from reloading 
        setTodoList( [...todoList, todo] ) // <- add to the array [NOTE: each item dont have id]
    }

    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} className={styles.todoinput} type="text" placeholder="Add todo item" />
                <button type='submit' className={styles.todobutton}> ADD </button>
            </form>
        </div>
    )
}

export default Form;