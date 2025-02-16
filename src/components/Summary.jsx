import "../assets/css/Summary.css"

const Summary = ({ title, more, hover_img, detail }) => {
  return (
    <div className="Summary">
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