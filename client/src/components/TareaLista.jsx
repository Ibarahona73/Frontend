import { useEffect, useState } from "react";
import { TareasAll } from "../api/tareas.api";

export function TareaLista(){

    const [tareas,setTasks] = useState();

    useEffect(() => {
        async function cargaTareas(){
            const rest = await TareasAll()
            console.log("Exito..")
        }
        cargaTareas();
    },[]);

    return <div>
        {tareas.map(tarea =>(
            <div key= {tarea.id}>
                <h1>{tarea.titulo}</h1>
                <h3>{tarea.descripcion}</h3>                
            </div>
       ))}       
    </div>
}