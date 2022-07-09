export interface Note {
    title: string
    body: string
    date: string
    id: string
}

export interface JournalState {
    messageSaved: string
    isSaving: boolean
    notes: Note[]
    actual: Note | null
} 
