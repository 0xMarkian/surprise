export const moveForward = (state, id) => {
  const newStages = state.stages.map()
  return {
    ...state,
    stages: [],
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
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

export const initialTasksList = {
  activeTask: null,
  tasks: {
    0: { name: 'task 0' },
    1: { name: 'task 1' },
    2: { name: 'task 2' },
    3: { name: 'task 3' },
    4: { name: 'task 4' },
    5: { name: 'task 5' },
    6: { name: 'task 6' },
    7: { name: 'task 7' },
    8: { name: 'task 8' },
    9: { name: 'task 9' },
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
