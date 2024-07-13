import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import './Product.css'
import BreadCrum from '../../Components/BreadCrum/BreadCrum';
import { ShopContext } from '../../Context/ShopContext'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import Description from '../../Components/Description/Description';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext); // get all_product data
  const { productId } = useParams(); // to get the productId
  const product = all_product.find((e) => e.id === Number(productId)); // find the products by there id & converting productId from string to no.

  if (!product) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
}

export default Product;
