import { Link } from "react-router-dom";

export function Navigation(){
    return(

        <div>
        <h2>TareasPage</h2>
        <Link to={"/TareasF"}>Crear Tarea</Link>
        </div>
    )
}

