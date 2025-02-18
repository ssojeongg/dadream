import '../assets/css/Sidebar.css';
import '../assets/responsive/R_Sidebar.css'
import logo from "../assets/img/mosaJiE9TD.jpeg"
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faShareAlt, faCommentDots, faPhone } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState(null);

  // 메뉴 클릭 시 상태 변경
  const toggleMenu = (menu) => {
    if (menu.subMenu.length === 0) {
      setOpenMenu(null);
    } else {
      setOpenMenu(openMenu === menu.id ? null : menu.id);
    }
  };

  // 메뉴 데이터
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
  const menuItems = [
    { icon: faPowerOff, label: "로그인" },
    { icon: faShareAlt, label: "공유하기" },
    { icon: faCommentDots, label: "톡톡하기" },
    { icon: faPhone, label: "전화하기" },
  ];

  return (
    <div className={`Sidebar ${isOpen ? 'show' : ''}`}>
      <div className="inner">
        <div className="sidebar_area">
          <div className="sidebar_area_left">
            <img src={logo} />
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
              <ul className={`side_sub ${openMenu === menu.id ? 'active' : ''}`}>
                {menu.subMenu.map((subItem, index) => (
                  <li key={index} className="side_subbar">{subItem}</li>
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
