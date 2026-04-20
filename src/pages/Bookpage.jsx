import React, { useContext } from 'react';
import { BookContext } from '../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../components/listedBooks/ReadList';
import WishList from '../components/listedBooks/WishList';

const Bookpage = () => {
    const { storeBooks, wishList } = useContext(BookContext);
    console.log(storeBooks, wishList, "bookContext")

    return (
        <div className='max-w-7xl mx-auto  '>

            <div className='bg-gray-300 rounded-xl p-8 flex justify-center mb-10 mx-5 lg:mx-0'>
                <p className='font-bold text-3xl text-black '>Book</p>
            </div>




            <Tabs className='my-3 mx-5 lg:mx-0'>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wish Books</Tab>
                </TabList>

                <TabPanel>
                    <ReadList />
                </TabPanel>
                <TabPanel>
                    <WishList />
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Bookpage;