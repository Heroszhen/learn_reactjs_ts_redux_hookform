import React, { FormEvent, useEffect, useState } from 'react';
import './Users.scss';
import { getUsers, deleteUser } from '../../reducers/actions';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../reducers/store';
import { RootState } from '../../reducers/store';
import { User } from '../../reducers/types';
import Button from '@mui/material/Button';
// import _ from "lodash";
import { SubmitHandler, useForm } from "react-hook-form";

type UserType = {
    lastname:string,
  };

const Users: React.FC = () => {
    const reducer = useSelector((state:RootState) => state.userReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        store.dispatch(getUsers());
    },[]);
    const [index, setIndex] = useState<number>(-1);
    const { register, handleSubmit } = useForm<UserType>();
    
    // const editUser = (data:UserType) => {
    //     console.log(data)
    // }

    const editUser = (data: UserType) => {
        console.log(JSON.stringify(data, null, 2));
      };

    return (
        <>
            <div id="users">
                <h1>Les utilisateurs</h1>
                <section className='m-section'>
                    <h3>Editer un utilisateur</h3>
                    <form onSubmit={handleSubmit(editUser)}>
                        <div>
                            <label></label>
                            <input defaultValue="" {...register("lastname")} />
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                </section>

                <section className='m-section'>
                    <input type="text" onKeyUp={(e)=> dispatch({type:"FILTER_USERS", playload:(e.target as HTMLInputElement).value})}/>
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Nom</td>
                                <td>Prénom</td>
                                <td>Age</td>
                                <td>Eamil</td>
                                <td>Phone</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            reducer.users.map((item:User, key:number)=>{
                                return (
                                    <React.Fragment key={key}>
                                        {item["filter"] === 1 &&
                                            <tr >
                                                <td>{item.id}</td>
                                                <td>{item.lastname}</td>
                                                <td>{item.firstname}</td>
                                                <td>{item.age}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>
                                                    <Button variant="contained">Modifier</Button>
                                                    <Button variant="contained" color="error" onClick={()=> store.dispatch(deleteUser(key))}>Supprimer</Button>
                                                </td>
                                            </tr>
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    );
}
export default Users;