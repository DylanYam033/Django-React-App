import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { TaskList } from './pages/TaskList'
import { TaskForm } from './pages/TaskForm'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigate to="/tasks"/>}/>
        <Route path='/tasks' element={<TaskList/>}/>
        <Route path='/tasks/create' element={<TaskForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}
 
export {App}
