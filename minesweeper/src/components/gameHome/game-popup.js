import React from 'react';
import PropTypes from 'prop-types';

const GamePopup = ({ popupText, handleCreateMines }) => {
    // popUp Text의 유무에 따라 다르게 출력
    let popUpContainer = null;
    if(popupText !== ''){
        popUpContainer = 
        <div className = "popup-container">
            <span onClick = {() => handleCreateMines()}>
                {popupText}
            </span>
        </div>
    }
    return(
        <div>
            {popUpContainer}
        </div>
    );
};

GamePopup.propTypes = {
    popupText: PropTypes.string,
    handleCreateMines: PropTypes.func,
};

GamePopup.defaultProps = {
    popupText: '',
    handleCreateMines: () => console.warn('handleCreateMines not defined'),
};

export default GamePopup;