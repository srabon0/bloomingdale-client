import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BeakerIcon,CurrencyDollarIcon} from '@heroicons/react/solid'
const Items = ({item}) => {
  const navigate = useNavigate()
  const handleNavigate = (id)=>{
    navigate(`/inventory/${id}`)

  }
    return (
        <div className="group relative bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={item.img}
                    alt={item._id}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="my-4">
                  <div>
                    <h3 className="text-2xl font-medium text-slate-600 pb-2">
                     
                        <span aria-hidden="true" className="absolute " />
                        {item.productName}
                   
                    </h3>
                    
                  </div>
                  <div className='flex justify-between'>
                  <span className=" flex tracking-wider text-white bg-orange-500 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold" title="">
                  {item.quantity}
</span>

<span className=" flex items-center tracking-wider text-white bg-red-500 px-2 py-1 text-sm rounded leading-loose mx-2 font-semibold" title="">
  <CurrencyDollarIcon className="h-5 w5" ></CurrencyDollarIcon>{item.price}
</span>

<span className="flex tracking-wider text-white bg-blue-500 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold" title="">
<BeakerIcon className="h-5 w-5 text-white"/> {item.supplier}
</span>
                  </div>
                  <p className="text-sm text-center p-2 font-medium text-gray-900">{item.description}</p>
                </div>
                <button onClick={()=>handleNavigate(item._id)} className=" bg-gray-700 hover:bg-transparent text-white font-semibold hover:text-gray-700 py-2 px-4 border border-transparent transition hover:border-gray-700 rounded">
  Manage
</button>
              </div>
    );
};

export default Items; 