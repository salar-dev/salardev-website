import React, { useEffect, useCallback } from 'react'
import { Background, Navbar } from '../components'
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import { HomeSection, Services } from './'

function Home() {
    const { i18n } = useTranslation();
    const location = useLocation();
    const changeLanguage = useCallback((language: string) => {
        i18n.changeLanguage(language);
    }, [i18n]);

    useEffect(() => {
        if (location.pathname.startsWith("/ar")) {
            changeLanguage("ar");
        } else {
            changeLanguage("en");
        }
    }, [location.pathname, changeLanguage]);

    return (
        <div className="App">
            <Background />
            <Navbar />
            <HomeSection />
            <Services />
        </div>
    );
}

export default Home;
