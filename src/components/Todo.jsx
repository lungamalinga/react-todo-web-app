
import styles from '../Style.module.css';


const Todo = ( { todoItem, todoList, setTodoList } ) => {

    const handleDelete = () => {
        setTodoList( todoList.filter(item => item.id !== todoItem.id)); 
    }

    return (  
        <div className={ styles.todoItem }>
            <div>
                <h3 className={ styles.todoName }> { todoItem.name }</h3>
                <button type="submit" onClick={handleDelete} className={styles.deleteButton} >Done</button>
            </div>
        </div>
    )
}

export default Todo;