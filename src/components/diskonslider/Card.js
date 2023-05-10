import React, { useState } from 'react';
import Image from 'next/image';
import Bgcard from '@/assets/bgcard.png';
import { useSpring, animated } from 'react-spring';

const Card = (props) => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
  });
  return (
    <animated.div
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      className=" rounded-xl"
    >
      <div className="flex flex-col gap-4 overflow-hidden w-72 h-[26rem] rounded-xl bg-yellow-400 ">
        <div className="relative">
          <Image src={Bgcard} alt="t" className=" scale-y-110" />
          <span className="bg-yellow-400 absolute top-2 right-2 px-3 rounded-md">
            Diskon
          </span>
          <span className=" text-white text-7xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {props.diskon}
          </span>
        </div>
        <div className="px-4">
          <p className=" text-slate-900 text-xl font-bold text-center mb-2">
            {props.diskonuntuk}
          </p>
          <p className="text-slate-800 text-sm text-center">
            Sebagai apresiasi kami terhadap guru, kami akan memberikan
            diskon kepada anak guru sebesar 50%
          </p>
        </div>
        <button className=" bg-red-500 py-1 w-[120px] m-auto rounded-md text-white hover:bg-red-600">
          {' '}
          Lihat Detail{' '}
        </button>
      </div>
    </animated.div>
  );
};

export default Card;
