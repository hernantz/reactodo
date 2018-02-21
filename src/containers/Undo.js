import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import UndoBtn from '../components/Undo'

const mapStateToProps = state => ({
    canUndo: state.todos.past.length > 0
})

const Undo = connect(
    mapStateToProps,
    {
        onClick: UndoActionCreators.undo
    }
)(UndoBtn)

export default Undo
