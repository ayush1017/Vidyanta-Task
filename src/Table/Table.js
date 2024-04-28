import React, { useReducer, useState } from 'react'
import sty from'./CSS/Tabale.module.css'
const reducer=(state,action)=>{

    if(action.type){
        return{...state,backgroundColor:action.payload}  
    }
    return state;
}
function Table() {
    const [row,setrow]=useState(null);
    const [state,dispatch]=useReducer(reducer," ");
    const handlechange=(ind)=>{
        setrow(ind)
        dispatch({type:"COLOR",payload:"aqua"})

     

    }
    const data=[{
        id:"0",
        name:"Name",
        country:"Country"
    },{
        id:"1",
        name:"Ayush",
        country:"America"
    },{
        id:"2",
        name:"Lavanya",
        country:"Australia"
        
    },{
        id:"3",
        name:"Pragya",
        country:"Russia"
    },{
        id:"4",
        name:"Satyam",
        country:"Africa"
        
    },{
        id:"5",
        name:"Abhishek",
        country:"Austria"
        
    }]

  return (
    <div>
        <h1>Task 1</h1>
        <table className={sty.tab}>
            {/* <thead>
                <tr>
                    <td>
                        Buttton
                    </td>
                    <td>
                        Name
                    </td>
                </tr>
            </thead> */}
            <tbody>
                {data.map((item,index)=>(
                <tr key={item.id} style={{backgroundColor:`${row===index?state.backgroundColor  :""}`}}>
                    <td className={sty.tab2}>
                        <input type="checkbox" checked={row==index} onChange={()=>{handlechange(index)}}></input>
                    </td>
                    <td className={sty.tab2}>{item.name}</td>
                    <td className={sty.tab2}>{item.country}</td>
                </tr>
                 ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table