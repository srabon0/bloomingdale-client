import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useItems from "../hooks/useItems";

const SingleItem = ({ item }) => {
  const [items, setItems] = useItems();
  const { _id, productName, price, quantity, img } = item;
  const navigate = useNavigate();
  const handleItemDelete = async (id) => {
    const url = "http://localhost:5000/delete";
    const proceed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (proceed) {
      const result = await axios.delete(url, { data: { id: id } });
      console.log(result.data);
      const remainder = items.filter((item) => item._id !== id);
      setItems(remainder);
    }
  };

  return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-10 h-10">
            <img class="w-full h-full rounded-full" src={img} alt={_id} />
          </div>
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">{productName}</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{price}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{quantity}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => handleItemDelete(_id)}
          class="cursor-pointer relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight"
        >
          <span
            aria-hidden
            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
          ></span>
          <button
           
            className="flex items-center px-2 py-1 pl-0 space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 fill-current"
            >
              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
              <rect width="32" height="200" x="168" y="216"></rect>
              <rect width="32" height="200" x="240" y="216"></rect>
              <rect width="32" height="200" x="312" y="216"></rect>
              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
            </svg>
            <span>Remove</span>
          </button>
        </span>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={() => navigate(`/inventory/${_id}`)}
          class="cursor-pointer relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden
            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <button className="flex items-center px-2 py-1 space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span>Manage Item</span>
          </button>
        </span>
      </td>
    </tr>
  );
};

export default SingleItem;
