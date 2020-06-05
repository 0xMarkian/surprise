import React from 'react'

import Task from './Task'
import { selectors, useSelector } from '../store'

const Stage = ({ id }) => {
  const { name, tasks } = useSelector(selectors.getStage({ id }))
  return (
    <div
      data-testid={`stage-${id}`}
      style={{
        flexGrow: 1,
        margin: '1rem',
        paddingBottom: '1rem',
        background: '#fafafa',
      }}
    >
      <h2>{name}</h2>
      <div>
        {tasks.map(taskId => (
          <Task key={taskId} id={taskId} />
        ))}
      </div>
    </div>
  )
}

export default Stage
