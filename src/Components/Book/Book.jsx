import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
    const {bookId, image, bookName, author, tags, category } = book;
    return (
        <Link to={`books/${bookId}`}>
            <div className="card bg-base-100 w-96 p-6 shadow-xl">
                <figure className='bg-base-200 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt="Book" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-5'>
                        {
                            tags.map((tag, idx) => <button key={idx} className='btn btn-xs bg-green-50 text-green-500'>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className=' border-t-2 border-dashed pb-4 mt-4'></div>
                    <div className="card-actions justify-between items-center">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <span className='mr-4'>5.00</span>
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-00 border-black" defaultChecked />

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;