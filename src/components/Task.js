import React from 'react'
import { selectors, useSelector, actions, useDispatch } from '../store'

const taskNameToId = name => {
  return `task-${name}`
}

const Task = ({ id }) => {
  const { name } = useSelector(selectors.getTask({ id }))
  const isActive = useSelector(selectors.getActiveTaskId) === id
  const dispatch = useDispatch()
  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        margin: '1rem 1rem 0 1rem',
        background: isActive ? 'rgba(30,30,30,.3)' : 'none',
      }}
      onClick={() => dispatch(actions.setActiveTask({ id }))}
      data-testid={taskNameToId(name)}
    >
      {name}
    </div>
  )
}

export default Task
