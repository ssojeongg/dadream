import '../assets/css/Submap.css'
import '../assets/responsive/R_Submap.css'
import NaverMap from '../components/NaverMap.jsx'
import '../data/subData.js'

const Submap = () => {
  return (
    <div className="Submap">
      <div className="inner">
        <div className="submap_area">
          <p className="title">오시는길</p>
        </div>
          <NaverMap />
        <div className="map_area">
          <div className="map_address">
            <div className="map_address_area">
            <h2>주소</h2>
            <h2>대전광역시 서구 가수원로 62 (가수원동) 1층</h2>
          </div>            
            <div className="map_btn">
              <button>길찾기</button>
              <button>지도에서보기</button>
            </div>
          </div>
          <div className="map_time">
            <p>이용시간</p>
            <p className='gray'>평일</p>
            <p>09:00~18:00</p>
          </div>
          <div className="map_tel">
            <p>전화번호</p>
            <p>1533-5921</p>
          </div>
          <div className="map_info">
            <p>사업자정보</p>
            <div className="map_info_area">
            <ul className='gray'>
              <li>상호명</li>
              <li>대표자</li>
              <li>사업자번호</li>
              <li>이메일</li>
            </ul>
            <ul>
              <li>대전 다드림 복지용구</li>
              <li>이영미</li>
              <li>439-32-01585</li>
              <li>bc1592@naver.com</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Submap