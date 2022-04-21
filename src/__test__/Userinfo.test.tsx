import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInform from '../components/Userinfo';

describe('UserInfo test', () => {
  const username: string = '';
  const subject: string = '';
  test('renders without crash', () => {
    render(
      <UserInform
        navigate={undefined}
        username={username}
        subject={subject}
        setUsername={() => {}}
        setSubject={() => {}}
      />
    );
  });

  test('renders without crash', () => {
    const component = render(
      <UserInform
        navigate={undefined}
        username={username}
        subject={subject}
        setUsername={() => {}}
        setSubject={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders without crash', () => {
    render(
      <UserInform
        navigate={undefined}
        username={username}
        subject={subject}
        setUsername={() => {}}
        setSubject={() => {}}
      />
    );
    expect(screen.getByText('StartQuiz')).toBeInTheDocument();
  });

  test('Label text renders', () => {
    render(
      <UserInform
        navigate={undefined}
        username={username}
        subject={subject}
        setUsername={() => {}}
        setSubject={() => {}}
      />
    );
    expect(screen.getByLabelText('User-Name')).toBeInTheDocument();
  });

  test('placeholdertext renders', () => {
    render(
      <UserInform
        navigate={undefined}
        username={username}
        subject={subject}
        setUsername={() => {}}
        setSubject={() => {}}
      />
    );
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
  });

  test('button renders', () => {
    render(
      <UserInform
        navigate={undefined}
        username={username}
        subject={subject}
        setUsername={() => {}}
        setSubject={() => {}}
      />
    );
    expect(screen.getByRole('btn')).toBeInTheDocument();
  });

  test('button should be disabled', () => {
    render(
      <UserInform
        navigate={undefined}
        username={username}
        subject={subject}
        setUsername={() => {}}
        setSubject={() => {}}
      />
    );
    expect(screen.getByRole('btn')).toBeDisabled();
  });
});
