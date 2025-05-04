import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function TareaFormPage() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await fetch("https://backend-ny2d.onrender.com/api/v1/tareas/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });        
        navigate("/Tareas");
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="formulario">
            <h1>Formulario de Tarea</h1>
                <input type="text" placeholder="Nombre de la tarea"                
                {...register("titulo",{required:true})}
                />
                {errors.titulo && <span className="error">Este campo es requerido</span>}

                <textarea rows="3" placeholder="Descripción de la tarea" 
                {...register("descripcion",{required:true})}/>
                {errors.descripcion && <span className="error">Este campo es requerido</span>}

                <button type="submit" className="btn btn-primary">Crear Tarea</button>
                <button type="edit" className="btn btn-secondary">Actualizar</button>
            </form>    
    );
}


