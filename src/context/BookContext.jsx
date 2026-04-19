import React, { useContext, useState } from 'react';
import { BookContext } from './BookProvider';


export const BookProvider = ({ children }) => {
    const bookContext = useContext(BookContext)
    console.log(bookContext)

    const [storeBooks, setStoreBooks] = useState([]);

    const handleMarkread = (currentBook) => {

        console.log(currentBook);
        const isexistBook = storeBooks.find((book) => book.bookId === currentBook.bookId);

        if (isexistBook) {
            alert("The is all ready")
        } else {
            setStoreBooks([...storeBooks, currentBook])
            alert(`${currentBook.bookName} is Added !`)
        }
    }


    const data = {
        storeBooks, setStoreBooks, handleMarkread,
    };


    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

// export default BookProvider;