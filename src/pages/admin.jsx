import { Link, Routes, Route } from "react-router-dom";
import { FaUserNinja } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { PiStorefrontFill } from "react-icons/pi";
import { AdminProduct } from "./admin/adminProduct";
import { Toaster } from "react-hot-toast";
import { AddProduct } from "./admin/AddProduct";
import { EditProduct } from "./admin/editeProduct";

export default function Adminpage() {
return (
  <div className="w-full h-screen  bg-gray-600 flex p-2">
    <div className="h-full w-[300px]">
      <Link to="/Admin/users" className="p-2 flex items-center"><FaUserNinja className="mr-2" /> Users </Link>
      <Link to="/Admin/products" className="p-2 flex items-center"><MdOutlineProductionQuantityLimits className="mr-2" /> Products </Link>
      <Link to="/Admin/orders" className="p-2 flex items-center"><PiStorefrontFill className="mr-2" /> Orders </Link>
    </div>

    <div className="h-full bg-white w-[calc(100vw-300px)] rounded-lg">
      <Routes path="/*">
        <Route path="/users/" element={<h1>Users</h1>} />
        <Route path="/products" element={<AdminProduct />} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct/>} />
      </Routes>
    </div>
  </div>
);
}