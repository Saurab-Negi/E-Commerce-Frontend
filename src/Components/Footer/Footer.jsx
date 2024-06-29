import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_icon from '../Assets/instagram_icon.png'
import pint_icon from '../Assets/pintester_icon.png' 
import whats_icon from '../Assets/whatsapp_icon.png' 

const Footer = () => {
  return (
    <div className='footer w-full flex flex-col justify-center items-center py-8 gap-[3rem]' >
      
        <div className="footer-logo flex items-center gap-[2rem]">
            <img src={footer_logo} alt="" />
            <p className='text-[#383838] text-[3rem] text-[700]'>Shopper</p>
        </div>
        <ul className='footer-links flex list-none gap-[4rem] text-[#252525] text-[1rem] '>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container flex gap-[2rem] py-4 px-8 bg-[#fbfbfb] rounded-lg border border-solid border-[#ebebeb]">
                <img src={insta_icon} alt="" />
                <img src={pint_icon} alt="" />
                <img src={whats_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright flex flex-col items-center gap-[2rem] w-full mb-[2rem] text-[#1a1a1a] text-[1rem]">
            <hr className='w-[90%] border-none rounded-md h-[1px] bg-[#c7c7c7]' />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
