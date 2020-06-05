const findTaskStage = (stages, id) => {
  let stageId

  stages.forEach(stage => {
    stage.tasks.forEach(taskId => {
      console.log(taskId, id)
      if (taskId === id) stageId = stage.id
    })
  })

  return stageId
}

export const moveForward = (state, id) => {
  const { stages } = state
  const stageId = findTaskStage(state.stages, id)

  const thisStage = stages[stageId]
  const nextStage = stages[stageId + 1]

  const newStages = [
    ...stages.slice(0, stageId),
    {
      ...thisStage,
      tasks: thisStage.tasks.filter(task => task !== id),
    },
    {
      ...nextStage,
      tasks: [...nextStage.tasks, id],
    },
    ...stages.slice(stageId + 2),
  ]
  return {
    ...state,
    stages: newStages,
  }
}

const reducer = function reducer(state, action) {
  const { payload } = action
  switch (action.type) {
    case 'setActiveTask':
      return {
        ...state,
        activeTask: payload.id,
      }
    case 'moveBack':
      return [...state]
    case 'moveForward':
      return moveForward(state, payload.id)
    default:
      throw new Error()
  }
}

export const initialTasksList = {
  activeTask: null,
  tasks: {
    0: { name: 'task 0', id: 0 },
    1: { name: 'task 1', id: 1 },
    2: { name: 'task 2', id: 2 },
    3: { name: 'task 3', id: 3 },
    4: { name: 'task 4', id: 4 },
    5: { name: 'task 5', id: 5 },
    6: { name: 'task 6', id: 6 },
    7: { name: 'task 7', id: 7 },
    8: { name: 'task 8', id: 8 },
    9: { name: 'task 9', id: 9 },
  },
  stages: [
    {
      id: 0,
      name: 'Backlog',
      tasks: [0, 1, 2, 3],
    },
    { id: 1, name: 'To Do', tasks: [4, 5, 6] },
    { id: 2, name: 'Ongoing', tasks: [7, 8] },
    { id: 3, name: 'Done', tasks: [9] },
  ],
}
export default reducer
