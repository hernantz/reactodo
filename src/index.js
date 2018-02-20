import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { loadState, saveState } from './storage'
import React from 'react' 
import { render } from 'react-dom'
import todoApp  from './reducers'
import App from './components/App'


let store = createStore(todoApp, loadState(),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

store.subscribe(() => {
    saveState(store.getState())
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
