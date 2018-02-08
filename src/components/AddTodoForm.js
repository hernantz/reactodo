import React from 'react'
import PropTypes from 'prop-types'

const AddTodoForm = ({ onSubmit }) => {
    let input
    return (
        <form
            onSubmit={ e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                console.log(input.value)
                onSubmit(input.value)
                input.value = ''
            } }
        >
            <input 
                ref={node => {
                    input = node
                }}
                type="text"
                name="text"
                placeholder="What needs to be done?"
            />
            <button type="submit">Add</button>
        </form>
    )
}

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddTodoForm
