import './Popular.css'
import Item from '../Item/Item'
import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { ShopContext } from '../../Context/ShopContext'

const Popular = () => {

 const { url }= useContext(ShopContext);

  const [popular, setPopular]= useState([]);

  useEffect(() => {
    axios.get(url+'/popular/popularwomen')
        .then((response) => {
            setPopular(response.data);
        })
        .catch((error) => {
            console.error('Error fetching the data', error);
        });
  }, []);

  return (
    <div className='popular flex flex-col items-center gap-2'>
        
        <h1 className='text-[3rem] text-semibold text-[#171717]'>Popular in women</h1>
        <hr className='w-[20rem] h-1 bg-[#B6BBC4] rounded-xl' />
        <div className="popular-item flex flex-wrap gap-[2rem] my-[5rem]">
            {
                popular.map((item, i) =>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>

    </div>
  )
}

export default Popular
