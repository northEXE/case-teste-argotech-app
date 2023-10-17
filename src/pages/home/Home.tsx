
import React from 'react'
import { Container, Title, Subtitle, TitleContainer, CardContainer, InputContainer, AddButton,  } from './styles';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import { useTask } from '../../services/useTask';
import { FlatList } from 'react-native';

export default function App() {
  const data = ['Task 1', 'Task 2', 'Task 3']
    return (
      <Container>
        <TitleContainer>
          <Title>Tasker!</Title>
          <Subtitle>Just do it!</Subtitle>
        </TitleContainer>
        <CardContainer>
          <Card task={"TASK 1"} />
        </CardContainer>
        <InputContainer>
          <Input />
          <AddButton />
        </InputContainer>
      </Container>
    );
}