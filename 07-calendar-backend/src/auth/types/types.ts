export type User = {
    id: string
    name: string
    email: string
    password: string
}

export type UserLogin = Omit<User , 'name' | 'id'>

export type UserResponse = Omit<User , 'password'>

export type UserLoginResponse = {
    token: string
    user: UserResponse
}