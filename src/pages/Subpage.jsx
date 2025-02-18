import "../assets/css/Subpage.css";
import { useParams } from "react-router-dom";
import subData from "../data/subData";

const Subpage = () => {
  const { id, subIndex } = useParams();
  const page = subData.find((item) => item.id === parseInt(id, 10));

  if (!page) {
    return <h1>페이지를 찾을 수 없습니다.</h1>;
  }

  // subIndex 파싱 및 유효성 검사
  const parsedSubIndex = subIndex ? parseInt(subIndex, 10) : null;
  const isSubPage = parsedSubIndex !== null && 
                    page.subMenu && 
                    Array.isArray(page.subMenu) && 
                    page.subMenu.length > parsedSubIndex;

  // 이미지 리스트 처리
  const images = isSubPage 
    ? (page.subMenu[parsedSubIndex]?.img || []) 
    : (page.img || []);

  return (
    <div className="Subpage">
      <div className="inner">
        <div className="subpage_area">
          <p className="title">{isSubPage ? page.subMenu[parsedSubIndex]?.title : page.title}</p>
        </div>
        <div className="img_area">
          {images.length > 0 ? (
            images.map((img, index) => (
              <img key={index} src={img} alt={isSubPage ? page.subMenu[parsedSubIndex]?.title : page.title} />
            ))
          ) : (
            <p>이미지가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subpage;
