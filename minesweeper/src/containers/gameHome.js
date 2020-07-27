import React from 'react';
import GameHeader from '../components/gameHome/game-header';

const GameHome = () => {
    return(
        <div>
            <GameHeader
            mines = {10}
            time = {9}
            />
        </div>
    );
};

export default GameHome;