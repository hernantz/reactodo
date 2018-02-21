import AddTodoForm from '../components/AddTodoForm'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = connect(null, {onSubmit: addTodo})(AddTodoForm)
export default AddTodo
