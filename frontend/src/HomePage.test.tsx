import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { HomePage } from './HomePage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './Store';

afterEach(cleanup);

jest.mock('./QuestionsData', () => ({
  getUnansweredQuestions: () => {
    return Promise.resolve([
      {
        questionId: 1,
        title: 'Title1 test',
        content: 'Content1 test',
        userName: 'User1',
        created: new Date(2019, 1, 1),
        answers: [],
      },
      {
        questionId: 2,
        title: 'Title2 test',
        content: 'Content2 test',
        userName: 'User2',
        created: new Date(2019, 1, 1),
        answers: [],
      },
    ]);
  },
}));

test('When HomePage first rendered, loading indicator should show', async () => {
  const store = configureStore();
  const { findByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>,
  );
  const loading = await findByText('Loading...');
  expect(loading).not.toBeNull();
});

test('When HomePage data returned, it should render questions', async () => {
  const store = configureStore();
  const { findByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>,
  );
  expect(await findByText('Title1 test')).toBeInTheDocument();
  expect(await findByText('Title2 test')).toBeInTheDocument();
});
