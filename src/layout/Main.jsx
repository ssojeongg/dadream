import '../assets/css/Main.css'
import '../assets/responsive/R_Main.css'

import Info from '../components/Info'
import Summary from '../components/Summary'

/* Summary - img */
import goyk30 from '../assets/img/mosa8wJjRV.jpeg'
import wjjrv from '../assets/img/mosayk30.jpeg'
import Banner from '../components/Banner'

const Main = () => {
  return (
    <div className="Main">
      <div className="inner">
        <Info />
        <div className="info_intro_mobile">
          <p className="info_title">대전 다드림 복지용구</p>
          <p className="info_txt">어르신의 일상생활, 신체활동 지원 및 기능 향상에 필요한 용품을 가장 합리적인 가격으로 준비하였습니다.</p>
        </div>
        <Summary title={"대여품목"} more={"더보기"} hover_img={goyk30} detail={"전동침대 / 수동휠체어 / 욕창예방매트리스"}/>
        <Summary title={"다드림복지용구 안내"} more={"더보기"} hover_img={wjjrv} />
        <Banner />
      </div>
    </div>
  )
}

export default Main