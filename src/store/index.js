import React, { createContext, useContext, useReducer } from 'react'
import * as selectors from './selectors'
import * as actions from './actions'

export { selectors, actions }
export const StateContext = createContext()
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext)
export const useDispatch = () => useContext(StateContext)[1]
export const useSelector = selector => selector(useContext(StateContext)[0])
