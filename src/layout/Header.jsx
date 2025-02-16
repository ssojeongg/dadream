import '../assets/css/Header.css';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar.jsx'; // Sidebar 컴포넌트 가져오기

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 추가
  const [openMenu, setOpenMenu] = useState(null);

  // 스크롤 감지하여 상태 업데이트
  useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  // 메뉴 클릭 시 상태 변경 (서브메뉴가 있을 경우에만 열림)
  const toggleMenu = (menu) => {
    const selectedMenu = menus.find((m) => m.id === menu);
    if (selectedMenu && selectedMenu.subMenu.length > 0) {
      setOpenMenu(openMenu === menu ? null : menu);
    } else {
      setOpenMenu(null);
    }
  };

  // Sidebar 열기
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Sidebar 닫기
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // 메뉴 데이터
  const menus = [
    { id: 1, title: "홈", subMenu: [] },
    { id: 2, title: "대여품목", subMenu: [] },
    { id: 3, title: "판매품목", subMenu: ["판매) 이동변기", "판매) 목욕의자", "판매) 지팡이", "판매) 성인용보행기(실버카)", "판매) 미끄럼방지용품", "판매) 안전손잡이", "판매) 요실금팬티", "판매) 욕창예방방석", "판매) 경사로", "판매) 자세변환용구"] },
    { id: 4, title: "복지용구 안내", subMenu: ["복지용구란?", "복지용구 구분", "복지용구 이용절차"] },
    { id: 5, title: "노인장기요양보험", subMenu: ["노인장기요양보험이란?", "장기요양등급의 구분"] },
    { id: 6, title: "장기요양등급 신청 절차", subMenu: [] },
    { id: 7, title: "오시는길", subMenu: [] },
    { id: 8, title: "sns", subMenu: [] },
    { id: 9, title: "다드림복지용구 안내", subMenu: [] },
  ];

  return (
    <>
      <div className="Header">
        <div className="header_bg_area">
          <div className="header_bg"></div> 
        </div>
        <div className="header_dark"></div>
        <div className={scrollPosition < 100 ? "original_header" : "change_header"}>
          <div className="inner">
            <div className="Nav">
              <div className="nav_wrap">
                <ul>
                  {menus.map((menu) => (
                    <li key={menu.id} className="navbar" onClick={() => toggleMenu(menu.id)}>
                      {menu.title}
                      {openMenu === menu.id && menu.subMenu.length > 0 && (
                        <ul className="sub visible">
                          <div className="inner">
                            {menu.subMenu.map((subItem, index) => (
                              <li key={index} className="subbar">{subItem}</li>
                            ))}
                          </div>
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              {/* ☰전체보기 버튼 */}
              <div className="SideMenu">
                <div 
                  className={scrollPosition < 100 ? "all" : "change_all"} 
                  onClick={openSidebar}
                >
                  ☰전체보기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar 컴포넌트 */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
