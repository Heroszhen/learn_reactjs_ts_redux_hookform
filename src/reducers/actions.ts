import { Dispatch } from "redux";
import { User } from "./types";
import axios from "axios";
import { promiseFunc } from "../services/apiServices";

export const getUsers =() => {
    return (dispatch: Dispatch) => {
        axios.get("https://randomuser.me/api/?nat=fr&results=10").then((response) => {
            let users: User[] = [];
            for(let entry of response.data.results) {
                let user:User = {
                    id:entry.id.value,
                    lastname:entry.name.last,
                    firstname:entry.name.first,
                    email:entry.email,
                    age:entry.registered.age,
                    phone:entry.phone,
                    filter:1
                }
                users.push(user);
            }
            dispatch({type:'ADD_USERS', playload:users});
        });
    }
}

export const deleteUser = (index:number) => {
    return (dispatch: Dispatch) => {
        promiseFunc(2, ()=> {
            dispatch({type:'DELETE_USER', playload:index});
        });
    }
}
