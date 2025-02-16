import { FaPhone, FaMapMarkerAlt, FaCommentDots, FaChevronUp } from "react-icons/fa";
import '../assets/css/FloatingBtn.css';
import { useState } from "react";

const FloatingBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fab-container">
      {isOpen && (
        <div className="fab-buttons">
          <button className="fab-item">
            <div className="fab-icon">
              <FaPhone />
              <span className="fab-text">대표번호</span>
            </div>
          </button>
          <button className="fab-item">
            <div className="fab-icon">
              <FaMapMarkerAlt />
              <span className="fab-text">오시는길</span>
            </div>
          </button>
          <button className="fab-item">
            <div className="fab-icon">
              <FaCommentDots />
              <span className="fab-text">상담신청</span>
            </div>
          </button>
        </div>
      )}
      <button className="fab-main" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaChevronUp /> : "TOP"}
      </button>
    </div>
  );
};

export default FloatingBtn;
