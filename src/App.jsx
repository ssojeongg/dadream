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
import Submap from "./pages/Submap";   
import Subsns from "./pages/Subsns";  

// ✅ 슬라이드 애니메이션 설정
const slideVariants = {
  hiddenLeft: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  hiddenRight: { x: "100vw", opacity: 0 }
};

// ✅ 모든 경로 추가
const menuList = [
  "/", "/sub/2", 
  "/sub/3/0", "/sub/3/1", "/sub/3/2", "/sub/3/3", "/sub/3/4", "/sub/3/5", "/sub/3/6", "/sub/3/7", "/sub/3/8", "/sub/3/9", 
  "/sub/4/0", "/sub/4/1", "/sub/4/2", 
  "/sub/5/0", "/sub/5/1",  
  "/sub/6", "/sub/7", "/sub/8", "/sub/9"
];

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
  const [isSwipe, setIsSwipe] = useState(false); 

  useEffect(() => {
    if (!isSwipe) {
      setDirection("left");
    }
    setIsSwipe(false); 
  }, [location.pathname]);

  // ✅ 현재 페이지 기억 (세션 스토리지 저장)
  useEffect(() => {
    sessionStorage.setItem("lastVisitedPage", location.pathname);
  }, [location.pathname]);

  // ✅ 마지막 방문 페이지로 이동
  useEffect(() => {
    const lastPage = sessionStorage.getItem("lastVisitedPage");
    if (lastPage && lastPage !== location.pathname) {
      navigate(lastPage, { replace: true });
    }
  }, []);

  // ✅ 현재 페이지의 index 찾기
  const getCurrentIndex = () => {
    return menuList.findIndex(path => path === location.pathname);
  };

  const handleSwipeLeft = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex !== -1 && currentIndex < menuList.length - 1) {
      setDirection("left");
      setIsSwipe(true);
      navigate(menuList[currentIndex + 1]);
    }
  };

  const handleSwipeRight = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex > 0) {
      setDirection("right");
      setIsSwipe(true);
      navigate(menuList[currentIndex - 1]);
    }
  };

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

          {/* ✅ 1Depth + 2Depth 메뉴 (스와이프 시 애니메이션 적용) */}
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
