import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';
import server from '../mock/server';

beforeAll(() => {
    server.listen();
})

afterAll(() => {
    server.close()
})

afterEach(() => {
    server.resetHandlers()
})

test('username exists', () => {
    render(<Login />)
    const userInp = screen.getByPlaceholderText('enter username');
    expect(userInp).toBeInTheDocument()
});
test('password exists', () => {
    render(<Login />)
    const passInp = screen.getByPlaceholderText('enter password');
    expect(passInp).toBeInTheDocument()
});
test('err not exists', () => {
    render(<Login />)
    const errP = screen.queryByTestId('err');
    expect(errP).not.toBeInTheDocument()
});
test('btn dis', () => {
    render(<Login />)
    const btn = screen.getByText('Submit');
    expect(btn).toBeDisabled()
});


test('user and pass value', () => {
    render(<Login />)
    const btn = screen.getByText('Submit');
    const userInp = screen.getByPlaceholderText('enter username');
    const passInp = screen.getByPlaceholderText('enter password');
    fireEvent.change(userInp, { target: { value: 'reza' } })
    fireEvent.change(passInp, { target: { value: 'reza' } })
    expect(btn).not.toBeDisabled()
});

test('modal', () => {
    render(<Login />)
    const btn = screen.getByText('Show Modal')
    fireEvent.click(btn)
    const modal = screen.getByTestId('modal')
    expect(modal).toBeInTheDocument()
})


test('login api test', async () => {
    render(<Login />)
    const userInp = screen.getByPlaceholderText('enter username');
    const passInp = screen.getByPlaceholderText('enter password');
    const btn = screen.getByText('Submit')
    fireEvent.change(userInp, { target: { value: 'admin' } })
    fireEvent.change(passInp, { target: { value: 'admin' } })
    fireEvent.click(btn)
    const errP = await screen.findByTestId('err');
    expect(errP).not.toBeInTheDocument() 
});
