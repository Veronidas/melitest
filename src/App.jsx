import React from 'react';
import ItemInfo from './components/ItemInfo';
import { ItemsList } from './components/ItemsList';
import './Styles/Styles.css'
import SearchBar from './components/SearchBar';

import { Link, Route } from 'wouter';


export function App(){

    return(

        <div className='App'>
            <section className='App-content'>
                <SearchBar />
                <Route 
                component= {ItemsList}
                path="/item/:keyword" /> 
                {/* <Link to='/item/:id'/> */}
            </section>
        </div>);
}