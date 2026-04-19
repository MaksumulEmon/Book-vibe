import React, { useContext } from 'react';
import { BookContext } from '../context/BookProvider';

const Bookpage = () => {
    const { storeBooks } = useContext(BookContext);
    console.log(storeBooks, "bookContext")
    return (
        <div>
            Books page
        </div>
    );
};

export default Bookpage;