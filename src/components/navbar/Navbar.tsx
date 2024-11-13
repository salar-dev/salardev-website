import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from "react-router-dom";
import TranslateIcon from '@mui/icons-material/Translate';
import { Fade as Hamburger } from "hamburger-react";

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  let navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const changeLang = () => {
    if (location.pathname === "/ar") {
      navigate("/");
    } else {
      navigate("/ar");
    }
  }

  useEffect(() => {
    if (!isOpen) {
      const handleScroll = () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 0) {
          navbar!.classList.add("scrolled");
        } else {
          navbar!.classList.remove("scrolled");
        }
      };

      // Add the event listener when the component mounts
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => window.removeEventListener("scroll", handleScroll);
    }

  }, [isOpen]);



  return (
    <div className='navbar'>
      <div className="navbar_content">
        <TranslateIcon className='translate' onClick={changeLang} />
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
        </div>
        <div className="sections" style={{ flexDirection: location.pathname.startsWith("/ar") ? "row" : "row-reverse" }}>
          <span>{t('projects')}</span>
          <span>{t('experiences')}</span>
          <span>{t('services')}</span>
          <span>{t('home')}</span>
        </div>
        <div className="sections_menu" style={{ display: isOpen ? "flex" : "none" }}>
          <div className="sections_menu_content">
            <span>{t('projects')}</span>
            <span>{t('experiences')}</span>
            <span>{t('services')}</span>
            <span>{t('home')}</span>
          </div>

        </div>
        <div className='navbarBox'></div>
      </div>
    </div>
  )
}

export default Navbar