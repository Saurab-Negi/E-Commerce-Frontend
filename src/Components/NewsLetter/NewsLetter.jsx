import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter py-8 flex flex-col justify-center items-center m-auto mb-[8rem] gap-7'>
      
        <h1 className='text-[#454545] text-[3rem] text-[600]'>Get exclusive offers on your email</h1>
        <p className='text-[#777777] text-[1rem]'>Subscribe to our newseletter and stay updated</p>
        <div className="flex justify-between items-center bg-white w-[45rem] rounded-full shadow-custom">
            <input className='w-full mx-[2rem] outline-none text-[#616161] text-[1.5rem] tracking-wide' type="email" placeholder='Enter Email id' />
            <button className='px-12 py-6 rounded-full bg-black text-white text-[1rem] cursor-pointer'>Subscribe</button>
        </div>

    </div>
  )
}

export default NewsLetter
