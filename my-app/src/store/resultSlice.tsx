import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: 'results',
    initialState: {
        current: 0,
        totalQuestions: 0,
        easy: 0,
        medium: 0,
        hard: 0,
        rightAnswers: 0
    },
    reducers: {
        incrementCounter(state) {
            state.current += 1;
        },
        easyCounter(state) {
            state.easy += 1;
        },
        mediumCounter(state) {
            state.medium += 1;
        },
        hardCounter(state) {
            state.hard += 1;
        },
        rightAnswersCounter(state) {
            state.rightAnswers += 1;
        }
    }
});

export const { 
    incrementCounter,
    easyCounter,
    mediumCounter,
    hardCounter,
    rightAnswersCounter 
} = resultSlice.actions;

export default resultSlice.reducer;
