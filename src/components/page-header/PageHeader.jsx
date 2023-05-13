import React from 'react';
import './page-header.scss';
const PageHeader = props => {
    return (
        <div className='page-header'>
            <h1>{props.children}</h1>
        </div>
    );
};

export default PageHeader;
