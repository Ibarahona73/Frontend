import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { TareasPage } from './Pages/TareasPage'
import { TareaFormPage } from './Pages/TareaFormPage';
import {Navigation} from './components/Navigation'
import {Toaster} from 'react-hot-toast'

function App(){
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>        
        <Route path="/" element={<Navigate to="Tareas"/>}/>
        <Route path="/Tareas" element={<TareasPage/>}/>       /**Despliegue de datos Formulario Crear */
        <Route path="/TareasF" element={<TareaFormPage/>}/>
        <Route path="/Tareas/:id/" element={<TareaFormPage/>}/>       
      </Routes> 
     <Toaster/>   
    </BrowserRouter>
  );
} 
export default App