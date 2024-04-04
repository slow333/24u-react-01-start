import React from 'react';
import FormItems from "../components/far-away/FormItems.jsx";
import {FarawayProvider} from "../context/FarawayContext.jsx";
import ItemList from "../components/far-away/ItemList.jsx";
import Header from "../ui/Header.jsx";

const FarAway = () => {

  return (
     <>
       <FarawayProvider>
         <Header  family='bungee' weight='600'>Far Away</Header>
         <FormItems />
         <ItemList />
       </FarawayProvider>
     </>
  );
};

export default FarAway;