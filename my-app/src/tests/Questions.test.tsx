import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import Questions from '../Components/Questions';
import axios from 'axios';

jest.mock('axios');

const configureStore = require('redux-mock-store').default;

type State = {
  counter: number;
  right: number;
  rightEasy: number;
  rightMedium: number;
  rightHard: number;
}

const mockStore = configureStore();
const initialState = {
  counter: 0,
  right: 0,
  rightEasy: 0,
  rightMedium: 0,
  rightHard: 0,
}

describe('Results component', () => {
  let store: Store<State>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders question', async () => {
    const mockData = {
      results: [
        {
          type: 'multiple',
          difficulty: 'easy',
          category: 'General Knowledge',
          question: 'What is the capital of France?',
          correct_answer: 'Paris',
          incorrect_answers: ['Berlin', 'Rome', 'Madrid'],
          allAnswers: ['Berlin', 'Rome', 'Madrid', 'Paris'],
          allRightAnswers: ['Paris'],
        }
      ]
    };

    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockData });

    const { getByText } = render(
      <Provider store={store}>
        <Questions />
      </Provider>
    );

    await waitFor(() => 
      expect(getByText(/Вопрос №\d+/)).toBeInTheDocument()
    );

    await waitFor(() => {
      const submitButton = getByText('Ответить');
      const { getAllByRole } = within(document.body);
      const allVariants = getAllByRole('radio');
      const noneSelected = allVariants.every(input => !(input as HTMLInputElement).checked);
      allVariants[1].click()

      console.log(noneSelected);
      
      if(noneSelected){
        expect(submitButton).toBeDisabled();
      }
      if(!noneSelected){
        expect(submitButton).not.toBeDisabled();
      }
    });

  });
});
