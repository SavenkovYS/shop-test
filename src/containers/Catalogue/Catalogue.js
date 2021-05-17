import React, { useState } from 'react';

import Intro from '../../components/Intro/Intro';
import Trend from '../../components/Trend/Trend';
import Brands from '../../components/Brands/Brands';
import Showcase from '../../components/Showcase/Showcase';
import Landing from '../../components/Landing/Landing';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Catalogue() {
    const [inputData, setInputData] = useState({search: '', category: 'Collection', email: ''});

    function inputChangeHandler(event) {
        const {name, value} = event.target;
        setInputData(prevInputData => ({...prevInputData, [name]: value}));
    }

    console.log(inputData)
    return (
        <>
            <Header changed={inputChangeHandler} inputData={inputData} />
            <main>
                <Intro />
                <Trend />
                <Brands />
                <Showcase />
                <Landing changed={inputChangeHandler} inputData={inputData}/>
            </main>
            <Footer />
        </>
    );
}