import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { Question } from "../Components/interface";

const shuffleArray = (array: string[]) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const fetchQuestions = createAsyncThunk<Question[]>(
    'questions/fetchQuestions',
    async () => {
        try {
            const response = await axios.get('https://opentdb.com/api.php?amount=10');
            const questions = response.data.results as Question[];

            const modifiedQuestions = questions.map(question => {
                const allAnswers = [question.correct_answer, ...question.incorrect_answers];
                const shuffledAnswers = shuffleArray(allAnswers);
                return {
                    ...question,
                    allAnswers: shuffledAnswers
                };
            });

            return modifiedQuestions;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
);


const questionSlice = createSlice({
    name: 'questions',
    initialState:{
        items: [] as Question[],
        status: 'idle',
        error: '',
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchQuestions.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchQuestions.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
          })
          .addCase(fetchQuestions.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch questions';
          });
      },
})

export const { } = questionSlice.actions;
export default questionSlice.reducer;
