import React from 'react';
// Images
import Image from '../assets/avatar.svg';
// Icons
import {FaGithub, FaYoutube, FaDribbble, FaTwitter} from 'react-icons/fa';
// type animation
import {TypeAnimation} from 'react-type-animation'
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">

        {/* text */}
        <div className="flex-1 text-center font-secondary lg:text-left">
          <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
            Jay <span> CESAR</span>
          </h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Design lover',
              2000,
              'English Teacher',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </div>
          <p className="mb-8 mx-auto lg:max-0">
          Sou estudante de <b>Sistemas de Informação na Universidade de São Paulo</b> e tenho experiência com <b>Java, Spring e SQL no backend e Vue.js e um pouco de React.js no frontend</b>. 
          Sou capaz de <b>aprender rapidamente novas tecnologias</b> e tenho conhecimento em <b>orientação a objetos</b>, mas já atuei com projetos relacionados a <b>UX/UI</b>.
          </p>
          <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
            <button className="btn btn-lg">Entre em contato</button>
            <a href="#" className="text-gradient btn-link"> 
            Meu Portfolio 
            </a>
          </div>
          {/*  sociais */}
          <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
            <a href="https://www.youtube.com/@blackfoox6286">
              <FaYoutube />
            </a>
            <a href="https://github.com/JayCesar">
              <FaGithub />
            </a>
            <a href="https://twitter.com/JayC3sar">
              <FaTwitter />
            </a>
          </div>
        </div>
      
        {/* image */} 
        <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
          <img src={Image} alt='JayCesar_Img' />
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
