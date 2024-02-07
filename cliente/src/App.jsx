
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import {TaskPages} from './pages/TaskPage'
import {Form} from './pages/Form'
import { Navigation } from './componentes/navigation';
function App() {
  return (
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to="/task"/>}/>
        <Route path='/task' element={<TaskPages/>}/>
        <Route path='/task-create' element={<Form/>} />  
        <Route path='/task/:id' element={<Form/>} />  

      </Routes>
      </BrowserRouter>

  );
}

export default App;