import './Item.css'
import {Link} from 'react-router-dom'

const Item = (props) => {

  const {id, image, name, new_price, old_price}= props;

  return (
    <div className="item w-[18rem] rounded-lg cursor-pointer shadow-custom">

        <Link to={`/product/${id}`}>
          <div className="item-img overflow-hidden">
            <img className='w-full rounded-lg object-cover' src={image} alt="" />
          </div>
        
          <p className='px-4 pt-2'>{name}</p>
          <div className="item-prices flex p-4 gap-5">
              <div className="item-price-new text-[#374151] text-[1rem] font-semibold">
                  ${new_price}
              </div>
              <div className="item-price-old text-[#374151] text-[1rem] font-normal line-through">
                  ${old_price}
              </div>
          </div>
        </Link>

    </div>
  )
}

export default Item