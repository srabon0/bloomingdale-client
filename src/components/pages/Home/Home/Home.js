import React from 'react';
import Banner from '../Banner/Banner'
import InventoryItems from '../InventoryItems/InventoryItems';
import Stat from '../Stat/Stat';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <InventoryItems></InventoryItems>
           <Stat></Stat>
           <Contact></Contact>
        </div>
    );
};

export default Home;