import React, { useState } from "react"
function Dat(){
    const[state,setState]=useState(0)
    const handleclick=()=>{
        setState((current)=>{
            return current=current+1
        })
    }
    var isUserLoggedIn=true
    if(isUserLoggedIn="true"){
        return(
        <div class="app">
            <h1>hello xuandat cau lenh {isUserLoggedIn}</h1>
            <button onClick={handleclick}>click</button>
            <h1>ban so {state}</h1>
        </div>
        )
    }
}
export default Dat