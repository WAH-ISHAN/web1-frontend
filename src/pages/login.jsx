import  { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
//import { useNavigate } from "react-router-dom";



export default function Loginpage(){

    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
   // const navigate = useNavigate()// meka power full teleport wage hook ekk////meken wenne sooothli page move wenwa


    function handleLogin() {
        console.log("email:", email);
        console.log("password:", Password);
        
    
    
    axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",
    {email : email,
        password : Password
     })
        .then((response)=>{
            console.log("Login successful",response.data);
            // Toaster.success(response.data?.message || "Login successful");
            localStorage.setItem("token", response.data.token);
            
            const user = response.data?.user;
            console.log("User data:", user);
            if(user.UserType === "admin"){
                window.location.href = "/Admin"; // go to admin page  meken wenne link wena eka pages
                // go to admin page
            }else{
                window.location.href = "/"; // go to homepage meken wenne link wena eka pages
                // go to homepage
            }


        }).catch((error)=>{
            console.log("Login failed",error);
            // Toaster.error(error.response || "Login failed");
        })
    

        console.log("Login button clicked");
    }

    return(
        <div className="w-full bg-red-900 h-screen bg-[url(/0001.png)] bg-cover bg-center flex ">
            <div className="boader w-[50%] h-full"></div>
            <div className="boader w-[50%] h-full flex justify-center items-center">
            <div className=" w-[450px] h-[600px] backdrop-blur-xl rounded-xl flex flex-col justify-center items-center">
                <input onChange={(e)=>{
                    setEmail(e.target.value);
                }} className="w-[400px] h-[50px] border border-amber-50 rounded-xl text-center m-[7px]" type="Email" placeholder="Email" />
                <input onChange={(e)=>{
                    setPassword(e.target.value);
                }}   className="w-[400px] h-[50px] border border-amber-50 rounded-xl text-center" type="Password"placeholder="Password" />
                <button onClick={handleLogin} className="w-[400px] h-[50px] bg-amber-50 rounded-xl text-center m-[7px] cursor-pointer">Login</button>
            </div>
            </div>
            
        </div>
    )
}