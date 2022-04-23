import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { sidebarSlice } from './sidebar'

export const rootReducer = combineReducers({
  sidebar: sidebarSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
})
