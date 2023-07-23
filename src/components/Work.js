import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section lg:mt-[200px]" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
           variants={fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
           className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/*text*/}
            <div>
              <h2 className="h2 leading-tigh text-accent">
                Meus principais <br />
                Projetos.
              </h2>
              <p className='max-w-sm mb-16'>
                Já desenvolvi sistemas frontend (com Vue e React) e backend (utilizando o SprigBoot). Selecionei os três principais
                para essa página.
              </p>
              <a href="#"><button className='btn btn-sm'>Ver todos os projetos</button></a>
            </div>
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
              transation-all duration-300'></div>
              {/*img*/}
              <img className='group-hover:scale-125 transaction-all duration-500' src={Img1} alt='' />
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 
              group-hover:bottom-24 transation-all duration-500 z-50">
                <span className='text-gradient'>UI/UX Design</span>  
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 
              group-hover:bottom-14 transation-all duration-700 z-50">
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
           variants={fadeIn('left', 0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
           className="flex-1 flex flex-col gap-y-6">
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
              transation-all duration-300'></div>
              {/*img*/}
              <img className='group-hover:scale-125 transaction-all duration-500' src={Img1} alt='' />
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 
              group-hover:bottom-24 transation-all duration-500 z-50">
                <span className='text-gradient'>UI/UX Design</span>  
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 
              group-hover:bottom-14 transation-all duration-700 z-50">
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
            {/*image*/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 
              transation-all duration-300'></div>
              {/*img*/}
              <img className='group-hover:scale-125 transaction-all duration-500' src={Img1} alt='' />
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 
              group-hover:bottom-24 transation-all duration-500 z-50">
                <span className='text-gradient'>UI/UX Design</span>  
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 
              group-hover:bottom-14 transation-all duration-700 z-50">
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
