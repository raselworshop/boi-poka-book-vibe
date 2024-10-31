import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/booksData.json'),//we don't load all the data for one data
      },
      {
        path:'listedBooks',
        element: <ListedBooks></ListedBooks>,
        //worst way to load some data from all data
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer></ToastContainer>
  </StrictMode>,
)
