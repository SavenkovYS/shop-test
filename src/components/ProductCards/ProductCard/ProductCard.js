import classes from './ProductCard.module.css';

import React, { useState } from 'react';

export default function ProductCard({ url, name, price }) {
    const [isHovered, setIsHovered] = useState(false);

    const addToCart = isHovered && <a href="#" className={classes.Add}>Add to Cart</a>
    const likes = isHovered && (
        <a href="#" className={`${classes.Likes} ${classes.Button}`} aria-label="Like">
            <span>122</span>
        </a>
    );

    const comments = isHovered && (
        <a href="#" className={`${classes.Comments} ${classes.Button}`} aria-label="Read Comments">
            <span>120</span>
        </a>
    );

    return (
        <article 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            className={classes.ProductCard}
        >
            <div className={classes.ImgContainer}>
                <img src={url} className={classes.Img} />
            </div>
            <div className={classes.ContentContainer}>
                <a href="#" className={classes.Name}>{name}</a>
                <p className={classes.price}>{price}</p>
            </div>
            {likes}
            {comments}
            {addToCart}
        </article> 
    );
} 