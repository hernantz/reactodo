import { combineReducers } from 'redux'
import uuid from 'uuid/v1'

const visibilityFilter = (state='SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': 
            return action.filter
        default:
            return state
    }
}


function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id: uuid()
                }
            ]
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {...todo, completed: !todo.completed }
                }
                return todo
            })
        case 'DELETE_TODO':
            return state.filter(todo => {
                return todo.id !== action.id
            })
        default:
              return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
