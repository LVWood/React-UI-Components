import React from 'react';

import ImageThumbnail from './ImageThumbnail.js';
import HeaderContent from './HeaderContent.js';

import './Header.css';

function HeaderContainer(){
    return (
        <div className="header-container">
            <ImageThumbnail />
            <HeaderContent />
        </div>
    )
};

export default HeaderContainer;