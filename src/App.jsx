import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import './App.css';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import Subpage from "./pages/Subpage";
import Sidebar from "./components/Sidebar";
import FloatingBtn from "./components/FloatingBtn";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        {/* 첫 화면을 Main.jsx로 설정 */}
        <Route path="/" element={<Main />} />

        {/* 주메뉴 및 서브메뉴 이동 */}
        <Route path="/sub/:id/:subIndex?" element={<Subpage />} />

        {/* 존재하지 않는 경로 → 메인으로 리다이렉트 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <FloatingBtn />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
