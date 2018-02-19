import React from 'react'
import PropTypes from 'prop-types'

const Undo = ({ canUndo, onClick }) => (
  <p>
      <button
          disabled={!canUndo}
          onClick={e => {
              e.preventDefault()
              onClick()
          }}
      >
          Undo
      </button>
  </p>
)

Undo.propTypes = {
  onClick: PropTypes.func.isRequired,
  canUndo: PropTypes.bool.isRequired
}

export default Undo
