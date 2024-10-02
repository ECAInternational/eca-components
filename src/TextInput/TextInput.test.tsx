import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { TextInput } from './TextInput.tsx';

describe('Password field', () => {
  it('should not reveal password when pressing enter key', async () => {
    function TestComponent() {
      return (
        <form>
          <TextInput name='password' type='password' data-testid='password' />
          <button type='submit'>Submit</button>
        </form>
      );
    }

    const user = userEvent.setup();
    const app = render(<TestComponent />);
    const input = await app.findByTestId(/password/i);
    await user.type(input, 'my-password{enter}');

    expect(input.getAttribute('type')).toBe('password');
  });
});
