import { useEffect, useState } from "react";
import { TareasAll } from "../api/tareas.api";

export function TareaLista(){

    const [tareas,sTareas] = useState(); {/* sTareas settasks*/}

    useEffect(() => {
        async function cargaTareas(){
            const res = await TareasAll()
            sTareas(res.data)
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