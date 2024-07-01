import React from 'react';

function PageHeader ( props ) {
    const { title, subTitle } = props;

    return (
        <div className="page-header text-center"
        // style={ { backgroundImage: `url(images/page-header-bg.jpg)` } }
        style={ { backgroundImage: `url(images/import/background-shop.png)` } }
         >
            <div className="container">
                <h2 className="text-high-pink">{ title }</h2>
            </div>
        </div>
    );
}

export default React.memo( PageHeader );