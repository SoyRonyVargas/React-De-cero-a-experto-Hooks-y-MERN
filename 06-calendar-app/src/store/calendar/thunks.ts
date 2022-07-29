import { onAddNewEvent , onEditEvent, setLoading , hideLoading, onDeleteEvent } from './calendarSlice';
import { TEvent } from './../../calendar/types/index';
import { ThunkFunction } from './../../types/index';
import { hideModal } from '../ui/uiSlice';

export const hideModalUI = () : ThunkFunction => async ( dispatch ) => {

    dispatch(hideLoading())
    
    dispatch(hideModal())

}  

export const createNewEvent = ( event : TEvent ) : ThunkFunction => async ( dispatch ) => {

    try
    {

        dispatch(setLoading())
        
        dispatch(onAddNewEvent({
            ...event,
            _id: new Date().toString()
        }))

        setTimeout( () => {
            
            dispatch(hideModalUI())

        }, 4000)

    }
    catch(err)
    {

    }

}

export const thunkEditEvent = ( newPayload : TEvent ) : ThunkFunction => async ( dispatch ) => {

    try
    {
        
        dispatch(setLoading())

        dispatch(onEditEvent((newPayload)))
        
        setTimeout( () => {
            
            dispatch(hideModalUI())

        }, 4000)

    }
    catch(err)
    {

    }

}

export const thunkDeleteEvent = () : ThunkFunction => async ( dispatch , getState ) => {

    try 
    {
        
        const state = getState()

        const actualEvent = state.calendar.activeEvent

        if( actualEvent )
        {
            dispatch(onDeleteEvent(actualEvent))
        }

    } 
    catch (error) 
    {
        
    }

}