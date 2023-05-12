import React, { useState } from 'react';
import Navbarlogo from '../assets/Navbarlogo.png';
import Image from 'next/image';

const Navbar = () => {
  const [navTogle, setNavTogle] = useState(false);
  return (
    <React.Fragment>
      <header className=" w-full h-16 fixed rounded-full bg-white max-w-[2000px] flex items-center z-10 border lg:w-[90vw]">
        <div
          className={`container ${
            navTogle ? 'h-60' : ''
          } md:h-20 lg:w-11/12`}
        >
          <div
            className="flex items-center  relative
            "
          >
            <div className=" px-4 absolute lg:top-0 lg:left-16">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                <Image src={Navbarlogo} className=" w-28" />
              </a>
            </div>

            <div className=" flex flex-col justify-center px-4">
              <button
                type="button"
                className="block absolute right-4 md:hidden"
                onClick={() => {
                  setNavTogle(!navTogle);
                }}
              >
                <span
                  className={`humberger-line transition ${
                    navTogle && 'rotate-45 absolute transition '
                  }`}
                ></span>
                <span
                  className={`humberger-line transition ${
                    navTogle && '-rotate-45 transition'
                  }`}
                ></span>
                {!navTogle && (
                  <span className={`humberger-line`}></span>
                )}
              </button>
              <div
                className={`${
                  navTogle ? 'block' : 'hidden'
                } text-xl text-slate-900 absolute  right-5 top-36 flex flex-col text-end md:flex-row md:top-6 md:block bg-white`}
              >
                <a href="" className=" mr-4">
                  About
                </a>
                <a href="" className=" mr-4">
                  Diskon
                </a>
                <a href="" className=" mr-4">
                  Formula Belajar
                </a>
                <a href="" className=" mr-4">
                  Testimoni
                </a>
                <a href="" className=" mr-4">
                  FAQ
                </a>
                <a href="" className=" mr-4">
                  Artikel
                </a>
                <a href="" className=" mr-4">
                  Produk Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
