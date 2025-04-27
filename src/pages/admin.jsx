import { Link, Routes, Route } from "react-router-dom";
import { FaUserNinja } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { PiStorefrontFill } from "react-icons/pi";
export default function Adminpage() {
  return (
    <div className="w-full h-screen bg-gray-600 flex p-2">
      <div className="h-full w-[300px]">
        <Link to="/Admin/users" className="block p-2 flex  items-center"><FaUserNinja className="mr-2" /> Users </Link>
        <Link to="/Admin/products" className="block p-2 flex  items-center"><MdOutlineProductionQuantityLimits className="mr-2"/>Products</Link>
        <Link to="/Admin/orders" className="block p-2 flex  items-cente"><PiStorefrontFill className="mr-2" />Orders</Link>
      </div>
      <div className="h-full bg-white w-[calc(100vw-300px)] rounded-lg">
        <Routes path="/*">
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
        </Routes>
      </div>
    </div>
  );
}
