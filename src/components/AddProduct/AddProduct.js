import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import PageTitle from "../Shared/PageTitle/PageTitle";

const AddProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleAddProduct = async (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const imgurl = event.target.imgurl.value;
    const desc = event.target.desc.value;
    const data = {
      productName: productName,
      price: price,
      quantity: quantity,
      supplier: supplier,
      imgurl: imgurl,
      desc: desc,
      mail: user?.email,
    };
    const url = "https://glacial-dawn-34678.herokuapp.com/addproduct";
    if (price && quantity && productName) {
      const result = await axios.post(url, { data: data });
      alert("Product added Successfully");
      console.log(result);
      event.target.reset();
    }
  };
  return (
    <section className="p-6 dark:bg-coolGray-800 dark:text-coolGray-50">
      <PageTitle title="Add Item"></PageTitle>
      <form
        onSubmit={handleAddProduct}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-coolGray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Product Information</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="productName" className="text-lg">
                Product Name
              </label>
              <input
                required
                autoComplete="off"
                name="productName"
                type="text"
                placeholder="Product Name"
                className="w-full p-3 rounded dark:bg-coolGray-800"
              />
            </div>
            <div className="col-span-full sm:col-span-3 ">
              <label htmlFor="price" className="text-lg">
                Price
              </label>
              <input
                required
                autoComplete="off"
                name="price"
                type="number"
                placeholder="Product Price"
                className="w-full p-3 rounded dark:bg-coolGray-800"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="quantity" className="text-lg">
                Quantity
              </label>
              <input
                required
                autoComplete="off"
                name="quantity"
                type="number"
                placeholder="Initial Quantity"
                className="w-full p-3 rounded dark:bg-coolGray-800"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="supplier" className="text-lg">
                Supplier Name
              </label>
              <input
                required
                autoComplete="off"
                name="supplier"
                type="text"
                placeholder="Supplier Name"
                className="w-full block p-3 rounded dark:bg-coolGray-800"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="imgurl" className="text-lg">
                Image Url
              </label>
              <input
                required
                autoComplete="off"
                name="imgurl"
                type="text"
                placeholder="Product Image Url"
                className="w-full p-3 rounded dark:bg-coolGray-800"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="desc" className="text-lg">
                Description
              </label>
              <textarea
                rows="3"
                name="desc"
                type="text"
                placeholder="Short Description"
                className="w-full p-3 rounded dark:bg-coolGray-800"
              />
            </div>

            <div className="col-span-full">
              <input
                required
                autoComplete="off"
                value="Add product"
                type="submit"
                className="w-3/5 focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-gray-600 rounded-md bg-gray-500 hover:bg-gray-400"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddProduct;
