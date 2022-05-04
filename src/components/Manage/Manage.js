import React from "react";
import useItems from "../hooks/useItems";
import ItemUpDel from "../pages/ItemUpDel/ItemUpDel";

const Manage = () => {
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
          type="button"
          className="px-6 py-2 border rounded-md dark:border-violet-400"
        >
          Back
          <span className="sr-only sm:not-sr-only">to shop</span>
        </button>
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-coolGray-900 dark:border-violet-400"
        >
          <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
        </button>
      </div>
    </div>
  );
};

export default Manage;
