import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      {/*Toaster from react-hot-toast for showing notification */}
      <Toaster position="top-left" reverseOrder={false} />

      {/* To define all routes of the app */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/home" element={<Home/>} />  
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
