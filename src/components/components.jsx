
import axios from "axios";
import { useEffect } from "react";
import {useState} from "react"

export const Check = ()=>{
    const [text,setText] = useState("");
    const[data,setData] = useState([]);
    const getdata = ()=>{
        axios.get("http://localhost:3000/users").then((res)=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        getdata()
    },[])
  
    
    return (<div>
        <input type="text"  onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <button onClick={()=>{
            fetch("http://localhost:3000/users",{
                method:"POST",
                body:JSON.stringify({title:text}),
                headers:{
                    "content-type":"application/json"
                }
            }).then(()=>{
                getdata();
            })
            
            
        }}>Add</button>
        {data.map((e)=>{
            return(
                <h3>{e.title}</h3>
            )
        })}

    </div>
    )
    
}