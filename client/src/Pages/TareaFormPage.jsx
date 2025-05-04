import {useForm} from "react-hook-form";


export function TareaFormPage(){

    const {register,handleSubmit,formState:{errors}}=useForm();
    const {onSubmit}=handleSubmit((data)=>{
        console.log(data);
        fetch("https://backend-ny2d.onrender.com/api/v1/tareas/",{

            /* method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error)) */
    })

    return(
        <div>
            <form action="https://backend-ny2d.onrender.com/api/v1/tareas/" method="POST" className="formulario">
                <h1>Formulario de Tarea</h1>
                <input type="text" placeholder="Nombre de la tarea"                
                {...register("titulo",{required:true})}
                />
                
                <textarea rows="3" placeholder="Descripción de la tarea" 
                {...register("descripcion",{required:true})}/>

            </form>
        </div>
    )})
}

