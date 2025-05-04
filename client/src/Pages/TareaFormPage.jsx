import {useForm} from "react-hook-form";


export function TareaFormPage(){

    const {register,handleSubmit}=useForm();
    const {onSubmit}=handleSubmit(data=>{
        console.log(data);
    });


    return(
        <div>
            <form action="https://backend-ny2d.onrender.com/api/v1/tareas/" method="POST" className="formulario">
                <h1>Formulario de Tarea</h1>
                <input type="text" placeholder="Nombre de la tarea"                
                {...register("titulo",{required:true})}
                />
                
                <textarea rows="3" placeholder="Descripción de la tarea" 
                {...register("descripcion",{required:true})}/>

                <button type="submit" className="btn btn-primary">Crear Tarea</button>
                <button type="edit" className="btn btn-secondary">Actualizar</button>
            </form>
        </div>
    )
}


