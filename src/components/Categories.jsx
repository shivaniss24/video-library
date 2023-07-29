import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import Videos from './Videos';

const Categories = () => {

    const [display, setDisplay] = useState(true);
    const [category, setCategory] = useState(null);

    const handleCategory = (category) => {
        setCategory(category);
        setDisplay(false);
    }

    const { categories } = useAppContext();
    return (
        <div class="row">
            {display ?
                categories.map(({ thumbnail, src, category }) => (
                    <a className="col" onClick={(e) => handleCategory(category)}>
                        <div className="card small">
                            <div className="card-image">
                                <img src={thumbnail} />
                            </div>
                            <div className="card-content">
                                <span className="card-title">{category}</span>
                            </div>
                        </div>
                    </a>
                ))
                :
                <div>
                    <Videos category={category} />
                </div>
            }
        </div>


    )
}

export default Categories