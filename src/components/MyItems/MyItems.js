import axios from "axios";
import { signOut } from "firebase/auth";
import React, {useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";


import auth from '../../firebase.init';
import ItemUpDel from "../pages/ItemUpDel/ItemUpDel";
import PageTitle from "../Shared/PageTitle/PageTitle";


const MyItems = () => {
    const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [user, error, loading] = useAuthState(auth);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  
  useEffect(() => {
    const getMyItems = async()=>{
      const email = user.email;
      const url = `http://localhost:5000/myitems?email=${email}`;
      try {
        const {data} = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setItems(data)
      } catch (error) {
        if(error.response.status===401 || error.response.status===403 ){
          signOut(auth);
          navigate(from, { replace: true });
        }
        
      }

    }
    getMyItems()

   }, [user]);
    
  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100 mx-auto">
      <PageTitle title="My Items"></PageTitle>
    <h2 className="text-xl font-semibold">My Items</h2>
    <ul className="flex flex-col divide-y divide-coolGray-700">
      {items.map((item) => (
        <ItemUpDel key={item._id} item={item}></ItemUpDel>
      ))}
    </ul>

    <div className="flex justify-end space-x-4">
      <button
      onClick={()=>navigate("/addproduct")}
        type="button"
        className="px-6 py-2 border rounded-md dark:border-violet-400"
      >
        Add
        <span className="sr-only sm:not-sr-only">New Item</span>
      </button>
      
    </div>
  </div>
  );
};

export default MyItems;
