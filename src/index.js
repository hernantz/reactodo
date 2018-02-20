import Root from './components/Root'
import React from 'react' 
import { render } from 'react-dom'
import configureStore from './configureStore'



render(
    <Root store={configureStore()} />,
    document.getElementById('root')
)
