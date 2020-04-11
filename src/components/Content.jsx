import React from 'react';
import Banner from './contents/Banner';
import AboutMe from './contents/AboutMe';
import MyInterest from './contents/MyInterest';
import ContactMe from './contents/ContactMe';

class Content extends React.Component {

    render () {
        return (
            <React.Fragment >
                <Banner />
                <AboutMe />
                <MyInterest />
                <ContactMe />
            </React.Fragment>
        );
    }

}

export default Content;