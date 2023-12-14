import React from 'react'
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import pygame from './pygame.mp4';
import Project4 from './project4.pdf';
import { Worker, Viewer  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';


const SW4 = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();


  return (

    <div>
      <div className='my-3 mx-3'>
        <Link to="/sw1">sw융합프로젝트</Link>
        <Link to="/sw2">다학년연구프로젝트</Link>
        <Link to="/sw3">펌웨어개발프로젝트</Link>
        <Link to="/sw4">인공지능프로젝트</Link>
      </div>
      <h1>인공지능 스도쿠 게임 <span class='small-text'>백트래킹 알고리즘으로 자동으로 스도쿠 문제 풀이 (하단에 영상)</span></h1>
      <div >
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={Project4} plugins={[defaultLayoutPluginInstance]} /> 
      </Worker>
      </div>
      <div>
      
      <video width="1280" height="720" autoPlay loop className='my-3 '>
        {/* controls를 넣으면 플레이바 생김 */}
        <source src={pygame} type="video/mp4" />
      </video>
      <p style={{ textAlign: 'right' }}>영상: 31초</p>
      </div>
      
    </div>
  );
}

export default SW4