import React from 'react';
import PropTypes from 'prop-types';

const GamePopup = ({ popupText, handleCreateMines }) => {
    // popUp Text의 유무에 따라 다르게 출력
    let popUpContainer = null;
    if(popupText !== ''){
        popUpContainer = 
        <div className = "popup-container">
            <a onClick={(event) => {event.preventDefault(); handleCreateMines();}}>
                {popupText}
            </a>
        </div>
    }
    return(
        <div>
            {popUpContainer}
        </div>
    );
};

export default GamePopup;