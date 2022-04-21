import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

type UserProps = {
  username: string;
  subject: string;
  setUsername: any;
  setSubject: any;
  navigate: any;
};
const UserInform: React.FC<UserProps> = ({
  username,
  subject,
  setUsername,
  setSubject,
  navigate,
}) => {
  const getusername = (e: { target: { value: string } }) => {
    setUsername(e.target.value);
  };
  const getsubject = (e: any) => {
    setSubject(e.target.value);
  };
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
        style={{ background: '#e5e5e5', borderRadius: '14px', padding: '20px' }}
      >
        <Box mt={1}>
          <Typography variant='body2'>StartQuiz</Typography>
        </Box>
        <Box mt={1}>
          <TextField
            placeholder='username'
            label='User-Name'
            value={username}
            onChange={getusername}
          />
        </Box>
        <Box mt={1}>
          <RadioGroup row>
            <FormControlLabel control={<Radio />} label='Male' value='male' />
            <FormControlLabel
              control={<Radio />}
              label='Female'
              value='female'
            />
            <FormControlLabel control={<Radio />} label='Other' value='other' />
          </RadioGroup>
        </Box>
        <Box mt={1}>
          <RadioGroup row>
            <FormControlLabel
              control={<Radio onChange={getsubject} />}
              label='Javascript'
              value='js'
            />
            <FormControlLabel
              control={<Radio onChange={getsubject} />}
              label='Java'
              value='java'
            />
            <FormControlLabel
              control={<Radio onChange={getsubject} />}
              label='Python'
              value='python'
            />
          </RadioGroup>
        </Box>
        <Box mt={1}>
          <Button
            variant='contained'
            onClick={() => navigate('/quiz')}
            disabled={username === '' || subject === '' ? true : false}
            role='btn'
          >
            {' '}
            Start Quiz
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default UserInform;
