import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {

    const {product}= props;

  return (
    <div className="productdisplay flex gap-8 my-[4rem] mx-[5rem]">
            
            <div className="productdisplay-left flex items-center gap-[1rem]">
                <div className="productdisplay-img-list flex flex-col gap-[1rem]">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img w-[45rem] h-[30rem] rounded-xl' src={product.image} alt="" />
                </div>
            </div>

            <div className="productdisplay-right flex flex-col">
                <h1 className='text-[#3d3d3d] text-[2.5rem] text-[700]'>{product.name}</h1>
                <div className="productdisplay-right-stars flex items-center mt-[1rem] gap-2 text-[#1c1c1c] text-[1rem]">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(78)</p>
                </div>
                <div className="productdisplay-right-prices flex items-center mt-[1rem] gap-4">
                    <div className="productdisplay-right-price-old text-[rgb(129,129,129)] line-through">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new text-[#ff4141] text-[1.5rem] text-[700]">
                        ${product.new_price}
                    </div>
                </div>

                <div className="productdisplay-right-size mt-[1rem]">
                    <h1 className='text-[#656565] text-[1rem] text-[600]'>Select Size :</h1>
                    <div className="productdisplay-right-size-no flex mt-[1rem] gap-[1rem]">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className='py-[1rem] px-[2rem] w-[10rem] text-[1rem] text-[600] text-white bg-[#FF4141] my-[2rem] rounded-full shadow-customBtn'>Add to cart</button>
                <p className="productdisplay-right-category">
                    <span>Category : </span>Women, T-Shirt, Crop Top
                </p>
                <p className="productdisplay-right-category">
                    <span>Tag : </span>Modern, Latest
                </p>
            </div>

    </div>

  )
}

export default ProductDisplay