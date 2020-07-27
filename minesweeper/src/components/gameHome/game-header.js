import React from 'react';
import PropTypes from 'prop-types';

const GameHeader = ({time, mines, handleRestartGame}) => {
    return(
        <div>
            <p>남은 지뢰 : {mines}</p>
            <p>Time : {time}</p>
        </div>
    );
};

GameHeader.propTypes = {
    mines: PropTypes.number
};

GameHeader.defaultProps = {
    mines: 10,
};

export default GameHeader;