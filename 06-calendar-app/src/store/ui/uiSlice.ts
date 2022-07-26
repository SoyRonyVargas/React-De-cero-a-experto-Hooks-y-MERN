// import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface UIState {
  showModal: boolean
}

const initialState: UIState = {
  showModal: false,
}

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showModal: (state) => {
      state.showModal = true
    },
    hideModal: (state) => {
      state.showModal = false
    },
  },
})

export const { showModal , hideModal } = UISlice.actions

export default UISlice