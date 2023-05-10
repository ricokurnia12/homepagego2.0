import Image from 'next/image';
import { Inter } from 'next/font/google';
import Heroimage from '../assets/heroimage.png';
import DiskonSlide from '../components/diskonslider/Slider';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { AiFillCrown } from 'react-icons/ai';
import BgHero2 from '../assets/bghero2.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="font-Rubik">
      {/* Hero Section */}
      <header className="h-screen relative px-4 bg-[url('../assets/bghero.png')] bg-cover bg-no-repeat">
        <div className="absolute w-screen bottom-0 left-0">
          <Image src={BgHero2} className=" w-full" />
        </div>
        <div className="lg:absolute lg:top-40 flex flex-col justify-center items-center  md:flex-row-reverse">
          <div className={'w-1/2 md:w-11/12 lg:w-8/12 '}>
            <Image className="lg:absolute -top-40" src={Heroimage} />
          </div>
          <div className={'self-start text-white'}>
            <h1 className=" text-4xl font-bold text-white mb-2">
              Ganesha Operation
            </h1>
            <p className={' font-light text-xl'}>
              Bembel Terbaik dan Terbesar se Indonesia yang telah
              meluluskan 45.000 lebih siswa ke Kampus impianya.
            </p>
            <div className="flex mt-5 bg-white text-slate-900 justify-between rounded-lg p-2  max-w-md">
              <div className="flex border-r-2 pr-2">
                <div className=" me-2 self-center p-2 rounded-full bg-[#FEEBEB]">
                  <BsFillPersonFill className=" text-sm text-[#EB5757]" />
                </div>
                <div>
                  <p className=" text-sm font-bold text-slate-900">
                    100.000 +
                  </p>
                  <span className="text-sm text-slate-600">
                    Siswa
                  </span>
                </div>
              </div>
              <div className="flex border-r-2 pr-2">
                <div className=" me-2 self-center p-2 rounded-full bg-[#FEEBEB]">
                  <MdLocationOn className=" text-sm text-[#EB5757]" />
                </div>
                <div>
                  <p className=" text-sm font-bold text-slate-900">
                    30 +
                  </p>
                  <span className="text-sm text-slate-600">
                    Cabang
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className=" me-2 self-center p-2 rounded-full bg-[#FEEBEB]">
                  <AiFillCrown className=" text-sm text-[#EB5757]" />
                </div>
                <div>
                  <p className=" text-sm font-bold text-slate-900">
                    The King
                  </p>
                  <span className="text-sm text-slate-600">
                    Siswa
                  </span>
                </div>
              </div>
            </div>
            <div className="flex  mt-4 justify-around">
              <button className="text-slate-900 bg-[#FFE000] py-2 px-4 rounded-3xl font-bold  w-40 hover:bg-yellow-400 transition-all transiti">
                Daftar Sekarang
              </button>
              <button className=" border-white border bg-transparent py-2 px-4 rounded-3xl font-bold w-40 hover:bg-red-500 transition-all">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* <DiskonSlide /> */}
    </div>
  );
}
