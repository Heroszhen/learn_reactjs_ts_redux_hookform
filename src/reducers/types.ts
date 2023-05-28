export interface StudentState {
    students: string[]
}

export interface User {
    id:string,
    lastname:string,
    firstname:string,
    email:string,
    age:number,
    phone:string,
    filter:number
}

export interface UserState {
    users: User[]
}

export interface Action {
    type:string,
    playload: any
}

