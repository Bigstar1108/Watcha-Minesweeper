import { combineReducers } from 'redux';
import Minesweeper from './minesweeper.reducer';

const rootReducer = combineReducers({
    Minesweeper,
});

export default rootReducer;