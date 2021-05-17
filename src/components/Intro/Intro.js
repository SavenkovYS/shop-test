import classes from './Intro.module.css';

import React from 'react';

export default function Intro() {
    return (
        <section className={classes.Intro}>
            <h2 className="visually-hidden">Hot offer</h2>
            <div className={classes.Container}>
                <h3 className={classes.Subtitle}>Summer <span>Collection</span></h3>
                <p className={classes.Text}>25% <span>off</span></p>
                <a href="#" className={classes.Link}><span>Details</span></a>
            </div>
        </section>
    );
}