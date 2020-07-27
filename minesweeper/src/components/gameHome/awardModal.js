import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const AwardModal = () => {
    const { time } = useSelector((state) => state.Minesweeper);
    const [ name, setName ] = useState('');
    const history = useHistory();

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(JSON.parse(localStorage.getItem("award")) === null){
            const award = [
                {
                    "name": name,
                    "time": time
                }
            ];
            localStorage.setItem("award", JSON.stringify(award));
        }else{
            const localAward = JSON.parse(localStorage.getItem("award"));
            const award = [{ "name": name, "time": time}];
            const awards = [...localAward, ...award];
            localStorage.setItem("award", JSON.stringify(awards));
        };
        alert(`랭킹에 ${name}님이 등재되었습니다.`);
        history.push('/');
    }

    return(
        <form onSubmit = {onSubmit} className = "ModalContainer">
            <input value = {name} onChange = {onChangeName} placeholder = "이름을 입력하세요!" />
            <button type = "submit">랭킹에 등재하기</button>
        </form>
    );
}

AwardModal.propTypes = {
    time: PropTypes.number,
    name: PropTypes.string,
    onChangeName: PropTypes.func,
    onSubmit: PropTypes.func,
};

AwardModal.defaultProps = {
    time: 0,
    name: '',
    onChangeName: () => console.warn('onChange not defined'),
    onSubmit: () => console.warn('onSubmit not defined'),
};

export default AwardModal;