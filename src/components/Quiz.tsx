import { Button, Container } from '@mui/material';
import { useState } from 'react';
import Q5 from './Q5';
import Fillintheblanks from './questions/Fillintheblanks';
import Match from './questions/Match';
import Multiselect from './questions/Multiselect';
import Truefalse from './questions/Truefalse';

type QuizProps = {
  navigate: any;
  que: any;
  setScore: any;
  score: any;
};
const Quiz: React.FC<QuizProps> = ({ que, navigate, setScore, score }) => {
  const [q, setQ] = useState(0);

  const prevquestion = () => {
    if (q === 0) {
      return;
    } else {
      setQ(q - 1);
    }
  };
  const nextquestion = () => {
    if (q === 4) {
      return;
    } else {
      setQ(q + 1);
    }
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
      <div>
        <Button
          onClick={() => setQ(0)}
          style={{ background: que[0]?.usera === '' ? 'grey' : 'red' }}
        >
          1
        </Button>
        <Button
          onClick={() => setQ(1)}
          style={{ background: que[1]?.usera === '' ? 'grey' : 'red' }}
        >
          2
        </Button>
        <Button
          onClick={() => setQ(2)}
          style={{ background: que[2]?.usera.length === 0 ? 'grey' : 'red' }}
        >
          3
        </Button>
        <Button
          onClick={() => setQ(3)}
          style={{ background: que[3]?.usera.a === '' ? 'grey' : 'red' }}
        >
          4
        </Button>
        <Button
          onClick={() => setQ(4)}
          style={{ background: que[4]?.usera === '' ? 'grey' : 'red' }}
        >
          5
        </Button>
      </div>
      <Container
        maxWidth='sm'
        style={{ background: '#e5e5e5', borderRadius: '14px', padding: '20px' }}
      >
        {q === 0 && (
          <Fillintheblanks
            que={que[q]}
            nextquestion={nextquestion}
            setScore={setScore}
            score={score}
          />
        )}
        {q === 1 && (
          <Truefalse
            que={que[q]}
            prevquestion={prevquestion}
            nextquestion={nextquestion}
            setScore={setScore}
            score={score}
          />
        )}
        {q === 2 && (
          <Multiselect
            que={que[q]}
            prevquestion={prevquestion}
            nextquestion={nextquestion}
            setScore={setScore}
            score={score}
          />
        )}
        {q === 3 && (
          <Match
            que={que[q]}
            prevquestion={prevquestion}
            nextquestion={nextquestion}
            setScore={setScore}
            score={score}
          />
        )}
        {q === 4 && (
          <Q5
            que={que[q]}
            prevquestion={prevquestion}
            navigate={navigate}
            setScore={setScore}
            score={score}
          />
        )}
      </Container>
    </Container>
  );
};

export default Quiz;
