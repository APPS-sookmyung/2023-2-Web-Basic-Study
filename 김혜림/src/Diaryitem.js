const Diaryitem=({author,content,creaed_date,emotion,id})=>{
    return (
    <div className="Diaryitem">
        <div className="Diaryitm">
            <span>
                작성자:{author}|감정 점수:{emotion}
            </span>
            <br />
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">{content}</div>
    </div>
    ); 
};

export default Diaryitem;