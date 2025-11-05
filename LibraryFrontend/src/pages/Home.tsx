import { useEffect, useState } from "react";
import type { Book } from "../types"; // import the Book type from type.ts

// Import API functions for CRUD operations
import { getBooks, createBook, updateBook, deleteBook } from "../api/booksApi";

import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import toast from "react-hot-toast";

export default function Home() {

  const [books, setBooks] = useState<Book[]>([]);  // state to hold list of all books

  const [editingBook, setEditingBook] = useState<Book | null>(null);  // hold two data types (Book or null)

  const [searchBook, setSearchBook] = useState("")  // state for the search books

  const [showForm, setShowForm] = useState(false);  // only for mobile


  // function to get all books from API 
  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  // Run fetchBooks() 
  useEffect(() => {
    fetchBooks();
  }, []);


  // function to handle both adding a new book and updating a book
  const handleAddOrUpdate = async (book: Book) => {
    
    try{
      
        if (editingBook && editingBook.id) {

          // update a existing book
         await updateBook(editingBook.id, book);
         toast.success("Book updated successfully!");
        } else {

          // create a new book
          await createBook(book);
          toast.success("Book added successfully!");
        }

        // reset the edit state and refresh book list
        setEditingBook(null);
        fetchBooks();

        setShowForm(false); // colse the form on mobile
    
     }catch(err : any){
      toast.error(err.message);
    }
  };


  // function to handle deleting a book
  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this book?")) {
      
      await deleteBook(id);
      toast.success("Book deleted successfully!");

      fetchBooks();
    }
  };


  // Filter the books
  const filterBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchBook.toLowerCase())
  );

  return (

    <div className="min-h-screen p-4 bg-indigo-50">
      <h1 className="text-4xl text-shadow-2xs text-indigo-600 font-bold text-center mb-6">
        Library System
      </h1>
      <div className="max-w-6xl mx-auto mt-10 h-[80vh] flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="items-center gap-2">
              {/* Search book */}
              <input
                type="text"
                placeholder="Search Books"
                value = {searchBook}
                onChange={(e) => setSearchBook(e.target.value)}
                className="bg-white shadow-xl rounded-md p-3 w-full mb-8"
              />

              {/* Add book button only mobile */}
              <button
                onClick={() => setShowForm(!showForm)}
                className="md:hidden bg-indigo-400 hover:bg-gray-400 text-white font-semibold px-5 py-1.5 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
              >
                {showForm ? "Close Form" : "Add Book"}
              </button>
          </div>

          {/* Bookform fo Add and Update books */}
          <div className={`${showForm ? "block" : "hidden"} md:block`}>
                <BookForm
                onSubmit={handleAddOrUpdate}
                selectedBook={editingBook}
                onCancel={() => {
                  setEditingBook(null);
                  setShowForm(false)
                }}
            />
          </div>  
        </div>

        {/* Right Side Block */}
        <div className="w-full md:w-2/3 h-full overflow-y-auto border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-4">
            <BookList
                books={filterBooks}
                onEdit={book => {
                  setEditingBook(book);
                  setShowForm(true);
                }}
                onDelete={handleDelete}
            />
        </div>
      </div>
    </div>
  );
}
