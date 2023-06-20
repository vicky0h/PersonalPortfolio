import { motion } from "framer-motion";
import Typed from 'typed.js';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useRef } from "react";

const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Vicky", "a full stack developer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    }
  }, []);
  

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#8abe53]" />
          <div className="w-1 sm:h-80 h-40 main-green-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, I'm <span className="text-[#8abe53]" ref={el}></span>
          </h1>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[40px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{y: [0,12,0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}} className="w-2 h-2 rounded-full bg-secondary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
