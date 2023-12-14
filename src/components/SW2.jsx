import React from 'react'
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Project2 from './project2.pdf';
import android01 from './android01.mp4';

const SW2 = () => {
  return (
    <div>
      <div className='my-3 mx-3'>
        <Link to="/sw1">sw융합프로젝트</Link>
        <Link to="/sw2">다학년연구프로젝트</Link>
        <Link to="/sw3">펌웨어개발프로젝트</Link>
        <Link to="/sw4">인공지능프로젝트</Link>
      </div>
      <h1>Force 연구를 위한 필압 저장 서명앱 개발</h1>
      <video width="1280" height="720" autoPlay loop  className='my-3 '>
        {/* controls를 넣으면 플레이바 생김 */}
        <source src={android01} type="video/mp4" />
      </video>
      <p style={{ textAlign: 'right' }}>영상: 39초</p>
    </div>
  )
}

export default SW2