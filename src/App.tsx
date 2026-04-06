import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>  
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
