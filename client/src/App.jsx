import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { TareasPage } from './Pages/TareasPage'
import { TareaFormPage } from './Pages/TareaFormPage';
import {Navigation} from './components/Navigation'

function App(){
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>        
        <Route path="/" element={<Navigate to="Tareas"/>}/>
        <Route path="/Tareas" element={<TareasPage/>}/>       /**Despliegue de datos */
        <Route path="/TareasF" element={<TareaFormPage/>}/>       /**Formulario Crear */
      </Routes>    
    </BrowserRouter>
  );
} 
export default App