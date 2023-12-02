import logo from './logo.svg';
import './App.css';
import DiaryEditor from "./DiaryEditor";
import Diarylist from "./Diarylist.js";

const dummylist=[
  {
    id:1,
    author:"김혜림",
    content:"하이 1",
    emotion:5,
    created_date:new Date().getTime()
  },
  {
    id:2,
    author:"김혜림",
    content:"하이 1",
    emotion:4,
    created_date:new Date().getTime()
  },
  {
    id:3,
    author:"김혜림",
    content:"하이 1",
    emotion:3,
    created_date:new Date().getTime()
  },
]
function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <Diarylist diarylist={dummtlist}/>
    </div>
  );
}

export default App;
