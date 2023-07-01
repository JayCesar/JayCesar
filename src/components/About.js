import React from 'react';
// contup

import CountUp from 'react-countup';
// inersection observer
import {useInView} from 'react-intersection-observer';
// motion
import {} from 'framer-motion';
//variant
import { fadeIn} from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        {/* img */}
        <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
        {/* img */}
        <div>text</div>
      </div>
    </section>
  );
};

export default About;
