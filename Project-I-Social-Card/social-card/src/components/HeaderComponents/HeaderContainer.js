import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer() {
    return (
        <div className="HeaderContainer">
            <HeaderTitle />
            <HeaderContent />
            <ImageThumbnail />
        </div>
    );
}

export default HeaderContainer;