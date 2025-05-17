import axios from "axios"
import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { FcFullTrash } from "react-icons/fc";
import { FaPenFancy } from "react-icons/fa";
import toast from "react-hot-toast";
import { Loader } from "../../componens/loading";

export function AdminProduct() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

//product eka load krnna me effect eka use krnwa ikmning load wenwa meke use krama
    useEffect(
        () =>{
            if(!loading){
              axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
                (response)=>{
                    console.log
                    setProducts(response.data);
                    setLoading(true);
                }
            )
        }
        
},[loading])


    async function handleDelete(id){
        const token = localStorage.getItem("token");
        if(token == null){
            toast.error("Please login to delete product");
            return;
        }
        try{
             await axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/product/"+id,{
            headers:{
                Authorization: "Bearer"+ token
            }
        })
        setLoading(false);
        toast.success("Product deleted successfully");
        }catch(error){
            console.log(error);
            toast.error("Error deleting product");
        }
    }

    return(
        <div className="w-full h-full  rounded-lg relative">
            <Link to={"/AddProduct"} className =" absolute text-white bg-gray-200 p-[12px] text-3xl rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-700 right-5 bottom-5">
                <VscAdd />
            </Link>
            {loading&&<table className="w-full">
                {
                    !loading&& 
                    <Loader/>
                }
                
                </table>}
            
            <table className=" w-full h-full table-auto border-collapse border border-white">
                <thead className="bg-gray-200">
                    <tr className="border ">
                        <th className="border ">Product ID</th>
                        <th className="border ">Product Name</th>
                        <th className="border ">Product Price</th>
                        <th className="border ">Product Description</th>
                        <th className="border ">Product Image</th>
                        <th className="border">Action</th>
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
                                        <td className="border">
                                            <div className="w-full h-full flex justify-center items-center gap-2">
                                                <FcFullTrash onClick={()=>{handleDelete(product.ProductID)}} className="text-[25px] m-[10px] hover:text-red-500" />
                                                <FaPenFancy onClick={
                                                    ()=>{
                                                        navigate("/editProduct/"+product.ProductID,{
                                                            state:{
                                                                product:product
                                                            }
                                                        })
                                                    }
                                                } className="text-[25px]  m-[10px] hover:text-blue-500"  />
                                            </div>
                                        </td>
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