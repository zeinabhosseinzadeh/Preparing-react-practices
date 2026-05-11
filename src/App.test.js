import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('list items',()=>{
  render(<App/>)
  const listItems = screen.getAllByRole('listitem')
  expect(listItems).toHaveLength(4)
})

test ('btn dis',()=>{
  render(<App/>)
  const btn= screen.getByRole('button')
  expect(btn).toBeDisabled()

})

test('check span',()=>{
  render(<App/>)
 expect(mySp).toBeInTheDocument() 
})