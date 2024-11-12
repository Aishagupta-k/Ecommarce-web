import React, { useContext } from 'react'
import { cartcontext } from './cartscontexts'


const CartPage = () => {
    const {cartitems ,removeItem} =useContext(cartcontext)
  return (
    <div className='container mx-auto py-8'>
        <h1 className='text:3xl font-semibold mb-6'>Cart</h1>
      {cartitems===0 ?(
        <h2 className='text-white'>your card is empty</h2>
      ):(
        <ul>
        {cartitems.map((item, index) => (
          <li key={index} className=" flex items-center border-b py-2">
            <img 
            src={item.Image}
            alt={item.title}
            className="w-24 h-24 object-cover rounded mr-4"
           />
            <div className='flex flex-1 justify-between items-center '>
            <div>
                <h2 className="font-semibold text-xl">{item.title}</h2>
                <p className="text-gray-700">Price: {item.price}</p>
              </div>
             <button 
             on onClick={()=>removeItem(item)}
              className='bg-amber-700 text-white rounded px-4 py-2 ml'>remove</button>
             </div>
          </li>
        ))}
      </ul>

      ) }
    </div>
  )
}

export default CartPage;