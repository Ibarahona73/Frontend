import { useEffect, useState } from "react";
import { getTareas } from "../api/tareas.api";
import { data } from "react-router-dom";

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
            <div key={tarea.id}>
              <h1>{tarea.titulo}</h1>
              <p>{tarea.descripcion}</p>
            </div>
          ))}
        </div>
      );
    }
    
