export default function Loginpage(){
    return(
        <div className="w-full bg-red-900 h-screen bg-[url(/0001.png)] bg-cover bg-center flex ">
            <div className="boader w-[50%] h-full"></div>
            <div className="boader w-[50%] h-full flex justify-center items-center">
            <div className=" w-[450px] h-[600px] backdrop-blur-xl rounded-xl flex flex-col justify-center items-center">
                <input  className="w-[400px] h-[50px] border border-amber-50 rounded-xl text-center m-[7px]" type="Email" placeholder="Email" />
                <input  className="w-[400px] h-[50px] border border-amber-50 rounded-xl text-center" type="Password"placeholder="Password" />
                <button className="w-[400px] h-[50px] bg-amber-50 rounded-xl text-center m-[7px] cursor-pointer">Login</button>
            </div>
            </div>
            
        </div>
    )
}