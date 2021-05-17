import classes from './Landing.module.css';

import React from 'react';

export default function Landing({ changed, inputData }) {
    return (
        <section className={classes.Landing}>
            <h2 className={classes.Title}>Newsletter</h2>
            <form className={classes.Form} method="POST" action="#">
                <div className={classes.Container}>
                    <input 
                        className={classes.EmailInput} 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email address.." 
                        value={inputData.email}
                        onChange={evt => changed(evt)}
                    />
                    <button className={classes.Submit}>Submit</button>
                </div>
            </form>
        </section>
    );
}