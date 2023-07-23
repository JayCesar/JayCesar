import React from 'react';
// icon
import {BsArrowUpRight} from 'react-icons/bs';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'

// services data
const services = [
  {
    name: 'Redes sociais',
    description: 
    'Tenho o costume de divulgar meus projetos e exercícios em diferentes social.',
    link: 'Confira',
  },
  {
    name: 'Projetos em Java',
    description: 
    'No meu Github tem diferentes projetos e exercícios em Java, mas os principais estão no Replit.',
    link: 'Confira',
  },
  {
    name: 'Projetos Frontend',
    description: 
    'Embora meu foco seja Java, sei também fazer aplicações frontend e sempre realizo algum desafio do Frontendmentor.',
    link: 'Confira',
  },
  {
    name: 'Inglês',
    description: 
    'Ganhei uma bolsa de estudos 100% para estudar em Londres e tive uma experiência incrível.',
    link: 'Confira',
  },
]

const Services = () => {
  return (
    <section className='section mt-[30rem] lg:mt-[10rem]' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/*text & image*/}
          <motion.div 
           variants={fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-16 lg:mb-0" id='imgJulio'>
            <h2 className='h2 text-accent mb-6'> O que eu faço</h2>
            <h3 className="h3 max-w-[455px] mb-16">Gosto de desenvolver em Java e utilizar o SpringBoot e algumas tecnologias de frontend.</h3> 
            <button className='btn btn-sm'>Veja meus trabalhos</button>
          </motion.div>
          {/*services*/}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
          className='flex-1'>
             {/*service list*/}
             <div>
                {services.map((service, index)=>{
                  // destructure service
                  const {name, description, link} = service;
                  return (
                    <div className='border-b border-white/20 h-[146px] mb-[38px] flex' 
                    key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wide font-primary font-semibold mb-6'>
                          {name}
                        </h4>
                        <p className='font-secondary leading-tight'>
                          {description}
                        </p>
                      </div>
                      <div className='flex flex-col flex-1 items-center md:items-end lg:items-center'>
                        <a href="#" className='btn w-9 h-9 mb-[6px] flex justify-center items-center md:mr-2 lg:mr-0'>
                          <BsArrowUpRight />
                        </a>
                        <a href="#" className='text-gradient text-sm'>
                          {link}
                        </a>
                      </div>
                    </div>
                  );
                })}
             </div>
          </motion.div>
         </div>
      </div>
    </section>
  );
};

export default Services;
