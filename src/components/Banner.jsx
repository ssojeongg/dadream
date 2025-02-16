import "../assets/css/Banner.css"
import BannerInfo from "./BannerInfo"

const Banner = () => {
  return (
    <div className="Banner">
      <div className="inner">
        <div className="banner_top_area">
          <BannerInfo b_title={"판매품목"} />
          <BannerInfo b_title={"복지용구 안내"} b_detail={"복지용구 안내"} />
          <BannerInfo b_title={"노인장기요양보험"} b_detail={"노인장기요양보험"} />
        </div>
        <div className="banner_bottom_area">
          <BannerInfo b_title={"장기요양등급 신청 절차"} b_detail={"장기요양등급 신청 절차"} />
          <BannerInfo b_title={"오시는길"} b_detail={"오시는길"} />
        </div>
      </div>
    </div>
  )
}

export default Banner