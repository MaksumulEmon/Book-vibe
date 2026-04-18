import React, { use } from 'react';
import { MdOutlineStarRate } from 'react-icons/md';

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const Books = () => {
    const books = use(booksPromise);
    console.log(books);
    return (
        <div className='max-w-7xl mx-auto py-5'>
            <h1 className='text-3xl font-bold text-center'>Book</h1>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-2xl m-5'>


                {books.map((book) => {
                    const { image, author, bookName, tags } = book;
                    return <div className="card bg-base-100  shadow-sm p-5">
                        <figure className='bg-gray-200 p-5 rounded-2xl'>
                            <img
                                src={image}
                                alt={bookName} className='w-40- h-40 rounded-2xl' />
                        </figure>


                        <div className='flex gap-4 mt-3'>
                            {
                                tags.map((tag) => {
                                    return <p className='bg-green-500 text-green-100 py-2 px-3 rounded-2xl'> {tag}</p>
                                })
                            }
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">
                                {bookName}

                            </h2>
                            <p>by:  {author}</p>
                            <div className="card-actions justify-between border-t border-dashed pt-4">
                                <div className="badge">{book.category}</div>

                                <div className='flex gap-2 items-center justify-center text-center '>
                                    <MdOutlineStarRate />
                                   {book.rating}
                                </div>
                            </div>
                        </div>
                    </div>
                })}

            </div>

        </div>
    );
};

export default Books;