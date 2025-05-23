import { Link } from "react-router-dom";
import React, { useState } from 'react';


export function AddProduct(){

const [ProductID, setProductID] = useState("");
const[ProductName, setProductName] = useState("");
const [altNames, setAltNames] = useState("");
const[ProductDescription, setProductDescription] = useState("");
const[ProductPrice, setProductPrice] = useState("");
const[ProductlabelPrice, setProductlabelPrice] = useState("");
const[ProductImage, setProductImage] = useState("");
const[ProductStoke, setProductStoke] = useState("");
//const navigate = useNavigate();


   async function handleSubmit() {
       {/* const promisesarr =[]
        for (let i = 0; i < ProductImage.length; i++) {
        const promisesarr = uploadMedia(ProductImage[i]);
        promisesarr[i] =promise
        }
        console.log(promisesarr);
        const results = await Promise.all(promisesarr);*/}
    
        


        const altNamesInArray = altNames.split(",");
        const product = {
            productId: ProductID,
            name: ProductName,
            altNames: altNamesInArray,
            price: ProductPrice,
            labeledPrice: ProductlabelPrice,
            description: ProductDescription,
            stock: ProductStoke,
            images: ProductImage,
        };
        const token = localStorage.getItem("token");
        console.log("Token:", token);
        console.log("Product to submit:", product);
        // TODO: Submit product to API here
    }


return(
    <div className="w-full h-full rounded-lg  flex justify-center items-center">
    <div className="w-[500px] h-[600px]  rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 m-[10px]">
            Add Product
        </h1>
        <input
            value={ProductID}
            onChange={(e) => {
                setProductID(e.target.value);
            }}
            className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="product ID"
        />
        <input
            value={ProductName}
            onChange={(e) => {
                setProductName(e.target.value);
            }}
            className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="Product Name"
        />
        <input
            value={altNames}
            onChange={(e) => {
                setAltNames(e.target.value);
            }}
            className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="Alternative Names"
        />
        <input
            value={ProductPrice}
            onChange={(e) => {
                setProductPrice(e.target.value);
            }}
            type="number"
            className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="Price"
        />
        <input
            value={ProductlabelPrice}
            onChange={(e) => {
                setProductlabelPrice(e.target.value);
            }}
            type="number"
            className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="Labelled Price"
        />
        <textarea
            value={ProductDescription}
            onChange={(e) => {
                setProductDescription(e.target.value);
            }}
            className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="Description"
        />
        <input
            type="file"
            onChange={(e) => {
                setProductImage(e.target.files);
            }}
            multiple
            className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="Product Images"
        />
      <input
  type="file"
  onChange={(e) => {
    setProductImage(e.target.files[0]); // Fix: access first file
  }}
  multiple
  className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
  placeholder="Product Image"
/>


        {/* stock */}
        <input
            value={ProductStoke}
            onChange={(e) => {
                setProductStoke(e.target.value);
            }}
            type="number"
            className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="Stock"
        />
        <div className="w-[400px]  h-[100px]  flex justify-between items-center rounded-lg">
            <Link
                to={"/admin/products"}
                className="bg-red-500 text-white p-[10px] w-[180px] text-center rounded-lg  hover:bg-red-600 "
            >
                Cancel
            </Link>
            <button
                onClick={handleSubmit}
                className="bg-green-500 cursor-pointer text-white p-[10px] w-[180px] text-center rounded-lg ml-[10px] hover:bg-green-600"
            >
                Add Product
            </button>
        </div>
    </div>
</div>
)



}