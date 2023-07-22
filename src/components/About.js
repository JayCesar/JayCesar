import React from "react";
// contup
import CountUp from "react-countup";
// inersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
// image
import avatar from "../assets/about.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
       lg:gap-x-20 lg:gap-y-0 h-screen'>
         {/* img */}
         <div>
            <motion.img 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            src={avatar} alt='Imagem sobre Júlio César' 
           /> 
         </div>
          {/* text */}
          <div className="flex-1">
            <h2 className="h2 text-accent">Sobre mim</h2>
            <h3 className="h3 mb-4">
              Me considero um eterno aprendiz na tecnologia e tenho uma inclinação pelo desenvolvimento web.
            </h3>
            <p className="mb-6">
              Além de programação, também costumo editar vídeos e aplicar alguns estudos de marketing.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {/* {inView ? <CountUp start={0} end={24} duration={5} /> : null}+ */}
                  +25
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Repositórios <br />
                  No github
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {/* {inView ? <CountUp start={0} end={15} duration={5} /> : null}+ */}
                  66
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Seguidores <br />
      
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Entre em contato</button>
              <a href="#" className="text-gradient btn-link">
                Meu Portifólio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
