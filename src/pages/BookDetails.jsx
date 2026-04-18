import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    console.log(id, "id");

    const books = useLoaderData();
    console.log(books)

    const expectedBook = books.find((book) => book.id = id)
    console.log(expectedBook)
    const { bookId, category, rating, totalPages, image, author, bookName, review, tags } = expectedBook;
    return (
        
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-sm max-w-7xl mx-auto p-5">
            <figure className=' flex items-center w-full justify-center bg-gray-100'>
                <img
                    src={image}
                    alt="Album"  className='h-100'/>
            </figure>

            <div className="card-body">
                <h2 className="card-title text-3xl">{bookName}!</h2>
                <p>{author}</p>
                <p>{review}</p>

               <div className='flex gap-4'>
                 {
                    tags.map((tag,ind) => {
                        return <p key={ind} className='bg-green-500 text-green-100 py-2 px-3 rounded-2xl'> {tag}</p>
                    })
                }
               </div>
                <div className="card-actions">
                    <button className="btn btn-primary">Read</button>
                    <button className="btn btn-primary">WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;