import Info from '../components/Info'
import Summary from '../components/Summary'

/* Summary - img */
import goyk30 from '../assets/img/mosa8wJjRV.jpeg'
import wjjrv from '../assets/img/mosayk30.jpeg'
import Banner from '../components/Banner'

const Main = () => {
  return (
    <div className="Main">
      <Info />
      <Summary title={"대여품목"} more={"더보기"} hover_img={goyk30} detail={"전동침대 / 수동휠체어 / 욕창예방매트리스"}/>
      <Summary title={"다드림복지용구 안내"} more={"더보기"} hover_img={wjjrv} />
      <Banner />
    </div>
  )
}

export default Main