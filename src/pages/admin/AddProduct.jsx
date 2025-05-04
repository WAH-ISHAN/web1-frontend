
import React from 'react';
/* ProductID: ,
    ProductName: ,
    ProductDescription: ,
    ProductPrice: ,
    ProductlabelPrice: ,
    ProductImage: ,
    ProductStoke:,
    ProductCategory:,
    isAvailable:
     */
export function AddProduct(){
return(
    <div className='w-full h-full bg-white rounded-lg flex items-center justify-center'>
        <div className='bg-white w-[500px] h-[600px] rounded-lg shoadow-lg felx justify-center items-center flex-col'>
            <h1>Add Product</h1>
            <input className=" w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="ProductID" />

            <input className=" w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="ProductName" />

            <textarea className=" w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="ProductDescription" />

            <input className=" w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="ProductlabelPrice" />

            <input className=" w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="ProductImage" />

            <input className=" w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="ProductStoke" />

            <input className=" w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="ProductCategory" />
            <textarea name="" id=""></textarea>
            <div className='w-full h-[100px] bg=blue-200 justify-between items-center flex'>
                <Link to={"/AdminProduct"} className="bg-red-300 text-white p-[12px] rounded-lg text-center hover:bg-red-500 hover:text-white">
                Cancel
                </Link>
                <Link to={"/AdminProduct"} className="bg-red-300 text-white p-[12px] rounded-lg text-center hover:bg-red-500 hover:text-white">
                Submit
                </Link>
            </div>
        </div>
        
    </div>
)



}