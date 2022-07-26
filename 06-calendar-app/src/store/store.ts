import { calendarSlice } from './calendar/calendarSlice';
import { configureStore } from '@reduxjs/toolkit'
import UISlice from './ui/uiSlice'

export const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    ui: UISlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck : false })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch