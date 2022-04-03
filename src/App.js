/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '가나초콜렛', '나의소개']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, modal변경] = useState(false);
  let [모달제목, 모달제목변경] = useState('');
  let [입력값, 입력값변경] = useState('');

  let 제목바꾸기 = () => {
    let newTitle = [...글제목];
    newTitle[0] = '여자코트 추천';
    글제목변경( newTitle );  
  }
  let 정렬함수 = () => {
    let sortArr = [...글제목].sort();
    글제목변경( sortArr );
  }
  let changeThumb = (idx) => {
    let newThumb = [...따봉];
    newThumb[idx] = (newThumb[idx] == undefined) ? 1 : newThumb[idx]+1;
    따봉변경( newThumb ); 
  }
  let publish = (item) => {
    let newTitle = [...글제목];
    newTitle.unshift(item);
    글제목변경( newTitle );
  }
  let addThumb = () => {
    let newThumb = [...따봉];
    newThumb.unshift(0);
    따봉변경( newThumb ); 
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <button onClick={정렬함수}>정렬</button>
      {
        글제목.map((글,idx)=>{
          return(
            <div className='list' key={idx}>
              <h3 onClick={()=>{ 모달제목변경(글); }}>{ 글 } 
                <span onClick={()=>{ changeThumb(idx) }}>👍</span> { 따봉[idx] } 
              </h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })  
      }
      {/* { 입력값 } */}
      <Profile />
      <div className='publish'>
        <input onChange={(e) => { 입력값변경(e.target.value) }} /><br/><br/>
        <button onClick={ ()=> { publish(입력값); addThumb(); } }>저장</button>
      </div>
      
      <button onClick={()=>{ modal변경(!modal) }}>모달창</button>
      {
        modal === true
        ? <Modal 글제목={모달제목} />
        : null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h2>{ props.글제목 }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

class Profile extends React.Component{
  constructor(){
    super();
    this.state = { name: 'Kim', age: 30 }
  }

  changeName = () => {
    this.setState( { name: 'Park' } )
  }

  render(){
    return(
      <div>
        <h3>프로필입니다</h3>
        <p>저는 { this.state.name } 입니다.</p>
        <button onClick={ this.changeName }>버튼</button>
      </div>
    )
  }
}
export default App;
