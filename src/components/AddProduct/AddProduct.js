import React from 'react';

const AddProduct = () => {
    const handleAddProduct = ()=>{
        console.log("shingping");
    }
    return (
        <section class="p-6 dark:bg-coolGray-800 dark:text-coolGray-50">
        <form onSubmit={handleAddProduct} class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
            <fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-coolGray-900">
                <div class="space-y-2 col-span-full lg:col-span-1">
                    <p class="font-medium">Product Information</p>
                </div>
                <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div class="col-span-full sm:col-span-3">
                        <label for="firstname" class="text-sm">First name</label>
                        <input id="firstname" type="text" placeholder="First name" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900" />
                    </div>
                    <div class="col-span-full sm:col-span-3">
                        <label for="lastname" class="text-sm">Last name</label>
                        <input id="lastname" type="text" placeholder="Last name" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900" />
                    </div>
                    <div class="col-span-full sm:col-span-3">
                        <label for="email" class="text-sm">Email</label>
                        <input id="email" type="email" placeholder="Email" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900" />
                    </div>
                    <div class="col-span-full">
                        <label for="address" class="text-sm">Address</label>
                        <input id="address" type="text" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"/>
                    </div>
                    <div class="col-span-full sm:col-span-2">
                        <label for="city" class="text-sm">City</label>
                        <input id="city" type="text" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"/>
                    </div>
                    <div class="col-span-full sm:col-span-2">
                        <label for="state" class="text-sm">State / Province</label>
                        <input id="state" type="text" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900" />
                    </div>
                    <div class="col-span-full sm:col-span-2">
                        <label for="zip" class="text-sm">ZIP / Postal</label>
                        <input id="zip" type="text" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900" />
                    </div>
                    <button>Add Product</button>
                </div>
                
            </fieldset>
            
        </form>
    </section>
    );
};

export default AddProduct;