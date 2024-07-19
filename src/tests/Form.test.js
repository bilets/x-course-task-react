import { render, fireEvent } from '@testing-library/react';
import Form from '../components/Form';

describe('Form', () => {
  test('input and total', () => {
    const { getByTestId } = render(<Form price={5} />);
    const input = getByTestId('count');
    const total = getByTestId('total');

    expect(input).toBeTruthy();
    expect(input.value).toBe('1');
    expect(total).toBeTruthy();
    expect(total).toHaveTextContent('5');

    fireEvent.change(input, { target: { value: '0' } });
    expect(input.value).toBe('1');

    fireEvent.change(input, { target: { value: '43' } });
    expect(input.value).toBe('1');

    fireEvent.change(input, { target: { value: '5' } });
    expect(input.value).toBe('5');
    expect(total).toHaveTextContent('25');

    fireEvent.change(input, { target: { value: '3' } });
    expect(input.value).toBe('3');
    expect(total).toHaveTextContent('15');
  });
});
