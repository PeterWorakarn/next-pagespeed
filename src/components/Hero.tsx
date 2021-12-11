
interface HeroProps {

}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="h-[90vh] flex flex-col justify-center">
        <h1 className="text-6xl leading-[4.6rem] text-white">Direction is more <br /> important than speed.</h1>
        <p className="text-white text-lg leading-6 font-light mt-3 max-w-[586px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum curabitur lectus facilisis facilisi. Mi sollicitudin ut id ut enim ultricies ullamcorper non. Gravida urna augue scelerisque eu adipiscing rhoncus. Vivamus arcu mauris leo neque.</p>
        <button  className="px-4 py-2 max-w-[175px] mt-[42px] uppercase bg-indigo-800 text-white" >learn more</button>
    </section>
  )
}

export default Hero
