import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../BookDetails/Utility/addToDB';
import Book from '../Book/Book';
import { getAddWishListStored } from '../BookDetails/Utility/addToWishListDB';
const ListedBooks = () => {
    const [readList, setReadList]=useState([]);
    const [wishList, setWishList]=useState([])
    const allBooks = useLoaderData();
    useEffect(()=>{
        const readStoredList = getStoredReadList();
        const readStoredListInt = readStoredList.map(id => parseInt(id))

        console.log(readStoredList, allBooks)
        const readBookList = allBooks.filter(book => readStoredListInt.includes(book.bookId));

        setReadList(readBookList)

    },[])
    useEffect(()=>{
        const wishListStore = getAddWishListStored();
        const wishListStoreInt = wishListStore.map(id => parseInt(id))
        const wishListBook = allBooks.filter(book => wishListStoreInt.includes(book.bookId))
        setWishList(wishListBook)
    }, [])
    return (
        <div className='mb-12'>
            <h3 className="text-3xl my-8">Listed Books</h3>
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