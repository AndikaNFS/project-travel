import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../parts/Welcome/Header';
import Content from '../parts/Welcome/Content';
import Promo from '../parts/Welcome/Promo';
import backgroundImage from './../assets/images/welcome-3.jpg';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="bg-secondary-color-3">
        <div className="py-96">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          voluptas modi enim nostrum tenetur doloribus ducimus exercitationem
          hic quidem maxime. Recusandae veniam accusantium facere. Totam
          necessitatibus impedit alias vitae cupiditate.
        </div>
        <div className="py-96">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          voluptas modi enim nostrum tenetur doloribus ducimus exercitationem
          hic quidem maxime. Recusandae veniam accusantium facere. Totam
          necessitatibus impedit alias vitae cupiditate.
        </div>
        <div className="py-96">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          voluptas modi enim nostrum tenetur doloribus ducimus exercitationem
          hic quidem maxime. Recusandae veniam accusantium facere. Totam
          necessitatibus impedit alias vitae cupiditate.
        </div>
      </div>

      <div
        className="fixed overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
        }}
      >
        <div className="container mx-auto mt-2">
          <Header />
          <div className="flex items-center justify-start w-full mt-4 h-96 ">
            <Content />
          </div>
          <Promo />
        </div>
      </div>
    </>
  );
}

export default HomePage;
