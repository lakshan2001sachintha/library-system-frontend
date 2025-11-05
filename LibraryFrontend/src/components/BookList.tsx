import type{ Book } from "../types";

// Interface defining the props passed to the component
interface Props {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}

export default function BookList({ books, onEdit, onDelete }: Props) {

  // There are no books display "No book Found"
  if (books.length === 0) {
    return <p className="text-center text-gray-500">No books found.</p>;
  }

  return (
  // Display the list of book cards  
    <div className="mt-6 space-y-3">

      {/* loop through the books array and display each book's details inside the card */}

      {books.map(book => (
        <div key={book.id} className="p-4 bg-gray-50 rounded shadow-2xl flex justify-between">
          <div>
            <h3 className="font-semibold text-lg">{book.title}</h3>

            <p className="text-sm text-gray-600">
              {book.author} 🔸ISBN: {book.isbn}
            </p>

            <span className="text-sm font-medium text-blue-600">
              {book.category}
            </span>
          </div>

          {/* Action buttons update or delete a book */}
          <div className="space-x-2">
            <button
                onClick={() => onEdit(book)}
                className=" bg-indigo-500 hover:bg-gray-400 text-white font-semibold px-3 py-1 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
              >
                Update
            </button>
            <button
                onClick={() => book.id && onDelete(book.id)}
                className="px-3 py-1 bg-white text-black hover:bg-gray-400 font-semibold rounded-full transition duration-200 shadow-lg hover:shadow-xl"
              >
                Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
