
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Crousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='crouselMain'>
      <Slider {...settings} className='crouselslider'>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20" alt="Kitten 1" className='crouselImage' />
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4995be28f180a90c.jpg?q=20" alt="Kitten 2" className='crouselImage'/>
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20" alt="Kitten 3" className='crouselImage'/>
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20" alt="Kitten 3" className='crouselImage'/>
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4995be28f180a90c.jpg?q=20" alt="Kitten 3" className='crouselImage'/>
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/587f861a5914fd00.jpg?q=20" alt="Kitten 3" className='crouselImage'/>
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20" alt="Kitten 3" className='crouselImage'/>
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20" alt="Kitten 3" className='crouselImage'/>
        </div>
      </Slider>
    </div>
  );
};

export default Crousel;
