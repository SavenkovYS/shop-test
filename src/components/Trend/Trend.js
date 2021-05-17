import classes from './Trend.module.css';

import React from 'react';

import ProductCard from '../ProductCards/ProductCard/ProductCard';

export default function Trend() {
    return (
        <section className={classes.Trend}>
            <div className={classes.Container}>
                <h2 className={classes.Title}>Trendy Arrivals</h2>
                <div className={classes.List}>
                    <ProductCard url="/img/bag-1.png" name="Black Genuine Leather Bags " price="$ 23.20" />
                    <ProductCard url="/img/bag-2.png" name="Fashion Red Leather Bags" price="$ 20.16" />
                    <ProductCard url="/img/bag-3.png" name="Fashion Genuine Leather Bags" price="$ 30.14" />
                    <ProductCard url="/img/bag-4.png" name="Simply Leather Bags" price="$ 15.20 " />
                    <ProductCard url="/img/bag-5.png" name="New Fashion Leather Bags" price="$ 25.20 " />
                    <ProductCard url="/img/bag-6.png" name="Single Hand Models Bags" price="$ 17.6" />
                </div>
            </div>
        </section>
    );
}