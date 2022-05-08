import React from 'react';
import Banner from '../Banner/Banner'
import InventoryItems from '../InventoryItems/InventoryItems';
import Stat from '../Stat/Stat';
import Contact from '../Contact/Contact';
import CTA from "../CTA/CTA";
import PageTitle from '../../../Shared/PageTitle/PageTitle'
import ItemTable from '../../../ItemTable/ItemTable.js'
const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
           <Banner></Banner>
           <InventoryItems></InventoryItems>
           <Stat></Stat>
           <CTA></CTA>
           <Contact></Contact>
         
           
        </div>
    );
};

export default Home;