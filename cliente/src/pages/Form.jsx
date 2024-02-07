
import {useForm} from 'react-hook-form'
import {createTask,deleteTask,getTask, updateTask} from './../api/TakApi'
import {useNavigate,useParams} from 'react-router-dom'
import {useEffect} from "react"
export function Form() {
    const {register,handleSubmit,formState:{errors},setValue}= useForm()
    const navigate=useNavigate();
    const params=useParams();
    
    const onSubmit=handleSubmit(async (data)=>{
        //console.log(data)
        if(params.id){
            //await updateTask(id,data) 
           await updateTask(params.id,data)
        }else{
            const res= await createTask(data)
        }
        navigate('/task')

    })
    useEffect(()=>{
       async function loadTask(){
        if(params.id){
           const res= await getTask(params.id);
           setValue('title',res.data.title)
           setValue('description',res.data.description)

        }
       }
       loadTask();
    },[])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title"
                {...register("title",{required:true})} />
                {errors.title && <span>Este campo es requerido</span>}
                <br />
                <textarea rows="10" placeholder="Description"
                {...register("description",{required:true})}
                ></textarea>
                {errors.description && <span>Este campo es requerido</span>}

                <br/>
                <button>Save</button>
            </form>
        {
            params.id &&
            <button onClick={async ()=>{
                const accpeted=window.confirm("Estas seguro?");
                if(accpeted){
                    await deleteTask(params.id)
                    navigate('/task')
                }
            }}>delete</button>
        }    
        

        </div>
    );
}

