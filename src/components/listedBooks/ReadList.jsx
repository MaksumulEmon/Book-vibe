import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookCard from '../Ui/BookCard';

const ReadList = () => {

    const { readList, wishList } = useContext(BookContext);
    console.log(readList, wishList, "bookContext");

      if (readList.length === 0) {
        return <div>
         <h1 className='text-4xl font-extrabold text-center pt-20 ded-xl items-center '>  Not Data found    </h1>   
        </div>
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {readList.map((book,ind) => (
                < BookCard key={ind} book={book}/>
            ))}
        </div>

      
    );
};

export default ReadList;