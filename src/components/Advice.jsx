import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 4rem;
`
// noinspection CssUnresolvedCustomProperty
const Button = styled.button`
  background-color: grey;
  color: var(--color-brand-50);
  border: none;
  border-radius: var(--border-radius-md);
  padding: 2rem 1rem;
  text-transform: uppercase;
  width: 50%;
`

const Advice = () => {
  const [advice, setAdvice] = useState();
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice)
    setCount(c => c + 1)
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
       <Container>
         <h1>{advice}</h1>
         <h3>you got {count} advices</h3>
         <Button onClick={getAdvice}>get advice</Button>
       </Container>
  );
};

export default Advice;