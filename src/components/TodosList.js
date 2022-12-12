import TodoItem from "./TodoItem";

const TodosList = (props) => {
    return(
        <ul>
            {props.todos.map(todo => <TodoItem key = {todo.id} todo = {todo} />)}
        </ul>
    );
}

export default TodosList;