import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

type Props = {
  que: any;
  prevquestion: any;
  nextquestion: any;
  score: number;
  setScore: any;
};
const Truefalse: React.FC<Props> = ({
  que,
  prevquestion,
  nextquestion,
  score,
  setScore,
}) => {
  const handleclick = () => {
    if (que.a === que.usera) {
      setScore(score + 1);
      console.log('correct');
    }
    nextquestion();
  };
  return (
    <>
      <Typography variant='h3'>{que.q}</Typography>
      {que.options.map((res: any) => {
        return (
          <RadioGroup row>
            <FormControlLabel
              control={<Radio />}
              value={res}
              label={res}
              onChange={(e: any) => {
                que.usera = e.target.value;
              }}
            />
          </RadioGroup>
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
          next
        </Button>
      </Box>
    </>
  );
};

export default Truefalse;
