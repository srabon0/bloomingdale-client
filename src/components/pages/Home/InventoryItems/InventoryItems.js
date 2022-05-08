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
          <h2 className="text-4xl text-center font-extrabold tracking-tight text-blue-900">Items in Inventory</h2>
  
          <div className="">
        
           <LoadOrItem isLoading ={isLoading} items = {items} ></LoadOrItem>
          </div>
          <br />
          <button onClick={()=>navigate('/manage')} type="button"  className="min-w-auto flex h-10 bg-blue-300 p-2 rounded hover:bg-blue-500 text-white font-semibold transition-transform hover:translate-y-2 ease-in-out">Managae Inventories
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </button>

        </div>
      </div>
    )
  }
  