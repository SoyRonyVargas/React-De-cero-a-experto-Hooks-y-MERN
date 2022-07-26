import { RootState } from './../store';

export const selectIsModelOpen = ( state: RootState ) => state.ui.showModal
