import "../assets/css/Footer.css"

import { FaFacebookF } from "react-icons/fa";
import { BiCoffee } from "react-icons/bi";
import { SiNaver, SiBlogger } from "react-icons/si";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="inner">
        <div className="ft_top">
          <div className="search_area">
            <p className="keyword">
              대전복지용구 다드림@
            </p>
          </div>
          <div className="search_info">
            <div className="sns">
              <SiBlogger className="icon" />
              <span className="divider"></span>
              <BiCoffee className="icon" />
              <span className="divider"></span>
              <FaFacebookF className="icon" />
              <span className="divider"></span>
              <SiNaver className="icon" />
            </div>
          </div>
        </div>
        <div className="ft_bottom">
          <ul className="list_info">
            <li>다드림 복지용구</li>
            <li>이영미</li>
            <li>사업자등록번호:439-32-01585</li>
            <li>전화번호:1533-5921</li>
            <li>이메일:bc1592@naver.com</li>
            <li><a href="javascript:void(0)">신고하기</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer