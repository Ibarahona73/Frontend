import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { TareasPage } from './Pages/TareasPage'
import { TareaFormPage } from './Pages/TareaFormPage';

function App(){
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/Tareas" element={<TareasPage/>}/>
        <Route path="/TareasF" element={<TareaFormPage/>}/>        
      </Routes>    
    </BrowserRouter>
  );
} 
export default App