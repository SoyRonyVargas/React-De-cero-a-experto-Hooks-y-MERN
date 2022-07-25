import { View } from 'react-big-calendar'

export type TEvent = { title: string; start: Date; end: Date; allDay: boolean };

export type DoubleClickEvent = (
    event: TEvent, 
    e: React.SyntheticEvent<HTMLElement>
) => void

export type ViewEvent = ((view: View) => void)

export type ReturnStyledEvent = {
    className?: string | undefined; 
    style?: React.CSSProperties
}