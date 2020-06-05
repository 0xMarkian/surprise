import React from 'react'

import Stage from './Stage'
import { useSelector, selectors } from '../store'

const Board = () => {
  const stages = useSelector(selectors.getStages)
  return (
    <div>
      <h1>Kanban board</h1>
      <div
        style={{
          display: 'flex',
        }}
      >
        {stages.map(({ id, name, tasks }, idx) => (
          <Stage id={id} key={name} name={name} tasks={tasks} />
        ))}
      </div>
    </div>
  )
}

export default Board
