import { useState } from 'react';
import { Paper, styled } from '@mui/material';

const CounterContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border: 1px solid black;
`;

const Input = styled('input')`
  padding: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Count = styled('h1')<{ color: string }>`
  color: ${(props) => props.color};
`;

const Counter = () => {
  const [cnt, setCnt] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  return (
    <CounterContainer elevation={8}>
      <h1 data-testid='header'>My Counter</h1>
      <Count data-testid='cnt' color={(cnt > 100 ? 'red' : '') || (cnt < 0 ? 'blue' : '')}>
        Count : {cnt}
      </Count>
      <form>
        <button type='button' data-testid='minus-btn' onClick={() => setCnt(cnt - inputValue)}>
          -
        </button>
        <Input
          data-testid='input'
          type='number'
          defaultValue={cnt}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button type='button' data-testid='plus-btn' onClick={() => setCnt(cnt + inputValue)}>
          +
        </button>
      </form>
    </CounterContainer>
  );
};

export default Counter;
