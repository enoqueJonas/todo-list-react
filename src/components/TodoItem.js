import { useState } from "react"
import styles from "./TodoItem.module.css"

const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
}

const TodoItem = (props) => {
    const [editing, setEditing] = useState(false);

    const handleEditing = () => {
        setEditing(true);
    }

    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false);
        }
    }

    const { id, title, completed } = props.todo;
    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }
    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
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
            </div>
            <input
                type="text"
                className={styles.textInput}
                style={editMode}
                value={title}
                onChange={e => {
                    props.setUpdateProps(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    );
}

export default TodoItem;