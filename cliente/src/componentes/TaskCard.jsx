import {useNavigate} from "react-router-dom"
export function TaskCard({task}) {
    const navigate=useNavigate()
    return (

        <div style={{background:"red"}}
        onClick={()=>{
            navigate(`/task/${task.id}`)
        }}
        >
        <p>{task.title}</p>
        </div>
    );
}

