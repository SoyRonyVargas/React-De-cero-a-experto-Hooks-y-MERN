import { calendarLocalizer } from '../helpers/calendarLocalizer'
import { Calendar as BigCalendar, EventPropGetter } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { getMessagesES } from '../helpers/getMessages'
import { TEvent } from '../types'
import React from 'react'

const myEventsList: TEvent[] = [
    {
        title: "Pruebas a evento",
        start: new Date(),
        end: new Date(),
        allDay: true
    }
]

type ReturnStyledEvent = {
    className?: string | undefined; 
    style?: React.CSSProperties
}

const Calendar = () => {
    
    const eventStyleGetter : EventPropGetter<TEvent> = ( event , start , end , isSelected ) : ReturnStyledEvent => {

        return {
            style: {
                background: '#DF7575',
                opacity: '.8'
            }
        }

    }

    return (

        <BigCalendar
            culture='es'
            localizer={calendarLocalizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: `calc( 100vh - 56px )` }}
            messages={getMessagesES()}
            eventPropGetter={eventStyleGetter}
        />
    )
}

export default Calendar