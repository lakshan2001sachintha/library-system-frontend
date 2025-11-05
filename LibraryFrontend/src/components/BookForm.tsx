import { useState, useEffect } from "react";
import type { Book } from "../types";
import toast from "react-hot-toast";

interface Props {
  onSubmit: (book: Book) => void;
  selectedBook?: Book | null;
  onCancel?: () => void;
}

export default function BookForm({ onSubmit, selectedBook, onCancel }: Props) {


  // initialize form state for book details
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    isbn: "",
    category: "",
  });


  // initialize form with selected book details
  useEffect(() => {
    if (selectedBook) setBook(selectedBook);
  }, [selectedBook]);

  // Handle input and seleted fields changes 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBook(prev => ({
      ...prev,
      [name]: value,
    }));
  };


  // validate and submit form data to parent components
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!book.title.trim()) {
      toast.error("Title is required !");
      return;
    }
    if(!book.author.trim()){
      toast.error("Author is required !");
      return;
    }

    onSubmit(book); // pass book data to parent component
    setBook({ title: "", author: "", isbn: "", category: "" });
  };


  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-2xl rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">{selectedBook ? "Edit Book" : "Add New Book"}</h2>

      {/* input and selected fields to get book data */}

      <input
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Book Title"
        className="border p-2 rounded w-full"
        maxLength={50}
      />

      <input
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Book Author"
        className="border p-2 rounded w-full"
        maxLength={50}
      />

      <input
        name="isbn"
        value={book.isbn}
        onChange={handleChange}
        placeholder="ISBN"
        className="border p-2 rounded w-full"
      />

      <select
        name="category"
        value={book.category}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      >
        <option value="">Select category</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
        <option value="Biography">Biography</option>
      </select>

      {/* Action buttons for submit and cancel form */}
      <div className="flex gap-2">

        <button
          type="submit"
          className="bg-indigo-700 hover:bg-indigo-600 text-white font-semibold px-8 py-1.5 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
        >
        {selectedBook ? "Update" : "Add"}
        </button>
 
        {/* Cancel button only visible in edit mode  */}
        {selectedBook && onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-black font-semibold px-8 py-1.5 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
