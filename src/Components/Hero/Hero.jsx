import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className="hero h-[100vh] flex ">
      
    <div className="hero-left flex flex-1 flex-col justify-center gap-5 pl-[11.5rem]">
        <h2 className='text-[#090909] text-[1.5rem] font-medium'>New Arrivals</h2>

        <div className="">
            <div className="hero-hand-icon flex items-center gap-4">
                <p>New</p>
                <img className='w-[3.5rem]' src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>

        <div className="hero-latest-btn h-[4rem] w-[17rem] flex justify-center items-center gap-4 rounded-full mt-7 bg-[#ff4141] text-white text-5 font-medium cursor-pointer active:bg-[#EE4266]">
            <div className="">Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
    </div>

    <div className="hero-right flex flex-1 justify-center">
        <img src={hero_img} alt="" />
    </div>
        
    </div>
  )
}

export default Hero