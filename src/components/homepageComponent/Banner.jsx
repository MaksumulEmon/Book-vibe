import React from 'react';
import heroimg from "../../assets/pngwing 1.png"

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto bg-[rgba(19,19,19,0.2)]  lg:rounded-3xl'>

            <div className='flex flex-col-reverse lg:flex-row justify-between  items-center rounded-2xl p-10 lg:p-15'>
                <div >
                    <h3 className='text-4xl lg:text-6xl font-extrabold max-w-130'>Books to freshen up your bookshelf</h3>
                     <button className='btn bg-[#23BE0A] text-white rounded mt-10'>View The List</button>
                </div>
                <img src={heroimg} alt="" className='flex justify-end' />
            </div>



        </div>
    );
};

export default Banner;