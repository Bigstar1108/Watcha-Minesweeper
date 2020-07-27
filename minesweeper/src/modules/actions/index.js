// action type 정의
export const CREATE_MINE = 'CREATE_MINE';
export const UPDATE_BOX = 'UPDATE_BOX';
export const RESTART_GAME = 'RESTART_GAME';
export const DELETE_FIRST = 'DELETE_FIRST';
export const CREATE_FLAG = 'CREATE_FLAG';
export const DELETE_FLAG = 'DELETE_FLAG';
export const CLICK_NUMBER = 'CLICK_NUMBER';
export const CLICK_EMPTY = 'CLICK_EMPTY';
export const GAME_OVER = 'GAME_OVER';
export const FINISH_GAME = 'FINISH_GAME';
export const START_TIME = 'START_TIME';

// 지뢰찾기 맵 생성
export function createMine(obj){
    return{
        type: CREATE_MINE,
        obj
    };
};

// 사용자 클릭 후 변경된 맵 적용
export function updateBox(obj, num){
    return{
        type: UPDATE_BOX,
        obj,
        num
    };
};

// 게임 다시 시작
export function restartGame(){
    return{
        type: RESTART_GAME,
    };
};


// 오른쪽 마우스 클릭시 깃발 생성
export function createFlag(id){
    return{
        type: CREATE_FLAG,
        id
    };
};

// 오른쪽 마우스 클릭시 깃발 삭제
export function deleteFlag(id){
    return{
        type: DELETE_FLAG,
        id
    };
};

// 주변에 폭탄이 있는 수를 담은 Box를 클릭했을 때
export function clickNumber(id, num){
    return{
        type: CLICK_NUMBER,
        id,
        num
    };
};

// 아무 값도 들어있지 않은 빈 Box를 클릭했을 때
export function clickEmpty(id){
    return{
        type: CLICK_EMPTY,
        id
    };
};

// 지뢰를 밟아 게임이 끝났을 때
export function gameOver(id){
    return{
        type: GAME_OVER,
        id
    };
};

// 지뢰를 모두 찾아 게임이 끝났을 때
export function finishGame(){
    return{
        type: FINISH_GAME,
    };
};

// 게임 시작 시 Timer값을 올려주는 역할
export function startTime(){
    return{
        type: START_TIME,
    };
};