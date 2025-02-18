import '../assets/css/Header.css';
import '../assets/responsive/R_Header.css'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null); // ✅ 현재 선택된 메뉴 상태 추가

  useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  // ✅ 주메뉴 클릭 시 첫 번째 서브페이지로 이동 & 해당 메뉴 활성화
  const handleMenuClick = (menuId) => {
    const selectedMenu = menus.find((m) => m.id === menuId);

    if (selectedMenu) {
      setSelectedMenu(menuId); // 선택된 메뉴 유지
      if (selectedMenu.subMenu.length > 0) {
        navigate(`/sub/${menuId}/0`); // ✅ 문자열 템플릿(`) 사용
      } else {
        navigate(`/sub/${menuId}`); // ✅ 문자열 템플릿(`) 사용
      }
    }
  };

  // ✅ 서브메뉴 클릭 시 해당 페이지로 이동 & 메뉴 유지
  const handleSubMenuClick = (menuId, subIndex) => {
    setSelectedMenu(menuId); // 선택된 메뉴 유지
    navigate(`/sub/${menuId}/${subIndex}`); // ✅ 문자열 템플릿(`) 사용
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // ✅ 현재 경로가 변경될 때 선택된 메뉴 유지
  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts[1] === "sub" && pathParts[2]) {
      setSelectedMenu(parseInt(pathParts[2], 10) || null); // ✅ 안전한 파싱
    }
  }, [location]);

  const menus = [
    { id: 1, title: "홈", subMenu: [] },
    { id: 2, title: "대여품목", subMenu: [] },
    { id: 3, title: "판매품목", subMenu: ["판매) 이동변기", "판매) 목욕의자", "판매) 지팡이", "판매) 성인용보행기(실버카)", "판매) 미끄럼방지용품", "판매) 안전손잡이", "판매) 요실금팬티", "판매) 욕창예방방석", "판매) 경사로", "판매) 자세변환용구"], badge: "10" },
    { id: 4, title: "복지용구 안내", subMenu: ["복지용구란?", "복지용구 구분", "복지용구 이용절차"], badge: "3" },
    { id: 5, title: "노인장기요양보험", subMenu: ["노인장기요양보험이란?", "장기요양등급의 구분"], badge: "2" },
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
                <div className={scrollPosition < 100 ? "all" : "change_all"} 
                  onClick={openSidebar}>
                ☰
                </div>
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
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
