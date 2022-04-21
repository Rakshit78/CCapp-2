import React from 'react';
import { render, screen } from '@testing-library/react';
import Quiz from '../components/Quiz';

describe('Quiz test', () => {
  const que: any = {};
  const score: any = 0;
  test('quiz renders without crash', () => {
    render(
      <Quiz navigate={undefined} que={que} setScore={() => {}} score={score} />
    );
  });

  test('quiz renders without crash', () => {
    const component = render(
      <Quiz navigate={undefined} que={que} setScore={() => {}} score={score} />
    );
    expect(Quiz).toMatchSnapshot();
  });
});
