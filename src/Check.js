import { useState } from "react"

function Check(){
    var [court,setCourt]=useState([]);
    var arr2=[{name:"laxmikanth",cost:2000,image:'D:\pro1\public\images\bajajmix1.jpg'}]

    var most=()=>{
            
            var lk=document.getElementById("esd").value
            
        for(var i=0;i<arr2.length;i++){
            if(lk==arr2[i].name){
              var po=arr2[i].cost+arr2[i].image

            }       
        }
        setCourt(po)
    }

    return(
        <div>
                <button onClick={most}>click</button>
                <input type="text" id="esd"/>
                <div>{court}</div>
               
        </div>
    )
}
export default Check;