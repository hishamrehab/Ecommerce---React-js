import SignUp from './SignUp'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>


    </>
  )
}

export default App
