import { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { Loader } from "../componens/loading";
import { Link } from "react-router-dom";

export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState("");


  function handleLogin() {
    console.log("email:", email);
    console.log("password:", Password);
    setLoading(true)

    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/user/", {
        email: email,
        password: Password,
      })
      .then((response) => {
        console.log("Login successful", response.data);
        toast.success(response.data?.message || "Login successful");
        localStorage.setItem("token", response.data.token);

        const user = response.data?.user;
        console.log("User data:", user);
        if (user.UserType === "admin") {
          window.location.href = "/Admin";
        } else {
          window.location.href = "/";
        }
        setLoading(false)
      })
      .catch((error) => {
        console.log("Login failed", error);
        toast.error(error.response?.data?.message || "Login failed");
        setLoading(false)
      });

    console.log("Login button clicked");
  }

  return (
    <div className="w-full bg-red-900 h-screen bg-[url(/0001.png)] bg-cover bg-center flex">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="boader w-[50%] h-full"></div>
      <div className="boader w-[50%] h-full flex justify-center items-center">
        <div className="w-[450px] h-[600px] backdrop-blur-xl rounded-xl flex flex-col justify-center items-center">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-[400px] h-[50px] border border-amber-50 rounded-xl text-center m-[7px]"
            type="Email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-[400px] h-[50px] border border-amber-50 rounded-xl text-center"
            type="Password"
            placeholder="Password"
          />
          <button
            onClick={handleLogin}
            className="w-[400px] h-[50px] bg-amber-50 rounded-xl text-center m-[7px] cursor-pointer"
          >
            {
              loading ? " loading ... " : "Login"
            }
          </button>
          <p className="text-center m-[10px] text-gray-600">
           You don't have an account?
            &nbsp;
            <span className="bg-green-700">
              <Link to="/register">Register Now</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
