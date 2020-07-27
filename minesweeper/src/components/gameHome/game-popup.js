import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AwardModal from '../../components/gameHome/awardModal';

const GamePopup = ({ popupText, handleCreateMines }) => {
    const [Modal, setModal] = useState(false);

    const handleonClick = (type) => {
        switch(type){
            case '지뢰찾기를 다시 시작하시겠습니까?':
                setModal(false);
                handleCreateMines();
                return null;
            case '지뢰 발견! 다시 시작하기':
                setModal(false);
                handleCreateMines();
                return null;
            case '지뢰 찾기 클리어! 랭킹에 등록해보세요!':
                setModal(false);
                handleConfirm();
                return null;
            default:
                return null;
        }
    }

    const handleConfirm = () => {
        if(window.confirm('랭킹에 기록하시겠습니까?')){
            setModal(true);
        }else{
            handleCreateMines();
        }
    };

    // popUp Text의 유무에 따라 다르게 출력
    let popUpContainer = null;
    if(popupText !== ''){
        popUpContainer = 
        <>
            <div className = "popup-container">
                <span onClick = {() => handleonClick(popupText)}>
                    {popupText}
                </span>
            </div>
            {
                Modal ? <AwardModal /> : null
            }
        </>
    }
    return(
        <div>
            {popUpContainer}
        </div>
    );
};

GamePopup.propTypes = {
    Modal: PropTypes.bool,
    popupText: PropTypes.string,
    handleCreateMines: PropTypes.func,
};

GamePopup.defaultProps = {
    Modal: false,
    popupText: '',
    handleCreateMines: () => console.warn('handleCreateMines not defined'),
};

export default GamePopup;