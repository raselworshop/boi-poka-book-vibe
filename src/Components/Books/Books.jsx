import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data=> setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text4xl font-bold text-center">BOOKS:{books.length}</h2>
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