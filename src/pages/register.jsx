import { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user/register",
        {
          fullName,
          email,
          password,
        }
      );
      toast.success(response.data?.message || "Registration successful");
      window.location.href = "/login";
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full bg-red-900 h-screen bg-[url(/0001.png)] bg-cover bg-center flex">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="border w-[50%] h-full"></div>
      <div className="border w-[50%] h-full flex justify-center items-center">
        <div className="w-[450px] h-[650px] backdrop-blur-xl rounded-xl flex flex-col justify-center items-center">
          <input
            onChange={(e) => setFullName(e.target.value)}
            className="w-[400px] h-[50px] border border-amber-50 rounded-xl text-center m-[7px]"
            type="text"
            placeholder="Full Name"
            value={fullName}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-[400px] h-[50px] border border-amber-50 rounded-xl text-center m-[7px]"
            type="email"
            placeholder="Email"
            value={email}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-[400px] h-[50px] border border-amber-50 rounded-xl text-center m-[7px]"
            type="password"
            placeholder="Password"
            value={password}
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-[400px] h-[50px] border border-amber-50 rounded-xl text-center m-[7px]"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
          />
          <button
            onClick={handleRegister}
            className="w-[400px] h-[50px] bg-amber-50 rounded-xl text-center m-[7px] cursor-pointer"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="text-center m-[10px] text-gray-600">
            Already have an account?&nbsp;
            <span className="bg-green-700 text-white px-2 rounded">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

