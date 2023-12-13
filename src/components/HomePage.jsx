import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import port from './portpolio.png';
import logo from './logo1.jpg';
import p001 from '../images/001.png';


const SlideShow = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 재생 활성화
    autoplaySpeed: 10000,
    arrow: true ,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
    
   


  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
            ...style,
            display: "block",
            background: "black",
            
            zIndex: 1,
            borderRadius: "100%",
            opacity: 1.8,
            fontSize: "20px",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className }
        style={{
            ...style,
            display: "block",
            background: "black",
            zIndex: 1,
            borderRadius: "100%",
            opacity: 1.8,
            fontSize: "20px",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        onClick={onClick}
      />
    );
  }
  
  return (
    <Slider  {...settings} >
      {images.map((image, index) => (
        <div key={index} >
          <img src={image} alt={`Slide ${index + 1}`} width="100%"  />
        </div>
      ))}
      {/* Add more slides as needed */}
    </Slider>
  );
};

const HomePage = () => {
    const imageContext = require.context('../images', false, /\.(png|jpe?g|svg)$/);
// 이미지 폴더 내의 모든 이미지를 불러와서 배열로 반환합니다.
    const images = imageContext.keys().map(imageContext).slice(0, 13);
  return (
    <div>
       <SlideShow images={images} />
      {/* <Row className='my-5 text-center'>
        <Col>
          <img src={port} alt="포트폴리오" width="90%" />
        </Col>
      </Row> */}
    </div>
  );
};

export default HomePage;
