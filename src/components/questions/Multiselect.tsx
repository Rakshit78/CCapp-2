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
  nextquestion: any;
  score: number;
  setScore: any;
};

const Multiselect: React.FC<Props> = ({
  que,
  prevquestion,
  nextquestion,
  score,
  setScore,
}) => {
  const handleclick = () => {
    if (que.usera[0] === que.a[0] && que.usera[1] === que.a[1]) {
      setScore(score + 1);
    }
    nextquestion();
  };
  const getvalue = (e: any) => {
    que.usera = [...que.usera, e.target.value];
  };
  return (
    <>
      <Typography variant='h3'>{que.q}</Typography>
      {que.options.map((res: any) => {
        return (
          <FormControlLabel
            control={<Checkbox />}
            value={res}
            label={res}
            onChange={getvalue}
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
          next
        </Button>
      </Box>
    </>
  );
};

export default Multiselect;
