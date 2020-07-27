import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AwardItem from '../components/Main/Award-item';
import '../styles/Main/Main.scss';
import PropTypes from 'prop-types';

const Main = () => {
    const history = useHistory();
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        const localAwards = JSON.parse(localStorage.getItem('award'));
        if(localAwards === null){
            setAwards([]);
        }else{
            const sortAwards = localAwards.sort(function(a, b){
                if(a.time > b.time){
                    return 1;
                }
                if(a.time < b.time){
                    return -1;
                }
                return 0;
            });
            setAwards(sortAwards.slice(0, 10));
        }
    }, []);

    return(
        <div className = "MainContainer">
            <div className = "MainLogo">
                <span>Minesweeper💣</span>
                <button type = "button" onClick = {() => history.push('/minesweeper')}>게임 시작!</button>
            </div>

            <div className = "MainAwardBoard">
                <div className = "MainAwardTitle">
                    <span>지뢰찾기 명예의 전당</span>
                </div>
                {
                    awards.length === 0 ? <span>명예의 전당에 아무도 없습니다.</span>
                    : <>{
                        awards.map((awards, index) => (
                            <AwardItem
                                id = {index}
                                key = {index}
                                name = {awards.name}
                                time = {awards.time}
                            />
                        ))
                    }</>
                }
            </div>
        </div>
    );
}

Main.propTypes = {
    awards: PropTypes.array,
};

Main.defaultProps = {
    awards: [],
};

export default Main;