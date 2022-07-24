import { dateFnsLocalizer } from 'react-big-calendar'
import startOfWeek from 'date-fns/startOfWeek'
import enUS from 'date-fns/locale/en-US'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'

const locales = {
    'en-US': enUS,
}

export const calendarLocalizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})