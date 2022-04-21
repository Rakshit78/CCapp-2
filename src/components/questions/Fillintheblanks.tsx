import { Box, Button, Paper, TextField, Typography } from '@mui/material';

type Porps = {
  que: any;
  nextquestion: () => void;
  score: number;
  setScore: any;
};
const Fillintheblanks: React.FC<Porps> = ({
  que,
  nextquestion,
  setScore,
  score,
}) => {
  const handleClick = () => {
    if (que.a === que.usera) {
      setScore(score + 1);
      console.log('correct answer');
    }
    nextquestion();
  };
  return (
    <>
      <Typography variant='h3'>{que?.q}</Typography>
      <Box mt={2}>
        {que?.options.map((res: any) => {
          return <Typography variant='h5'>{res}</Typography>;
        })}
      </Box>
      <Box mt={1} ml={1}>
        <Typography variant='body1'>
          {que?.usera ? 'Your answer:' + que?.usera : ''}
        </Typography>
      </Box>
      <Box mt={1}>
        <TextField
          placeholder='Your answer'
          label='User Answer'
          onChange={(e: any) => (que.usera = e.target.value)}
        />
      </Box>

      <Box mt={2}>
        <Button variant='contained' onClick={handleClick}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default Fillintheblanks;
