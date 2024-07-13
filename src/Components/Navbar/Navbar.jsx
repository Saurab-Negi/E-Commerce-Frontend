import './Navbar.css'
import logo from '../Assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export default function Navbar() {

    const [menu, setMenu]= useState('shop'); // Initially it will be on shops
    const { getTotalCartItems }= useContext(ShopContext);

  return (
    <div className='navbar w-full flex justify-around p-[1rem]'>

        <div className="nav-logo flex items-center gap-[1rem]">
            <img src={logo} alt="" />
            <p className='text-[2rem] font-[600] text-[#171717]'>SHOPPER</p>
        </div>

        <ul className="nav-menu flex list-none items-center gap-[3rem] text-[1rem] text-[#626262]">
            <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop{menu=='shop' ? <hr/> : <></>}</Link></li>
            <li onClick={()=>{setMenu('mens')}}><Link to='/mens'>Men{menu=='mens' ? <hr/> : <></>}</Link></li>
            <li onClick={()=>{setMenu('womens')}}><Link to='/womens'>Women{menu=='womens' ? <hr/> : <></>}</Link></li>
            <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids{menu=='kids' ? <hr/> : <></>}</Link></li>
        </ul>

        <div className="nav-login-cart flex items-center gap-[2.5rem]">
            {
                localStorage.getItem('auth-token')
                ? <button className='px-[2rem] py-[0.5rem] text-[1rem] font-[500] border-[2px] border-black rounded-3xl cursor-pointer active:bg-[#EFF5F5]' onClick={() =>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                : <Link to='/login'><button className='px-[2rem] py-[0.5rem] text-[1rem] font-[500] border-[2px] border-black rounded-3xl cursor-pointer active:bg-[#EFF5F5]'>Login</button></Link>
            }
            <Link to='/cart'><FaShoppingCart className='text-3xl text-[#515151cc]' /></Link>
            <div className="nav-cart-count flex justify-center items-center px-1.5 mt-[-2rem] ml-[-3rem] rounded-full text-[0.7rem] bg-red-500 text-white">{getTotalCartItems()}</div>           
        </div>
      
    </div>
  )
}
