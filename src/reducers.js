import { combineReducers } from 'redux'

const visibilityFilter = (state='SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': 
            return action.filter
        default:
            return state
    }
}


let id = 1

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
        return [
            ...state,
            {
                text: action.text,
                completed: false,
                id: id++
            }
        ]
    case 'TOGGLE_TODO':
        return state.map((todo) => {
            if (todo.id === action.id) {
                return Object.assign({}, todo, {
                    completed: !todo.completed
                })
            }
            return todo
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