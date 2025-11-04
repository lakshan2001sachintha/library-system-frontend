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
    if (!book.title || !book.author || !book.isbn) {
      toast.error("All fields are required!");
      return;
    }
    onSubmit(book); // pass book data to parent component
      toast.success(selectedBook ? "Book updated successfully!" : "Book added successfully!");
    setBook({ title: "", author: "", isbn: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">{selectedBook ? "Edit Book" : "Add New Book"}</h2>

      {/* input and selected fields to get book data */}

      <input
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Book Title"
        className="border p-2 rounded w-full"
      />

      <input
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Book Author"
        className="border p-2 rounded w-full"
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
        {selectedBook ? "Update" : "Add"}
        </button>
 
        {/* Cancel button only visible in edit mode  */}
        {selectedBook && onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
