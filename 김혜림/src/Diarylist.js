import Diaryitem from './Diaryitem.js'
const Diarylist=({diarylist})=>{
    return (
    <div className="DuaryList">
        <h2>일기 리스트</h2>
        <h4>{diarylist.length}개의 일기가 있습니다</h4>
        <div>
            {diarylist.map((it)=>(
                <Diaryitem key={it.id} {...it} />
            ))}
        </div>
    </div>
    );
};
Diarylist.defaultProps={
    diarylist:[],
};

export default Diarylist;