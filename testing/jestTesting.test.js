import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
// import HomePage from './components/HomePage';
// import QuizPage from './components/QuizPage';

test('renders home page when navigating to /', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const linkElement = getByText(/home page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders quiz page when navigating to /quizPage', () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = getByText(/quiz page/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders navbar', () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = getByText(/navbar/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders footer', () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = getByText(/footer/i);
  expect(linkElement).toBeInTheDocument();
});
