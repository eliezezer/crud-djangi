
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import {TaskPages} from './pages/TaskPage'
import {Form} from './pages/Form'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/task"/>}/>
        <Route path='/task' element={<TaskPages/>}/>
        <Route path='/task-create' element={<Form/>} />  
      </Routes>
      </BrowserRouter>

  );
}

export default App;