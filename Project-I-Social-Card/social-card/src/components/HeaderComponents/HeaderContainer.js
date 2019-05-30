import React from 'react';
import './Header.css';

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