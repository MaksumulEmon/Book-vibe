import React, { use } from 'react';
import BookCard from '../Ui/BookCard';

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const Books = () => {
    const books = use(booksPromise);
    console.log(books);
    return (
        <div className='max-w-7xl mx-auto py-5'>
            <h1 className='text-3xl font-bold text-center'>Book</h1>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-2xl m-5'>


                {books.map((book,ind) => {
                   
                    return (
                    <BookCard key={ind} book={book}/>
                    );
                })}

            </div>

        </div>
    );
};

export default Books;