export type AuthStatus = 'checking' | 'not-authenticated' | 'authenticated'

export type User = { 
    id: string
    name: string
    email: string
}

export type AuthState = {
    user: User | null
    status: AuthStatus,
    errorMsg: string | null
}