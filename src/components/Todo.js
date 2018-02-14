import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, onDeleteClick, completed, text}) => (
        <li>
        <input onClick={onClick} type="checkbox" defaultChecked={completed} />
        {text}
        <a href="" onClick={ e => {
            e.preventDefault()
            onDeleteClick()
        }}>🞬</a>
        </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
