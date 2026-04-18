import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const { bookId: bookParamsId } = useParams();
    // console.log(bookParamsId, "bookId");

    const books = useLoaderData();
    // console.log(books)

    const expectedBook = books.find((book) => book.bookId === Number(bookParamsId));
    // console.log(expectedBook)

    const { bookId, image, author, bookName, review, tags } = expectedBook;


    const [storeBooks, setStoreBooks] = useState([]);


    const handleMarkread = (currentBook) => {

        console.log(currentBook);
        const isexistBook = storeBooks.find((book) => book.bookId ===  currentBook.bookId);

        if(isexistBook){
            alert("The is all reddy")
        }else{
            setStoreBooks([...storeBooks, currentBook])
        }
    }


    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-sm max-w-7xl mx-auto p-5">
            <figure className=' flex items-center w-full justify-center bg-gray-100'>
                <img
                    src={image}
                    alt="Album" className='h-100' />
            </figure>

            <div className="card-body">
                <h2 className="card-title text-3xl">{bookName}</h2>
                <p>{author}</p>
                <p>{review}</p>

                <div className='flex gap-4'>
                    {
                        tags.map((tag, ind) => {
                            return <p key={ind} className='bg-green-500 text-green-100 py-2 px-3 rounded-2xl'> {tag}</p>
                        })
                    }
                </div>
                <div className="card-actions">
                    <button onClick={() => handleMarkread(expectedBook)} className="btn btn-primary">Read</button>
                    <button className="btn btn-primary">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;