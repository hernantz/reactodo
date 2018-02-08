import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react' 
import { render } from 'react-dom'
import todoApp  from './reducers'
import App from './components/App'


let store = createStore(todoApp, {todos: [{id: 0, text: 'Hola', completed: true}]},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
