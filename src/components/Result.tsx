import { Button, Container, Typography } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';
type QuizProps = {
  navigate: any;
  que: any;
  username: string;
  score: number;
};
const Result: React.FC<QuizProps> = ({ que, navigate, username, score }) => {
  return (
    <Container
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Container
        maxWidth='sm'
        style={{ background: '#a5a5a5', borderRadius: '14px', padding: '20px' }}
      >
        <Button
          onClick={() => {
            navigate('/');
            window.location.reload();
          }}
          role='retake'
        >
          Retake
        </Button>
        <Typography variant='h4'>
          Hey!! {username} you got {(score / 5) * 100}%
        </Typography>
        <PieChart
          data-testid='pie-chart'
          style={{ width: '100px' }}
          data={[
            { title: 'One', value: score, color: '#E38627' },
            { title: 'Two', value: 5 - score, color: '#C13C37' },
          ]}
        />
        {que.map((res: any) => {
          return (
            <>
              <Typography variant='body1'>{res.q}</Typography>
              <Typography variant='body1'>
                <b> Correct Answer:</b>
                {JSON.stringify(res.a)}
              </Typography>
              <Typography variant='body1'>
                <b>Your Answer:</b>
                {JSON.stringify(res.usera)}
              </Typography>
            </>
          );
        })}
      </Container>
    </Container>
  );
};

export default Result;
