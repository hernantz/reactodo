import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


const TodoList = ({todos, onTodoClick, onTodoDeleteClick}) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo
                key={index}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
                onDeleteClick={() => onTodoDeleteClick(todo.id)} />
        ))}
    </ul>
)


TodoList.propTypes = {
    todos: PropTypes.arrayOf(
           PropTypes.shape({
               id: PropTypes.string.isRequired,
               completed: PropTypes.bool.isRequired,
               text: PropTypes.string.isRequired
           }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onTodoDeleteClick: PropTypes.func.isRequired
}

export default TodoList
