import BannerImage from './../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 p-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={BannerImage}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className='flex justify-between items-start flex-col gap-8'>
                    <h1 className="text-5xl font-bold leading-tight">Books to freshen up your bookshelf!</h1>
                    <button className="btn btn-primary bg-green-600">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;