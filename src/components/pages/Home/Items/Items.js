import React from 'react';
import { useNavigate } from 'react-router-dom';

const Items = ({item}) => {
  const navigate = useNavigate()
  const handleNavigate = (id)=>{
    navigate(`/inventory/${id}`)

  }
    return (
        <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={item.img}
                    alt={item._id}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="my-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                     
                        <span aria-hidden="true" className="absolute " />
                        {item.productName}
                   
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{item.price}</p>
                  <p className="text-sm font-medium text-gray-900">{item.supplier}</p>
                  <p className="text-sm font-medium text-gray-900">{item.description}</p>
                </div>
                <button onClick={()=>handleNavigate(item._id)} className=" bg-gray-700 hover:bg-transparent text-white font-semibold hover:text-gray-700 py-2 px-4 border border-transparent transition hover:border-gray-700 rounded">
  Manage
</button>
              </div>
    );
};

export default Items;