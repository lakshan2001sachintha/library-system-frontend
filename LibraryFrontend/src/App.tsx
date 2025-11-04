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
          <Route path="/home" 
              element={
              <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-center mb-6">
                   Library Management System
                </h1>
                <Home />
              </div>
              }
          />  
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
