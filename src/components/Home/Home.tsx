import React from "react";
import './Home.scss';
import { useState } from "react";

interface Props{
    father:string
}

interface Student {
    name:string;
    age:number;
    class:string;
}

const Home = (props:Props)=>{
    let title:string = "Home";
    let persons:Array<string> = ["Vincent", "Pierre", "Naruto"];
    let students:Student[] = [
        {name:"aa", age:3, class:"sss"},
        {name:"afff", age:55, class:"dqdfs"}
    ];
    const [sentence, setSentence] = useState<string>("zhen est le plus grand héros du monde");
    


    return (
        <>
            <div id="home">
                <h1 className="title">{title}</h1>
                <section>
                    {
                        persons.map((value:string,index:number)=>{
                            return (<div key={index}>{index} : {value}</div>)
                        })
                    }
                </section>
                <section>
                    {
                        students.map((value:object,index:number)=>{
                            return (<div key={index}></div>)
                        })
                    }
                </section>
                <section>
                    <button type="button" onClick={()=>setSentence("ok")}>{sentence}</button>
                </section>
            </div>
        </>
    )
} 

export default Home;