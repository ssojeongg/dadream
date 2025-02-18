import "../assets/css/Summary.css"
import "../assets/responsive/R_Summary.css"

const Summary = ({ className="", title, more, hover_img, detail }) => {
  return (
    <div className={`Summary ${className}`}>
      <div className="inner">
        <div className="summary_area">
          <p className="title">{title}</p>
          <p className="more_btn">{more}</p>
        </div>
        <div className="img_area">
          <img className="hover_img" src={hover_img} />
          <p className="detail">{detail}</p>
        </div>
      </div>
    </div>
  )
}

export default Summary