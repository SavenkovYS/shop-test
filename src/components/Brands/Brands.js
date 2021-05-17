import classes from './Brands.module.css';

import React from 'react';

export default function Brands() {
    return (
        <section className={classes.Brands}>
            <div className={classes.Container}>
                <h2 className={classes.Title}>Our Brands</h2>
                <p className={classes.Subtitle}>Small Shoes 2017 new Arrivals  mini Messenger 
                    <a href="#" className={classes.Link}> Classic Shoes</a>
                </p>
                <p className={classes.Text}>In porttitor elit ac mi placerat hendrerit. 
                Morbi accumsan, erat in ullamcorper consectetur, nisi erat efficitur eros, sagittis tristique odio turpis vitae dui. Vestibulum gravida est ut erat pretium, non pretium diam feugiat. Integer egestas suscipit lorem ac fermentum. Integer at mauris vitae justo sagittis dapibus. 
                Pellentesque sit amet nisl vitae orci vehicula faucibus. 
                Fusce et lat, feugiat est. </p>
            </div>
        </section>
    )
}