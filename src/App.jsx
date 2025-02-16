import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'

import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
import Sidebar from "./components/Sidebar";
import FloatingBtn from "./components/FloatingBtn";

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Sidebar />
      <Routes>
      <Route path="/" exact element={<Main />} />
      </Routes>
      <FloatingBtn />
      <Footer />
    </BrowserRouter>
  )
}

export default App
