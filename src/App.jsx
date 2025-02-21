import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './assets/css/App.css';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import Subpage from "./pages/Subpage";
import Sidebar from "./components/Sidebar";
import FloatingBtn from "./components/FloatingBtn";
import Submap from "./pages/Submap";   // 오시는길 페이지
import Subsns from "./pages/Subsns";   // SNS 페이지

function App() {
  return (
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <Header />
      <Sidebar />
      <Routes>
        {/* ✅ `/` 또는 `/sub/1`이면 Main.jsx를 렌더링 */}
        <Route path="/" element={<Main />} />
        <Route path="/sub/1" element={<Navigate to="/" replace />} />  {/* ✅ 강제 리디렉트 */}

        {/* ✅ 오시는길과 SNS 페이지를 최상위에서 먼저 처리 */}
        <Route path="/sub/7" element={<Submap />} />  {/* 오시는길 */}
        <Route path="/sub/8" element={<Subsns />} />  {/* SNS */}

        {/* ✅ 주메뉴 및 서브메뉴 이동 */}
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
