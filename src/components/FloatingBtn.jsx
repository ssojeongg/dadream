import { FaPhone, FaMapMarkerAlt, FaCommentDots, FaChevronUp } from "react-icons/fa";
import '../assets/css/FloatingBtn.css';
import { useState } from "react";

const FloatingBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 스크롤 맨 위로 이동
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 모달 열기 & 닫기
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="fab_container">
        <div className="fab_buttons">
          {/* 대표번호 버튼 */}
          <button className="fab_item" onClick={openModal}>
            <div className="fab_icon">
              <FaPhone />
              <span className="fab_text">대표번호</span>
            </div>
          </button>
          <button className="fab_item">
            <div className="fab_icon">
              <FaMapMarkerAlt />
              <span className="fab_text">오시는길</span>
            </div>
          </button>
          <button className="fab_item">
            <div className="fab_icon">
              <FaCommentDots />
              <span className="fab_text">상담신청</span>
            </div>
          </button>
        </div>
        <button className="fab_main" onClick={scrollToTop}>
          <FaChevronUp /><span>TOP</span>
        </button>
      </div>

      {/* 모달 창 */}
      {isOpen && (
        <>
          <div className="modal_overlay" onClick={closeModal}></div>
          <div className="modal">
            <div className="modal_area">
              <div className="modal_header">전화번호</div>
              <div className="modal_content">
                <p><strong>" 대전복지용구 다드림 "</strong> 입니다.</p>
                <p className="phone_number">1533-5921</p>
                <p>전화연결은 모바일에서 가능합니다.</p>
              </div>
              <div className="modal_footer">
                <button className="close_btn" onClick={closeModal}>확인</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FloatingBtn;
