import React from 'react'
import { Link } from 'react-router-dom';


class Title extends React.Component {
    render() {
        return(
            <div className='main-title-box'>
                <ul className='about-box'>
                    <li><Link to="../domiscan-site/about">About Us</Link></li>
                </ul>
                <ul className='contact-box'>
                    <li><Link to="../domiscan-site/contact">Contact Us</Link></li>
                </ul>
                <ul className='download-box'>
                    <li><Link to="../domiscan-site/download">Download</Link></li>
                </ul>
            </div>
        )
    }
}

export default Title