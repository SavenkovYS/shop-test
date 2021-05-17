import classes from './Showcase.module.css';

import React, { useState } from 'react';

import catalogueCategories from '../../data/catalogueCategories';
import products from '../../data/showcaseCatalogue';
import ProductCard from '../ProductCards/ProductCard/ProductCard';

export default function Showcase() {
    const [currentCategory, setCurrentCategory] = useState('watches');

    function handleClick(evt) {
        setCurrentCategory(evt.target.value.toLowerCase())
    }

    return (
        <section className={classes.Showcase}>
            <div className={classes.Container}>
                <h2 className={classes.Title}>Our Showcase</h2>
                <div className={classes.Tab}>
                    {catalogueCategories.map(category => (
                        <div key={category.id} >
                            <label 
                            className={`${classes.TabLabel} ${category.name.toLocaleLowerCase() === currentCategory ? classes.active : ''}`}
                            htmlFor={category.name}>
                                {category.name}
                            </label>
                            <input 
                                onClick={handleClick}
                                className="visually-hidden" 
                                type="radio" 
                                name="tab-button" 
                                id={category.name} 
                                value={category.name}
                            />
                        </div>
                    ))}
                </div> 
                <div className={classes.List}>
                    {products.filter(product => product.category === currentCategory)
                    .map(product => (
                        <ProductCard 
                            key={product.id} 
                            url={product.img} 
                            name={product.name} 
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}       