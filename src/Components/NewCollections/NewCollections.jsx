import './NewCollections.css'
import Item from '../Item/Item'
import new_collection from '../Assets/new_collections.js'

const NewCollections = () => {
  return (
    <div className='new-collections w-full flex flex-col items-center gap-2 mb-[6rem]'>

        <h1 className='text-[3rem] text-semibold text-[#171717]'>New Collections</h1>
        <hr className='w-[20rem] h-1 bg-[#B6BBC4] rounded-xl' />
        <div className="collections grid mt-[3rem] gap-[1.5rem] gap-y-[3rem] lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {
                new_collection.map((item, i) =>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>

    </div>
  )
}

export default NewCollections
