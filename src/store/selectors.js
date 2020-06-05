export const getStages = state => state.stages
export const getStage = ({ id }) => state => state.stages.find(stage => stage.id === id)
export const getTask = ({ id }) => state => state.tasks[id]
export const getActiveTaskId = state => state.activeTask
export const getActiveTask = state => state.tasks[state.activeTask]
