import './Offers.css'
import exclusive_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers flex m-auto mb-[9rem] py-0 px-[8rem]'>
        
        <div className="offers-left flex flex-1 justify-center flex-col">
            <h1>Exclusive</h1>
            <h1>offers for you</h1>
            <p className='text-5 text[600] text-[#171717]'>Only on best selling products</p>
            <button className='w-[12rem] h-[4rem] rounded-full bg-[#ff4141] border-none text-white text-5 text-[500] mt-[3rem] cursor-pointer'>Check Now</button>
        </div>
        
        <div className="offers-right flex flex-1 justify-end items-center pt-[3rem]">
            <img src={exclusive_img} alt="" />
        </div>

    </div>
  )
}

export default Offers
