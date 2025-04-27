import Logoimg from './components/Logo';
import LoginCard from './components/LoginCard';
import Card from './components/Card';
import { getdata } from '../../public/assets/data';

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[1920px] flex flex-col justify-center items-center">

        <div className="relative w-full h-[1049px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-[url('../../public/assets/39705.png')]" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-purple-800/80 flex justify-center items-center">
            <Logoimg />
          </div>

          <LoginCard />
        </div>

        <div className="w-full max-w-[1902px] min-h-screen bg-[#1d1b1b] border mt-0 flex justify-center">
  
        
        <div className="flex flex-wrap gap-1 justify-center">
  {Array.from({ length: 5 }).map((_, colIndex) => (
    <div
      key={colIndex}
      className={`flex flex-col gap-2 ${colIndex === 1 || colIndex === 3 ? 'mt-[240px]' : ''}`}
    >
      {getdata
        .filter((_, i) => i % 5 === colIndex)
        .map((curr) => (
          <Card key={curr.id} title={curr.title} description={curr.description} image={curr.image} />
        ))}
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Home;
