/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useNavigate } from 'react-router-dom'

import useItems from '../../../hooks/useItems'
import Items from '../Items/Items'

  
  export default function InventoryItems() {
    const navigate = useNavigate()
    const [items,setItems] = useItems();
    return (
      <div className="bg-white" id="inventory">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl text-center font-extrabold tracking-tight text-blue-900">Our Inventory</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {items.map((item) => <Items key={item._id} item={item} ></Items> )}
          </div>
          <button onClick={()=>navigate('/manage')} type="button" class="px-8 py-3 font-semibold border rounded dark:border-coolGray-100 dark:text-coolGray-100">Managae Inventories</button>

        </div>
      </div>
    )
  }
  