import classes from './Footer.module.css';

import React from 'react';

import categories from '../../data/categories';
import Social from '../Social/Social';

export default function Footer() {
    return (
        <footer className={classes.Footer}>
            <div className={classes.Container}>
                <p className={classes.Logo}>Big Shop</p>
                <ul className={classes.List}>
                    {categories.map(category => (
                        <li key={category.id}>
                            <a href="#" className={classes.Link}>{category.name}</a>
                        </li>
                    ))}
                </ul>
                <Social />
            </div>
            <div className={classes.CopyrightContainer}>
                <small className={classes.CopyrightText}> © Copyright 2017. Big Shop by Victor Themes </small>
            </div>
        </footer>
    );
}