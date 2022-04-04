import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/full-logo.jpeg';
import '../styles/Home.css';
function Home() {
  return (
    // <div className="home" style={{ backgroundImage: `url(${Logo})` }}>
    <div className='home flex flex-wrap'>
      <div className='headerContainer order-1  basis-1/2'>
        <h1 className='font-bold leading-tight text-5xl mt-40 mb-10 text-black-600'>
          Howdy!
        </h1>
        <p>
          Local Cottage Food Licensed home-based bakery in Floresville, TX
          specializing in homemade jumbo and giant cookies, and cookie cakes!
        </p>
        <p>Curing sweet tooth cravings since 2021.</p>
        <Link to='/menu'>
          <button class='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10'>
            Menu
          </button>
        </Link>
      </div>
      <div className='picture-Container order-2 basis-1/2'>
        <img src={Logo} alt='logo' className='logo'></img>
      </div>
    </div>
  );
}

export default Home;
