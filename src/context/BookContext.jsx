import React, { useContext, useState } from 'react';
import { BookContext } from './BookProvider';
import toast from 'react-hot-toast';




export const BookProvider = ({ children }) => {
    const bookContext = useContext(BookContext)
    console.log(bookContext)

    const [readList, setReadList] = useState([]);
    const [wishList, setWishlist] = useState([]);




    const handleMarkread = (currentBook) => {
        console.log(currentBook);
        const isexistBook = readList.find((book) => book.bookId === currentBook.bookId);

        if (isexistBook) {
          
            toast.error(`${currentBook.bookName} is all ready added to read list`)
            // alert(`${currentBook.bookName} is all ready added to read list`)
        } else {
            setReadList([...readList, currentBook])
            // alert(`${currentBook.bookName} is Added !`)
            toast.success(`${currentBook.bookName} is Added`);
        }
    }



    const handleWishlist = (currentBook) => {
        // toast("The is all ready")
        const isExistReadList = readList.find((book) => book.bookId === currentBook.bookId);

        if (isExistReadList) {
            toast.error("This Book is already in read list")
            // alert("This Book is already in read list")
            return;
        }


        console.log(currentBook);
        const isexistBook = wishList.find((book) => book.bookId === currentBook.bookId);

        if (isexistBook) {
            toast.error(`${currentBook.bookName} is all ready added`)
        } else {
            setWishlist([...wishList, currentBook])          
            toast.success(`${currentBook.bookName} is Added`);
        }
    }



    const data = {
        readList, setReadList, handleMarkread, handleWishlist, wishList, setWishlist
    };


    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

// export default BookProvider;