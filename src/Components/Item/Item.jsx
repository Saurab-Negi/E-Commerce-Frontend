import './Item.css'

const Item = (props) => {

  const {image, name, new_price, old_price}= props;

  return (
    <div className="item w-[20rem] rounded-lg cursor-pointer shadow-custom">

        <div className="item-img h-[15rem] overflow-hidden">
          <img className='w-full h-[20rem] rounded-lg object-cover' src={image} alt="" />
        </div>
        <p className='p-4'>{name}</p>
        <div className="item-prices flex p-4 gap-5">
            <div className="item-price-new text-[#374151] text-[1rem] font-semibold">
                ${new_price}
            </div>
            <div className="item-price-old text-[#374151] text-[1rem] font-normal line-through">
                ${old_price}
            </div>
        </div>

    </div>
  )
}

export default Item