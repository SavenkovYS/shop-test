import classes from './Social.module.css';

import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import socialList from '../../data/socialList';

export default function Social() {
    return (
        <div>
            <ul className={classes.List}>
                {socialList.map(item => {
                    const itemName = item.name;
                    console.log(itemName)
                    return <li key={item.id} className={`${classes.Item} ${classes[itemName]}`}>
                        <a href="#" className={classes.Link} aria-label={item.name}>
                            {ReactHtmlParser(item.img)}
                        </a> 
                    </li>
                })}
            </ul>
        </div>
    );
}