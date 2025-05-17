import { Link } from "react-router-dom";
import { useLocation, useState /*,useNavigate*/ } from 'react';
import toast from "react-hot-toast";


export function EditProduct(){


const locationdata =  useLocation();

console.log(locationdata.state);
if(locationdata.state == null){
    toast.error("Please login to edit product");
    Window.location.href="/admin/products"
    
}


const [ProductID, setProductID] = useState(locationdata.state.productId);
const[ProductName, setProductName] = useState(locationdata.state.name);
const [altNames, setAltNames] = useState(locationdata.state.altNames.join(","));
const[ProductDescription, setProductDescription] = useState(locationdata.state.description);
const[ProductPrice, setProductPrice] = useState(locationdata.state.price);
const[ProductlabelPrice, setProductlabelPrice] = useState(locationdata.state.labeledPrice);
const[ProductImage, setProductImage] = useState(locationdata.state.images);
const[ProductStoke, setProductStoke] = useState(locationdata.state.stock);
//const navigate = useNavigate();


   async function handleSubmit() {
    // TODO: Implement image upload logic if needed
    try {
        // Example: If you want to upload images, replace the following with your logic
        // let uploadedImages = await Promise.all([...ProductImage].map(file => uploadMedia(file)));
        // For now, just use the current ProductImage state
        let imagesToSubmit = ProductImage;
        if (!imagesToSubmit || imagesToSubmit.length === 0) {
            imagesToSubmit = locationdata.state.images;
        }

        const altNamesInArray = altNames.split(",");
        const product = {
            productId: ProductID,
            name: ProductName,
            altNames: altNamesInArray,
            price: ProductPrice,
            labeledPrice: ProductlabelPrice,
            description: ProductDescription,
            stock: ProductStoke,
            images: imagesToSubmit,
        };
        const token = localStorage.getItem("token");
        console.log("Token:", token);
        console.log("Product to submit:", product);
        // TODO: Submit product to API here
    } catch (error) {
        toast.error("Failed to submit product: " + error.message);
    }



return(
    <div className="w-full h-full rounded-lg  flex justify-center items-center">
    <div className="w-[500px] h-[600px]  rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-700 m-[10px]">
            Edit Product
        </h1>
        <input
            disabled    
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
                edit Product
            </button>
        </div>
    </div>
</div>
)



}}