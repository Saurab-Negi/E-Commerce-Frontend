import { useContext } from 'react'
import './ShopCategory.css'
import {ShopContext} from '../../Context/ShopContext'
import dropdown_icon from '../../Components/Assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'

const ShopCategory = (props) => {

  const {banner, category}= props;

  const {all_product}= useContext(ShopContext);

  return (
    <div className="shop-category flex flex-col items-center gap-[6rem] mb-[8rem]">

      <img className='block' src={banner} alt="" />

      <div className="shop-category-index-sort flex justify-between items-center gap-[45rem] mx-[6rem]">
        <p>
          <span className='text-[600]'>Showing 1-12 </span>out of 36 products
        </p>
        <div className="shop-category-sort flex items-center gap-3 py-2 px-5 border border-solid border-[#888] rounded-3xl cursor-pointer">
          Sort by
          <img className='h-2' src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shop-category-products grid grid-cols-4 gap-[1.5rem] gap-y-[3rem]">
        {all_product.map((item, i) =>{
          if(category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{ 
            return null;
          }
        })}
      </div>

      <button className="shop-category-explore-btn mt-[4rem] px-[5rem] py-[1.5rem] rounded-full bg-[#ededed] text-[#6c6c6c] text-[1.2rem] shadow-custom">
        Explore More
      </button>

    </div>
  )
}

export default ShopCategory