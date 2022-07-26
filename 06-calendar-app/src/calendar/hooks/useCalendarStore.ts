import { selectActualEvent , selectEvents, selectLoading } from './../../store/calendar/selectors';
import { createNewEvent , thunkEditEvent , thunkDeleteEvent } from './../../store/calendar/thunks';
import { clearActualEvent, setActiveEvent, setVoidEvent } from '../../store/calendar';
import { useAppSelector, useAppDispatch } from './../../hooks/index';
import { TEvent } from './../types/index';

const useCalendarStore = () => {

    const dispatch = useAppDispatch()

    const actualEvent = useAppSelector(selectActualEvent)
    const isLoadingModal = useAppSelector(selectLoading)
    const events = useAppSelector(selectEvents)

    const handleSelectStoreEvent = ( event : TEvent ) => dispatch(setActiveEvent(event));
    
    const handleCreateVoidEvent = () => dispatch(setVoidEvent());

    const handleCleanEvent = () => dispatch(clearActualEvent());

    const startSavingEvent = ( event : TEvent ) => {
        
        if( event._id === null )
        {
            dispatch(createNewEvent(event))
        }
        else
        {
            dispatch(thunkEditEvent( event ))
        }

    }

    const handleDeleteEvent = () => {
        
        dispatch(thunkDeleteEvent());

    }

    return {
        events,
        actualEvent,
        isLoadingModal,
        startSavingEvent,
        handleCleanEvent,
        handleDeleteEvent,
        handleCreateVoidEvent,
        handleSelectStoreEvent,
        hasSelectedEvent: !!actualEvent?._id,
    }

}

export default useCalendarStore