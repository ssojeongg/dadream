import '../assets/css/Subsns.css'
import '../assets/responsive/R_Subsns.css'
import blog_logo from '../assets/img/blog_logo.png'

const posts = [
  {
    title: "대전복지용구 다드림복지용구",
    content: "1. 최고의 서비스를 제공하겠습니다. 2. 전국 최저가를 추구하겠습니다. 3. 요양보호사님들을 특별우대합니다. 상담전화 : 1533-5921 요양보호사 특별 우대 진행 중입니다. 많은 문의 바랍니다. -대전복지용구, 다드림입니다.-",
    author: "네이버 블로그",
    date: "2023-01-01 15:24",
    id: "bc1592"
  },
  {
    title: "법인도 인격이다. 개인사업체도 인격일 수 있다.",
    content: "괴팍한 사람. 거지 같은 사람은 주변에 사람이 없어지고 스스로는 인정하기 싫겠지만 결국엔 끼리끼리 남아 그들만의 생태계 속에서 살아가게 된다. 고이고 고여 더 이상의 변화가 의미가 없는 상태, 또는 고립되어 더 이상의 변화를 받아들일 수 없는 상태 고인 물의 문제점은 아무짝에도 쓸모가 없다는 점. 어쩌다 보니 수많은 법인들을 만나게 되고 깨닫게 되는 것들이 많다.",
    author: "네이버 블로그",
    date: "2023-01-01 15:02",
    id: "bc1592"
  },
  {
    title: "수동휠체어(MIKI-JTN)",
    content: "어르신들은 몸이 불편해셔도 그 성향에 따라 외출을 좋아하시는 분들이 많이 계십니다. 그 때 꼭 있어야 하는 복지용구가 휠체어 인데요. 미키코리아에서 나온 수동휠체어(MIKI-JTN) 제품을 소개합니다. o 수동휠체어(MIKI-JTN)의 장점 - 하중 100KG까지 버티는 견고함 - 트렁크에 적재가 가능하도록 접는 기능 있음 - 다리에 힘이 없으신 어르신을 배려한 다리받침 - 노펑크타이어 채택으로 내구성 향상 o 수동휠체어(MIKI-JTN)의 단점 - 15.8Kg의 중량은 여성분",
    author: "네이버 블로그",
    date: "2023-01-01 14:44",
    id: "bc1592"
  },
  {
    title: "미끄럼방지용품(미끄럼방지매트 DA-006)",
    content: "거동이 불편한 어르신들에게 가장 위험한 것은 낙상사고입니다. 그러한 낙상사고가 가정에서 제일 많이 일어나는 곳은 바로 욕실이겠죠? 이 제품은 욕실에 깔아 미끄러짐을 방지하기 위한 제품입니다. o DA-006 미끄럼 방지매트의 장점 - 바닥에 설치한 상태에서 샤워를 하셔도 될 정도로 물의 간섭에서 자유로움 - 욕실에서 슬피퍼가 별도로 필요없을 정도로 바닥물기에서 자유로움 - 한번 자리잡아 설치하면 비교적 장기",
    author: "네이버 블로그",
    date: "2023-01-01 15:58",
    id: "bc1592"
  },
  {
    title: "블로그에 대해 알아야 할 디테일",
    content: "- 사용자경험 에 의한 블로그가 힘이 있다. - 전문가적인 견해와 시각 필요 - 정부나 지자체 정보를 가미해야함 - 유익해야함 - 짧고 시선을 끄는 문장 - 지역+키워드+후킹(ex : 신한은행, '정말 안 받으실거에요?') - 제목에 키워드 삽입 - 이미지 10장 글자수 1000자 이상 - 동영상, 표, 링크, 사진, 이모티콘 사용 - 네이버 연관검색어나 자동완성 단어들 유심히 보기, 또한 태그 활",
    author: "네이버 블로그",
    date: "2023-01-01 13:33",
    id: "bc1592"
  },
  {
    title: "블로그를 잘 하려면",
    content: "어뷰징=오용 ---> 클릭수 늘리기 o 이렇게 하면 안됩니다. - 기계적인 대량생산 의심 문서 - 숨김 키워드 - 비정상적인 반복요소 - 직접 체험한, 원고를 전달받아 작성한 글 - 매체 등 비정상적인 출처 o 부정적인 영향들 - 타인의 상품 단순홍보 - 비체험 후기 -> 본인 비체험 후기 - 불법을 조장하는 글 o 긍정적인 영향들 - 나만의 분석이 들어간 진짜 정보 - 누가봐도 전문성이 있는 글-",
    author: "네이버 블로그",
    date: "2023-01-01 13:30",
    id: "bc1592"
  },
  {
    title: "내려가지 않게 해주는 인간관계 룰",
    content: "주변에 이런사람이 있다면 꿈을 펼칠 너의 날개를 무겁게 하거나 접히게 만드는 사람이야. 살면서 이런사람은 아닌지 체크해 봐야함은 물론 항상 경계해야 한다. 부지불식 이런사람과 미래를 도모하거나 단편적인 이유로 가까워져 있다면 '손절'의 결단을 내려야 한다. 최소한의 '정' 때문이라고 한다면 방법이 없는 것도 아니다. 거리를 두면 될 일이니까. 유형 1. 최소한의 사",
    author: "네이버 블로그",
    date: "2023-01-01 17:52",
    id: "bc1592"
  },
  {
    title: "기술사 채점에 관한 생각",
    content: "기술사 시험에 도전하고 하루도 빠짐없이 스스로에게 유의미한 스트레스를 준지 벌써 5년이 되어간다. 언젠가 득점이나 채점에 관한 생각을 이어가다 너무나 당연한 결론이지만 균형이 중요하다는 생각을 하게 되었다. 이미 시중에 널려진 채점기준이나 채점관들의 입장 등등과는 다른 생각이지만 그것을 시각적으로 표현하면 어떨까하는 마음에 찾아낸 것이 마법진 문향이",
    author: "네이버 블로그",
    date: "2023-01-01 19:05",
    id: "bc1592"
  },
];

const Subsns = () => {
  return (
    <div className="Subsns">
      <div className="inner">
      <div className="subsns_area">
          <p className="title">sns</p>
      </div>
      {posts.map((post, index) => (
        <div key={index} className="post_wrapper">
          <div className="card">
            <h3 className="title">{post.title}</h3>
            <p className="content">{post.content}</p>
          </div>
          <div className="meta_info">
            <span className="author">{post.author}</span>
            <span className="id"><img className="logo"src={blog_logo} />{post.id}</span>
            <span className="date">{post.date}</span>
          </div>
        </div>
      ))}
        <div className="more">
          <p><span>블로그</span>에서 더 보기</p>
        </div>
      </div>
    </div>
  );
};


export default Subsns