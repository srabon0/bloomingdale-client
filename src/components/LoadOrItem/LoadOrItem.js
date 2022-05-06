import React from 'react';
import Items from '../pages/Home/Items/Items';
import Loading from '../Shared/Loading/Loading';

const LoadOrItem = ({ items, isLoading }) => {
    return isLoading ? (   //Checkif if is loading
    <Loading/>
    ) : (
    <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8' > 
     {items.slice(0,6).map((item) => <Items key={item._id} item={item} ></Items> )}
    </div>
    )

}

export default LoadOrItem;