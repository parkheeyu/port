import React, { useState, useEffect } from 'react'
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Project1 from './project1.pdf';
import Project2 from './project2.pdf';
import { Worker, Viewer  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

const SW1 = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();



  return (
    <div>
      <div className='my-3 mx-3'>
        <Link to="/sw1">sw융합프로젝트</Link>
        <Link to="/sw2">다학년연구프로젝트</Link>
        <Link to="/sw3">펌웨어개발프로젝트</Link>
        <Link to="/sw4">인공지능프로젝트</Link>
      </div>
      <div >
      <h1>환자 이력을 관리하는 프로그램 개발 </h1>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={Project2} plugins={[defaultLayoutPluginInstance]} /> 
        <Viewer fileUrl={Project1} plugins={[defaultLayoutPluginInstance]} /> 
      </Worker>
      </div>

      
      
    
    </div>
  )
}

export default SW1