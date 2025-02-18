import "../assets/css/Info.css"
import"../assets/responsive/R_Info.css";

import logo from "../assets/img/mosaJiE9TD.jpeg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faShareAlt, faCommentDots, faPhone } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { icon: faPowerOff, label: "로그인" },
  { icon: faShareAlt, label: "공유하기" },
  { icon: faCommentDots, label: "톡톡하기" },
  { icon: faPhone, label: "전화하기" },
];

const Info = () => {
  return (
    <div className="Info">
      <div className="inner">
        <div className="info_site">
          <div className="info_logo">
            <img src={logo} />
          </div>
          <div className="info_detail">
            <p className="bold">대전복지용구 다드림</p>
            <p className="description">최저가격으로 최고의 제품을 드립니다.</p>
          </div>
        </div>
        <div className="info_intro">
          <p className="info_title">대전 다드림 복지용구</p>
          <p className="info_txt">어르신의 일상생활, 신체활동 지원 및 기능 향상에 필요한 용품을 가장 합리적인 가격으로 준비하였습니다.</p>
        </div>
          <div className="icon_menu">
              {menuItems.map((item, index) => (
                <div key={index} className="menu_item">
                  <FontAwesomeIcon icon={item.icon} className="icon" />
                  <p className="label">{item.label}</p>
                </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default Info