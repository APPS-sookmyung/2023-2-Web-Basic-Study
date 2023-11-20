import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length} 개의 일기가 있습니다</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} /> // 이게 문제다
          // <DiaryItem
          //   key={it.id}
          //   author={it.author}
          //   content={it.content}
          //   created_date={it.created_date}
          //   emotion={it.emotion}
          //   id={it.id}
          // />
          // <div key={it.id}>
          //   <div>작성자 : {it.author} </div>
          //   <div>일기 : {it.content} </div>
          //   <div>감정 : {it.emotion} </div>
          //   <div>작성 시간(ms) : {it.content} </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
