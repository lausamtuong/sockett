import { render, screen } from '@testing-library/react';
import App from './App';
import {StreamChat} from "stream-chat"
import {Chat} from "stream-chat-react"

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
