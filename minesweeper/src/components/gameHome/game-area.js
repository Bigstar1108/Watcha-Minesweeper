import React from 'react';
import * as actions from '../../modules/actions';
import PropTypes from 'prop-types';
import { boxValue } from '../../lib';
import { useSelector, useDispatch } from 'react-redux';

const GameArea = () => {
    const { opened, boxs, isStopGame } = useSelector((state) => state.Minesweeper);
    const dispatch = useDispatch();

    const handleUpdateBox = (obj, num) => dispatch(actions.updateBox(obj, num));
    const handleCreateFlag = (id) => dispatch(actions.createFlag(id));
    const handleDeleteFlag = (id) => dispatch(actions.deleteFlag(id));
    const handleClickNumber = (id, num) => dispatch(actions.clickNumber(id, num));
    const handleGameOver = (id) =>  dispatch(actions.gameOver(id));
    const handleFinishGame = () => dispatch(actions.finishGame());
    const handleStartTime = () => dispatch(actions.startTime());

    // 빈 Box 클릭시 확장을 다루는 함수
    const expansionBox = (key) => {
        let row = parseInt(key[0], 10);
        let col = parseInt(key[1], 10);

        // store의 값을 복사하여 처리한 후에 다시 dispatch 처리
        let copyObj = Object.assign({}, boxs);
        let copyOpened = 0;

        if(copyObj[key].isFirst === true && isStopGame === false){
            copyObj[key].isFirst = false;

            // box의 상태가 숫자일 때
            if(copyObj[key].isState > 0){
                copyObj[key].text = copyObj[key].isState;
                copyOpened++;
            }
            // box의 상태가 빈 값(0)일 때
            else if(copyObj[key].isState === 0){
                copyObj[key].classList = 'box opened';
                copyOpened++;

                for(let ii=-1; ii<=1; ii++){
                    for(let jj=-1; jj<=1; jj++){
                        if(ii!==0 || jj!==0){
                            if(boxValue(row+ii, col+jj) !== 9 && boxValue(row+ii, col+jj) !== 'unValue'){
                                expansionBox(`${row+ii}${col+jj}`);
                            }
                        }
                    }
                }
            }
        }

        handleUpdateBox(copyObj, copyOpened);

        if(opened >= 53){
            handleFinishGame();
        }
    }

    // 오른쪽 클릭시 깃발 toggle
    const handleFlag = (key) => {
        if(isStopGame === false){
            handleCreateFlag(key);
        }
        else if(boxs[key].text === '⚑'){
            handleDeleteFlag(key);
        }
    };

    // 게임 시작 시 타임 시작
    const startGameTime = () => {
        handleStartTime();

        let interval = setInterval(() => {
            handleStartTime();

            if(opened >= 53 || isStopGame === true){
                clearInterval(interval);
            }
        }, 1000);
    }

    // box를 클릭했을 때 처리
    const handleClickBox = (key) => {
        // 첫 box를 눌렀을 때만 startGameTime을 실행해야하기 때문에 필요한 조건문
        if(opened === 0 && isStopGame === false){
            startGameTime();
        }

        if(boxs[key].text !== '⚑' && boxs[key].isFirst === true && isStopGame === false){
            //box의 상태가 빈 값(0)일 때
            if(boxs[key].isState === 0){
                expansionBox(key);
            }

            //box의 상태가 숫자일 때
            if(boxs[key].isState > 0 && boxs[key].isState < 9){
                handleClickNumber(key, boxs[key].isState);
            }

            //box의 상태가 지뢰(9)일 때
            if(boxs[key].isState === 9){
                handleGameOver(key);
            }
        }

        //열린 box의 개수가 53개일 때 (8 * 8 - 10 = 54이지만 ++opened를 해줬으므로 -1)
        if(opened >= 53){
            handleFinishGame();
        }
    }

    const renderList = () => {
        // Object의 key값을 array로 만든 후 00~ 순서로 정렬
        let arrays = Object.keys(boxs).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
        return arrays.map((key) => {
            return(
                <span
                    id = {key}
                    className = {boxs[key].classList}
                    key = {key}
                    onClick = {() => handleClickBox(key)}
                    onContextMenu = {(event) => {
                        event.preventDefault();
                        handleFlag(key);
                    }}
                >
                    {boxs[key].text}
                </span>
            );
        })
    }

    return(
        <div className = "container">
            {renderList()}
        </div>
    );
}

GameArea.propTypes = {
    opened: PropTypes.number,
    boxs: PropTypes.object,
    isStopGame: PropTypes.bool,
    handleCreateFlag: PropTypes.func,
    handleDeleteFlag: PropTypes.func,
    handleClickNumber: PropTypes.func,
    handleGameOver: PropTypes.func,
    handleFinishGame: PropTypes.func,
    handleStartTime: PropTypes.func,
    handleUpdateBox: PropTypes.func,
};

GameArea.defaultProps = {
    opened: 0,
    boxs: {},
    isStopGame: false,
    handleCreateFlag: () => console.warn('handleCreateFlag not defined'),
    handleDeleteFlag: () => console.warn('handleDeleteFlag not defined'),
    handleClickNumber: () => console.warn('handleClickNumber not defined'),
    handleGameOver: () => console.warn('handelGameOver not defined'),
    handleFinishGame: () => console.warn('handelFinishGame not defined'),
    handleStartTime: () => console.warn('handleStartTime not defined'),
    handleUpdateBox: () => console.warn('handleUpdateBox not defined'),
};

export default GameArea;