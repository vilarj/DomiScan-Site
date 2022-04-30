import React from 'react'


class Body extends React.Component {
    render() {
        return( 
        <div className='main-body-box'>
            <div className='body-about-box'><h1>About Us</h1></div>
            <div className='body-domiscan-box'><h1>DomiScan</h1></div>
            <div className='body-features-box'><h1>Features & Technology</h1></div>
        </div>
        )
    }
}

export default Body