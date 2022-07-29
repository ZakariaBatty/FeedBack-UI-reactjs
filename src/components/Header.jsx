import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text, bgColor, textColor }) => {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>Feedback UI</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
    text: 'feedback UI',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header