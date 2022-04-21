import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Checkbox,
} from '@mui/material';
import { Box } from '@mui/system';

type Props = {
  que: any;
  prevquestion: any;
  navigate: any;
  score: any;
  setScore: any;
};

const Q5: React.FC<Props> = ({
  que,
  prevquestion,
  navigate,
  setScore,
  score,
}) => {
  const handleclick = () => {
    if (que.a === que.usera) {
      setScore(score + 1);
      console.log('correct');
    }
    navigate('/result');
  };
  return (
    <>
      <Typography variant='h3'>{que.q}</Typography>

      {que.options.map((res: any) => {
        return (
          <FormControlLabel
            control={<Radio />}
            value={res}
            label={res}
            onChange={(e: any) => {
              que.usera = e.target.value;
            }}
          />
        );
      })}
      <Box mt={1} ml={1}>
        <Typography variant='body1'>
          {que.usera ? 'Your answer:' + que.usera : ''}
        </Typography>
      </Box>
      <Box mt={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={prevquestion} variant='contained'>
          prev
        </Button>
        <Button onClick={handleclick} variant='contained'>
          Submit
        </Button>
      </Box>
    </>
  );
};
export default Q5;
