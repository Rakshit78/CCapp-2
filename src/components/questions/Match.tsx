import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
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
const Match: React.FC<Props> = ({
  que,
  prevquestion,
  nextquestion,
  score,
  setScore,
}) => {
  const handleclick = () => {
    if (JSON.stringify(que.a) === JSON.stringify(que.usera)) {
      setScore(score + 1);
    }
    console.log(que.usera);
    nextquestion();
  };
  return (
    <>
      <Typography variant='h3'>{que.q}</Typography>
      <Box mt={2}>
        <Typography variant='body1'>A:{que.options.a}</Typography>
        <Typography variant='body1'>B:{que.options.b}</Typography>
        <Typography variant='body1'>C:{que.options.c}</Typography>
        <Typography variant='body1'>D:{que.options.d}</Typography>
      </Box>
      <Box mt={2}>
        <TextField
          placeholder='a'
          onChange={(e: any) => {
            que.usera.a = e.target.value;
          }}
        />
        <TextField
          placeholder='b'
          onChange={(e: any) => {
            que.usera.b = e.target.value;
          }}
        />
        <TextField
          placeholder='c'
          onChange={(e: any) => {
            que.usera.c = e.target.value;
          }}
        />
        <TextField
          placeholder='d'
          onChange={(e: any) => {
            que.usera.d = e.target.value;
          }}
        />
      </Box>
      <Box mt={1} ml={1}>
        <Typography variant='body1'>
          {que.usera
            ? 'Your answer:' +
              que.usera.a +
              ',' +
              que.usera.b +
              ',' +
              que.usera.c +
              ',' +
              que.usera.d
            : ''}
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

export default Match;
