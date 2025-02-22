import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useSwipeable } from "react-swipeable";
import { useState, useEffect } from "react";
import './assets/css/App.css';

import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import Subpage from "./pages/Subpage";
import Sidebar from "./components/Sidebar";
import FloatingBtn from "./components/FloatingBtn";
import Submap from "./pages/Submap";   // 오시는길 페이지
import Subsns from "./pages/Subsns";   // SNS 페이지

// ✅ 슬라이드 애니메이션 설정
const slideVariants = {
  hiddenLeft: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  hiddenRight: { x: "100vw", opacity: 0 }
};

// ✅ 모바일에서 슬라이드 이동이 적용될 페이지 리스트
const menuList = ["/", "/sub/2", "/sub/3/0", "/sub/4/0", "/sub/5/0", "/sub/6", "/sub/7", "/sub/8", "/sub/9"];

function AnimatedPage({ children, direction }) {
  return (
    <motion.div
      variants={slideVariants}
      initial={direction === "left" ? "hiddenRight" : "hiddenLeft"}
      animate="visible"
      exit={direction === "left" ? "hiddenLeft" : "hiddenRight"}
      transition={{ type: "spring", stiffness: 80 }}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [direction, setDirection] = useState("left");
  const [isSwipe, setIsSwipe] = useState(false); // ✅ 스와이프 여부 상태 추가

  useEffect(() => {
    if (!isSwipe) {
      setDirection("left");
    }
    setIsSwipe(false); // ✅ 클릭 이동 시 애니메이션 방지
  }, [location.pathname]);

  // ✅ 스와이프 시 이동할 1Depth 메뉴 찾기
  const handleSwipeLeft = () => {
    const currentIndex = menuList.indexOf(location.pathname);
    if (currentIndex !== -1 && currentIndex < menuList.length - 1) {
      setDirection("left");
      setIsSwipe(true);
      navigate(menuList[currentIndex + 1]);
    }
  };

  const handleSwipeRight = () => {
    const currentIndex = menuList.indexOf(location.pathname);
    if (currentIndex > 0) {
      setDirection("right");
      setIsSwipe(true);
      navigate(menuList[currentIndex - 1]);
    }
  };

  // ✅ 모바일에서만 스와이프 감지
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  return (
    <div {...handlers}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* ✅ 메인 페이지 */}
          <Route path="/" element={<Main />} />

          {/* ✅ 강제 리디렉트 */}
          <Route path="/sub/1" element={<Navigate to="/" replace />} />

          {/* ✅ 1Depth 메뉴 (클릭 시 애니메이션 없이 이동) */}
          <Route path="/sub/7" element={<Submap />} />
          <Route path="/sub/8" element={<Subsns />} />

          {/* ✅ 1Depth 메뉴 (Subpage 처리) */}
          <Route path="/sub/:id/:subIndex?" element={
            isSwipe && isMobile ? (
              <AnimatedPage direction={direction}>
                <Subpage />
              </AnimatedPage>
            ) : (
              <Subpage />
            )
          } />

          {/* 존재하지 않는 경로 → 메인으로 리디렉트 */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <AnimatedRoutes />
      <FloatingBtn />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
