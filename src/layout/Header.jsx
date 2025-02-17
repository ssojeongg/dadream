import '../assets/css/Header.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false); // ✅ 스크롤 상태 추가

  // ✅ 스크롤 감지하여 색상 변경 상태 저장
  useEffect(() => {
    const updateScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(scrollY);
      setIsScrolled(scrollY > 100); // ✅ 스크롤이 100px 이상이면 색상 유지
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  // ✅ Subpage 이동 시에도 isScrolled 유지
  useEffect(() => {
    if (location.pathname.includes('/sub/')) {
      setIsScrolled(true); // ✅ Subpage로 이동하면 스크롤된 상태 유지
    }
  }, [location]);

  // ✅ 주메뉴 클릭 시 첫 번째 서브페이지로 이동 & 해당 메뉴 활성화
  const handleMenuClick = (menuId) => {
    const selectedMenu = menus.find((m) => m.id === menuId);

    if (selectedMenu) {
      setSelectedMenu(menuId);
      if (selectedMenu.subMenu.length > 0) {
        navigate(`/sub/${menuId}/0`);
      } else {
        navigate(`/sub/${menuId}`);
      }
    }
  };

  // ✅ 서브메뉴 클릭 시 이동
  const handleSubMenuClick = (menuId, subIndex) => {
    setSelectedMenu(menuId);
    navigate(`/sub/${menuId}/${subIndex}`);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts[1] === "sub" && pathParts[2]) {
      setSelectedMenu(parseInt(pathParts[2], 10));
    }
  }, [location]);

  const menus = [
    { id: 1, title: "홈", subMenu: [] },
    { id: 2, title: "대여품목", subMenu: [] },
    { id: 3, title: "판매품목", subMenu: ["판매) 이동변기", "판매) 목욕의자"] },
    { id: 4, title: "복지용구 안내", subMenu: ["복지용구란?", "복지용구 구분"] },
    { id: 5, title: "노인장기요양보험", subMenu: ["노인장기요양보험이란?", "장기요양등급의 구분"] },
    { id: 6, title: "장기요양등급 신청 절차", subMenu: [] },
    { id: 7, title: "오시는길", subMenu: [] },
    { id: 8, title: "sns", subMenu: [] },
    { id: 9, title: "다드림복지용구 안내", subMenu: [] },
  ];

  return (
    <>
      <div className={`Header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header_bg_area">
          <div className="header_bg"></div> 
        </div>
        <div className="header_dark"></div>
        <div className={isScrolled ? "change_header" : "original_header"}>
          <div className="inner">
            <div className="Nav">
              <div className="nav_wrap">
                <ul>
                  {menus.map((menu) => (
                    <li key={menu.id} className="navbar" onClick={() => handleMenuClick(menu.id)}>
                      {menu.title}
                      {(selectedMenu === menu.id && menu.subMenu.length > 0) && (
                        <ul className="sub visible">
                          <div className="inner">
                            {menu.subMenu.map((subItem, index) => (
                              <li key={index} className="subbar" onClick={(e) => {
                                e.stopPropagation();
                                handleSubMenuClick(menu.id, index);
                              }}>
                                {subItem}
                              </li>
                            ))}
                          </div>
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="SideMenu">
                <div 
                  className={isScrolled ? "change_all" : "all"} 
                  onClick={openSidebar}
                >
                  ☰전체보기
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
