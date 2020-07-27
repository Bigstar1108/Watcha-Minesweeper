import React, { useEffect } from 'react';
import * as actions from '../modules/actions';
import { setRandomMines } from '../lib';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/gameHome/gameHome.scss';
import GameHeader from '../components/gameHome/game-header';
import GameArea from '../components/gameHome/game-area';
import GamePopup from '../components/gameHome/game-popup';

const GameHome = () => {
    const { time, mines, popupText } = useSelector((state) => state.Minesweeper);
    const dispatch = useDispatch();

    const handleCreateMines = () => {
        const boxObj = setRandomMines();
        dispatch(actions.createMine(boxObj));
    };

    const handleRestartGame = () => dispatch(actions.restartGame());
    
    useEffect(() => {
        handleCreateMines();
    }, [])

    return(
        <div className = "gameHomeContainer">
            <GameHeader
                time = {time}
                mines = {mines}
                handleRestartGame = {handleRestartGame}
            />
            <GameArea />
            <GamePopup
                time = {time}
                popupText = {popupText}
                handleCreateMines = {handleCreateMines}
            />
        </div>
    );
};

GameHome.propTypes = {
    time: PropTypes.number,
    mines: PropTypes.number,
    popupText: PropTypes.string,
    handleCreateMines: PropTypes.func,
    handleRestartGame: PropTypes.func,
};

GameHome.defaultProps = {
    time: 0,
    mines: 9,
    popupText: '',
    handleCreateMines: () => console.warn('handleCreateMines not defined'),
    handleRestartGame: () => console.warn('handleRestartGame not defined')
};

export default GameHome;