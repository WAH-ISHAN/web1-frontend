import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Adminpage from './pages/admin.jsx';
import Loginpage from './pages/login';
import Testing from './pages/Testing.jsx';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
    <Toaster postion="top-center"></Toaster>
      <Routes path="/*">
     <Route path="/Admin/*" element={<Adminpage />} />
     <Route path="/login/*" element={<Loginpage />} />
      <Route path="/test" element={<Testing/>} />
     <Route path="/" element={<h1>Home</h1>} />
     <Route path="/*" element={<h1>404 Error</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;





