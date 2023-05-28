import { UserState, Action } from "./types";
import { User } from "./types";

const initialState:UserState = {
    users: []
};

export function userReducer (state = initialState, action: Action & any):UserState {
    switch (action.type) {
        case "ADD_USERS":
            return {
                ...state,
                users: action.playload
            };
        case "ADD_USER":
            return {
                ...state,
                users: state.users.concat(action.playload)
            };
        // case "MODIFY__USER":
            
        case "DELETE_USER":
            state.users.splice(action.playload, 1);
            return {
                ...state,
                users: state.users
            };
        case "FILTER_USERS":
            return {
                ...state,
                users: filterUsers(action.playload, state.users)
            };
        default:
            return state;
    }
}

function filterUsers(keyword:string, users:User[]): User[] {
    for(let user of users) {
        user["filter"] = 0;
        if(user["lastname"].toLowerCase().includes(keyword.toLowerCase())) {
            user["filter"] = 1;
        }
        if(user["firstname"].toLowerCase().includes(keyword.toLowerCase())) {
            user["filter"] = 1;
        }
        if(user["email"].toLowerCase().includes(keyword.toLowerCase())) {
            user["filter"] = 1;
        }
    }
    return users;
}