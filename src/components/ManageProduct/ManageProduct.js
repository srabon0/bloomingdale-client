import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import useItem from "../hooks/useItem";

function isInt(value) {
  var x;
  return isNaN(value) ? !1 : ((x = parseFloat(value)), (0 | x) === x);
}

const ManageProduct = () => {
  const img = 'https://images.pexels.com/photos/6033985/pexels-photo-6033985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const { id } = useParams();
  const [item, setItem] = useItem(id);

  const handleRestock = (event) => {
    event.preventDefault();
    const increasingStock = event.target.quantity.value;
    console.log(increasingStock);
    if (isInt(increasingStock)) {
      var { quantity, ...rest } = item;
      var quantity = quantity + parseInt(increasingStock);

      let updatedItemINC = { quantity, ...rest };
      var newQuantity = { upQty: quantity };
      updateInDb(id, newQuantity);
      setItem(updatedItemINC);
      event.target.reset();
    }
  };

  const handleDeliver = (event) => {
    event.preventDefault();
    console.log("iam clicked");
    var { quantity, ...rest } = item;
    var quantity = quantity - 1;

    let updatedItem = { quantity, ...rest };
    var newQuantity = { upQty: quantity };
    updateInDb(id, newQuantity);
    setItem(updatedItem);
    // console.log(updatedItem);
  };

  const updateInDb = async (id, quantity) => {
    const url = `https://glacial-dawn-34678.herokuapp.com/inventory/${id}`;
    const result = await axios.put(url, quantity);
    console.log(result.data);
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      {/* >
        <input type="number" name="quantity" />
        <button type="submit"> Restock the item </button>
      </form> */}
      <div
        className="w-full dark:bg-coolGray-500"
        style={{"backgroundImage": `url(${img})` ,"backgroundPosition": "center center","backgroundBlendMode": "multiply","backgroundSize": "cover"}}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-coolGray-100">
            Restock Item
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-coolGray-100">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
          <form onSubmit={handleRestock}>
            <input
             type="number" name="quantity" min={1}
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <input
            value="Restock"
              type="submit"
              className="p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-coolGray-900"
            />
              
          
            </form>
          </div>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={item.img}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {id}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {item.productName}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex flex-col">
                <span className="title-font mb-3 font-medium text-2xl text-gray-900">
                  Price: ${item.price}.00
                </span>

                <span className="title-font font-medium text-2xl text-gray-900">
                  In stock : {item.quantity}
                </span>
              </div>
            </div>
            <div className="flex">
              <form onSubmit={handleDeliver}>
                <button
                  type="submit"
                  className="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Deliver
                </button>
              </form>

              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageProduct;
