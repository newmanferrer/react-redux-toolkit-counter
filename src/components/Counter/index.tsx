import { useAppSelector, useAppDispatch } from '../../state/hooks/useAppDispatch';
import {
 increment,
 increment5,
 increment10,
 reset,
 decrement,
 decrement5,
 decrement10
} from '../../state/reducers';
import { MainContainer, Title, SubTitle, ButtonsContainer, Button } from './StyledComponents';

export const Counter = () => {
 const { counter } = useAppSelector((state) => state.counter);
 const dispatch = useAppDispatch();

 return (
  <MainContainer>
   <Title>REDUX TOOLKIT COUNTER</Title>
   <SubTitle>Counter: {counter}</SubTitle>

   <ButtonsContainer>
    <Button onClick={() => dispatch(decrement10(10))}>-10</Button>
    <Button onClick={() => dispatch(decrement5(5))}>-5</Button>
    <Button onClick={() => dispatch(decrement())}>-1</Button>
    <Button onClick={() => dispatch(reset())}>0</Button>
    <Button onClick={() => dispatch(increment())}>+1</Button>
    <Button onClick={() => dispatch(increment5(5))}>+5</Button>
    <Button onClick={() => dispatch(increment10(10))}>+10</Button>
   </ButtonsContainer>
  </MainContainer>
 );
};
