import React from 'react'
import "./homeSection.css"
import { useTranslation } from 'react-i18next'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

function HomeSection() {
    const openInNewTab = (url: string): void => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    const { t } = useTranslation();
    return (
        <div className='homeSection'>
            <div className="homeSection_Container">
                <div className="home_salardev">
                    <Tooltip id="my-tooltip" />
                    <h1><span>&lt;</span>salar<span className='salardev_space'> </span>dev<span>/&gt;</span></h1>
                    <p className='salardev_about'>{t('salardev_about')}</p>
                    <div className="social" >
                        <div className="social_contaner" id='insta' data-tooltip-id="my-tooltip" data-tooltip-content="Instagram => salar_dev" style={{ background: "#4075cc47" }} onClick={() => openInNewTab('https://www.instagram.com/salar_dev')}>
                            <InstagramIcon className='social_contaner_icon' />
                        </div>

                        <div className="social_contaner" id='youtube' data-tooltip-id="my-tooltip" data-tooltip-content="YouTube => Salar Dev" style={{ background: "#e9191959" }} onClick={() => openInNewTab('https://www.youtube.com/@SalarDev')}>
                            <YouTubeIcon className='social_contaner_icon' />
                        </div>

                        <div className="social_contaner" id='whatsApp' data-tooltip-id="my-tooltip" data-tooltip-content="WhatsApp => +9647508684288" style={{ background: "#30ce1862" }} onClick={() => openInNewTab('https://wa.me/+9647508684288')}>
                            <WhatsAppIcon className='social_contaner_icon' />
                        </div>

                        <div className="social_contaner" id='github' data-tooltip-id="my-tooltip" data-tooltip-content="GitHub => salar-dev" style={{ background: "#757a747d" }} onClick={() => openInNewTab('https://github.com/salar-dev')}>
                            <GitHubIcon className='social_contaner_icon' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection