import React from 'react';
import { useNavigate } from 'react-router-dom';

export function TareaCard({tarea}){

    const navigate = useNavigate();
    return(
                          
        <div style={{color:"#202020",backgroundColor:"#f0f0f0",border:"1px solid #ccc",borderRadius:"5px",padding:"10px",margin:"10px"}}
        
        onClick={() =>{
        
            navigate(`/Tareas/${tarea.id}/`); // Navega a la página de detalles de la tarea
        
        
        }}>
            
           <h3>{tarea.titulo}</h3>
           <p>{tarea.descripcion}</p>
        </div>
    );
}

