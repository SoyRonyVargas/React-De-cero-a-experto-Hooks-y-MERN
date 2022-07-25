import { Calendar as BigCalendar, EventPropGetter , View } from 'react-big-calendar'
import { DoubleClickEvent, ReturnStyledEvent, TEvent, ViewEvent } from '../types'
import { calendarLocalizer } from '../helpers/calendarLocalizer'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { getMessagesES } from '../helpers/getMessages'
import React , { useState } from 'react'

const myEventsList: TEvent[] = [
    {
        title: "Pruebas a evento",
        start: new Date(),
        end: new Date(),
        allDay: true
    }
]


const Calendar = () => {

    const [ view , setView ] = useState<View>( ( window.localStorage.getItem("view") as View ) || "agenda" )
    
    const eventStyleGetter : EventPropGetter<TEvent> = ( event , start , end , isSelected ) : ReturnStyledEvent => {

        return {
            style: {
                background: '#DF7575',
                opacity: '.8'
            }
        }

    }

    const handleDoubleClick : DoubleClickEvent = ( event , element ) => {

        console.log({ event , element });

    }

    const handleSelectEvent : DoubleClickEvent = ( event , element ) => {

        console.log({ event , element });

    }

    const handleViewChange : ViewEvent = ( view ) => {

        console.log('cambio');

        console.log(view);

        window.localStorage.setItem( "view", view )

        setView(view)

    }

    const handleGetView = () : View | undefined =>  {

        try
        {

            const view : View = ( window.localStorage.getItem("view") as View ) || "agenda"

            return view

        }
        catch(err)
        {
            return "agenda"
        }

    }

    return (
        <BigCalendar
            culture='es'
            view={view}
            defaultView={'agenda'}
            localizer={calendarLocalizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: `calc( 100vh - 56px )` }}
            messages={getMessagesES()}
            onSelectEvent={handleSelectEvent}
            eventPropGetter={eventStyleGetter}
            onDoubleClickEvent={handleDoubleClick}
            onView={handleViewChange}
        />
    )
}

export default Calendar