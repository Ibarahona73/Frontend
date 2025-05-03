import { Link } from "react-router-dom";

export function Navigation(){
    return(

        <div>
        <Link to={"/Tareas"}>
        <h1>App Tareas</h1>
        </Link>

        
        <Link to={"/TareasF"}>Crear Tarea</Link>

        {/*
          TareasF es como decir Tarea-Create, el formulario 
      */}
         

        </div>
    )
}

