import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { Data } from './components/Data'
import { Auth } from './components/Auth'
import { Home } from './components/Home'
import { Germs } from './components/Germs';
import { Setting } from './components/Setting';

function App() {
  useEffect(() => {
    axios.defaults.withCredentials = true
    const getCsrfToken = async () => {
      const { data } = await axios.get(
        `/api/csrf`
      )
      axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
    }
    getCsrfToken()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/germs" element={<Germs/>} />
        <Route path="/data" element={<Data/>} />
        <Route path="/Setting" element={<Setting/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
