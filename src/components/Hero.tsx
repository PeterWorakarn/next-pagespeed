import { motion } from "framer-motion"

interface HeroProps {

}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="h-[90vh] flex flex-col justify-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 100,
        }}
        className="text-6xl leading-[4.6rem] text-white">Direction is more <br /> important than speed.</motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 100,
        }}
        className="text-white text-lg leading-6 font-light mt-3 max-w-[586px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum curabitur lectus facilisis facilisi. Mi sollicitudin ut id ut enim ultricies ullamcorper non. Gravida urna augue scelerisque eu adipiscing rhoncus. Vivamus arcu mauris leo neque.</motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          damping: 10,
          mass: 0.75,
          stiffness: 100,
        }}
        className="px-4 py-2 max-w-[175px] mt-[42px] uppercase bg-indigo-800 text-white" >learn more</motion.button>
    </section>
  )
}

export default Hero
