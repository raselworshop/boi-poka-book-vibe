import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../BookDetails/Utility/addToDB';
import Book from '../Book/Book';
import { getAddWishListStored } from '../BookDetails/Utility/addToWishListDB';
const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();
    useEffect(() => {
        const readStoredList = getStoredReadList();
        const readStoredListInt = readStoredList.map(id => parseInt(id))

        console.log(readStoredList, allBooks)
        const readBookList = allBooks.filter(book => readStoredListInt.includes(book.bookId));

        setReadList(readBookList)

    }, [])
    useEffect(() => {
        const wishListStore = getAddWishListStored();
        const wishListStoreInt = wishListStore.map(id => parseInt(id))
        const wishListBook = allBooks.filter(book => wishListStoreInt.includes(book.bookId))
        setWishList(wishListBook)
    }, [])
    const handleSort = sortType =>{
        setSort(sortType);
        if(sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a, b)=> a.rating - b.rating);
            setReadList(sortedReadList);
        }
        if(sortType === 'Number Of Pages'){
            const sortedNumberPage = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
            setReadList(sortedNumberPage)
        }
        if(sortType === 'Publish Year'){
            const sortedPublishYear = [...readList].sort((a,b)=> a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedPublishYear)
        }
    }
    return (
        <div className='mb-12'>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1"> 
                    {sort ? `Sort By: ${sort}`: 'Sort by'}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=>handleSort('Number Of Pages')}><a>Number Of Pages</a></li>
                    <li onClick={()=>handleSort('Publish Year')}><a>Publish Year</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Reads Books</Tab>
                    <Tab>Wish List Books</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read: {readList.length}</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {readList.map(book => <Book key={book.bookId} book={book}></Book>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List to Read: {wishList.length}</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            wishList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;