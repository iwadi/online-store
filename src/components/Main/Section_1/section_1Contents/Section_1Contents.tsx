// import React from 'react';
import '../../../../css/App.css';
import Section_1Titles from './Section_1Titles';
import Section_1Buttons from './Section_1Buttons';
import Section_1Images from './Section_1Images';

function Section_1Contents()  {
    return (
        <div className="section_1-contents">
            <Section_1Titles />
            <Section_1Buttons />
            <Section_1Images />
        </div>
    );
};

export default Section_1Contents;