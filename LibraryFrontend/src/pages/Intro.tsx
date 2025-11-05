import { useNavigate } from 'react-router-dom';
import book from '../assets/book.png';

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 flex flex-col">
        
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-indigo-100 px-6 sm:px-12 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-indigo-900">
          Library<span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">MS</span>
        </h1>
        <div className="hidden sm:flex space-x-6 font-semibold text-indigo-800">
          <button className="hover:text-indigo-500 transition duration-150">Home</button>
          <button className="hover:text-indigo-500 transition duration-150">About</button>
          <button className="hover:text-indigo-500 transition duration-150">Contact</button>
        </div>
        <button
          onClick={() => navigate('/home')}
          className="bg-indigo-100 hover:bg-indigo-200 text-indigo-900 px-5 py-2 rounded-full font-medium transition duration-200"
        >
          Get Started
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-12 text-center space-y-10">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-indigo-900 leading-tight">
          Library Management System
        </h2>

        <img
          src={book}
          alt="Book Illustration"
          className="w-44 sm:w-60 mx-auto drop-shadow-lg transition-transform duration-300 hover:scale-105"
        />

        <p className="text-gray-700 text-base sm:text-lg max-w-2xl leading-relaxed">
          Seamlessly manage your books, track inventory, and access your library from anywhere.
          Designed for speed, clarity, and simplicity.
        </p>

        <button
          onClick={() => navigate('/home')}
          className="bg-indigo-700 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
        >
          Explore Library
        </button>
      </main>
    </div>
  );
}
