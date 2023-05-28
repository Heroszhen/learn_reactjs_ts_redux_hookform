import React, { FormEvent, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../reducers/store';

const Students: React.FC = () => {
    const reducer = useSelector((state:RootState) => state.studentReducer)
    const dispatch = useDispatch();
    const [name, setName] = useState<string>("");
    const [index, setIndex] = useState<number>(-1);

    const setNameToModify = (key:number, name:string) => {
        setIndex(key);
        setName(name);console.log(key, name)
    };

    const editStudent = (e:FormEvent) => {
        e.preventDefault();
        if(name !== "") {
            if(index === -1) {
                dispatch({
                    type : "ADD",
                    playload: name
                });
            } else {
                dispatch({
                    type : "MODIFY",
                    playload: JSON.stringify({
                        key: index,
                        value: name
                    })
                });
            }
            
        }
    }
    

    return (
        <>
            <div id="students">
                <h1>Les étudiants</h1>
                <section>
                    <section>
                        <form onSubmit={(e:FormEvent) => editStudent(e)}>
                            <input type="value" defaultValue={name} onKeyUp={(e:any) => setName(e.target.value)}/>
                            <button type="submit">Envoyer</button>
                        </form>
                    </section>
                    <section>
                        <ul>
                        {
                            reducer.students.map((value:string,key:number)=>{
                                return (
                                    <li key={key}>
                                        {value}
                                        <button type="button" onClick={()=>setNameToModify(key, value)}>Modifier</button>
                                        <button type="button" onClick={()=>dispatch({type:'DELETE', playload:key})}>Supprimer</button>
                                    </li>
                                )
                            })     
                        }   
                        </ul>
                    </section>
                </section>
            </div>
        </>
    );
}
export default Students;