import './BreadCrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const BreadCrum = (props) => {

    const {product}= props;

  return (
    <div className="breadcrum flex items-center gap-1 text-[#5e5e5e] text-[1rem] text-[600] my-[2rem] mx-[5rem] capitalize cursor-pointer">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrum
