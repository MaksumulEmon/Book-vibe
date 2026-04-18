import React from 'react';
import { MdOutlineStarRate } from 'react-icons/md';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        
            <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100  shadow-sm p-5">
                <figure className='bg-gray-200 p-5 rounded-2xl'>
                    <img
                        src={book.image}
                        alt={book.bookName} className='w-40- h-40 rounded-2xl' />
                </figure>


                <div className='flex gap-4 mt-3'>
                    {
                        book.tags.map((tag,ind) => {
                            return <p key={ind} className='bg-green-500 text-green-100 py-2 px-3 rounded-2xl'> {tag}</p>
                        })
                    }
                </div>

                <div className="card-body">
                    <h2 className="card-title">
                        {book.bookName}

                    </h2>
                    <p>by:  {book.author}</p>
                    <div className="card-actions justify-between border-t border-dashed pt-4">
                        <div className="badge">{book.category}</div>

                        <div className='flex gap-2 items-center justify-center text-center '>
                            <MdOutlineStarRate />
                            {book.rating}
                        </div>
                    </div>
                </div>
            </Link>

    );
};

export default BookCard;