import '../assets/css/Sidebar.css';
import '../assets/responsive/R_Sidebar.css';
import logo from "../assets/img/mosaJiE9TD.jpeg";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import menus from '../data/subData';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faShareAlt, faCommentDots, faPhone } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { icon: faPowerOff, label: "로그인" },
    { icon: faShareAlt, label: "공유하기" },
    { icon: faCommentDots, label: "톡톡하기" },
    { icon: faPhone, label: "전화하기" },
  ];

  const toggleMenu = (menu) => {
    if (menu.subMenu.length === 0) {
      // ✅ 오시는길(7)과 SNS(8) 페이지는 별도 파일이므로 예외 처리
      if (menu.id === 7 || menu.id === 8) {
        navigate(`/sub/${menu.id}`);
      } else {
        navigate(`/sub/${menu.id}`);
      }

      console.log(`Navigating to /sub/${menu.id}`); // ✅ 디버깅 로그 추가

      if (window.innerWidth <= 767) {
        onClose(); // ✅ 모바일에서 클릭하면 모달 닫힘
      }
    } else {
      setOpenMenu(openMenu === menu.id ? null : menu.id);
    }
  };

  const handleSubMenuClick = (menuId, subIndex) => {
    navigate(`/sub/${menuId}/${subIndex}`);
    console.log(`Navigating to /sub/${menuId}/${subIndex}`); // ✅ 디버깅 로그 추가

    if (window.innerWidth <= 767) {
      onClose(); // ✅ 모바일에서 클릭하면 모달 닫힘
    }
  };

  return (
    <div className={`Sidebar ${isOpen ? 'show' : ''}`}>
      <div className="inner">
        <div className="sidebar_area">
          <div className="sidebar_area_left">
            <img src={logo} alt="로고" />
            <div className="logo">대전복지용구 다드림</div>
          </div>
          <button className="sidebar_close" onClick={onClose}>✕</button>
        </div>
        <div className="icon_menu">
          {menuItems.map((item, index) => (
            <div key={index} className="menu_item">
              <FontAwesomeIcon icon={item.icon} className="icon" />
              <span className="label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <ul>
        {menus.map((menu) => (
          <li key={menu.id} className="sidebar" onClick={() => toggleMenu(menu)}>
            {menu.title}
            {menu.subMenu.length > 0 && (
              <ul className={`side_sub ${openMenu === menu.id ? "active" : ""}`}>
                {menu.subMenu.map((subItem, index) => (
                  <li
                    key={index}
                    className="side_subbar"
                    onClick={(e) => {
                      e.stopPropagation(); // ✅ 부모 메뉴 클릭 방지
                      handleSubMenuClick(menu.id, index);
                    }}
                  >
                    {subItem.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
