import React from "react";
import { useNavigate } from "react-router-dom";
import useItems from "../hooks/useItems";
import ItemUpDel from "../pages/ItemUpDel/ItemUpDel";

const Manage = () => {
  const navigate = useNavigate('')
  const [items, setItems] = useItems();
  return (
    <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100 mx-auto">
      <h2 className="text-xl font-semibold">All Items</h2>
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

export default Manage;
