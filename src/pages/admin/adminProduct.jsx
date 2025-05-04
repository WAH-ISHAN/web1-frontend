import axios from "axios"
import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc";
import { Link } from "react-router-dom";

export function AdminProduct() {

    const [products, setProducts] = useState([]);

    useEffect(
        () =>{
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
                (response)=>{
                    setProducts(response.data);
                }
            )
        },[]
        
    )

    
    return(
        
   
        <div className="w-full h-full  rounded-lg relative">
            
            <table className=" w-full h-full table-auto border-collapse border border-white">
            <Link to={"/addProduct"} className =" absolute text-white bg-gray-700 p-[12px] text-3xl rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-700 right-5 bottom-5">
            <VscAdd />
            </Link>
                <thead className="bg-gray-200">
                    <tr className="border ">
                        <th className="border ">Product ID</th>
                        <th className="border ">Product Name</th>
                        <th className="border ">Product Price</th>
                        <th className="border ">Product Description</th>
                        <th className="border ">Product Image</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    {
                        products.map(
                            (product,index)=>{
                                return(
                                    <tr key={index} className="border bg-white hover:bg-gray-200 hover:">
                                        <td className="border ">{product.ProductID}</td>
                                        <td className="border ">{product.ProductName}</td>
                                        <td className="border ">{product.ProductPrice}</td>
                                        <td className="border ">{product.ProductDescription}</td>
                                        <td className="border "><img src={product.ProductImage} alt="" /></td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
            {
                products.map(
                    (product,index)=>{
                        console.log("maping",product + product._id);
                        return(
                            <h1 key={index}>
                                {product.ProductID + "" + index}
                                </h1>
                        )

                    }
                )
            }
        </div>
    )
}