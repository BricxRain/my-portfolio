import React from 'react';
import Banner from './contents/Banner';
import AboutMe from './contents/AboutMe';
import Interest from './contents/Interest';
import Contact from './contents/Contact';
import Skills from './contents/Skills';
import Social from './contents/Social';

class Content extends React.Component {

    render () {
        return (
            <React.Fragment >
                <Banner />
                <AboutMe />
                <Skills />
                <Interest />
                <Contact />
                <Social />
            </React.Fragment>
        );
    }

}

export default Content;