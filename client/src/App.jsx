import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Data } from './components/Data'
import { Auth } from './components/Auth'
import { Home } from './components/Home'
import { Germs } from './components/Germs';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/germs" element={<Germs/>} />
        <Route path="/data" element={<Data/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
