
import styles from '../Style.module.css';


const Todo = () => {
    return (
        <div className={ styles.todoItem }>
            <div>
                <h3 className={ styles.todoName }>Todo item</h3>
                <button className={styles.deleteButton} >Done</button>
            </div>
        </div>
    )
}

export default Todo;