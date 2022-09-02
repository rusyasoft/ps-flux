import React from 'react';
import { callPromise } from '../api/courseApi';
class AboutPage extends React.Component {

    componentDidMount() {
        callPromise();
    }


    render() {
        return (
            <>
                <h2>About</h2>
                <p>This app uses React.</p>
            </>
        );
    }
}

export default AboutPage;