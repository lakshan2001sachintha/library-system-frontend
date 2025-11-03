import axios from "axios";
import type { Book } from "../types";

const BASE_URL = "http://localhost:5145/api/books"; 

export const getBooks = async () => {
  const response = await axios.get<Book[]>(BASE_URL);
  return response.data;
};

export const createBook = async (book: Book) => {
  const response = await axios.post<Book>(BASE_URL, book);
  return response.data;
};

export const updateBook = async (id: number, book: Book) => {
  const response = await axios.put<Book>(`${BASE_URL}/${id}`, book);
  return response.data;
};

export const deleteBook = async (id: number) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
