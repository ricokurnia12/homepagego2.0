import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { config } from 'react-spring';
import belajar from '../../assets/belajar-1.png';
import bertanding from '../../assets/bertanding-1.png';
import berlatih from '../../assets/berlatih-1.png';
import { Carousel } from 'react-carousel3d';

const Slider = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background:
            'linear-gradient(to bottom, #16235e 0%, #020223 100%)',
        }}
      >
        <Carousel
          height={460}
          width={960}
          yOrigin={42}
          yRadius={48}
          autoPlay={true}
        >
          <div key={1} style={style}>
            <img alt="" src="/image/1.webp" />
          </div>
          <div key={2} style={style}>
            <img alt="" src="/image/2.webp" />
          </div>
          <div key={3} style={style}>
            <img alt="" src="/image/3.webp" />
          </div>
          ... more items here ...
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
