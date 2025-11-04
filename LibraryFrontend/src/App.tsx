import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/home" 
              element={
              <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-3xl font-bold text-center mb-6">
                  📚 Library Management System
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
