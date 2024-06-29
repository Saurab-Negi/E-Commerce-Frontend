import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='related-products flex flex-col items-center gap-4 '>

        <h1 className='text-[#171717] text-[3rem] text-[600]'>Related Products</h1>
        <hr className='w-[20rem] rounded-xl bg-[#252525]' />
        <div className="related-products-item flex my-[3rem] gap-[2rem]">
            {
                data_product.map((item,i) =>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
      
    </div>
  )
}

export default RelatedProducts
