'use client';

import Logoimg from './components/Logo';
import LoginCard from './components/LoginCard';
import Card from './components/Card';
import { getdata } from '../../public/assets/data';
import { useEffect, useState } from 'react';

const Home = () => {
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1902) {
        setColumns(5);
      } else if (width > 1280) {
        setColumns(4);
      } else if (width > 768) {
        setColumns(3);
      } else if (width > 640) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

        
        <div className="w-full max-w-[1902px] min-h-screen bg-[#1d1b1b] border-black-300 mt-0 flex flex-wrap justify-center gap-2">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col gap-2 ${
                (colIndex === 1 || colIndex === 3) ? 'lg:mt-[240px]' : ''
              }`}
            >
              {getdata
                .filter((_, i) => i % columns === colIndex)
                .map((curr) => (
                  <Card
                    key={curr.id}
                    title={curr.title}
                    description={curr.description}
                    image={curr.image}
                  />
                ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
