import React, { Component } from 'react';
import './MainPage.css';
import AdvistisementOne from '../AdvistisementOne/AdvistisementOne';
import AdvistisementFour from '../AdvistisementFour/AdvistisementFour';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return (
            <div className='main_page'>
                <div style={{ 
                    paddingTop: '285px', 
                    display: 'flex', 
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    <AdvistisementOne />
                    <AdvistisementFour />
                    <AdvistisementOne />
                    <AdvistisementFour />
                    <AdvistisementFour />
                    <AdvistisementOne />
                    <AdvistisementFour />
                    <AdvistisementOne />
                </div>
            </div>
        );
    }
}

export default MainPage;
