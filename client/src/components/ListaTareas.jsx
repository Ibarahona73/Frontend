import { useEffect, useState } from "react";
import { getTareas } from "../api/tareas.api";
import { TareaCard } from "./TareaCard";


export function ListaTareas(){

    const [tareas, setTareas] = useState([]); {/* sTareas settasks*/}
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        async function cargaTareas() {
          const res = await getTareas(); 
          setTareas(res || []);
          setLoading(false);
        }
        cargaTareas();
      }, []);    
      if (loading) return <div>Cargando...</div>;
    
      return (
        <div>
          {tareas.map(tarea => (
            <TareaCard key={tarea.id} tarea={tarea}/>
          ))}
        </div>
      );
    }
    
