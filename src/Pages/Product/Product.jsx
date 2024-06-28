import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import './Product.css'
import BreadCrum from '../../Components/BreadCrum/BreadCrum';
import { ShopContext } from '../../Context/ShopContext'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import Description from '../../Components/Description/Description';

const Product = () => {

  const {all_product}= useContext(ShopContext); // get all_product data
  const {productId}= useParams(); // to get the productId
  const product= all_product.find((e) => e.id===Number(productId)) // find the products by there id & convrting productId from string to no.

  return (
    <div>
      
    <BreadCrum product={product} />
    <ProductDisplay product={product} />
    <Description />

    </div>
  )
}

export default Product
