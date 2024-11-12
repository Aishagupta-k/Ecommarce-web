import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import { cartcontext } from '../addToCarts/cartscontexts';
import { useContext } from 'react';


const ProductList = () => {
  const {addtocart} = useContext(cartcontext)

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setLoading(false);
    };

    getProducts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;
  }

  // Filter products by category
  const categories = {
    "Clothing": products.filter(product => product.category === "women's clothing" || product.category === "men's clothing"),
    "Electronics": products.filter(product => product.category === "electronics"),
    "Jewelry": products.filter(product => product.category === "jewelery"),
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Our Products</h1>
      {Object.keys(categories).map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories[category].map(product => (
              <div
                key={product.id}
                className="border rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{product.title}</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4">${product.price}</p>
                <button
                
                onClick={() => addtocart(product)}

                
                className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
