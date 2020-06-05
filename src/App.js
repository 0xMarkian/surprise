import React, { Component, useReducer } from 'react'
import './App.css'

import reducer, { initialTasksList } from './store/reducer'
import { StateProvider } from './store'

import Controls from './components/Controls'
import Board from './components/Board'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialTasksList)

  return (
    <div className="App">
      <StateProvider initialState={initialTasksList} reducer={reducer}>
        <Controls />
        <Board stages={state.stages} />
      </StateProvider>
    </div>
  )
}

export default App
