import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../Ui/BookCard';

const WishList = () => {

    const { wishList } = useContext(BookContext);
    console.log(wishList, "bookContext");


    if (wishList.length === 0) {
        return <div>
         <h1 className='text-4xl font-extrabold text-center pt-20'>  Not Data found    </h1>   
        </div>
    }
    return (

        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {wishList.map((book, ind) => (
                <BookCard key={ind} book={book} />
            ))}
        </div>
    );
};

export default WishList;