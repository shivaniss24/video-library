import React from 'react';
import { categories } from '../Data/categories';
import '../styles.css';
import Categories from './Categories';

const Home = () => {

    return (
        <div>
            <h1 className='h1'>Categories</h1>

            <Categories />
        </div>
    )
}

export default Home