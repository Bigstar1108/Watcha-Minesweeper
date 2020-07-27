import * as actions from '../actions/index';
import update from 'react-addons-update';

const initialState = {
    boxs: {},
    opened: 0, 
    popupText: '',
    mines: 9,
    time: 0, 
    isStopGame: false,
};

export default function Minesweeper(state = initialState, action){
    switch(action.type){
        case actions.CREATE_MINE:
            return update(state, {
                'boxs': {$set: action.obj},
                'popupText': {$set: ''},
                'opened': {$set: 0},
                'mines': {$set: 9},
                'time': {$set: 0},
                'isStopGame': {$set: false},
            });
        
        case actions.UPDATE_BOX:
            return update(state, {
                'boxs': {$set: action.obj},
                'opened': {$set: state.opened + action.num},
            });

        case actions.RESTART_GAME:
            return update(state, {
                'popupText': {$set: '지뢰찾기를 다시 시작하시겠습니까?'},
                'isStopGame': {$set: true},
            });

        case actions.CREATE_FLAG:
            return update(state, {
                'boxs': {
                    [action.id]: {
                        text: {$set: '⚑'},
                        isFirst: {$set: false},
                    }
                },
                'mines': {$set: --state.mines},
            });

        case actions.DELETE_FLAG:
            return update(state, {
                'boxs': {
                    [action.id]: {
                        text: {$set: ''},
                        isFirst: {$set: true},
                    }
                },
                'mines': {$set: ++state.mines}
            });

        case actions.CLICK_NUMBER:
            return update(state, {
                'boxs': {
                    [action.id]: {
                        text: {$set: action.num},
                        isFirst: {$set: false},
                    }
                },
                'opened': {$set: ++state.opened},
            });

        case actions.CLICK_EMPTY:
            return update(state, {
                'boxs': {
                    [action.id]: {
                        text: {$set: ''},
                        classList: {$set: 'box opened'},
                        isFirst: {$set: false},
                    },
                },
                'opened': {$set: ++state.opened}
            });

        case actions.GAME_OVER:
            return update(state, {
                'boxs': {
                    [action.id]: {
                        text: {$set: '💣'},
                        classList: {$set: 'box'},
                        isFirst: {$set: false}
                    }
                },
                'popupText': {$set: '지뢰 발견! 다시 시작하기'},
                'mines': {$set: --state.mines},
                'isStopGame': {$set: true}
            });

        case actions.FINISH_GAME:
            return update(state, {
                'popupText': {$set: '지뢰 찾기 클리어! 랭킹에 등록해보세요!'},
                'isStopGame': {$set: true},
            });

        case actions.START_TIME:
            return update(state, {
                'time': {$set: ++state.time},
            });

        default:
            return state;
    }
}