import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LoadOrItem from '../../../LoadOrItem/LoadOrItem'

  
  export default function InventoryItems() {
    const navigate = useNavigate()
    const [items,setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect (() => {
      const getItems =  async () =>{
        const result = await axios.get (
          `http://localhost:5000/items` 
          )
        console.log(result.data)
  
        setItems(result.data)
        setLoading(false) 
      }
      getItems()
  
    }, [])

    
    return (
      <div className="bg-white" id="inventory">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl text-center font-extrabold tracking-tight text-blue-900">Our Inventory</h2>
  
          <div className="">
        
           <LoadOrItem isLoading ={isLoading} items = {items} ></LoadOrItem>
          </div>
          <button onClick={()=>navigate('/manage')} type="button" className="px-8 py-3 font-semibold border rounded dark:border-coolGray-100 dark:text-coolGray-100">Managae Inventories</button>

        </div>
      </div>
    )
  }
  