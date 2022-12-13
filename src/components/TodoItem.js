import styles from "./TodoItem.module.css"

const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
}

const TodoItem = (props) => {
    const {id, title, completed} = props.todo;
    return (
        <li className={styles.item}>
            <input
                className={styles.checkbox}
                type='checkbox'
                checked={completed}
                onChange={() => props.handleChangeProps(id)}
            />
            <button onClick={() => props.delTodoProps(id)}>Delete</button>
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
        </li>
    );
}

export default TodoItem;