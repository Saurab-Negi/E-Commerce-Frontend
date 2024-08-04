import axios from 'axios';
import './ListProduct.css';
import { useEffect, useContext, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { ShopContext } from '../../Context/ShopContext';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { url }= useContext(ShopContext);

  const productsPerPage = 10; // Adjust as needed

  const fetchInfo = async () => {
    try {
      const res = await axios.get(url+'/product/allproduct');
      setAllProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Failed to fetch products');
    }
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      await axios.post(url+'/product/deleteproduct', 
        { id: id }, 
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }
      );
      await fetchInfo();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Calculate indices for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  // Pagination controls
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className='list-product flex flex-col items-center w-full h-[85vh] gap-3 px-8 py-3 m-2 rounded-xl bg-white'>
      <p className='text-3xl font-[500] mt-4'>All Products</p>
      <div className="list-product-format-main mt-4 text-[1rem] font-[500] tracking-wider">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <hr className='w-full' />

      <div className="list-product-allproducts overflow-auto">
        {currentProducts.map((product, i) => (
          <div key={i}>
            <div className="list-product-format-main list-product-format text-[0.8rem] text-[#6b6b6b]">
              <img src={product.image} className='list-product-icon w-12' alt="" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <MdDeleteForever onClick={() => { removeProduct(product.id) }} className='list-product-remove-icon text-xl text-[#f00] cursor-pointer m-auto' />
            </div>
            <hr className='h-[5px]' />
          </div>
        ))}
      </div>

      <div className="pagination-controls flex justify-center items-center mt-4">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="px-3 py-1 mx-1 border rounded">
          Previous
        </button>
        <p>Page {currentPage} of {totalPages}</p>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-3 py-1 mx-1 border rounded">
          Next
        </button>
      </div>
    </div>
  );
}

export default ListProduct;
