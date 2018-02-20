import { loadState, saveState } from './storage'
import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import todoApp  from './reducers'

const configureStore = () => {
    let store = createStore(todoApp, loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        })
    }, 1000))

    return store
}

export default configureStore
