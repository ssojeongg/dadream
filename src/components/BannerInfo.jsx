import "../assets/css/BannerInfo.css"

const BannerInfo = ({ b_title, b_detail }) => {
  return (
    <div className="BannerInfo">
      <div className="banner_area">
        <a href="javascript:void(0)" className="b_title">{b_title}</a>
        <p className="b_detail">{b_detail}</p>
      </div>
    </div>
  )
}

export default BannerInfo