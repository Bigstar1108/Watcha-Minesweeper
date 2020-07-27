import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Main/Main.scss';

const Main = () => {
    const history = useHistory();
    return(
        <div className = "MainContainer">
            <div className = "MainLogo">
                <span>Minesweeper💣</span>
                <button type = "button" onClick = {() => history.push('/minesweeper')}>게임 시작!</button>
            </div>

            <div className = "MainAwardBoard">

            </div>
        </div>
    );
}

export default Main;