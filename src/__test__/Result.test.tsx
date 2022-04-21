import React from 'react';
import { render, screen } from '@testing-library/react';
import Result from '../components/Result';

describe('Result test', () => {
  const que: any = [];
  const username: string = '';
  const score: number = 0;
  test('Result renders without crash', () => {
    render(
      <Result
        navigate={undefined}
        que={que}
        username={username}
        score={score}
      />
    );
  });

  test('Result renders without crash', () => {
    const component = render(
      <Result
        navigate={undefined}
        que={que}
        username={username}
        score={score}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('Result renders without crash', () => {
    render(
      <Result
        navigate={undefined}
        que={que}
        username={username}
        score={score}
      />
    );
    expect(screen.getByRole('retake')).toBeInTheDocument();
  });
});
