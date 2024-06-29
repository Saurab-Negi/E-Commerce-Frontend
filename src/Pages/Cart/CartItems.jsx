import { useContext } from 'react';
import '../Cart/CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { MdDeleteForever } from "react-icons/md";

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext); // Changed CartItems to cartItems

    return (
        <div className='cartitems my-[5rem] mx-[10rem]'>
            <div className="cartitems-format-main text-[1rem] text-[700]">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='h-[3px] mt-4 bg-[#e2e2e2]' />
            {
                all_product.map((e) => {
                    const quantity = cartItems[e.id] || 0; // Changed CartItems to cartItems
                    if (quantity > 0) {
                        return (
                            <div key={e.id}>
                                <div className="cartitems-format cartitems-format-main mb-4 text-[0.6rem] text-[500]">
                                    <img src={e.image} alt="" className='carticon-product-icon w-[3rem]' />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cartitems-quantity px-2 py-1 border border-solid border-[#d2d2d2] bg-[#ffffff]'>{quantity}</button>
                                    <p>${e.new_price * quantity}</p>
                                    <MdDeleteForever className='text-[1.5rem] cursor-pointer' onClick={() => { removeFromCart(e.id) }} />
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })
            }
            <div className="cartitems-down flex my-[6rem]">
                <div className="cartitems-total flex flex-1 flex-col mr-[12rem] gap-[2rem]">
                    <h1 className='text-[1.2rem] text-[600]'>Cart Total</h1>
                    <div className="">
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='px-10 py-4 bg-[#ff5a5a] text-[#fff] rounded-xl text-[1rem] text-[600]'>Checkout</button>
                </div>
                <div className="cartitems-promocode flex-1 text-[1.5rem] text-[500]">
                    <p className='text-[#555]'>Apply coupon</p>
                    <div className="cartitems-promobox flex items-center justify-between rounded-2xl py-4 px-4 mt-[2rem] bg-[#eaeaea]">
                        <input className='bg-transparent outline-none text-[1rem] px-2 py-2' type="text" placeholder='Promo code' />
                        <button className='px-8 py-2 text-[1rem] rounded-full bg-black text-white'>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;
