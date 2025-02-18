import '../assets/css/Main.css';
import '../assets/responsive/R_Main.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Info from '../components/Info';
import Summary from '../components/Summary';
import Banner from '../components/Banner';

/* Summary - img */
import goyk30 from '../assets/img/mosa8wJjRV.jpeg';
import wjjrv from '../assets/img/mosayk30.jpeg';

const Main = () => {
  const [selectedMenu, setSelectedMenu] = useState(null); // ✅ 컴포넌트 내부로 이동
  const navigate = useNavigate(); // ✅ useNavigate 추가

  const menus = [
    { id: 1, title: "홈"},
    { id: 2, title: "대여품목"},
    { id: 3, title: "판매품목" },
    { id: 4, title: "복지용구 안내"},
    { id: 5, title: "노인장기요양보험"},
    { id: 6, title: "장기요양등급 신청 절차"},
    { id: 7, title: "오시는길"}
  ];

  // ✅ 주메뉴 클릭 시 첫 번째 서브페이지로 이동 & 해당 메뉴 활성화
  const handleMenuClick = (menuId) => {
    const selectedMenu = menus.find((m) => m.id === menuId);

    if (selectedMenu) {
      setSelectedMenu(menuId); // 선택된 메뉴 유지
      navigate(`/sub/${menuId}`);
    }
  };

  return (
    <div className="Main">
      <div className="inner">
        <Info />
        <div className="info_intro_mobile">
          <p className="info_title">대전 다드림 복지용구</p>
          <p className="info_txt">
            어르신의 일상생활, 신체활동 지원 및 기능 향상에 필요한 용품을 가장 합리적인 가격으로 준비하였습니다.
          </p>
        </div>
        </div>
        <div className="nav_main_wrap">
          <ul>
            {menus.map((menu) => (
              <li key={menu.id} className="navbar" onClick={() => handleMenuClick(menu.id)}>
                {menu.title}
              </li>
            ))}
          </ul>
        </div>
        <Summary className="hide_on_mobile" title={"대여품목"} more={"더보기"} hover_img={goyk30} detail={"전동침대 / 수동휠체어 / 욕창예방매트리스"}/>
        <Summary title={"다드림복지용구 안내"} more={"더보기"} hover_img={wjjrv} />
        <Banner className="hide_on_mobile"/>
      
    </div>
  );
};

export default Main;
