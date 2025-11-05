import axios from "axios";
import type { Book } from "../types";

// Base URL for all API requests related books.
const BASE_URL = "http://localhost:5145/api/books"; 


// Get complete list of books from backend API 
export const getBooks = async () => {
  const response = await axios.get<Book[]>(BASE_URL);
  return response.data;
};


// Create a new book in the database
export const createBook = async (book: Book) => {
  try{
    const response = await axios.post<Book>(BASE_URL, book);
      return response.data;
  }catch(err : any){
    
    // Extract message from backend response
    if(err.response?.data?.message){
      throw new Error(err.response.data.message); 
    }
    throw err;
  }
};

// Update an existing book record
export const updateBook = async (id: number, book: Book) => {
  try{
    const response = await axios.put<Book>(`${BASE_URL}/${id}`, book);
    return response.data;
  }catch(err : any){

    if(err.response?.data?.message){
      throw new Error(err.response.data.message);
    }
  }
};

// Delete an existing book record
  export const deleteBook = async (id: number) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
