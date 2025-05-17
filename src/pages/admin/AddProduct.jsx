
export function AddProduct(){

            <input className=" w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"
            placeholder="ProductName" />




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