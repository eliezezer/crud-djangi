 import { useEffect } from "react";
 import {getAllTask} from './../api/TakApi'
 export function TaskList() {
    useEffect(()=>{
       async function loadTask(){
            const res = await getAllTask()
            console.log(res)
        }
        loadTask()
    },[])
    
    return (
        <div>
            Task List Api
        </div>
    );
}

