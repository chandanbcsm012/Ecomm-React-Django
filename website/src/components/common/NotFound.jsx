import React, { Component } from 'react';
import Footer from './Footer';
import Banner from './Banner';

export class NotFound extends Component {
    render() {
        return (
            <>
            <Banner title={"Opps! Page Not Found"} />
            <Footer/>
            </>
        )
    }
}

export default NotFound
