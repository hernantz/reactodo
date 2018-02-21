import { connect } from 'react-redux'
import { deleteTodo, toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})

const VisibleTodoList = connect(
    mapStateToProps,
    {
        onTodoClick: toggleTodo,
        onTodoDeleteClick: deleteTodo
    }
)(TodoList)

export default VisibleTodoList
