import { Action } from '@reduxjs/toolkit';

const preloadedState = {
    right: 0,
    rightEasy: 0,
    rightMedium: 0,
    rightHard: 0,
    counter: 0,
}

const reducer = (state = preloadedState, action: Action) => {
    switch (action.type) {
        case 'INC':
            return { ...state, counter: state.counter + 1 };
        case 'RIGHT':
            return { ...state, right: state.right + 1 };
        case 'EASY':
            return { ...state, rightEasy: state.rightEasy + 1 };
        case 'MED':
            return { ...state, rightMedium: state.rightMedium + 1 };
        case 'HARD':
            return { ...state, rightHard: state.rightHard + 1 };
        default:
            return state;
    }
  };

export default reducer;