import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data=> setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">BOOKS:{books.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map((book)=> <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;

/**
 * 1. state to store books
 * 2. useEffect for sharing data
 * 3. fetch to load data
 * 4. set the data to books state
 */