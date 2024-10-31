import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "./Utility/addToDB";
import { addToWishListStored } from "./Utility/addToWishListDB";

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    const { bookId: caurrentBookId, bookName, author, image, category, totalPages, rating, tags, publisher, yearOfPublishing, review } = book;

    const handleMarkAsRead=(id)=>{
        /**
         * 1. need to understand what to store or save: => bookId ;
         * 2. where to store: database or localStorage
         * 3.Array, collection, list :
         * 4. check: if the book is already exist in the ReadList,
         * 5. if not, then need to add the book at ReadList,
         */
        addToStoredReadList(id)
    }
    const handleWishListAdd=(id)=>{
        addToWishListStored(id)
    }

    // console.log(data, book)
    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col md:gap-10 lg:flex-row">
                <div className="bg-base-200 p- md:p-16 rounded-xl">
                    <img
                        src={image}
                        className="max-w-60 md:max-w-md rounded-lg shadow-2xl m-10 md:m-20" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="pt-6">By: {author}</p>
                    <div className="divider"></div>
                    <p>{category}</p>
                    <div className="divider"></div>
                    <p className="pb-6">
                        <span className="font-bold text-lg">Review: </span>{review}
                    </p>
                    <div className="flex items-center">
                        <p className="font-bold text-lg mr-10">Tag</p>
                        <p className="flex gap-5">
                            {
                                tags.map((tag, idx) => <span key={idx} className=" bg-green-50
                         text-green-500 px-3 py-2 rounded-2xl">#{tag}</span>)
                            }
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div className="mb-8">
                        <p className="flex items-center justify-between">Number of Pages: <span className="text-left font-extrabold text-xl">{totalPages}</span></p>
                        <p className="flex items-center justify-between">Publisher: <span className="text-left font-extrabold text-xl">{publisher}</span></p>
                        <p className="flex items-center justify-between">Year of Publishing: <span className="text-left font-extrabold text-xl">{yearOfPublishing}</span></p>
                        <p className="flex items-center justify-between">Rating: <span className="text-left font-extrabold text-xl">{rating}</span></p>
                    </div>
                    <button onClick={()=>handleMarkAsRead(bookId)} className="btn mr-5 btn-outline btn-accent text-white">Mark as Read</button>
                    <button onClick={()=>handleWishListAdd(id)} className="btn btn-active btn-accent text-white">Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;