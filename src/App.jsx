import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './assets/css/App.css';

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
        {/* ✅ `/` 또는 `/sub/1`이면 Main.jsx를 렌더링 */}
        <Route path="/" element={<Main />} />
        <Route path="/sub/1" element={<Navigate to="/" replace />} />  {/* ✅ 강제 리디렉트 */}

        {/* 주메뉴 및 서브메뉴 이동 */}
        <Route path="/sub/:id/:subIndex?" element={<Subpage />} />

        {/* 존재하지 않는 경로 → 메인으로 리디렉트 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <FloatingBtn />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
