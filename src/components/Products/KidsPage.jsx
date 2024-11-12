import React, { useContext } from 'react';
import { Kids } from '../data';
import { FaStar } from "react-icons/fa6";
import { cartcontext } from '../addToCarts/cartscontexts';

const KidsPage = () => {
  const {addtocart} = useContext(cartcontext)
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Kids Wear</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Kids.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg p-4"
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
          >
            <img
              src={product.Image}
              alt={product.title}
              className="w-full h-40 object-cover rounded"
            />

            <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
            <h2 className="text-xl  mt-1">{product.price}</h2>
            <h2 className="text-x  mt-1">{product.color}</h2>


           
            <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <span>{product.rating}</span>
            </div>
            <button

            onClick={() => addtocart(product)}
             className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                  Add to Cart
                </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsPage;