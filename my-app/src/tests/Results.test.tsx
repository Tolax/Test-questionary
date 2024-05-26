import React from 'react';
import { render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import Results from '../Components/Results';
import { Store } from 'redux';

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
  counter: 10,
  right: 5,
  rightEasy: 2,
  rightMedium: 1,
  rightHard: 2,
}

describe('Results component', () => {
  let store: Store<State>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('counter variable equals 1', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Results />
      </Provider>
    );

    expect(getByText('All questions: 10')).toBeInTheDocument();
    expect(getByText('Right: 5')).toBeInTheDocument();
    expect(getByText('Easy: 2')).toBeInTheDocument();
    expect(getByText('Medium: 1')).toBeInTheDocument();
    expect(getByText('Hard: 2')).toBeInTheDocument();
  });
});