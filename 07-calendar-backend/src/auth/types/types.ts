export type User = {
    id: string
    name: string
    email: string
    password: string
}

export type UserLogin = Omit<User , 'name' | 'id'>