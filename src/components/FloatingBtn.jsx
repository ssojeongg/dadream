import { FaPhone, FaMapMarkerAlt, FaCommentDots, FaShareAlt, FaChevronUp, FaEllipsisV, FaTimes } from "react-icons/fa";
import '../assets/css/FloatingBtn.css';
import '../assets/responsive/R_FloatingBtn.css';
import { useState, useEffect } from "react";

const FloatingBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 // 스크롤 맨 위로 이동
 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  // 모달 열기 & 닫기
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* 화면 전체 오버레이 (더보기 버튼 클릭 시 활성화) */}
      {isOpen && isMobile && <div className="fab_overlay" onClick={() => setIsOpen(false)}></div>}

      <div className="fab_container">
        {/* 더보기 버튼 */}
        {isMobile && (
          <button className="fab_main" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaEllipsisV />}
          </button>
        )}

        {/* 더보기 버튼 클릭 시 추가 버튼 표시 */}
        {isOpen && isMobile && (
          <div className="fab_buttons">
            <button className="fab_item">
              <FaPhone />
              <span className="fab_text">대표번호</span>
            </button>
            <button className="fab_item">
              <FaMapMarkerAlt />
              <span className="fab_text">오시는길</span>
            </button>
            <button className="fab_item">
              <FaCommentDots />
              <span className="fab_text">상담신청</span>
            </button>
            <button className="fab_item">
              <FaShareAlt />
              <span className="fab_text">공유</span>
            </button>
          </div>
        )}
      </div>
        {/* pc 버전 */}
        <div className="fab_pc_container">
        <div className="fab_pc_buttons">
          {/* 대표번호 버튼 */}
          <button className="fab_pc_item" onClick={openModal}>
            <div className="fab_pc_icon">
              <FaPhone />
              <span className="fab_pc_text">대표번호</span>
            </div>
          </button>
          <button className="fab_pc_item">
            <div className="fab_pc_icon">
              <FaMapMarkerAlt />
              <span className="fab_pc_text">오시는길</span>
            </div>
          </button>
          <button className="fab_pc_item">
            <div className="fab_pc_icon">
              <FaCommentDots />
              <span className="fab_pc_text">상담신청</span>
            </div>
          </button>
        </div>
        <button className="fab_pc_main" onClick={scrollToTop}>
          <FaChevronUp /><span>TOP</span>
        </button>
      

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
      </div>
    </>
  );
};

export default FloatingBtn;
