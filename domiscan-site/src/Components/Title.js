import React from 'react'


class Title extends React.Component {
    render() {
        return( 
        <div className='main-title-box'>
            <ul className='about-box'>
                <li>About Us</li>
            </ul>
            <ul className='contact-box'>
                <li>Contact Us</li>
            </ul>
            <ul className='download-box'>
                <li>Downlaod</li>
            </ul>
        </div>
        )
    }
}

export default Title