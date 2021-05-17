import classes from './Header.module.css';

import React from 'react';

import categories from '../../data/categories';

export default function Header({ changed, inputData}) {
    return (
        <header className={classes.Header}>
            <nav className={classes.Nav}>
                <a className={classes.Logo}>Big Shop</a>
                <div className={classes.Container}>
                    <form className={classes.Form} action="#" method="GET">
                        <label className={classes.SearchLabel} htmlFor="search" aria-label="Search"></label>
                        <input 
                            className={classes.Search} 
                            type="search" 
                            name="search"
                            placeholder="Search"
                            id="search"
                            value={inputData.search}
                            onChange={evt => changed(evt)}
                        />
                        <select name="category" className={classes.List} value={inputData.category} onChange={(evt) => changed(evt)}>
                            <option hidden disabled className="main-nav__item">
                                Collection
                            </option> 
                        {categories.map(category => (
                            <option key={category.id} className="main-nav__item">
                                {category.name}
                            </option>  
                        ))}
                        </select>
                    </form>
                </div>
            </nav>
        </header>
    );
}