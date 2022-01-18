// import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import CodeEditor from './components/CodeEditor';

test('renders code challenge', () => {
  render(<App />);
  const linkElement = screen.getByText(/Code Challenge/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the code mirror', () => {
  render(<CodeEditor />);
  const editor = screen.getByText('a = 0');
  expect(editor).toBeInTheDocument();
});

test('should display confirmation when user clicks submit', () => {
  render(<CodeEditor />);
  const btn = screen.getByRole('button', { name: /submit/i });
  userEvent.click(btn);
  expect(
    screen.getByText('You have submitted your answer')
  ).toBeInTheDocument();
});

// integration test

// I know this doesnt work right now
test('starts stopwatch when user clicks begin', () => {
  render(<App />);
  const btn = screen.getByRole('button', { name: /begin!/i });
  const timer = screen.getByText('0 min 0 sec');
  userEvent.click(btn);
  expect(timer).toEqual('0 min 1 sec');
});

describe('challenge information', () => {
  test('Doesnt display challenge info initially', () => {
    render(<App />);
    const desc = screen.queryByText(/0. Repeated DNA Sequences/i);
    expect(desc).not.toBeInTheDocument();
  });

  test('displays challenge information when user clicks begin', () => {
    render(<App />);
    const btn = screen.getByRole('button', { name: /begin!/i });
    userEvent.click(btn);
    const desc = screen.getByText(/0. Repeated DNA Sequences/i);

    expect(desc).toBeVisible();
  });
});

// not sure how to run these correctly
// test('should render some text given to code editor', () => {
//   render(<CodeEditor />);
//   const editorTxt = screen.getByText('a = 0');
//   // userEvent.type(editorTxt, 'b = 7');
//   fireEvent.change(editorTxt, 'b = 7');
//   console.log(editorTxt);
//   expect('b = 7').toBeInTheDocument();
// });

// test('Starts testing the code when user clicks submit', () => {
//   render(<App />);
//   expect()
// });

// test('shows feedback component when test finish running', () {

// })
