
import { useNavigate } from 'react-router-dom';
import book from '../assets/book.png';

// This is the Landing page 
export default function Intro(){

    const navigate = useNavigate();

    return (
        <div className="bg-indigo-950 min-h-screen flex items-center justify-center p-4">
         <div className="flex flex-col items-center justify-center space-y-8 text-center">

            <div>
                <img src={book} className='animate-float'/>
            </div>

            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition text-sm sm:text-base md:text-lg"
               onClick={() => navigate("/home")}     
            >
                Get Started 
            </button>
            
         </div>
        </div>
    );
}