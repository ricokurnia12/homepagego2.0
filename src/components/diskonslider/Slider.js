import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Carousel from './Carousel';

function App() {
  let cards = [
    {
      key: uuidv4(),
      content: <Card diskon="50%" diskonuntuk="Untuk Anak Guru" />,
    },
    {
      key: uuidv4(),
      content: <Card diskon={<span><sup className='text-sm align-top'>s/d</sup>8%</span>} diskonuntuk="Untuk Eks Siswa GO" />,
    },
    {
      key: uuidv4(),
      content: <Card diskon="5%" diskonuntuk="Untuk Kakak Adik" />,
    },
    {
      key: uuidv4(),
      content: <Card diskon={<span><sup className='text-sm align-top'>s/d</sup>20%</span>} diskonuntuk="Untuk Siswa Ranking" />,
    },
    {
      key: uuidv4(),
      content: <Card diskon="10%" diskonuntuk="Untuk Pembayaran Langsung Lunas" />,
    },
  
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </div>
  );
}

export default App;
