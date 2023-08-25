
import styles from '../Style.module.css'
import shortid from 'shortid'

const Form = ({ todo, setTodo, todoList, setTodoList }) => {

    const handleChange = ( event ) => {
        setTodo(event.target.value)
    }

    const handleSubmit = ( event ) => {
        event.preventDefault() // prevent page from reloading 
        setTodoList( [...todoList, {
            id: shortid.generate(),
            name: todo
        }]);

        setTodo("") // empty the text field after submit
    }

    return (
        <div className = { styles.todoform} >
            <form onSubmit={ handleSubmit }>
                <input value={ todo } onChange={ handleChange } className={ styles.todoinput } type="text" placeholder="Add Todo" />
                <button type='submit' className={ styles.todobutton }> ADD </button>
            </form>
        </div>
    );
}

export default Form;