import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import UndoBtn from '../components/Undo'

const mapStateToProps = state => {
    return {
        canUndo: state.todos.past.length > 0
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(UndoActionCreators.undo()) 
    }
}

const Undo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoBtn)

export default Undo
