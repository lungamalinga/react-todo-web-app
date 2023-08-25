
import styles from '../Style.module.css';


const Todo = ( { todoItem } ) => {
    return (
        <div className={ styles.todoItem }>
            <div>
                <h3 className={ styles.todoName }> { todoItem.name }</h3>
                <button className={styles.deleteButton} >Done</button>
            </div>
        </div>
    )
}

export default Todo;