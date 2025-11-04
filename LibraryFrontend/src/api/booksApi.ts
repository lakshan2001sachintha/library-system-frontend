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
  const response = await axios.post<Book>(BASE_URL, book);
  return response.data;
};

// Update an existing book record
export const updateBook = async (id: number, book: Book) => {
  const response = await axios.put<Book>(`${BASE_URL}/${id}`, book);
  return response.data;
};

// Delete an existing book record
export const deleteBook = async (id: number) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
