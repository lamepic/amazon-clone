import React, { useContext, useReducer } from 'react'

const StateContext = React.createContext()

export function StateProvider({reducer, initialState, children}){
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)